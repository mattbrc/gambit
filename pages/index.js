import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import {
  useUser,
  useSession,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Homepage from "../components/Homepage";
import { useEffect, useState } from "react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import MilprepData from "../data/MilprepData";

export default function Home() {
  const session = useSession();
  const user = useUser();
  const supabase = useSupabaseClient();
  const [data, setData] = useState();

  useEffect(() => {
    async function loadData() {
      const { data } = await supabase.from("profiles").select("*");
      setData(data);
    }
    if (user) loadData();
  }, [user]);

  if (!user)
    return (
      <div>
        <div className="w-full max-w-md px-10 mx-auto my-16">
          <Auth
            supabaseClient={supabase}
            // onlyThirdPartyProviders={true}
            providers={["google"]}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#2E2E2E",
                    brandAccent: "#2E2E2E",
                  },
                },
              },
            }}
            theme="dark"
          />
        </div>
      </div>
    );

  return (
    <div>
      <Homepage session={session} />
    </div>
  );
}
