import { Oval } from "react-loader-spinner";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const Redirect = ({ user }) => {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const clientId = 100911;
  const clientSecret = "11973ed3e9543701d0fce7694b6ad784136a802a";
  // pull in tokens from strava authentication
  // insert tokens into strava db table
  // redirect back to account page

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      exchangeCodeForToken();
      console.log("code: ", code);
      router.push("/account");
    }
    // when done, redirect to account
  }, []);

  const exchangeCodeForToken = async () => {
    console.log("exchanging...");
    // extract the authorization code from the query string
    const code = new URLSearchParams(window.location.search).get("code");
    // exchange the code for an access token
    const response = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: "http://localhost:3000/redirect",
      }),
    });

    const json = await response.json();
    connectStrava(json);
    // console.log("json: ", json);
    // localStorage.setItem('strava_access_token', json.access_token);
  };

  async function connectStrava(json) {
    console.log("json: ", json);
    try {
      const updates = {
        id: user.id,
        access_token: json.access_token,
        refresh_token: json.refresh_token,
        athlete_id: json.athlete.id,
      };
      let { error } = await supabase.from("strava").upsert(updates);
      if (error) throw error;
      //alert("Profile updated!");
    } catch (error) {
      //alert("Error updating the data!");
      console.log(error);
    }
  }

  return (
    <div className="container text-center">
      <p className="mt-10">Talking to Strava</p>
      <div className="grid my-6 place-items-center">
        <Oval
          height={30}
          width={30}
          color="#000000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#000000"
          strokeWidth={6}
          strokeWidthSecondary={6}
        />
      </div>
    </div>
  );
};

export default Redirect;

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};
