import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [data, setData] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    const { data, error } = await supabase.from("user_workouts").select("*");
    setData(data);
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <div className="w-full max-w-md px-10 mx-auto my-16">
      {!session ? (
        <div className="container text-center">
          <p className="my-5">You are not logged in!</p>
          <a className="btn" href="/">
            Sign In
          </a>
        </div>
      ) : (
        <div className="container text-center">
          <h1 className="my-5 text-xl font-bold">Dashboard</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
