import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { data } from "../data/data";
import { Link } from "next/link";
import { insert } from "formik";

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
  const workouts = data;
  const id = userId;

  const [isGenerated, setIsGenerated] = useState(false);

  async function insertWorkout({ program }) {
    try {
      const updates = {
        created_at: new Date().toISOString(),
        user_id: id,
        workout: program,
      };

      let { error } = await supabase.from("user_workouts").insert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    }
  }

  async function generateWorkouts() {
    const program = [
      {
        day1: {
          strength: {
            movement1: {
              1: workouts.upper1[0].name,
              2: workouts.upper1[0].setsReps,
            },
            movement2: {
              1: workouts.upper1[1].name,
              2: workouts.upper1[1].setsReps,
            },
            movement3: {
              1: workouts.upper1[2].name,
              2: workouts.upper1[2].setsReps,
            },
            movement4: {
              1: workouts.upper1[3].name,
              2: workouts.upper1[3].setsReps,
            },
            movement5: {
              1: workouts.upper1[4].name,
              2: workouts.upper1[4].setsReps,
            },
            movement6: {
              1: workouts.upper1[5].name,
              2: workouts.upper1[5].setsReps,
            },
            movement7: {
              1: workouts.upper1[6].name,
              2: workouts.upper1[6].setsReps,
            },
          },
          endurance: "rest",
          intervals: workouts.intervals[0],
          conditioning: "rest",
        },
      },
    ];
    insertWorkout({ program });
    setIsGenerated(true);
  }

  return (
    <div>
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
          <h3 className="my-2 text-lg font-bold">Training Week</h3>
          <div>
            {!isGenerated ? (
              <div>loading...</div>
            ) : (
              <div>
                <h1>Workouts generated! Head to your dashboard to view.</h1>
                <a className="my-4 btn" href="/dashboard">
                  Dashboard
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
