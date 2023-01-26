import { useUser } from "@supabase/auth-helpers-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const user = useUser();
  const supabase = useSupabaseClient();

  const handleSignOut = () => {
    supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div>
      {!user ? (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <a className="text-xl normal-case btn btn-ghost">
              Gambit <span className="pt-1 text-xs">v0.2.2</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                {/* mobile display */}
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/dashboard">Dashboard</a>
                </li>
                <li>
                  <a className="text-zinc-400">Analytics</a>
                </li>
                {/* <li>
                  <a className="text-zinc-400">Nutrition</a>
                </li> */}
                <li>
                  <a href="/account">Account</a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://guide.acidgambit.com/"
                    rel="noopener noreferrer"
                  >
                    Guide
                  </a>
                </li>
                {/* <li>
                  <a href="/start">Getting Started</a>
                </li> */}
              </ul>
            </div>
            <a className="text-xl normal-case btn btn-ghost" href="/">
              Gambit <span className="pt-1 text-xs">v0.2.2</span>
            </a>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a className="text-zinc-400">Analytics</a>
              </li>
              {/* <li>
                <a className="text-zinc-400">Nutrition</a>
              </li> */}
              <li>
                <a href="/account">Account</a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://guide.acidgambit.com/"
                  rel="noopener noreferrer"
                >
                  Guide
                </a>
              </li>
              {/* <li>
                <a href="/start">Getting Started</a>
              </li> */}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-outline" onClick={handleSignOut}>
              Sign Out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
