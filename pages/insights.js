import { useSession } from "@supabase/auth-helpers-react";

export default function Insights() {
  const session = useSession();

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
          <h1 className="my-5 text-xl font-bold">Insights Coming Soon!</h1>
        </div>
      )}
    </div>
  );
}
