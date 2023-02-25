import { Formik, Field, Form, useField, FieldArray } from "formik";
import * as yup from "yup";

// todo: add validation for sets, reps, weight
const DaisyInput = ({placeholder, label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...field}
        className="input-bordered input-sm input" 
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? (
        <div className="pt-1 text-xs text-red">{meta.error}</div> 
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
        initialValues={{ 
          workoutType: "", 
          setsStrength: [{ movement: "", sets: "", reps: "", weight: "", id: 1 }],
          endurance: "",
          conditioning: ""
        }}
        validationSchema={yup.object({
          workoutType: yup.string()
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
            <div className="w-32 form-control">
              <DaisyInput name="workoutType" value={values.workoutType} label="Workout Type" placeholder="Hybrid" />
              <DaisyInput name="endurance" value={values.endurance} label="Endurance" placeholder="45 minute easy run" />
              <DaisyInput name="conditioning" value={values.conditioning} label="Conditioning" placeholder="21-15-9 Burpees + Cal Row" />
              <FieldArray name="strength">
                {arrayHelpers => (
                  <div>
                    <button 
                      onClick={() => arrayHelpers.push({
                        movement: 'bench',
                        sets: '3',
                        reps: '5',
                        weight: '135',
                        id: "" + Math.random()
                      })} 
                    className="btn">add movement</button>
                    {values.setsStrength.map((set, index) => {
                      const name = `setsStrength.${index}.movement`;
                      return (
                        <div key={set.id}>
                          <DaisyInput name={name} placeholder="bench press" label="Strength Movement" />
                          <button onClick={() => arrayHelpers.remove(index)} className="btn">X</button>
                        </div>
                      )
                    })}
                  </div>
                )}
              </FieldArray>
              <div className="py-2">
                <button type="submit" className="btn">Submit</button>
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