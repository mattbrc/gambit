import React from "react";

const Card = ({ data }) => {
    return (
      <div>
        <p>Workout Description: {data[0].training.description}</p>
        <p>Day: {data[0].training.day}</p>
        <p>Week: {data[0].training.week}</p>
        <p>Complete: {data[0].training.complete ? "Yes" : "No"}</p>
        <h4>Strength</h4>
        {Object.keys(data[0].training.strength).map((exercise) => (
          <p key={exercise}>
          {exercise}: {data[0].training.strength[exercise]}
        </p>
        ))}
        <h4>Endurance</h4>
        <p>{data[0].training.endurance}</p>
        <h4>Conditioning</h4>
        <p>{data[0].training.conditioning}</p>
      </div>
    );
  };

const TrainingCard = ({ data, name }) => {
    return (
      <div>
        <div className="w-full max-w-3xl px-2 mx-auto my-4 shadow-xl rounded-xl bg-base-100">
          <div className="card-body">
            <h2 className="card-title">
              Week {data[0].training.week} Day {data[0].training.day}
            </h2>
            <h3 className="text-center">{name}</h3>
            <div className="justify-center card-actions">
              <label htmlFor="training-card" className="btn btn-success">
                View Workout
              </label>
              <input type="checkbox" id="training-card" className="modal-toggle" />
              <div className="modal">
                <div className="relative modal-box">
                  <label
                    htmlFor="training-card"
                    className="absolute btn btn-sm btn-circle right-2 top-2"
                  >
                    ✕
                  </label>
                  {/* <p className="font-bold">{description}</p> */}
                  <div className="my-2 text-sm text-left">
                    <p className="font-bold">Strength:</p>
                    {Object.keys(data[0].training.strength).map((exercise) => (
                    <p key={exercise}>
                        {exercise}: {data[0].training.strength[exercise]}
                    </p>
                    ))}
                    <p className="my-2">
                      <span className="font-bold">Endurance:</span> {data[0].training.endurance}
                    </p>
                    <p className="my-2">
                      <span className="font-bold">Conditioning:</span>{" "}
                      {data[0].training.conditioning}
                    </p>
                    {/* <UpdateWorkout workoutToComplete={wd} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default TrainingCard;