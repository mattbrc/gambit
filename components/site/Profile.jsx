import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import toast from 'react-hot-toast';
// import Integrations from "./Integrations";

const SignupForm = ({ name, username, user, goals }) => {
  const usernameRules = /^[a-zA-Z0-9]*$/;
  const supabase = useSupabaseClient();
  
  return (
    <div>
      <div className="justify-center avatar placeholder">
        <div className="w-16 rounded-full bg-neutral-focus text-neutral-content">
          <span className="text-3xl">
            {name ? name.charAt(0).toUpperCase() : ""}
          </span>
        </div>
      </div>
      <Formik
        validateOnChange={true}
        initialValues={{ name: name ? name : "", username: username ? username : "", goals: goals ? goals : ""}}
        validationSchema={yup.object({
          name: yup
            .string()
            .required('Required')
            .max(20, 'Must be 20 characters or less'),
          username: yup
            .string()
            .required('Required')
            .matches(usernameRules, { message: "Invalid Username" })
            .min(3, 'Must be 3 characters or more')
            .max(20, 'Must be 20 characters or less'),
          goals: yup 
            .string()
            .required('Required'),
        })}
        onSubmit={async (data, {setSubmitting}) => {
          setSubmitting(true);
          await toast.promise(
            supabase.from('profiles').upsert({ id: user.id, username: data.username, full_name: data.name, goals: data.goals}),
              {
                loading: 'Updating...',
                success: <b>Profile Updated!</b>,
                error: <b>Could not update.</b>,
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
                <span className="label-text">Name</span>
              </label>
              <input 
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name ? values.name : ""}
                type="text"
                className="max-w-xs input input-bordered" />
              <ErrorMessage name="name">{msg => <div className="pt-1 text-sm text-red-400">{msg}</div>}</ErrorMessage>
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input 
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username ? values.username : ""}
                type="text"
                className="max-w-xs input input-bordered" />
              <ErrorMessage name="username">{msg => <div className="pt-1 text-sm text-red-400">{msg}</div>}</ErrorMessage>
              <label className="label">
                <span className="label-text">Goals</span>
              </label>
              <select 
                name="goals"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.goals ? values.goals : ""}
                className="w-full max-w-xs font-normal select select-bordered">
                <option>Weight Loss</option>
                <option>Muscle Gain</option>
                <option>Overall Health + Longevity</option>
                <option>Build Endurance</option>
                <option>Strength + Endurance</option>
                <option>Military Prep</option>
              </select>
              <ErrorMessage name="goals">{msg => <div className="pt-1 text-sm text-red-400">{msg}</div>}</ErrorMessage>
            </div>
            <button disabled={isSubmitting} type="submit" className="my-4 btn">Update Profile</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default function Profile({ user, userData }) {
  return (
    <div>
      <SignupForm name={userData?.full_name || ""} username={userData?.username || ""} user={user} goals={userData?.goals || ""} />
      {/* <Integrations user={user} /> */}
    </div>
  )
}