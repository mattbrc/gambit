import React, { useState, useEffect } from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  useUser,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { setRevalidateHeaders } from "next/dist/server/send-payload";
import toast from 'react-hot-toast';

const SignupForm = ({ name, username, user }) => {
    const usernameRules = /^[a-zA-Z0-9]*$/;
    const supabase = useSupabaseClient();
    const [userData, setUserData] = useState();

    async function updateProfile ({ newUsername, newName }) {
      const updates = {
        id: user.id,
        username: newUsername,
        name: newName,
        updated_at: new Date().toISOString(),
      }

      await supabase.from('profiles').upsert(updates)
      // try {
      //   const updates = {
      //     id: user.id,
      //     username: newUsername,
      //     name: newName,
      //     updated_at: new Date().toISOString(),
      //   }
      //   let { error } = await supabase.from('profiles').upsert(updates)
      //   if (error) throw error
      //   alert('Profile updated!')
      // } catch (error) {
      //   alert('Error updating the data!')
      //   console.log(error)
      // }
    }

    async function getProfile () {
      try {
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`username`)
          .eq('id', user.id)
          .single()

        if (error && status !== 406) {
          throw error
        }

        if (data) {
          return(data);
        }
      } catch (error) {
        alert('Error updating the data!')
        console.log(error)
      }
    }
    
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
          initialValues={{ name: name ? name : "", username: username ? username : ""}}
          validationSchema={yup.object({
            name: yup
              .string()
              .required('Required')
              .max(20, 'Must be 20 characters or less'),
            username: yup
              .string()
              .required('Required')
              .matches(usernameRules, { message: "Invalid Username" })
              .max(20, 'Must be 20 characters or less'),
          })}
          onSubmit={async (data, {setSubmitting}) => {
            setSubmitting(true);
            // make async call
            // updateProfile(data.username, data.name);
            // const error = await supabase.from('profiles').upsert({ id: user.id, username: data.username, full_name: data.name})
            await toast.promise(
              supabase.from('profiles').upsert({ id: user.id, username: data.username, full_name: data.name}),
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
                  value={values.name ? values.name : undefined}
                  type="text"
                  className="max-w-xs input input-bordered" />
                <ErrorMessage name="name">{msg => <div className="text-sm text-red-400">{msg}</div>}</ErrorMessage>
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input 
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username ? values.username : undefined}
                  type="text"
                  className="max-w-xs input input-bordered" />
                <ErrorMessage name="username">{msg => <div className="text-sm text-red-400">{msg}</div>}</ErrorMessage>
              </div>
              <button disabled={isSubmitting} type="submit" className="my-4 btn">Update Profile</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

export default function Account({ user, userData }) {
  const supabase = useSupabaseClient();

  return (
    <div>
      <SignupForm name={userData.full_name} username={userData.username} user={user} />
    </div>
  )
}