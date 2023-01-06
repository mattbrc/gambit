import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import {
  useUser,
  useSession,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";

export default function Account() {
  const session = useSession();
  const user = useUser();
  const supabase = useSupabaseClient();

  return (
    <div className="w-full max-w-md px-10 mx-auto my-16">
      <Auth
        supabaseClient={supabase}
        providers={["google"]}
        redirectTo={"/signin"}
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
  );
}
