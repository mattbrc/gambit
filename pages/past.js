import {
  useSession,
  useUser,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import CompletedTrainingList from "../components/CompletedTrainingList";

export default function Dashboard({ user, userData }) {
  const session = useSession();
  const supabase = useSupabaseClient();
  // const user = useUser();
  const [activeWorkout, setActiveWorkout] = useState(null);

  const [loading, setLoading] = useState(null);
  const [data, setData] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    getDate();
    getCompletedWorkouts();
  }, [session]);

  async function getCompletedWorkouts() {
    try {
      setLoading(true);

      let { data, error } = await supabase
        .from("user_completed_workouts")
        .select(`name, training, created_at`)
        .eq("user_id", user.id);
      if (data) {
        setData(data);
        console.log("data: ", data);
      }
      if (error) throw error;
      console.log("retrieved workouts for your completed workouts!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

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

  return (
    <div>
      <div className="flex flex-col justify-between w-full max-w-lg px-4 pt-6 mx-auto">
        <h1 className="text-lg font-bold">Training Dashboard</h1>
        <p className="text-zinc-400">{date}</p>
      </div>
      <div className="w-full max-w-xl px-10 mx-auto my-4">
        <div className="text-center">
          <div>
            <div className="tabs place-content-center">
              <a href="/dashboard" className="tab tab-bordered">
                Next
              </a>
              <a href="/past" className="tab tab-active tab-bordered">
                Past
              </a>
            </div>
            {/* {loading ? <TrainingList program={data} /> : <p>Loading</p>} */}
            {loading ? (
              <div className="grid my-20 place-items-center">
                <p className="text-sm">loading...</p>
                <Oval
                  height={30}
                  width={30}
                  color="#000000"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#000000"
                  strokeWidth={6}
                  strokeWidthSecondary={6}
                />
              </div>
            ) : (
              <div>
                <CompletedTrainingList program={data} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  const { data: userData } = await supabase
    .from("user_training")
    .select(`active_program, next_workout`)
    .eq("id", session.user.id)
    .single();

  return {
    props: {
      initialSession: session,
      user: session.user,
      userData,
    },
  };
};
