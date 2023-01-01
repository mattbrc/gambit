import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const Generate = ({ userId, goals }) => {
  const [isGenerated, setIsGenerated] = useState(false);
  const supabase = useSupabaseClient();
  const id = userId;

  async function insertNewWorkouts() {
    const { data, error } = await supabase.from("workouts").insert([
      {
        name: "Hybrid Athlete Base",
        training: {
          wd: 11,
          description: "Strength + Conditioning",
          day: 1,
          week: 1,
          complete: false,
          strength: {
            a: "Squat: 4x6",
            b: "Deadlift: 2x6",
            c: "Weighted Lunges: 3x8-12",
            d: "Bulgarian Split Squats: 3x8-12",
          },
          endurance: "Rest",
          conditioning: "4x400m @ mile pace, 2:1 rest/work ratio",
        },
      },
      {
        name: "Hybrid Athlete Base",
        training: {
          wd: 12,
          description: "Endurance",
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
      },
    ]);
  }

  async function checkIfTableIsEmpty() {
    let { data } = await supabase
      .from("user_workouts")
      .select("*")
      .eq("user_id", id);
    console.log("data: ", data.length);
    return data.length === 0;
  }

  // grab workout the user selected from DB
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

  // add new workouts to user_workouts for user_id and program type
  async function insertWorkout({ workouts }) {
    // if not empty set previous workouts to inactive
    const isTableEmpty = await checkIfTableIsEmpty();
    const length = workouts.length;
    if (!isTableEmpty) {
      await supabase
        .from("user_workouts")
        .update({
          is_active: false,
        })
        .eq("is_active", true);
    }

    for (let i = 0; i < length; i++) {
      const updates = {
        created_at: new Date().toISOString(),
        user_id: id,
        name: goals,
        wd: workouts[i].wd,
        week: workouts[i].week,
        day: workouts[i].day,
        strength: workouts[i].strength,
        conditioning: workouts[i].conditioning,
        endurance: workouts[i].endurance,
      };

      let { error } = await supabase.from("user_workouts").insert(updates);
      if (error) throw error;
    }
  }

  async function generateWorkouts() {
    const workouts = await getWorkouts();
    insertWorkout({ workouts });
    // insertNewWorkouts();
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
