const TrainingCard = ({
  wd,
  day,
  week,
  name,
  strength,
  endurance,
  conditioning,
}) => {
  return (
    <div>
      <div className="w-full max-w-3xl px-2 mx-auto my-4 shadow-xl rounded-xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title">
            Week {week} Day {day}
          </h2>
          <h3>{name}</h3>
          <div className="justify-center card-actions">
            <label htmlFor={wd} className="btn btn-success">
              View Workout
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

const TrainingList = ({ program }) => {
  return (
    <div className="training-list">
      {program.map((workout) => (
        <TrainingCard
          key={`week-${workout.week}-day-${workout.day}`}
          wd={workout.wd}
          day={workout.day}
          week={workout.week}
          name={workout.name}
          strength={workout.strength}
          endurance={workout.endurance}
          conditioning={workout.conditioning}
        />
      ))}
    </div>
  );
};

export default TrainingList;
