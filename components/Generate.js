import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

// change generate to accept active_program as a parameter
const Generate = ({ userId, newProgram, disabled }) => {
  const [isGenerated, setIsGenerated] = useState(false);
  const supabase = useSupabaseClient();
  const id = userId;

  // add new workouts to user_workouts for user_id and program type
  async function insertWorkout({ workouts }) {
    // if not empty set previous workouts to inactive
    const length = workouts.length;
    console.log("received: ", length);
    if (!isTableEmpty) {
      await supabase
        .from("user_workouts")
        .update({
          is_active: false,
        })
        .eq("is_active", true);
    }
  }

  async function handleGenerate(newProgram) {
    const updates = {
      id: userId,
      active_program: newProgram,
      next_workout: 0,
      updated_at: new Date().toISOString(),
    };
    // if (isTableEmpty) {
    //   newUserTraining(updates);
    //   console.log("it's empty");
    // }
    let { error } = await supabase.from("user_training").upsert(updates);
    if (error) throw error;
    console.log(error);
    // } catch (error) {
    //   alert("Error updating the data!");
    //   console.log(error);
    // }
    setIsGenerated(true);
  }

  // async function newUserTraining({ updates }) {
  //   let { error } = await supabase.from("user_training").insert(updates);
  // }

  // async function generateWorkouts() {
  //   // upsert user_training table w/ new user
  //   handleGenerate();
  //   setIsGenerated(true);
  // }

  return (
    <div>
      <label
        htmlFor="generate-workouts"
        className="my-2 btn btn-accent"
        disabled={disabled}
        onClick={() =>
          toast.promise(handleGenerate(newProgram), {
            loading: "Loading",
            success: "New program started!",
            error: "Error starting program",
          })
        }
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
            {/* {!isGenerated ? (
              <div>loading...</div>
            ) : ( */}
            <div>
              <h1>Workouts generated! Head to your dashboard to view.</h1>
              <a className="my-4 btn" href="/dashboard">
                Dashboard
              </a>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
