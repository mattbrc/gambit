// allow users to check off a workout as complete
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const UpdateWorkout = ({ workoutToComplete }) => {
  const supabase = useSupabaseClient();

  async function handleComplete() {
    const { data, error } = await supabase
      .from("user_workouts")
      .select("training")
      .eq("is_active", true);
    console.log("workout to complete: ", data);
  }

  async function getWorkouts() {
    const { data, error } = await supabase
      .from("workouts")
      .select(
        "name,wd:training->wd,day:training->day,week:training->week,complete:training->complete,description:training->description,strength:training->strength,conditioning:training->conditioning,endurance:training->endurance"
      )
      .eq("name", "Hybrid Athlete Base");
    const sortedObject = data.sort((a, b) => {
      return a.wd - b.wd;
    });
    console.log(JSON.stringify(sortedObject, null, 2));
    return sortedObject;
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
