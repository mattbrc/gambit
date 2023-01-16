import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import {
  useUser,
  useSession,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Homepage from "../components/Homepage";
import { useEffect, useState } from "react";
import NewData from "../data/NewData";
import EnduranceData from "../data/EnduranceData";

export default function Home() {
  const session = useSession();
  const user = useUser();
  const supabase = useSupabaseClient();

  return (
    <div>
      <NewData />
    </div>
  );
}
