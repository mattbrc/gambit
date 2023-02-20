import Generate from './Generate';

const Hybrid = ({ userId, active }) => {
    return (
      <div>
        <div className="my-4 border shadow-sm border-borderGray card w-88 bg-base-100">
                <div className="card-body">
                  <h2 className="card-title">Hybrid Athlete</h2>
                  {active ? null: (<p>
                    Hybrid style training focused on efficiently improving VO2
                    Max, peak strength, and physique
                  </p>)}
                  {active ? (
                  <div className="flex flex-col items-center">
                    <a
                    className="w-40 my-4 border text-agGray btn bg-agGreen border-agGreen hover:text-agGreen"
                    href="/dashboard"
                    >
                        Dashboard
                    </a>
                    </div>) : (<Generate
                    userId={userId}
                    newProgram="Hybrid Athlete Base"
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
        <div className="my-4 border shadow-sm border-borderGray card w-88 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Milprep</h2>
          {active ? null : (<div className="badge badge-outline">NEW</div>)}
          {active ? null: (<p>
            Training focused on preparing for SFAS or RASP. High level
            of conditioning work, rucking, calisthenics, and strenght
            work paired with recovery.
          </p>)}
          {active ? (
                  <div className="flex flex-col items-center">
                    <a
                    className="w-40 my-4 border text-agGray btn bg-agGreen border-agGreen hover:text-agGreen"
                    href="/dashboard"
                    >
                        Dashboard
                    </a>
                    </div>) : (<Generate
            userId={userId}
            newProgram="Milprep"
            disabled={false}
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
        <div className="my-4 border shadow-sm border-borderGray card w-88 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Road Warrior</h2>
          {active ? null : (<div className="badge badge-outline">COMING SOON</div>)}
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
            newProgram="Road Warrior"
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
        <div className="my-4 border shadow-sm border-borderGray w-88 card bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Pure Endurance</h2>
          {active ? null: (<p>
            Pure running-focused training to take you from a 5k to your
            first half marathon and beyond.
          </p>)}
          {active ? (
                  <div className="flex flex-col items-center">
                    <a
                    className="w-40 my-4 border text-agGray btn bg-agGreen border-agGreen hover:text-agGreen"
                    href="/dashboard"
                    >
                        Dashboard
                    </a>
                    </div>) : (<Generate
            userId={userId}
            newProgram="Pure Endurance"
            disabled={false}
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
        <div className="my-4 border shadow-sm border-borderGray card w-88 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Raw Strength</h2>
          {active ? null : (<div className="badge badge-outline">COMING SOON</div>)}
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
            newProgram="Raw Strength"
            disabled={true}
          />)}
          <div className="justify-center card-actions">
            <div className="badge badge-outline">Strength</div>
          </div>
        </div>
      </div>
    );
};

export const Phraks = ({ userId, active }) => {
  return (
      <div className="my-4 mb-20 border shadow-sm border-borderGray card w-88 bg-base-100">
      <div className="card-body">
        <h2 className="card-title">AG Phraks Variant to the Variant</h2>
        {active ? null : (<div className="badge badge-outline">COMING SOON</div>)}
        {active ? null: (<p>Minimal time approach to strength and conditioning.</p>)}
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
          newProgram="Raw Strength"
          disabled={true}
        />)}
        <div className="justify-center card-actions">
          <div className="badge badge-outline">Strength</div>
          <div className="badge badge-outline">Conditioning</div>
        </div>
      </div>
    </div>
  );
};
  
export default Hybrid;