import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Data } from "../data/data";

const Generate = ({ session }) => {
  const data = Data;
  const user = useUser();
  const supabase = useSupabaseClient();
  const [name, setName] = useState(null);
  const [experience, setExperience] = useState(null);
  const [age_range, setAge_range] = useState(null);
  const [goals, setGoals] = useState(null);
  const [weight_goals, setWeight_goals] = useState(null);
  const [days_per_week, setDays_per_week] = useState(null);
  const [time_per_workout, setTime_per_workout] = useState(null);
  const [gym_type, setGym_type] = useState(null);
  const [isGenerated, setIsGenerated] = useState(false);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select(
          `full_name, experience, age_range, goals, weight_goals, days_per_week, time_per_workout, gym_type`
        )
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setName(data.full_name);
        setExperience(data.experience);
        setAge_range(data.age_range);
        setGoals(data.goals);
        setWeight_goals(data.weight_goals);
        setDays_per_week(data.days_per_week);
        setTime_per_workout(data.time_per_workout);
        setGym_type(data.gym_type);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }

  const workoutTest = {
    workout: {
      day1: {
        strength: {
          bench: {
            sets: "1x6-9, 1x12-15",
          },
          deadlift: {
            sets: "1x6-9, 1x12-15",
          },
          squat: {
            sets: "sets: 1x6-9, 1x12-15",
          },
        },
        endurance: {
          run: {
            volume: "30 min steady state",
          },
        },
      },
      day2: {
        strength: "rest",
        endurance: "rest",
      },
    },
  };

  async function generateWorkouts() {
    console.log("generating workouts now...");
    console.log("name: ", name);
    console.log("gym type: ", gym_type);
    console.log("workout test: ", data.UpperBody[0]);
    setIsGenerated(true);
  }

  return (
    <div>
      <button
        className="my-2 btn btn-success"
        onClick={() => generateWorkouts()}
      >
        Generate Workouts
      </button>
      <div>
        {!isGenerated ? (
          <div></div>
        ) : (
          <div>
            <h1>Day 1</h1>
            <div className="inline-grid grid-cols-2">
              <p>{data.UpperBody[0].name}</p>
              <p>{data.UpperBody[0].setsReps}</p>
              <p>{data.UpperBody[2].name}</p>
              <p>{data.UpperBody[2].setsReps}</p>
              <p>{data.LowerBody[1].name}</p>
              <p>{data.LowerBody[1].setsReps}</p>
            </div>
            <h1>Day 2</h1>
            <p>Rest</p>
            <h1>Day 3</h1>
            <div className="inline-grid grid-cols-2">
              <p>{data.UpperBody[0].name}</p>
              <p>{data.UpperBody[0].setsReps}</p>
              <p>{data.UpperBody[2].name}</p>
              <p>{data.UpperBody[2].setsReps}</p>
              <p>{data.LowerBody[1].name}</p>
              <p>{data.LowerBody[1].setsReps}</p>
            </div>
            <h1>Day 4</h1>
            <p>Rest</p>
            <h1>Day 5</h1>
            <div className="inline-grid grid-cols-2">
              <p>{data.UpperBody[0].name}</p>
              <p>{data.UpperBody[0].setsReps}</p>
              <p>{data.UpperBody[2].name}</p>
              <p>{data.UpperBody[2].setsReps}</p>
              <p>{data.LowerBody[1].name}</p>
              <p>{data.LowerBody[1].setsReps}</p>
            </div>
            <h1>Day 6</h1>
            <p>Rest</p>
            <h1>Day 7</h1>
            <p>Rest</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Generate;
