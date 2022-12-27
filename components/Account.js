import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Generate from "./Generate";

export default function Account({ session }) {
  const user = useUser();
  const supabase = useSupabaseClient();
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);
  const [experience, setExperience] = useState(null);
  const [age_range, setAge_range] = useState(null);
  const [goals, setGoals] = useState(null);
  const [weight_goals, setWeight_goals] = useState(null);
  const [days_per_week, setDays_per_week] = useState(null);
  const [time_per_workout, setTime_per_workout] = useState(null);
  const [gym_type, setGym_type] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select(
          `full_name, experience, age_range, goals, weight_goals, days_per_week, time_per_workout, gym_type`
        )
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUserId(user.id);
        setName(data.full_name);
        setExperience(data.experience);
        setAge_range(data.age_range);
        setGoals(data.goals);
        setWeight_goals(data.weight_goals);
        setDays_per_week(data.days_per_week);
        setTime_per_workout(data.time_per_workout);
        setGym_type(data.gym_type);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
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
      console.log("updating background...");
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
      console.log("updating preferences...");
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    }
  }

  return (
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
      <input type="checkbox" id="background-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="background-modal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Let's update your background:</h3>
          <div className="container w-full max-w-xs form-control">
            <label className="label">
              <span className="label-text">
                What is your level of experience?
              </span>
            </label>
            <select
              className="select select-bordered"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option disabled selected>
                Pick one
              </option>
              <option value="Brand New">Brand New</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div className="container w-full max-w-xs form-control">
            <label className="label">
              <span className="label-text">Select your age range</span>
            </label>
            <select
              className="select select-bordered"
              value={age_range}
              onChange={(e) => setAge_range(e.target.value)}
            >
              <option disabled selected>
                Pick one
              </option>
              <option value="18-21">18-21</option>
              <option value="22-26">22-26</option>
              <option value="27-35">27-35</option>
              <option value="36+">36+</option>
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
      <input type="checkbox" id="preferences-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="preferences-modal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Let's update your preferences:</h3>
          <div className="container w-full max-w-xs form-control">
            <label className="label">
              <span className="label-text">Choose your training path</span>
            </label>
            <select
              className="select select-bordered"
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
            >
              <option disabled selected>
                Pick one
              </option>
              <option value="Endurance">Endurance Athlete</option>
              <option value="Peak Muscle + Strength">
                Peak Muscle + Strength
              </option>
              <option value="Hybrid Athlete">Hybrid Athlete</option>
              <option value="General Health + Longevity">
                General Health + Longevity
              </option>
            </select>
          </div>
          {/* <div className="container w-full max-w-xs form-control">
            <label className="label">
              <span className="label-text">What are your physical goals?</span>
            </label>
            <select
              className="select select-bordered"
              value={weight_goals}
              onChange={(e) => setWeight_goals(e.target.value)}
            >
              <option disabled selected>
                Pick one
              </option>
              <option value="Weight Loss / Recomposition">
                Weight Loss / Recomposition
              </option>
              <option value="Weight Gain / Muscle Gain">
                Weight Gain / Muscle Gain
              </option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div> */}
          {/* <div className="container w-full max-w-xs form-control">
            <label className="label">
              <span className="label-text">
                How many days per week can you train?
              </span>
            </label>
            <select
              className="select select-bordered"
              value={days_per_week}
              onChange={(e) => setDays_per_week(e.target.value)}
            >
              <option disabled selected>
                Pick one
              </option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div> */}
          {/* <div className="container w-full max-w-xs form-control">
            <label className="label">
              <span className="label-text">
                How long can you train each day?
              </span>
            </label>
            <select
              className="select select-bordered"
              value={time_per_workout}
              onChange={(e) => setTime_per_workout(e.target.value)}
            >
              <option disabled selected>
                Pick one
              </option>
              <option value="30 min or less">30 min or less</option>
              <option value="30 - 45 min">30 - 45 min</option>
              <option value="45 - 60 min">45 - 60 min</option>
              <option value="60 - 90 min">60 - 90 min</option>
            </select>
          </div> */}
          {/* <div className="container w-full max-w-xs form-control">
            <label className="label">
              <span className="label-text">
                What type of equipment/gym do you have?
              </span>
            </label>
            <select
              className="select select-bordered"
              value={gym_type}
              onChange={(e) => setGym_type(e.target.value)}
            >
              <option disabled selected>
                Pick one
              </option>
              <option value="Crossfit Style">Crossfit Style</option>
              <option value="Military Gym">Military Gym</option>
              <option value="Barbells / Dumbbells Only">
                Barbells / Dumbbells Only
              </option>
              <option value="GloboGym">GloboGym</option>
              <option value="Home Gym">Home Gym</option>
              <option value="Bodyweight">Bodyweight</option>
            </select>
          </div> */}
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
      <Generate
        supabase={supabase}
        userId={userId}
        name={name}
        experience={experience}
        age_range={age_range}
        gym_type={gym_type}
        goals={goals}
        weight_goals={weight_goals}
        days_per_week={days_per_week}
        time_per_workout={time_per_workout}
      />
    </div>
  );
}
