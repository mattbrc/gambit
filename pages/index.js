import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import {
  useUser,
  useSession,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Homepage from "../components/Homepage";
import { useEffect, useState } from "react";
import NewData from "../data/NewData";

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
      </div>
    );

  return (
    <div>
      {/* <NewData /> */}
      <Homepage session={session} />
    </div>
  );
}
