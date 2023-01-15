import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Profile from "../components/Profile";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default function Account({ user, userData }) {
  const session = useSession();
  console.log("userdata: ", userData);

  return (
    <div className="container text-center">
      <h1 className="my-5 text-xl font-bold">Account</h1>
      <Profile user={user} userData={userData} />
    </div>
  );
}

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

  const { data: userData } = await supabase
    .from("profiles")
    .select(`full_name, username`)
    .eq("id", session.user.id)
    .single();

  return {
    props: {
      initialSession: session,
      user: session.user,
      userData,
    },
  };
};
