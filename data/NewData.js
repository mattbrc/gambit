import {
  useUser,
  useSession,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";

const NewData = () => {
  const supabase = useSupabaseClient();
  async function insertNewWorkouts() {
    const { data, error } = await supabase.from("workouts").insert([
      {
        name: "Hybrid Athlete Base",
        training: {
          wd: 14,
          description: "Endurance",
          day: 4,
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
      },
      {
        name: "Hybrid Athlete Base",
        training: {
          wd: 15,
          description: "Endurance",
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
      },
      {
        name: "Hybrid Athlete Base",
        training: {
          wd: 16,
          description: "Endurance",
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
      },
      {
        name: "Hybrid Athlete Base",
        training: {
          wd: 17, //
          description: "Full Rest Day",
          day: 7,
          week: 1,
          complete: false,
          strength: {
            a: "Rest",
          },
          endurance: "Rest",
          conditioning: "Rest",
        },
      },
      {
        name: "Hybrid Athlete Base",
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
      },
      {
        name: "Hybrid Athlete Base",
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
      },
      {
        name: "Hybrid Athlete Base",
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
      },
    ]);
  }
  return (
    <div>
      <button className="btn" onClick={insertNewWorkouts}>
        insert new data
      </button>
    </div>
  );
};

export default NewData;
