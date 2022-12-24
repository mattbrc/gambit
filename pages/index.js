import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div>
      {!session ? (
        <div className="w-full max-w-md px-10 mx-auto my-16">
          <Auth
            supabaseClient={supabase}
            providers={["google"]}
            redirectTo={"/"}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#404040",
                    brandAccent: "#52525b",
                  },
                },
              },
            }}
            theme="dark"
          />
        </div>
      ) : (
        <div className="container text-center">
          <h1 className="my-5 text-xl font-bold">Home</h1>
          <p className="mt-10">Step 1: Update your background</p>
          <button className="my-2 btn">Update Background</button>
          <p>Step 2: Update your preferences</p>
          <button className="my-2 btn">Update Preferences</button>
          <p>Step 3: Generate your workouts for the next 7 days</p>
          <button className="my-2 btn btn-success">Generate Workouts</button>
        </div>
      )}
    </div>
  );
}
