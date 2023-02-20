import {
  useSession,
  useUser,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";

const UpdateWorkout = ({ count, nextWorkout, activeProgram, workout }) => {
  const supabase = useSupabaseClient();
  const user = useUser();

  async function handleComplete() {
    addNextWorkout();
    addCompletedWorkout();
  }
  
  async function addNextWorkout() {
    try {
      const updateNextWorkout = Number(nextWorkout) + 1;
      const updateCount = Number(count) + 1;

      const updates = {
        id: user.id,
        next_workout: updateNextWorkout,
        completed_workouts: updateCount,
        updated_at: new Date().toISOString(),
      };

      let { data, error } = await supabase
        .from("user_training")
        .upsert(updates)
        .eq("id", user.id);

      if (error) throw error;
      console.log("updated your next workout!");
    } catch (error) {
      console.log(error);
    }
  }

  async function addCompletedWorkout() {
    try {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;

      const updates = {
        user_id: user.id,
        name: activeProgram,
        training: workout,
        training_id: nextWorkout,
        date_completed: today,
      };

      let { error } = await supabase
        .from("user_completed_workouts")
        .insert(updates);

      if (error) throw error;
      console.log("updated your next workout!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button className="btn" onClick={() => handleComplete()}>
        Complete Workout
      </button>
    </div>
  );
};

export default UpdateWorkout;
