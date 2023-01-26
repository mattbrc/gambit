import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import MilprepData from "../data/MilprepData";

function Nutrition() {
  const supabase = useSupabaseClient();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const id = 7445195;
  //   const refresh = "441a09e0e70a748e8743afcdfebe8dac0783adb7";
  // const refresh = "7e5aca9d02edef134c3c8177b6f455fcd25cd106";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("strava")
        .select(`refresh_token, athlete_id`)
        .eq("id", "6177388d-f3c0-47ae-8b33-d36dd6badf1c")
        .single();
      console.log("data: ", data);
      if (data) {
        try {
          const response = await fetch(
            `/api/strava/?refreshToken=${data.refresh_token}&athleteId=${data.athlete_id}`
          );
          const json = await response.json();
          setData(json);
        } catch (error) {
          setError(error);
        }
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  if (!data) {
    return null;
  }
  const distance = (data?.distance * 0.000621371).toFixed(1);
  return (
    <div>
      <p>Count: {data.count} runs</p>
      <p>Distance: {(data?.distance * 0.000621371).toFixed(1)} miles</p>
      <MilprepData />
    </div>
  );
}

export default Nutrition;
