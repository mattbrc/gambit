import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Generate from "./Generate";
import { Oval } from "react-loader-spinner";
import TrainingCard from "./TrainingCard";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import { toast } from "react-hot-toast";

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
  const [homeDisplay, setHomeDisplay] = useState(false);
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
    // setLoading(false);
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
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setActiveProgram(data.active_program);
        setCount(data.completed_workouts);
      }
    } catch (error) {
      // alert("Error loading user data!");
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
              <div className="border border-gray-300 shadow-md card w-80 bg-base-100">
                <div className="absolute right-2 top-2">
                  <EditButton />
                </div>

                <div className="justify-center mt-6 avatar placeholder">
                  <div className="w-16 rounded-full bg-neutral-focus text-neutral-content">
                    <span className="text-3xl">
                      {name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <p className="font-bold">{name}</p>
                  <p>@{username}</p>
                  <p>Completed Workouts: {count}</p>
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
                  <div className="my-4 border border-gray-300 shadow-md card w-80 bg-base-100">
                    <div className="card-body">
                      <h2 className="card-title">Hybrid Athlete</h2>
                      <p>
                        Hybrid style training focused on efficiently improving
                        VO2 Max, peak strength, and physique
                      </p>
                      <div className="flex flex-col items-center">
                        <a
                          className="w-40 my-4 btn btn-accent"
                          href="/dashboard"
                        >
                          Dashboard
                        </a>
                      </div>
                      <div className="justify-center card-actions">
                        <div className="badge badge-outline">Strength</div>
                        <div className="badge badge-outline">Conditioning</div>
                        <div className="badge badge-outline">Endurance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <p className="text-xl font-bold">Available Programs</p>
            <div className="flex flex-col items-center">
              <div className="my-4 border border-gray-300 shadow-md card w-80 bg-base-100">
                <div className="card-body">
                  <h2 className="card-title">Hybrid Athlete</h2>
                  <div className="badge badge-accent">NEW</div>
                  <p>
                    Hybrid style training focused on efficiently improving VO2
                    Max, peak strength, and physique
                  </p>
                  <Generate
                    userId={userId}
                    activeProgram="Hybrid Athlete Base"
                  />
                  <div className="justify-center card-actions">
                    <div className="badge badge-outline">Strength</div>
                    <div className="badge badge-outline">Conditioning</div>
                    <div className="badge badge-outline">Endurance</div>
                  </div>
                </div>
              </div>
              <div className="my-4 border border-gray-300 shadow-md card w-80 bg-base-100">
                <div className="card-body">
                  <h2 className="card-title">MilPrep</h2>
                  <div className="badge badge-accent">COMING SOON</div>
                  <p>
                    Training focused on preparing for SFAS or RASP. High level
                    of conditioning work, rucking, calisthenics, and strenght
                    work paired with recovery.
                  </p>
                  <Generate
                    userId={userId}
                    activeProgram="Hybrid Athlete Base"
                    disabled={true}
                  />
                  <div className="justify-center card-actions">
                    <div className="badge badge-outline">Strength</div>
                    <div className="badge badge-outline">Conditioning</div>
                    <div className="badge badge-outline">Endurance</div>
                  </div>
                </div>
              </div>
              <div className="my-4 border border-gray-300 shadow-md card w-80 bg-base-100">
                <div className="card-body">
                  <h2 className="card-title">Road Warrior</h2>
                  <div className="badge badge-accent">COMING SOON</div>
                  <p>
                    Bodyweight centered training for those without access to
                    equipment.
                  </p>
                  <Generate
                    userId={userId}
                    activeProgram="Hybrid Athlete Base"
                    disabled={true}
                  />
                  <div className="justify-center card-actions">
                    <div className="badge badge-outline">Strength</div>
                    <div className="badge badge-outline">Conditioning</div>
                    <div className="badge badge-outline">Endurance</div>
                  </div>
                </div>
              </div>
              <div className="my-4 border border-gray-300 shadow-md w-80 card bg-base-100">
                <div className="card-body">
                  <h2 className="card-title">Pure Endurance</h2>
                  <div className="badge badge-accent">COMING SOON</div>
                  <p>
                    Pure running-focused training to take you from a 5k to your
                    first half marathon and beyond.
                  </p>
                  <Generate
                    userId={userId}
                    activeProgram="Hybrid Athlete Base"
                    disabled={true}
                  />
                  <div className="justify-center card-actions">
                    <div className="badge badge-outline">Conditioning</div>
                    <div className="badge badge-outline">Endurance</div>
                  </div>
                </div>
              </div>
              <div className="my-4 mb-20 border border-gray-300 shadow-md card w-80 bg-base-100">
                <div className="card-body">
                  <h2 className="card-title">Raw Strength</h2>
                  <div className="badge badge-accent">COMING SOON</div>
                  <p>Pure strength + hypertrophy training.</p>
                  <Generate
                    userId={userId}
                    activeProgram="Hybrid Athlete Base"
                    disabled={true}
                  />
                  <div className="justify-center card-actions">
                    <div className="badge badge-outline">Strength</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
