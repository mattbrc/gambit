import Generate from './Generate';

const Hybrid = ({ userId, active }) => {
    return (
      <div>
        <div className="my-4 border border-gray-300 shadow-md card w-80 bg-base-100">
                <div className="card-body">
                  <h2 className="card-title">Hybrid Athlete</h2>
                  {active ? null : (<div className="badge badge-accent">NEW</div>)}
                  {active ? null: (<p>
                    Hybrid style training focused on efficiently improving VO2
                    Max, peak strength, and physique
                  </p>)}
                  {active ? (
                  <div className="flex flex-col items-center">
                    <a
                    className="w-40 my-4 btn btn-accent"
                    href="/dashboard"
                    >
                        Dashboard
                    </a>
                    </div>) : (<Generate
                    userId={userId}
                    activeProgram="Hybrid Athlete Base"
                  />)}
                  <div className="justify-center card-actions">
                    <div className="badge badge-outline">Strength</div>
                    <div className="badge badge-outline">Conditioning</div>
                    <div className="badge badge-outline">Endurance</div>
                  </div>
                </div>
              </div>
      </div>
    );
};

export const Milprep = ({ userId, active }) => {
    return (
        <div className="my-4 border border-gray-300 shadow-md card w-80 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">MilPrep</h2>
          {active ? null : (<div className="badge badge-accent">COMING SOON</div>)}
          {active ? null: (<p>
            Training focused on preparing for SFAS or RASP. High level
            of conditioning work, rucking, calisthenics, and strenght
            work paired with recovery.
          </p>)}
          {active ? (
                  <div className="flex flex-col items-center">
                    <a
                    className="w-40 my-4 btn btn-accent"
                    href="/dashboard"
                    >
                        Dashboard
                    </a>
                    </div>) : (<Generate
            userId={userId}
            activeProgram="Milprep"
            disabled={true}
          />)}
          
          <div className="justify-center card-actions">
            <div className="badge badge-outline">Strength</div>
            <div className="badge badge-outline">Conditioning</div>
            <div className="badge badge-outline">Endurance</div>
          </div>
        </div>
      </div>
    );
};

export const RoadWarrior = ({ userId, active }) => {
    return (
        <div className="my-4 border border-gray-300 shadow-md card w-80 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Road Warrior</h2>
          {active ? null : (<div className="badge badge-accent">COMING SOON</div>)}
          {active ? null: (<p>
            Bodyweight centered training for those without access to
            equipment.
          </p>)}
          {active ? (
                  <div className="flex flex-col items-center">
                    <a
                    className="w-40 my-4 btn btn-accent"
                    href="/dashboard"
                    >
                        Dashboard
                    </a>
                    </div>) : (<Generate
            userId={userId}
            activeProgram="Road Warrior"
            disabled={true}
          />)}
          
          <div className="justify-center card-actions">
            <div className="badge badge-outline">Strength</div>
            <div className="badge badge-outline">Conditioning</div>
            <div className="badge badge-outline">Endurance</div>
          </div>
        </div>
      </div>
    );
};

export const PureEndurance = ({ userId, active }) => {
    return (
        <div className="my-4 border border-gray-300 shadow-md w-80 card bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Pure Endurance</h2>
          {active ? null : (<div className="badge badge-accent">COMING SOON</div>)}
          {active ? null: (<p>
            Pure running-focused training to take you from a 5k to your
            first half marathon and beyond.
          </p>)}
          {active ? (
                  <div className="flex flex-col items-center">
                    <a
                    className="w-40 my-4 btn btn-accent"
                    href="/dashboard"
                    >
                        Dashboard
                    </a>
                    </div>) : (<Generate
            userId={userId}
            activeProgram="Pure Endurance"
            disabled={true}
          />)}
          <div className="justify-center card-actions">
            <div className="badge badge-outline">Conditioning</div>
            <div className="badge badge-outline">Endurance</div>
          </div>
        </div>
      </div>
    );
};

export const RawStrength = ({ userId, active }) => {
    return (
        <div className="my-4 mb-20 border border-gray-300 shadow-md card w-80 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Raw Strength</h2>
          {active ? null : (<div className="badge badge-accent">COMING SOON</div>)}
          {active ? null: (<p>Pure strength + hypertrophy training.</p>)}
          {active ? (
                  <div className="flex flex-col items-center">
                    <a
                    className="w-40 my-4 btn btn-accent"
                    href="/dashboard"
                    >
                        Dashboard
                    </a>
                    </div>) : (<Generate
            userId={userId}
            activeProgram="Raw Strength"
            disabled={true}
          />)}
          <div className="justify-center card-actions">
            <div className="badge badge-outline">Strength</div>
          </div>
        </div>
      </div>
    );
};
  
export default Hybrid;