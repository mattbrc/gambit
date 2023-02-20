import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import Hybrid, {
  Milprep,
  RoadWarrior,
  PureEndurance,
  RawStrength,
  Phraks,
} from "../training/ProgramCards";

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
        setActiveProgram(data[0].active_program);
        setCount(data[0].completed_workouts);
      }
    } catch (error) {
      console.log(error);
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
              <div className="border shadow-sm border-borderGray card w-80 bg-base-100">
                <div className="grid grid-cols-3 p-2 place-items-center">
                  {/* <div className="absolute right-2 top-2">
                  <EditButton />
                </div> */}
                  <div className="flex content-center justify-start col-span-1 avatar placeholder">
                    <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
                      <span className="text-2xl">
                        {name ? name.charAt(0).toUpperCase() : ""}
                      </span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-bold">{name}</p>
                    <p className="text-sm border rounded-md bg-borderGray border-borderGray">
                      @{username}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs">level</p>
                    <p className="text-xl font-bold">1</p>
                  </div>
                  <div className="col-span-3 pt-3">
                    <p className="text-sm">Level Progress</p>
                    <progress
                      className="w-56 progress progress-accent"
                      value="10"
                      max="100"
                    ></progress>
                  </div>
                  {/* <div className="card-body">
                    <p className="font-bold">{name}</p>
                    <p>@{username}</p>
                    <p>Completed Workouts: {count}</p>
                  </div> */}
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
                      Milprep: <Milprep userId={userId} active={true} />,
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
            <p className="text-xl font-bold">Training Library</p>
            <div className="flex flex-col items-center">
              <Hybrid userId={userId} active={false} />
              <Milprep userId={userId} active={false} />
              <RoadWarrior userId={userId} active={false} />
              <PureEndurance userId={userId} active={false} />
              <RawStrength userId={userId} active={false} />
              <Phraks userId={userId} active={false} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
