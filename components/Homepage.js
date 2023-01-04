import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Generate from "./Generate";
import { Oval } from "react-loader-spinner";
import TrainingCard from "./TrainingCard";

export default function Homepage({ session }) {
  const user = useUser();
  const supabase = useSupabaseClient();
  const [homeDisplay, setHomeDisplay] = useState(false);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [goals, setGoals] = useState(null);
  const [date, setDate] = useState();

  useEffect(() => {
    getProfile();
    getDate();
    setLoading(false);
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
        .select("full_name, goals")
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUserId(user.id);
        setGoals(data.goals);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }

  async function updatePreferences({ goals }) {
    try {
      const updates = {
        id: user.id,
        goals,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      console.log("updating preferences...");
      // alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    }
  }

  if (loading)
    return (
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
    );

  return (
    <div>
      <div className="container text-center">
        <h1 className="my-5 text-xl font-bold">Home</h1>
        <div>
          <p>Step 1: Select Training Path</p>
          <p className="my-0.5 text-xs italic">
            Optional if you have already completed in the past
          </p>
          <label htmlFor="preferences-modal" className="my-2 btn">
            Update Preferences
          </label>
          <input
            type="checkbox"
            id="preferences-modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box">
              <label
                htmlFor="preferences-modal"
                className="absolute btn btn-sm btn-circle right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">
                Let's update your preferences:
              </h3>
              <div className="container w-full max-w-xs form-control">
                {/* goals == training path */}
                <label className="label">
                  <span className="label-text">Choose your training path</span>
                </label>
                <select
                  className="select select-bordered"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option value="Hybrid Athlete Base">
                    Hybrid Athlete Base
                  </option>
                  {/* <option value="Milprep">Milprep</option> */}
                </select>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="preferences-modal"
                  className="btn"
                  onClick={() =>
                    updatePreferences({
                      goals,
                    })
                  }
                >
                  Submit
                </label>
              </div>
            </div>
          </div>
          {/* WORKOUT GENERATION BUTTON */}
          <p>Step 2: Start Your Program</p>
          <p className="my-0.5 text-xs italic">
            Create your workouts for the next 7 days
          </p>
          <Generate userId={userId} name={name} goals={goals} />
        </div>
      </div>
    </div>
  );
}
