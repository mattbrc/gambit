const TrainingCard = ({
  wd,
  day,
  week,
  name,
  strength,
  endurance,
  conditioning,
  description,
  date,
}) => {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const dayDate = newDate.getDate();
  const year = newDate.getFullYear();

  return (
    <div>
      <div className="px-2 mx-auto my-4 border shadow-sm w-88 border-borderGray rounded-xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title">
            Week {week} Day {day}
          </h2>
          <h3>{name}</h3>
          <p className="text-sm">{month}/{dayDate}/{year}</p>
          <div className="justify-center card-actions">
            <label htmlFor={wd} className="border text-agGray btn bg-agGreen border-agGreen hover:text-agGreen">
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
  const sortedProgram = program.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return (
    <div className="training-list">
      {sortedProgram.map((workout) => (
        <TrainingCard
          key={workout.created_at}
          wd={workout.training.wd}
          day={workout.training.day}
          week={workout.training.week}
          name={workout.name}
          description={workout.training.description}
          strength={workout.training.strength}
          endurance={workout.training.endurance}
          conditioning={workout.training.conditioning}
          date={workout.created_at}
        />
      ))}
    </div>
  );
};

export default TrainingList;