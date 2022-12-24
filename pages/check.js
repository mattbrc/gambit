import { useSession } from "@supabase/auth-helpers-react";

export default function Check() {
  const session = useSession();

  return (
    <div className="w-full max-w-md px-10 mx-auto my-16">
      {!session ? (
        <div>
          <p>You are not logged in!</p>
          <a className="btn" href="/">
            Sign In
          </a>
        </div>
      ) : (
        <div>
          <p>you are logged in</p>
        </div>
      )}
    </div>
  );
}
