import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [data, setData] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    const { data, error } = await supabase
      .from("user_workouts")
      .select("training");
    setData(data);
  }

  const TrainingCard = ({
    day,
    strength,
    endurance,
    conditioning,
    complete,
  }) => {
    return (
      <div>
        <div className="w-full max-w-3xl px-2 mx-auto my-4 shadow-xl rounded-xl bg-base-100">
          <div className="card-body">
            <h2 className="card-title">Day {day}</h2>
            <p>Strength + Conditioning</p>
            <div className="justify-center card-actions">
              <label htmlFor="workout" className="btn btn-success">
                View Workout
              </label>
              <input type="checkbox" id="workout" className="modal-toggle" />
              <div className="modal">
                <div className="relative modal-box">
                  <label
                    htmlFor="workout"
                    className="absolute btn btn-sm btn-circle right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="font-bold">Day {day}</h3>
                  <p className="font-bold">Strength + Conditioning</p>
                  <div className="text-sm">
                    <p>Strength: {strength}</p>
                    <p>Endurance: {endurance}</p>
                    <p>Conditioning: {conditioning}</p>
                    <p>Complete: {complete ? "Yes" : "No"}</p>
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
        {hybrid_base.map((program) => (
          <TrainingCard
            key={program.day}
            day={program.day}
            strength={program.strength}
            endurance={program.endurance}
            conditioning={program.conditioning}
            complete={program.complete}
          />
        ))}
      </div>
    );
  };

  const hybrid_base = [
    {
      day: 1,
      strength: "stuff",
      endurance: "stuff",
      conditioning: "stuff",
      complete: false,
    },
    {
      day: 2,
      strength: "stuff",
      endurance: "stuff",
      conditioning: "stuff",
      complete: false,
    },
    {
      day: 3,
      strength: "stuff",
      endurance: "stuff",
      conditioning: "stuff",
      complete: false,
    },
  ];

  return (
    <div className="w-full max-w-xl px-10 mx-auto my-16">
      {!session ? (
        <div className="container text-center">
          <p className="my-5">You are not logged in!</p>
          <a className="btn" href="/">
            Sign In
          </a>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="my-5 text-xl font-bold">Training Dashboard</h1>
          <div>
            <TrainingList program={data} />
          </div>
        </div>
      )}
    </div>
  );
}
