import {
  useSession,
  useUser,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";

const TrainingCard = ({
  wd,
  day,
  week,
  name,
  strength,
  endurance,
  conditioning,
  description,
  nextWorkout,
  workout,
  onWorkoutComplete,
}) => {
  const supabase = useSupabaseClient();
  const user = useUser();

  async function handleComplete() {
    addNextWorkout();
    addCompletedWorkout();
  }

  async function addNextWorkout() {
    try {
      const updateNextWorkout = Number(nextWorkout) + 1;

      const updates = {
        id: user.id,
        next_workout: updateNextWorkout,
        updated_at: new Date().toISOString(),
      };

      let { data, error } = await supabase
        .from("user_training")
        .upsert(updates)
        .eq("id", user.id);

      if (error) throw error;
      console.log("updated your next workout!");
    } catch (error) {
      console.log(error);
    }
  }

  async function addCompletedWorkout() {
    try {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;

      const updates = {
        user_id: user.id,
        name: name,
        training: workout,
        training_id: nextWorkout,
        date_completed: today,
      };

      let { error } = await supabase
        .from("user_completed_workouts")
        .insert(updates);

      if (error) throw error;
      console.log("updated your next workout!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="w-full max-w-3xl px-2 mx-auto my-4 shadow-xl rounded-xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title">
            Week {week} Day {day}
          </h2>
          <h3>{description}</h3>
          <div className="justify-center card-actions">
            <label htmlFor={wd} className="btn btn-success">
              View workout
            </label>
            <input type="checkbox" id={wd} className="modal-toggle" />
            <div className="modal">
              <div className="relative modal-box">
                <label
                  htmlFor={wd}
                  className="absolute btn btn-sm btn-circle right-2 top-2"
                >
                  ✕
                </label>
                {/* <p className="font-bold">{description}</p> */}
                <div className="my-2 text-sm text-left">
                  <p className="font-bold">Strength:</p>
                  {Object.keys(strength).map((exercise) => (
                    <p key={exercise}>
                      {exercise}: {strength[exercise]}
                    </p>
                  ))}
                  <p className="my-2">
                    <span className="font-bold">Endurance:</span> {endurance}
                  </p>
                  <p className="my-2">
                    <span className="font-bold">Conditioning:</span>{" "}
                    {conditioning}
                  </p>
                  <div className="flex flex-col items-center">
                    <label
                      htmlFor={wd}
                      className="btn btn-sm"
                      onClick={() => {
                        handleComplete();
                        onWorkoutComplete(wd);
                      }}
                    >
                      Complete
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrainingList = ({ program, nextWorkout }) => {
  const sortedProgram = program.sort((a, b) => a.training.wd - b.training.wd);

  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  function handleWorkoutComplete(id) {
    setCompletedWorkouts([...completedWorkouts, id]);
  }

  return (
    <div className="training-list">
      {sortedProgram
        .slice(nextWorkout)
        .filter((workout) => !completedWorkouts.includes(workout.training.wd))
        .map((workout) => (
          <div>
            <TrainingCard
              key={workout.training.wd}
              wd={workout.training.wd}
              day={workout.training.day}
              week={workout.training.week}
              name={workout.name}
              description={workout.training.description}
              strength={workout.training.strength}
              endurance={workout.training.endurance}
              conditioning={workout.training.conditioning}
              nextWorkout={nextWorkout}
              workout={workout.training}
              onWorkoutComplete={handleWorkoutComplete}
            />
          </div>
        ))}
    </div>
  );
};

export default TrainingList;
