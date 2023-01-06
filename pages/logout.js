import { useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();

  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();
      router.push("/signin");
    };
    logout();
  }, []);
  return <p>logging out...</p>;
};

export default Logout;
