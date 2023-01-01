import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import UpdateWorkout from "../components/UpdateWorkout";
import TrainingList from "../components/TrainingList";

export default function Dashboard() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [data, setData] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    getDate();
    getUserWorkouts();
  }, [session]);

  async function getDate() {
    const currentDay = new Date().getDate();
    const nameMonth = new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(new Date());
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const d = new Date();
    let day = weekday[d.getDay()];
    const currentDate = day + ", " + nameMonth + " " + currentDay;
    setDate(currentDate);
  }

  async function checkIfTableIsEmpty() {
    let { data } = await supabase
      .from("user_workouts")
      .select("*")
      .eq("is_active", true);
    console.log("data: ", data.length);
    return data.length === 0;
  }

  async function getUserWorkouts() {
    const { data, error } = await supabase
      .from("user_workouts")
      .select("name, strength, conditioning, endurance, wd, day, week")
      .eq("is_active", true);

    const isTableEmpty = await checkIfTableIsEmpty();
    if (!isTableEmpty) {
      setData(data);
    }
  }

  return (
    <div>
      <div className="pt-6 mx-4">
        <h1 className="text-lg font-bold">Training Dashboard</h1>
        <p className="text-zinc-400">{date}</p>
      </div>
      <div className="w-full max-w-xl px-10 mx-auto my-4">
        {!session ? (
          <div className="container text-center">
            <p className="my-5">You are not logged in!</p>
            <a className="btn" href="/">
              Sign In
            </a>
          </div>
        ) : (
          <div className="text-center">
            <div>
              <TrainingList program={data} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
