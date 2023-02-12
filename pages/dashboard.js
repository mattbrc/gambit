import {
  useSession,
  useUser,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import TrainingList from "../components/TrainingList";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Dashboard({ user, userData }) {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [nextWorkout, setNextWorkout] = useState(null);
  const [completedWorkouts, setCompletedWorkouts] = useState(
    Number(userData.completed_workouts)
  );
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  const [completedWorkoutId, setCompletedWorkoutId] = useState(
    Number(userData.next_workout)
  );

  useEffect(() => {
    getDate();
    getWorkouts();
  }, [session]);

  useEffect(() => {
    updateUserTraining();
  }, [completedWorkoutId]);

  async function handleComplete() {
    setCompletedWorkoutId(Number(completedWorkoutId) + 1);
    setCompletedWorkouts(Number(completedWorkouts) + 1);
    addCompletedWorkout();
  }

  async function updateUserTraining() {
    const updates = {
      id: user.id,
      next_workout: completedWorkoutId,
      completed_workouts: completedWorkouts,
      updated_at: new Date().toISOString(),
    };

    let { data, error } = await supabase
      .from("user_training")
      .upsert(updates)
      .eq("id", user.id);
  }

  async function addCompletedWorkout() {
    try {
      const updates = {
        user_id: user.id,
        name: userData.active_program,
        training: data[completedWorkoutId].training,
        training_id: completedWorkoutId,
      };
      let { error } = await supabase
        .from("user_completed_workouts")
        .insert(updates);
    } catch (error) {
      console.log(error);
    }
  }

  async function getWorkouts() {
    try {
      setLoading(true);

      let { data, error } = await supabase
        .from("workouts")
        .select(`name, training, training_id`)
        .eq("name", userData.active_program);
      if (data) {
        setData(data);
        setNextWorkout(userData.next_workout);
        // console.log("data: ", data);
      }
      if (error) throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function EditButton(props) {
    return (
      <Link href="/account">
        <FiEdit size={20} />
      </Link>
    );
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
      <div className="flex flex-col justify-between pt-6 mx-4">
        <h1 className="text-lg font-bold">Training Dashboard</h1>
        <p className="text-zinc-400">{date}</p>
      </div>
      <div className="w-full max-w-xl px-10 mx-auto my-4">
        <div className="text-center">
          <div>
            <div className="tabs place-content-center">
              <a href="/dashboard" className="tab tab-bordered tab-active">
                Next
              </a>
              <a href="/past" className="tab tab-bordered">
                Past
              </a>
            </div>
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
                <TrainingList
                  handleComplete={handleComplete}
                  completedWorkoutId={completedWorkoutId}
                  program={data}
                />
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
    .select(`active_program, next_workout, completed_workouts`)
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
