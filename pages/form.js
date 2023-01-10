import { Formik, Field } from "formik";

const DaisyInput = () => {
  return <input className="w-full max-w-xs input" />;
};

const Form = () => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "matt", lastName: "acidgambit" }}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          // make async call
          console.log("submit: ", data);
          // after async call
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              name="firstName"
              type="text"
              placeholder="Type here"
              className="w-full max-w-xs input"
            />
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              name="lastName"
              type="text"
              placeholder="Type here"
              className="w-full max-w-xs input"
            />
            <div>
              <button disabled={isSubmitting} className="btn btn-success">
                Submit
              </button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
