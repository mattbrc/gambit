import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

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

  async function getUserWorkouts() {
    const { data, error } = await supabase
      .from("user_workouts")
      .select("training")
      .eq("is_active", true);

    if (data.length === 0 || !data) {
      setData([]);
    } else {
      setData(data[0].training);
    }
  }

  const TrainingCard = ({ day, week, strength, endurance, conditioning }) => {
    return (
      <div>
        <div className="w-full max-w-3xl px-2 mx-auto my-4 shadow-xl rounded-xl bg-base-100">
          <div className="card-body">
            <h2 className="card-title">
              Week {week} Day {day}
            </h2>
            <p>Strength + Conditioning</p>
            <div className="justify-center card-actions">
              <label htmlFor={week + day} className="btn btn-success">
                View Workout
              </label>
              <input type="checkbox" id={week + day} className="modal-toggle" />
              <div className="modal">
                <div className="relative modal-box">
                  <label
                    htmlFor={week + day}
                    className="absolute btn btn-sm btn-circle right-2 top-2"
                  >
                    ✕
                  </label>
                  <p className="font-bold">Strength + Conditioning</p>
                  <div className="text-sm">
                    {typeof strength === "string" ? (
                      <p>Strength: {strength}</p>
                    ) : (
                      Object.keys(strength).map((exercise) => (
                        <p key={exercise}>
                          {exercise}: {strength[exercise]}
                        </p>
                      ))
                    )}
                    <p>Endurance: {endurance}</p>
                    <p>Conditioning: {conditioning}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TrainingList = ({ program }) => {
    return (
      <div className="training-list">
        {program.map((training) => (
          <TrainingCard
            key={`week-${training.week}-day-${training.day}`}
            day={training.day}
            week={training.week}
            strength={training.strength}
            endurance={training.endurance}
            conditioning={training.conditioning}
          />
        ))}
      </div>
    );
  };

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
