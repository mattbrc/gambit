import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Data } from "../data/data";

const Generate = ({
  supabase,
  userId,
  name,
  experience,
  age_range,
  gym_type,
  goals,
  weight_goals,
  days_per_week,
  time_per_workout,
}) => {
  const data = Data;

  const [isGenerated, setIsGenerated] = useState(false);

  async function insertWorkout() {
    const { data, error } = await supabase.from("user_workouts").insert([
      {
        user_id: userId,
        workout: {
          description: "Puppy is slower than other, bigger animals.",
          price: 5.95,
          ages: [3, 6],
        },
      },
    ]);
  }

  async function generateWorkouts() {
    // if days_per_week == 3
    // day 1: full body strength + conditioning
    // day 2: full body strength + conditioning
    // day 3: steady state

    // else if days_per_week == 4
    // day 1: lower strength + conditioning
    // day 2: upper strength + steady state
    // day 3: lower strength + conditioning
    // day 4: upper strength + steady state

    // else if days_per_week == 5
    // day 1: lower strength + conditioning
    // day 2: upper strength + steady state
    // day 3: lower strength + conditioning
    // day 4: upper strength + steady state
    // day 5: steady state

    // else if days_per_week == 6
    // day 1: lower strength + conditioning
    // day 2: upper strength + steady state
    // day 3: conditioning
    // day 4: lower strength + conditioning
    // day 5: upper strength + steady state
    // day 6: steady state

    setIsGenerated(true);
  }

  return (
    <div>
      {/* <button
        className="my-2 btn btn-success"
        onClick={() => generateWorkouts()}
      >
        Generate Workouts
      </button> */}
      <label
        htmlFor="generate-workouts"
        className="my-2 btn btn-success"
        onClick={() => generateWorkouts()}
      >
        Generate Workouts
      </label>
      <input type="checkbox" id="generate-workouts" className="modal-toggle" />
      <div className="modal">
        <div className="relative modal-box">
          <label
            htmlFor="generate-workouts"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Training Week</h3>
          <p className="my-0.5 text-xs italic pb-2">
            Screenshot to save. Workout page coming soon...
          </p>
          <div>
            {!isGenerated ? (
              <div>loading...</div>
            ) : (
              <div>
                <h1>Workout generated and inserted into DB</h1>
                <p>Workout here:</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
