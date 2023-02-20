import { Formik, Field, Form, useField } from "formik";
import * as yup from "yup";

const DaisyInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...field}
        className="input-bordered input" 
      />
      {meta.touched && meta.error ? (
        <div className="pt-1 text-sm text-red">{meta.error}</div> 
        ) : (null)
      }
    </div>
  );
};

const CustomWorkout = () => {
  return (
    <div>
      <Formik
        validateOnChange={true}
        initialValues={{ name: "", secondName: "" }}
        validationSchema={yup.object({
          name: yup.string()
            .required("Required")
            .max(20, "Must be 20 characters or less"),
          secondName: yup.string()
            .required("Required")
            .max(20, "Must be 20 characters or less"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // make async call
          console.log("submit: ", values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-6">
            <div className="w-72 form-control">
              <DaisyInput name="name" value={values.name} label="Name" />
              <DaisyInput name="secondName" value={values.seconName} label="Second Name" />
              <div className="py-2">
                <button type="submit" className="btn btn-accent">Submit</button>
              </div>
              <pre>
                {JSON.stringify(values, null, 2)}
              </pre>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomWorkout;