import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";

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
        <div>
          <Account session={session} />
        </div>
      )}
    </div>
  );
}
