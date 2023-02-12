import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import toast from 'react-hot-toast';
import NutritionStats from './NutritionStats';

const Nutrition = ({ user, gender, activityLevel, age, calories, bodyfat, height, weight }) => {
  const supabase = useSupabaseClient();
  const [cals, setCals] = useState(0);

  useEffect(() => {
    if (cals === 0) {
      setCals(calories);
    } 
  }, [cals]);

  function tdee(newHeight, newWeight, newActivityLevel, newAge, newGender, newBodyfat) {
    // BMR for Katch-McArdle Equation
    if (newBodyfat) {
      const leanBodyMass = newWeight * (1 - (newBodyfat / 100));
      const bmr = 370 + (21.6 * leanBodyMass * 0.453);
      const tdee = bmr * newActivityLevel;
      const rounded = Math.round(tdee);
      return rounded;
    } else if (newGender == "Male") {    // BMR for Mifflin-St Jeor Equation Male
      const bmr = (10 * newWeight * 0.453) + (6.25 * newHeight * 2.54) - (5 * newAge) + 5;
      const tdee = bmr * newActivityLevel;
      const rounded = Math.round(tdee);
      return rounded;
    } else {      // BMR for Mifflin-St Jeor Equation Female
      const bmr = (10 * newWeight * 0.453) + (6.25 * newHeight * 2.54) - (5 * newAge) - 151;
      const tdee = bmr * newActivityLevel;
      const rounded = Math.round(tdee);
      return rounded;
    }
  }

  return (
    <div>
      <Formik
        validateOnChange={true}
        initialValues={{ height: height ? height : "", weight: weight ? weight : "", age: age ? age: "", activityLevel: activityLevel ? activityLevel : "", bodyfat: bodyfat ? bodyfat : "", gender: gender ? gender: ""}}
        validationSchema={yup.object({
          height: yup
            .string()
            .required('Required')
            .matches(/^[0-9]*$/, { message: "Invalid Weight" }),
          weight: yup
            .string()
            .required('Required')
            .matches(/^[0-9]*$/, { message: "Invalid Weight" }),
          activityLevel: yup 
            .string()
            .required('Required'),
          bodyfat: yup
            .string()
            .matches(/^[0-9]*$/, { message: "Invalid Bodyfat" }),
          gender: yup
            .string()
            .required('Required'),
          age: yup
            .string()
            .required('Required')
            .matches(/^[0-9]*$/, { message: "Invalid Age" }),
        })}
        onSubmit={async (data, {setSubmitting}) => {
          setSubmitting(true);
          const calories = tdee(data.height, data.weight, data.activityLevel, data.age, data.gender, data.bodyfat);
          setCals(calories);
          await toast.promise(
            supabase.from('nutrition').upsert({ id: user.id, height: data.height, weight: data.weight, activity_level: data.activityLevel, age: data.age, gender: data.gender, bodyfat: data.bodyfat, calories: calories}),
              {
                loading: 'Updating...',
                success: <b>Nutrition Calculated!</b>,
                error: <b>Could not calculate.</b>,
              }
            );
          console.log('submit: ', data);
          console.log("we got the user data: ", error);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-6">
            <div className="max-w-xs form-control">
              <label className="label">
                <span className="label-text">Height (inches)</span>
              </label>
              <input 
                name="height"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.height ? values.height : ""}
                type="text"
                className="max-w-xs input input-bordered" />
              <ErrorMessage name="height">{msg => <div className="pt-1 text-sm text-red-400">{msg}</div>}</ErrorMessage>
              <label className="label">
                <span className="label-text">Weight (pounds)</span>
              </label>
              <input 
                name="weight"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.weight ? values.weight : ""}
                type="text"
                className="max-w-xs input input-bordered" />
              <ErrorMessage name="weight">{msg => <div className="pt-1 text-sm text-red-400">{msg}</div>}</ErrorMessage>
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input 
                name="age"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age ? values.age : ""}
                type="text"
                className="max-w-xs input input-bordered" />
              <ErrorMessage name="age">{msg => <div className="pt-1 text-sm text-red-400">{msg}</div>}</ErrorMessage>
              <label className="label">
                <span className="label-text">Activity Level</span>
              </label>
              <select 
                name="activityLevel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.activityLevel ? values.activityLevel : ""}
                className="w-full max-w-xs font-normal select select-bordered">
                <option value="">Select Activity Level</option>
                <option value="1.2">Sedentary</option>
                <option value="1.375">Light Exercise (1-2 days/week)</option>
                <option value="1.55">Moderate Exercise (3-5 days/week)</option>
                <option value="1.725">Heavy Exercise (6-7 days/week)</option>
                <option value="1.9">Athlete (2x/day)</option>
              </select>
              <ErrorMessage name="activityLevel">{msg => <div className="pt-1 text-sm text-red-400">{msg}</div>}</ErrorMessage>
              <label className="label">
                <span className="label-text">Bodyfat % (optional for improved accuracy)</span>
              </label>
              <input 
                name="bodyfat"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bodyfat ? values.bodyfat : ""}
                type="text"
                className="max-w-xs input input-bordered"/>
              <ErrorMessage name="bodyfat">{msg => <div className="pt-1 text-sm text-red-400">{msg}</div>}</ErrorMessage>
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select 
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender ? values.gender : ""}
                className="w-full max-w-xs font-normal select select-bordered">
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <ErrorMessage name="gender">{msg => <div className="pt-1 text-sm text-red-400">{msg}</div>}</ErrorMessage>
            </div>
            <button disabled={isSubmitting} type="submit" className="my-4 btn">Calculate</button>
          </Form>
        )}
      </Formik>
      {cals && 
        <div>
          <div className="grid place-items-center">
            <div className="w-80 divider"></div>
          </div>
          <NutritionStats calories={cals} />
        </div>
      }
    </div>
  );
}

