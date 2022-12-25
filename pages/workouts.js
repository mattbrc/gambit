import { useSession } from "@supabase/auth-helpers-react";

export default function Workouts() {
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
          <h1 className="my-5 text-xl font-bold">Workout Page Coming Soon!</h1>
          <p>
            This page will store all the user workout history in individual
            pages
          </p>
          <p>Button links to each workout w/ date created</p>
        </div>
      )}
    </div>
  );
}
