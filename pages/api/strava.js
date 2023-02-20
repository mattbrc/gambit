const handler = async (req, res) => {
  const refreshToken = req.query.refreshToken;
  const athleteId = req.query.athleteId;
  const headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    client_id: process.env.STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_SECRET,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  const reauthorizeResponse = await fetch(
    "https://www.strava.com/oauth/token",
    {
      method: "post",
      headers: headers,
      body: body,
    }
  );

  const reAuthJson = await reauthorizeResponse.json();

  const response = await fetch(
    `https://www.strava.com/api/v3/athletes/${athleteId}/stats?access_token=${reAuthJson.access_token}`
  );

  const json = await response.json();

  const { count, distance } = json.all_run_totals;
  const movingTime = json.all_run_totals.moving_time;

  return res.status(200).json({
    count,
    distance,
    movingTime,
  });
};

export default handler;
