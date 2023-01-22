
import {useEffect, useState} from 'react';

const Integrations = () => {
    const [id, setId] = useState();
    const [token, setToken] = useState();
    
    useEffect(() => {
      const code = new URLSearchParams(window.location.search).get('code');
      if(code){
        exchangeCodeForToken();
        //getLatestWorkouts();
      }
    }, [])
  
    // const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    const clientId = 100911;
    const clientSecret = '11973ed3e9543701d0fce7694b6ad784136a802a';
    // STRAVA_CLIENT_SECRET=11973ed3e9543701d0fce7694b6ad784136a802a
    const redirectUrl = "http://localhost:3000/";
    const scope = "read";

    async function handleStravaAuth() {
        // window.location = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
        window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3000/account&scope=activity:read`;
    }

    const exchangeCodeForToken = async() => {
      // extract the authorization code from the query string
      const code = new URLSearchParams(window.location.search).get('code');
      // exchange the code for an access token
      const response = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost:3000/account'
        })
      });

      const json = await response.json();
      
      // save the access token in local storage
      // setId(json.athlete.id);
      // setToken(json.access_token);
      //return (json.athlete.id, json.access_token);
      console.log("json: ", json);
      localStorage.setItem('strava_access_token', json.access_token);
    }

    const getLatestWorkouts = async() => {
      // const accessToken = localStorage.getItem('strava_access_token');
      console.log("id: ", id);
      console.log("token: ", token);
      const response = await fetch(`https://www.strava.com/api/v3/athletes/${id}/stats`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
  
      const json = await response.json();
  
      // The json variable now contains an array of the user's latest activities
      console.log(json);
  }
  
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
          <button onClick={handleStravaAuth} className="btn">Connect to Strava</button>
        </div>
      </div>
    )
  }

export default Integrations;