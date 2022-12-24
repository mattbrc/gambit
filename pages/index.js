import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function Home() {
  const session = useSession();
  const user = useUser();
  const supabase = useSupabaseClient();
  const [experience, setExperience] = useState(null);
  const [age_range, setAge_range] = useState(null);
  const [goals, setGoals] = useState(null);
  const [weight_goals, setWeight_goals] = useState(null);
  const [days_per_week, setDays_per_week] = useState(null);
  const [time_per_workout, setTime_per_workout] = useState(null);
  const [gym_type, setGym_type] = useState(null);

  async function generateWorkouts() {
    console.log("generating workouts now...");
  }

  async function updateBackground({ experience, age_range }) {
    try {
      const updates = {
        id: user.id,
        experience,
        age_range,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    }
  }

  async function updatePreferences({
    goals,
    weight_goals,
    days_per_week,
    time_per_workout,
    gym_type,
  }) {
    try {
      const updates = {
        id: user.id,
        goals,
        weight_goals,
        days_per_week,
        time_per_workout,
        gym_type,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    }
  }

  return (
    <div>
      {!session ? (
        <div className="w-full max-w-md px-10 mx-auto my-16">
          <Auth
            supabaseClient={supabase}
            providers={["google"]}
            redirectTo={"/"}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#404040",
                    brandAccent: "#52525b",
                  },
                },
              },
            }}
            theme="dark"
          />
        </div>
      ) : (
        <div className="container text-center">
          <h1 className="my-5 text-xl font-bold">Home</h1>
          <p className="mt-10">Step 1: Update your background</p>
          <p className="my-0.5 text-xs italic">
            Optional if you have already completed in the past
          </p>
          {/* BACKGROUND MODAL */}
          <label htmlFor="background-modal" className="my-2 btn">
            Update Background
          </label>
          <input
            type="checkbox"
            id="background-modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box">
              <label
                htmlFor="background-modal"
                className="absolute btn btn-sm btn-circle right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">
                Let's update your background:
              </h3>
              <div className="container w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text">
                    What is your level of experience?
                  </span>
                </label>
                <select
                  className="select select-bordered"
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Brand New</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Expert</option>
                </select>
              </div>
              <div className="container w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text">Select your age range</span>
                </label>
                <select
                  className="select select-bordered"
                  onChange={(e) => setAge_range(e.target.value)}
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>18-21</option>
                  <option>22-26</option>
                  <option>27-35</option>
                  <option>36+</option>
                </select>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="background-modal"
                  className="btn"
                  onClick={() => updateBackground({ experience, age_range })}
                >
                  Submit
                </label>
              </div>
            </div>
          </div>
          {/* PREFERENCES MODAL */}
          <p>Step 2: Update your preferences</p>
          <p className="my-0.5 text-xs italic">
            Optional if you have already completed in the past
          </p>
          <label htmlFor="preferences-modal" className="my-2 btn">
            Update Preferences
          </label>
          <input
            type="checkbox"
            id="preferences-modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box">
              <label
                htmlFor="preferences-modal"
                className="absolute btn btn-sm btn-circle right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">
                Let's update your preferences:
              </h3>
              <div className="container w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text">
                    What are your training goals?
                  </span>
                </label>
                <select
                  className="select select-bordered"
                  onChange={(e) => setGoals(e.target.value)}
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Improved Long Distance Endurance</option>
                  <option>Improved Peak Strength</option>
                  <option>General Health + Longevity</option>
                  <option>Improved VO2 Max</option>
                </select>
              </div>
              <div className="container w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text">
                    What are your physical goals?
                  </span>
                </label>
                <select
                  className="select select-bordered"
                  onChange={(e) => setWeight_goals(e.target.value)}
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Weight Loss / Recomposition</option>
                  <option>Weight Gain / Muscle Gain</option>
                  <option>Maintenance</option>
                </select>
              </div>
              <div className="container w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text">
                    How many days per week can you train?
                  </span>
                </label>
                <select
                  className="select select-bordered"
                  onChange={(e) => setDays_per_week(e.target.value)}
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
              <div className="container w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text">
                    How long can you train each day?
                  </span>
                </label>
                <select
                  className="select select-bordered"
                  onChange={(e) => setTime_per_workout(e.target.value)}
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>30 min or less</option>
                  <option>30 - 45 min</option>
                  <option>45 - 60 min</option>
                  <option>60 - 90 min</option>
                </select>
              </div>
              <div className="container w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text">
                    What type of equipment/gym do you have?
                  </span>
                </label>
                <select
                  className="select select-bordered"
                  onChange={(e) => setGym_type(e.target.value)}
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Crossfit Style</option>
                  <option>Military Gym</option>
                  <option>Barbells / Dumbbells Only</option>
                  <option>GloboGym</option>
                  <option>Home Gym</option>
                  <option>Bodyweight</option>
                </select>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="preferences-modal"
                  className="btn"
                  onClick={() =>
                    updatePreferences({
                      goals,
                      weight_goals,
                      days_per_week,
                      time_per_workout,
                      gym_type,
                    })
                  }
                >
                  Submit
                </label>
              </div>
            </div>
          </div>
          {/* WORKOUT GENERATION BUTTON */}
          <p>Step 3: Generate your workouts!</p>
          <p className="my-0.5 text-xs italic">
            Create your workouts for the next 7 days
          </p>
          <button
            className="my-2 btn btn-success"
            onClick={() => generateWorkouts()}
          >
            Generate Workouts
          </button>
        </div>
      )}
    </div>
  );
}
