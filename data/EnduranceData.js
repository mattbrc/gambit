import {
  useUser,
  useSession,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { insert } from "formik";
import toast from "react-hot-toast";

const EnduranceData = () => {
  const supabase = useSupabaseClient();
  async function insertNewWorkouts() {
    const { data, error } = await supabase.from("workouts").insert([
      {
        name: "Pure Endurance",
        training: {
          wd: 11,
          description: "Steady State",
          day: 1,
          week: 1,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "30-45 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 0,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 12,
          description: "Intervals",
          day: 2,
          week: 1,
          complete: false,
          strength: {
            a: "None",
          },
          endurance:
            "Intervals: 4x400m sprint at mile pace. 2:1 recovery interval",
          conditioning: "Rest",
        },
        training_id: 1,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 13,
          description: "Recovery Day",
          day: 3,
          week: 1,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 2,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 14, //
          description: "Tempo Run",
          day: 4,
          week: 1,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Tempo: 2 mile run at tempo pace",
          conditioning: "Rest",
        },
        training_id: 3,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 15,
          description: "Steady State",
          day: 5,
          week: 1,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "30-45 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 4,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 16,
          description: "Recovery Day",
          day: 6,
          week: 1,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 5,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 17,
          description: "LSS",
          day: 7,
          week: 1,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Long Steady State (LSS): 60 min run at recovery pace",
          conditioning: "Rest",
        },
        training_id: 6,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 21,
          description: "Steady State",
          day: 1,
          week: 2,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "30-45 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 7,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 22,
          description: "Intervals",
          day: 2,
          week: 2,
          complete: false,
          strength: {
            a: "None",
          },
          endurance:
            "Intervals: 3x800m sprint at mile pace. 2:1 recovery interval",
          conditioning: "Rest",
        },
        training_id: 8,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 23,
          description: "Recovery Day",
          day: 3,
          week: 2,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 9,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 24, //
          description: "Tempo Run",
          day: 4,
          week: 2,
          complete: false,
          strength: {
            a: "None",
          },
          endurance:
            "Tempo: 40 min run at recovery pace. Every 5 min, drop pace 1-2 min and hold for 2 min, recover remaining 3 min.",
          conditioning: "Rest",
        },
        training_id: 10,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 25,
          description: "Steady State",
          day: 5,
          week: 2,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "30-45 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 11,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 26,
          description: "Recovery Day",
          day: 6,
          week: 2,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 12,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 27,
          description: "LSS",
          day: 7,
          week: 2,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "LSS: 60 min at recovery pace",
          conditioning: "Rest",
        },
        training_id: 13,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 31,
          description: "Steady State",
          day: 1,
          week: 3,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "30-45 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 14,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 32,
          description: "Intervals",
          day: 2,
          week: 3,
          complete: false,
          strength: {
            a: "None",
          },
          endurance:
            "Intervals: 6x200m sprint at mile pace. 2:1 recovery interval",
          conditioning: "Rest",
        },
        training_id: 15,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 33,
          description: "Recovery Day",
          day: 3,
          week: 3,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 16,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 34, //
          description: "Tempo Run",
          day: 4,
          week: 3,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Tempo: 3 mile run at tempo pace",
          conditioning: "Rest",
        },
        training_id: 17,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 35,
          description: "Steady State",
          day: 5,
          week: 3,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 18,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 36,
          description: "Recovery Day",
          day: 6,
          week: 3,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 19,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 37,
          description: "LSS",
          day: 7,
          week: 3,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "LSS: 70 min at recovery pace",
          conditioning: "Rest",
        },
        training_id: 20,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 41,
          description: "Steady State",
          day: 1,
          week: 4,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "30-45 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 21,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 42,
          description: "Intervals",
          day: 2,
          week: 4,
          complete: false,
          strength: {
            a: "None",
          },
          endurance:
            "Intervals: 2x1600m sprint at mile pace. 2:1 recovery interval",
          conditioning: "Rest",
        },
        training_id: 22,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 43,
          description: "Recovery Day",
          day: 3,
          week: 4,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 23,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 44, //
          description: "Tempo Run",
          day: 4,
          week: 4,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Tempo: 4 mile run at tempo pace",
          conditioning: "Rest",
        },
        training_id: 24,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 45,
          description: "Steady State",
          day: 5,
          week: 4,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "30-45 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 25,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 46,
          description: "Recovery Day",
          day: 6,
          week: 4,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 26,
      },
      {
        name: "Pure Endurance",
        training: {
          wd: 47,
          description: "LSS",
          day: 7,
          week: 4,
          complete: false,
          strength: {
            a: "None",
          },
          endurance: "LSS: 75 min at recovery pace",
          conditioning: "Rest",
        },
        training_id: 27,
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
        insert endurance data
      </button>
    </div>
  );
};

export default EnduranceData;
