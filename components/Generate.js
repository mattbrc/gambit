// purely the generate function from the existing data

const Generate = () => {
  async function generateWorkouts() {
    console.log("generating workouts now...");
  }
  return (
    <div>
      <button
        className="my-2 btn btn-success"
        onClick={() => generateWorkouts()}
      >
        Generate Workouts
      </button>
    </div>
  );
};

export default Generate;
