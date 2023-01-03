import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import UpdateWorkout from "../components/UpdateWorkout";
import TrainingList from "../components/TrainingList";

export default function Past() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [data, setData] = useState([]);

  return (
    <div>
      <div className="pt-6 mx-4">
        <h1 className="text-lg font-bold">Completed Workouts</h1>
      </div>
      <div className="text-center">
        <div>
          <div className="tabs place-content-center">
            <a href="/dashboard" className="tab tab-bordered">
              Next
            </a>
            <a href="/past" className="tab tab-bordered tab-active">
              Past
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
