import { useSession } from "@supabase/auth-helpers-react";

export default function Account() {
  const session = useSession();

  return (
    <div className="container text-center">
      <h1 className="my-5 text-xl font-bold">Account coming soon.</h1>
    </div>
  );
}
