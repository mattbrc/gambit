import {useEffect, useState} from 'react';
import {
  useSupabaseClient
} from "@supabase/auth-helpers-react";

const Integrations = ({ user }) => {
  const [stravaConnected, setStravaConnected] = useState(false);
  const supabase = useSupabaseClient();
  const clientId = process.env.STRAVA_CLIENT_ID;

  useEffect(() => {
    checkIsConnected();
  }, [stravaConnected])

  async function checkIsConnected() {
    try {
      const { data, error } = await supabase.from('strava').select().eq('id', user.id);
      // console.log("data from strava table: ", data);
      if (data.length !== 0) setStravaConnected(true);
      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }

  // staging
  async function handleStravaAuth() {
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3000/redirect&scope=activity:read`;
  }
  // deployment
  // async function handleStravaAuth() {
  //   window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=https://app.acidgambit.com/redirect&scope=activity:read`;
  // }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="grid place-items-center">
        <div className="w-80 divider"></div>
      </div>
      <h1 className="text-xl font-bold">Integrations</h1>
      <div className='max-w-xs my-4 form-control'>
        <label className="label">
          <span className="label-text">Strava</span>
        </label>
        {stravaConnected? (<button disabled={true} className="btn">✅ Connected</button>): (<button onClick={handleStravaAuth} className="btn">Connect to Strava</button>)}
      </div>
    </div>
  )
}

export default Integrations;