import {
  useUser,
  useSession,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { insert } from "formik";
import toast from "react-hot-toast";

const RoadData = () => {
  const supabase = useSupabaseClient();
  async function insertNewWorkouts() {
    const { data, error } = await supabase.from("workouts").insert([
      {
        name: "Road Warrior",
        training: {
          wd: 11,
          description: "Upper Body + Steady State",
          day: 1,
          week: 1,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 0,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 12,
          description: "Lower + Conditioning",
          day: 2,
          week: 1,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 1,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 13,
          description: "Recovery Day",
          day: 3,
          week: 1,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 2,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 14, //
          description: "Upper Body + Steady State",
          day: 4,
          week: 1,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 3,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 15,
          description: "Lower Body + Conditioning",
          day: 5,
          week: 1,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 4,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 16,
          description: "Long Steady State",
          day: 6,
          week: 1,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 5,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 17,
          description: "Recovery Day",
          day: 7,
          week: 1,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 6,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 21,
          description: "Endurance",
          day: 1,
          week: 2,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 7,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 22,
          description: "Endurance",
          day: 2,
          week: 2,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 8,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 23,
          description: "Endurance",
          day: 3,
          week: 2,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 9,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 24, //
          description: "Full Rest Day",
          day: 4,
          week: 2,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 10,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 25,
          description: "Endurance",
          day: 5,
          week: 2,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 11,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 26,
          description: "Endurance",
          day: 6,
          week: 2,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 12,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 27,
          description: "Endurance",
          day: 7,
          week: 2,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 13,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 31,
          description: "Endurance",
          day: 1,
          week: 3,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 14,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 32,
          description: "Endurance",
          day: 2,
          week: 3,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 15,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 33,
          description: "Endurance",
          day: 3,
          week: 3,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 16,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 34, //
          description: "Full Rest Day",
          day: 4,
          week: 3,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 17,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 35,
          description: "Endurance",
          day: 5,
          week: 3,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 18,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 36,
          description: "Endurance",
          day: 6,
          week: 3,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 19,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 37,
          description: "Endurance",
          day: 7,
          week: 3,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 20,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 41,
          description: "Endurance",
          day: 1,
          week: 4,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 21,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 42,
          description: "Endurance",
          day: 2,
          week: 4,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 22,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 43,
          description: "Endurance",
          day: 3,
          week: 4,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 23,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 44, //
          description: "Full Rest Day",
          day: 4,
          week: 4,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 24,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 45,
          description: "Endurance",
          day: 5,
          week: 4,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 25,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 46,
          description: "Endurance",
          day: 6,
          week: 4,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 26,
      },
      {
        name: "Road Warrior",
        training: {
          wd: 47,
          description: "Endurance",
          day: 7,
          week: 4,
          complete: false,
          strength: {
            a: "Bench: 2x10, 1x8, 1x6",
            b: "DB/Machine Row: 2x10, 1x8, 1x6",
            c: "Seated Shoulder Press: 2x12, 1x10, 1x8",
            d: "Weighted Pull-Ups: 2x12, 1x10, 1x8",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "30 min steady state run/bike",
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
        insert new data
      </button>
    </div>
  );
};

export default RoadData;