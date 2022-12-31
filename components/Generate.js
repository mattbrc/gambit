import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { data } from "../data/data";
import { Link } from "next/link";
import { insert } from "formik";

const Generate = ({ supabase, userId, goals }) => {
  const [isGenerated, setIsGenerated] = useState(false);

  const program = data.hybrid_base;
  const id = userId;

  // add new workout to user_workouts for user_id
  async function insertWorkout() {
    try {
      let { newWorkout } = await supabase
        .from("workouts")
        .select("*")
        .eq("name", { goals });
      const updates = {
        created_at: new Date().toISOString(),
        user_id: id,
        name: goals,
        training: program,
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
    // query workout from workouts table
    // set old user workout to is_active==false (if needed)
    // add new workout to user_workouts and set is_active==true
    insertWorkout();
    setIsGenerated(true);
  }

  return (
    <div>
      <label
        htmlFor="generate-workouts"
        className="my-2 btn btn-success"
        onClick={() => generateWorkouts()}
      >
        Start New Program
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
