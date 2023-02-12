import { useSession } from "@supabase/auth-helpers-react";

export default function Analytics() {
  const session = useSession();

  return (
    // <div className="w-full max-w-md px-10 mx-auto my-16">
    //   <div className="container text-center">
    //     <h1 className="my-5 text-xl font-bold">Analytics coming soon.</h1>
    //   </div>
    // </div>
    <div className="container text-center">
      <h1 className="my-5 text-xl font-bold">Analytics</h1>
      <div className="">
        <p>progress</p>
        <button className="btn">Update Progress</button>
        <p>lifestyle</p>
        <button className="btn">Lifestyle Tracking</button>
      </div>
    </div>
  );
}
