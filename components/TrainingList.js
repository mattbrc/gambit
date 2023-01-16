import {
  useSession,
  useUser,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const TrainingCard = ({
  day,
  week,
  name,
  strength,
  endurance,
  conditioning,
  description,
  workout,
  trainingId,
  handleComplete,
  nextWorkout,
}) => {
  return (
    <div>
      <div className="w-full max-w-3xl px-2 mx-auto my-4 shadow-xl rounded-xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title">
            Week {week} Day {day}
          </h2>
          <h3>{description}</h3>
          <div className="justify-center card-actions">
            <label htmlFor={trainingId} className="btn btn-accent">
              View workout
            </label>
            <input type="checkbox" id={trainingId} className="modal-toggle" />
            <div className="modal">
              <div className="relative modal-box">
                <label
                  htmlFor={trainingId}
                  className="absolute btn btn-sm btn-circle right-2 top-2"
                >
                  ✕
                </label>
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
                      htmlFor={trainingId}
                      className="btn btn-sm btn-accent"
                      disabled={trainingId == nextWorkout ? false : true}
                      onClick={() => {
                        toast.promise(handleComplete(), {
                          loading: "Loading",
                          success: "Completed Workout!",
                          error: "Error completing workout",
                        });
                      }}
                    >
                      Complete
                    </label>
                    {/* <label
                      htmlFor={trainingId}
                      className="btn btn-sm btn-accent"
                      onClick={increment}
                    >
                      increment
                    </label> */}
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

const TrainingList = ({ completedWorkoutId, handleComplete, program }) => {
  const sortedProgram = program.sort((a, b) => a.training_id - b.training_id);

  return (
    <div className="mb-10 training-list">
      {sortedProgram
        .filter((workout) => workout.training_id >= completedWorkoutId)
        .map((workout) => (
          <TrainingCard
            key={workout.training_id}
            day={workout.training.day}
            week={workout.training.week}
            name={workout.name}
            description={workout.training.description}
            strength={workout.training.strength}
            endurance={workout.training.endurance}
            conditioning={workout.training.conditioning}
            workout={workout.training}
            trainingId={workout.training_id}
            handleComplete={handleComplete}
            nextWorkout={completedWorkoutId}
          />
        ))}
    </div>
  );
};

export default TrainingList;
