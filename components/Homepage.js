import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Generate from "./Generate";
import { Oval } from "react-loader-spinner";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import Hybrid, {
  Milprep,
  RoadWarrior,
  PureEndurance,
  RawStrength,
} from "./ProgramCards";

function EditButton(props) {
  return (
    <Link href="/account">
      <FiEdit size={20} />
    </Link>
  );
}

export default function Homepage({ session }) {
  const user = useUser();
  const supabase = useSupabaseClient();
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [goals, setGoals] = useState(null);
  const [activeProgram, setActiveProgram] = useState(null);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState();

  useEffect(() => {
    getDate();
    getProfile();
    getActiveProgram();
  }, [session, activeProgram]);

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

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select("full_name, username, goals")
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log(data);
        console.log(user.id);
        setUserId(user.id);
        setName(data.full_name);
        setUsername(data.username);
        setGoals(data.goals);
      }
    } catch (error) {
      // alert("Error loading user data!");
      console.log(error);
    }
  }

  async function getActiveProgram() {
    try {
      let { data, error, status } = await supabase
        .from("user_training")
        .select("active_program, completed_workouts")
        .eq("id", user.id);
      // .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data && data.length > 0) {
        console.log("data: ", data);
        setActiveProgram(data[0].active_program);
        setCount(data[0].completed_workouts);
      }
    } catch (error) {
      // alert("Error loading user data!");
      // console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="container text-center">
        <h1 className="my-5 text-xl font-bold">Home</h1>
        {loading ? (
          <div className="grid my-20 place-items-center">
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
            <div className="flex flex-col items-center my-6">
              <div className="border border-gray-300 shadow-md card w-80 bg-base-100">
                <div className="absolute right-2 top-2">
                  <EditButton />
                </div>

                <div className="justify-center mt-6 avatar placeholder">
                  <div className="w-16 rounded-full bg-neutral-focus text-neutral-content">
                    <span className="text-3xl">
                      {name ? name.charAt(0).toUpperCase() : ""}
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <p className="font-bold">{name}</p>
                  <p>@{username}</p>
                  <div className="stats stats-vertical">
                    <div className="stat">
                      <div className="stat-title">Completed Workouts</div>
                      <div className="stat-value">{count}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {activeProgram === null || activeProgram === "" ? (
              <div>
                <p></p>
              </div>
            ) : (
              <div>
                <p className="text-xl font-bold">My Active Program</p>
                <div className="flex flex-col items-center">
                  {/* <Hybrid userId={userId} active={true} /> */}
                  {
                    {
                      "Hybrid Athlete Base": (
                        <Hybrid userId={userId} active={true} />
                      ),
                      "Pure Endurance": (
                        <PureEndurance userId={userId} active={true} />
                      ),
                      "Mil Prep": <Milprep userId={userId} active={true} />,
                      "Raw Strength": (
                        <RawStrength userId={userId} active={true} />
                      ),
                      "Road Warrior": (
                        <RoadWarrior userId={userId} active={true} />
                      ),
                    }[activeProgram]
                  }
                </div>
              </div>
            )}
            <div className="grid place-items-center">
              <div className="w-80 divider"></div>
            </div>
            <p className="text-xl font-bold">Available Programs</p>
            <div className="flex flex-col items-center">
              <Hybrid userId={userId} active={false} />
              <Milprep userId={userId} active={false} />
              <RoadWarrior userId={userId} active={false} />
              <PureEndurance userId={userId} active={false} />
              <RawStrength userId={userId} active={false} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
