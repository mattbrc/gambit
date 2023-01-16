import {
  useUser,
  useSession,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { insert } from "formik";
import toast from "react-hot-toast";

const NewData2 = () => {
  const supabase = useSupabaseClient();
  async function insertNewWorkouts() {
    const { data, error } = await supabase.from("workouts").insert([
      {
        name: "Hybrid Athlete Base",
        training: {
          wd: 11,
          description: "Upper Body + Endurance",
          day: 1,
          week: 1,
          complete: false,
          strength: {
            a: "Incline BB Bench: 1x6-9, 2x12-15",
            b: "Cable Chest Fly: 3x8-12",
            c: "Seated Shoulder Press: 1x6-9, 2x12-15",
            d: "Weighted Pull-Ups: 3x6-9",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 0,
      },
    ]);
  }
  return (
    <div>
      <button
        className="btn"
        onClick={async () =>
          await toast.promise(insertNewWorkouts(), {
            loading: "Saving...",
            success: <b>Settings saved!</b>,
            error: <b>Could not save.</b>,
          })
        }
      >
        hybrid data insert
      </button>
    </div>
  );
};

export default NewData2;