export default function NutritionData({ user, userData }) {
  return (
    <div>
      <Nutrition height={userData?.height || ""} weight={userData?.weight || ""} user={user} gender={userData?.gender || ""} bodyfat={userData?.bodyfat || ""} age={userData?.age || ""} calories={userData?.calories || ""} activityLevel={userData?.activity_level || ""} />
      <div>
        <label htmlFor="my-modal-3" className='pb-8 text-sm underline cursor-pointer text-slate-400'>How is this calculated?</label>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="relative modal-box">
            <label htmlFor="my-modal-3" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
            <h3 className="font-bold text-md">Calorie Calculation</h3>
            <div className='py-3 text-sm'>
              <p>Your caloric needs are calculated using two different methods depending on if you submit a body fat percentage:</p>
              <p className='pt-2'>1. Mifflin-St Jeor Equation: the base method to calculate BMR without bodyfat %.</p>
              <p>BMR = (10m + 6.25h - 5.0a) + s</p>
              <p>m is mass in kg, h is height in cm, a is age in years, s is +5 for males and -151 for females.</p>
              <p className='pt-2'>2. Katch-McArdle Equation: A more accurate equation utilizing your bodyfat %.</p>
              <p>BMR = 370 + (21.6 * LBM) where LBM is lean body mass.</p>
              <p className='pt-2'>These results are then multiplied by an activity level factor to determine your daily maintenance calories: </p>
              <div className='px-5'>
                <ul className='pt-2 text-left list-disc'>
                  <li className='py-1'>Sedentary (little to no exercise) = 1.2</li>
                  <li className='py-1'>Lightly Active (exercise 1-3 days/week) = 1.375</li>
                  <li className='py-1'>Moderately Active (train 3-5 days/week) = 1.55</li>
                  <li className='py-1'>Very Active (train 6-7 days / week) = 1.725</li>
                  <li className='py-1'>Athlete (train 2x/day, hard labor job) = 1.9</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}