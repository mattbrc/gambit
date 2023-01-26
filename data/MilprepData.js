import {
  useUser,
  useSession,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";

const MilprepData = () => {
  const supabase = useSupabaseClient();
  async function insertNewWorkouts() {
    const { data, error } = await supabase.from("workouts").insert([
      {
        name: "Milprep",
        training: {
          wd: 11,
          description: "Upper Body + Endurance",
          day: 1,
          week: 1,
          complete: false,
          strength: {
            a: "Incline BB Bench: 1x6-9, 2x12-15",
            b: "Cable Chest Fly: 3x8-12",
            c: "Weighted Pull-Ups: 3x6-9",
            d: "Cable Tricep Pushdown: 3x8-12",
            e: "DB Hammer Curls: 3x8-12",
          },
          endurance: "Baseline 3 mile run for time",
          conditioning: "Rest",
        },
        training_id: 0,
      },
      {
        name: "Milprep",
        training: {
          wd: 12,
          description: "Lower Body + Conditioning",
          day: 2,
          week: 1,
          complete: false,
          strength: {
            a: "Back Squat: 1x6-9, 2x12-15",
            b: "Bulgarian Split Squats: 3x10-12",
            c: "DB RDLs: 2x12-15",
            d: "DB Lunges: 2x8-12",
            e: "Calf Raises: 2x12-15",
          },
          endurance: "Rest",
          conditioning: "Sprints: 6x100m, 2:1 rest:work ratio",
        },
        training_id: 1,
      },
      {
        name: "Milprep",
        training: {
          wd: 13,
          description: "Baseline METCON Day",
          day: 3,
          week: 1,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "Rest",
          conditioning:
            "1 mile plate/kit run + 20 min AMRAP: 5 pull-ups + 10 push-ups (optional plates/kit) + 15 air squats + 1 mile plate/kit run",
        },
        training_id: 2,
      },
      {
        name: "Milprep",
        training: {
          wd: 14,
          description: "Upper Body + Conditioning",
          day: 4,
          week: 1,
          complete: false,
          strength: {
            a: "Baseline Pull-Ups: 1x set to failure",
            b: "DB/Machine Row: 1x6-9, 2x12-15",
            c: "DB/Machine Shoulder Press: 3x12-15",
            d: "Face Pulls: 3x12-15",
            e: "Weighted Push-Ups: 3x15-20 (25/45# plate on back)",
            f: "EZ Bar Curl: 1x6-9, 2x12-15",
            g: "Cable Lateral Raises: 2x8-12",
          },
          endurance: "Rest",
          conditioning: "5 Rounds: 1 min max cal row + 1 min rest",
        },
        training_id: 3,
      },
      {
        name: "Milprep",
        training: {
          wd: 15,
          description: "Lower Body + Endurance",
          day: 5,
          week: 1,
          complete: false,
          strength: {
            a: "Leg Extensions: 3x12-15",
            b: "Deadlift: 1x6-9, 2x12-15",
            c: "BB Hip Thrusts: 2x12-15",
            d: "Leg Press: 2x12-15",
            e: "Calf Raises: 2x8-12",
          },
          endurance: "30 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 4,
      },
      {
        name: "Milprep",
        training: {
          wd: 16,
          description: "Long Steady State",
          day: 6,
          week: 1,
          complete: false,
          strength: {
            a: "3 min time cap: max push-ups",
            b: "3 min time cap: max pull-ups",
            c: "3 min time cap: max sit-ups/curls",
          },
          endurance: "60 min run at recovery pace",
          conditioning: "Rest",
        },
        training_id: 5,
      },
      {
        name: "Milprep",
        training: {
          wd: 17,
          description: "Recovery Day",
          day: 7,
          week: 1,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 6,
      },
      {
        name: "Milprep",
        training: {
          wd: 21,
          description: "Upper Body + Endurance",
          day: 1,
          week: 2,
          complete: false,
          strength: {
            a: "Incline BB Bench: 1x6-9, 2x12-15",
            b: "Cable Chest Fly: 3x8-12",
            c: "Seated Shoulder Press: 1x6-9, 2x12-15",
            d: "Weighted Pull-Ups: 3x6-9",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "35 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 7,
      },
      {
        name: "Milprep",
        training: {
          wd: 22,
          description: "Lower Body + Conditioning",
          day: 2,
          week: 2,
          complete: false,
          strength: {
            a: "Back Squat: 1x6-9, 2x12-15",
            b: "Bulgarian Split Squats: 3x10-12",
            c: "DB RDLs: 2x12-15",
            d: "DB Lunges: 2x8-12",
            e: "Calf Raises: 2x12-15",
          },
          endurance: "Sprints: 6x200m, 2:1 rest:work ratio",
          conditioning: "Rest",
        },
        training_id: 8,
      },
      {
        name: "Milprep",
        training: {
          wd: 23,
          description: "Ruck",
          day: 3,
          week: 2,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "3 mile ruck @ 45#",
          conditioning: "Rest",
        },
        training_id: 9,
      },
      {
        name: "Milprep",
        training: {
          wd: 24, //
          description: "Upper Body + Conditioning",
          day: 4,
          week: 2,
          complete: false,
          strength: {
            a: "Strict Pull-Ups: 3x failure",
            b: "DB/Machine Row: 1x6-9, 2x12-15",
            c: "DB/Machine Shoulder Press: 3x12-15",
            d: "Face Pulls: 3x12-15",
            e: "Weighted Push-Ups: 3x15-20 (25/45# plate on back)",
            f: "EZ Bar Curl: 1x6-9, 2x12-15",
            g: "Cable Lateral Raises: 2x8-12",
          },
          endurance: "Rest",
          conditioning: "21-15-9: Burpees + KB Swings + Butterfly Sit-Ups",
        },
        training_id: 10,
      },
      {
        name: "Milprep",
        training: {
          wd: 25,
          description: "Lower Body + Endurance",
          day: 5,
          week: 2,
          complete: false,
          strength: {
            a: "Leg Extensions: 3x12-15",
            b: "Deadlift: 1x6-9, 2x12-15",
            c: "BB Hip Thrusts: 2x12-15",
            d: "Leg Press: 2x12-15",
            e: "Calf Raises: 2x8-12",
          },
          endurance: "35 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 11,
      },
      {
        name: "Milprep",
        training: {
          wd: 26,
          description: "Conditioning",
          day: 6,
          week: 2,
          complete: false,
          strength: {
            a: "3 min time cap: max push-ups",
            b: "3 min time cap: max pull-ups",
            c: "3 min time cap: max sit-ups/curls",
          },
          endurance: "60 min run at recovery pace",
          conditioning: "Rest",
        },
        training_id: 12,
      },
      {
        name: "Milprep",
        training: {
          wd: 27,
          description: "Recovery Day",
          day: 7,
          week: 2,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 13,
      },
      {
        name: "Milprep",
        training: {
          wd: 31,
          description: "Upper Body + Endurance",
          day: 1,
          week: 3,
          complete: false,
          strength: {
            a: "Incline BB Bench: 1x6-9, 2x12-15",
            b: "Cable Chest Fly: 3x8-12",
            c: "Seated Shoulder Press: 1x6-9, 2x12-15",
            d: "Weighted Pull-Ups: 3x6-9",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "40 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 14,
      },
      {
        name: "Milprep",
        training: {
          wd: 32,
          description: "Lower Body + Conditioning",
          day: 2,
          week: 3,
          complete: false,
          strength: {
            a: "Back Squat: 1x6-9, 2x12-15",
            b: "Bulgarian Split Squats: 3x10-12",
            c: "DB RDLs: 2x12-15",
            d: "DB Lunges: 2x8-12",
            e: "Calf Raises: 2x12-15",
          },
          endurance: "Sprints: 4x400m, 2:1 rest:work ratio",
          conditioning: "Rest",
        },
        training_id: 15,
      },
      {
        name: "Milprep",
        training: {
          wd: 33,
          description: "Recovery Day",
          day: 3,
          week: 3,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 16,
      },
      {
        name: "Milprep",
        training: {
          wd: 34, //
          description: "Upper Body + Conditioning",
          day: 4,
          week: 3,
          complete: false,
          strength: {
            a: "Strict Pull-Ups: 3x failure",
            b: "DB/Machine Row: 1x6-9, 2x12-15",
            c: "DB/Machine Shoulder Press: 3x12-15",
            d: "Face Pulls: 3x12-15",
            e: "Weighted Push-Ups: 3x15-20 (25/45# plate on back)",
            f: "EZ Bar Curl: 1x6-9, 2x12-15",
            g: "Cable Lateral Raises: 2x8-12",
          },
          endurance: "Rest",
          conditioning: "4 Rounds: 20 cal row + 20 BF Sit-Ups + 10 burpees",
        },
        training_id: 17,
      },
      {
        name: "Milprep",
        training: {
          wd: 35,
          description: "Lower Body + Endurance",
          day: 5,
          week: 3,
          complete: false,
          strength: {
            a: "Leg Extensions: 3x12-15",
            b: "Deadlift: 1x6-9, 2x12-15",
            c: "BB Hip Thrusts: 2x12-15",
            d: "Leg Press: 2x12-15",
            e: "Calf Raises: 2x8-12",
          },
          endurance: "40 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 18,
      },
      {
        name: "Milprep",
        training: {
          wd: 36,
          description: "Long Steady State",
          day: 6,
          week: 3,
          complete: false,
          strength: {
            a: "3 min time cap: max push-ups",
            b: "3 min time cap: max pull-ups",
            c: "3 min time cap: max sit-ups/curls",
          },
          endurance: "65 min run at recovery pace",
          conditioning: "Rest",
        },
        training_id: 19,
      },
      {
        name: "Milprep",
        training: {
          wd: 37,
          description: "Recovery Day",
          day: 7,
          week: 3,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
        training_id: 20,
      },
      {
        name: "Milprep",
        training: {
          wd: 41,
          description: "Upper Body + Endurance",
          day: 1,
          week: 4,
          complete: false,
          strength: {
            a: "Incline BB Bench: 1x6-9, 2x12-15",
            b: "Cable Chest Fly: 3x8-12",
            c: "Seated Shoulder Press: 1x6-9, 2x12-15",
            d: "Weighted Pull-Ups: 3x6-9",
            e: "Cable Tricep Pushdown: 3x8-12",
            f: "DB Hammer Curls: 3x8-12",
          },
          endurance: "40 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 21,
      },
      {
        name: "Milprep",
        training: {
          wd: 42,
          description: "Lower Body + Conditioning",
          day: 2,
          week: 4,
          complete: false,
          strength: {
            a: "Back Squat: 1x6-9, 2x12-15",
            b: "Bulgarian Split Squats: 3x10-12",
            c: "DB RDLs: 2x12-15",
            d: "DB Lunges: 2x8-12",
            e: "Calf Raises: 2x12-15",
          },
          endurance:
            "Sprints: 8x100m shuttle (50m down and back), 2:1 rest:work ratio",
          conditioning: "Rest",
        },
        training_id: 22,
      },
      {
        name: "Milprep",
        training: {
          wd: 43,
          description: "Ruck",
          day: 3,
          week: 4,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "Rest",
          conditioning:
            "Ruck Intervals: 5x2 min hill sprints + 5 min recovery walk",
        },
        training_id: 23,
      },
      {
        name: "Milprep",
        training: {
          wd: 44, //
          description: "Upper Body + Conditioning",
          day: 4,
          week: 4,
          complete: false,
          strength: {
            a: "Strict Pull-Ups: 3x failure",
            b: "DB/Machine Row: 1x6-9, 2x12-15",
            c: "DB/Machine Shoulder Press: 3x12-15",
            d: "Face Pulls: 3x12-15",
            e: "Weighted Push-Ups: 3x15-20 (25/45# plate on back)",
            f: "EZ Bar Curl: 1x6-9, 2x12-15",
            g: "Cable Lateral Raises: 2x8-12",
          },
          endurance: "Rest",
          conditioning:
            "12 min AMRAP: 6 Devils Press + 12 BF Sit-Ups + 18 cal row",
        },
        training_id: 24,
      },
      {
        name: "Milprep",
        training: {
          wd: 45,
          description: "Lower Body + Endurance",
          day: 5,
          week: 4,
          complete: false,
          strength: {
            a: "Leg Extensions: 3x12-15",
            b: "Deadlift: 1x6-9, 2x12-15",
            c: "BB Hip Thrusts: 2x12-15",
            d: "Leg Press: 2x12-15",
            e: "Calf Raises: 2x8-12",
          },
          endurance: "40 min steady state run/bike",
          conditioning: "Rest",
        },
        training_id: 25,
      },
      {
        name: "Milprep",
        training: {
          wd: 46,
          description: "Conditioning",
          day: 6,
          week: 4,
          complete: false,
          strength: {
            a: "3 min time cap: max push-ups",
            b: "3 min time cap: max pull-ups",
            c: "3 min time cap: max sit-ups/curls",
          },
          endurance: "70 min run at recovery pace",
          conditioning: "Rest",
        },
        training_id: 26,
      },
      {
        name: "Milprep",
        training: {
          wd: 47,
          description: "Recovery Day",
          day: 7,
          week: 4,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "Rest",
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
        insert new data (milprep)
      </button>
    </div>
  );
};

export default MilprepData;
