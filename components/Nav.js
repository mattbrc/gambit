import { useUser } from "@supabase/auth-helpers-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { TbSquarePlus } from "react-icons/tb";

const Nav = () => {
  const router = useRouter();
  const user = useUser();
  const supabase = useSupabaseClient();

  const handleSignOut = () => {
    supabase.auth.signOut();
    router.push("/");
  };

  const ShareButton = ({ title, text, url }) => {
    const handleClick = () => {
      if (navigator.share) {
        navigator.share({
          title: title,
          text: text,
          url: url,
        });
      }
    };

    return (
      <a
        className="px-4 py-2 font-bold rounded cursor-pointer text-agGray bg-agGreen border-agGreen hover:text-agGreen hover:bg-agGray"
        onClick={handleClick}
      >
        Share
      </a>
    );
  };

  return (
    <div>
      {!user ? (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <a className="text-xl normal-case btn btn-ghost">
              Gambit <span className="pt-1 text-xs">v0.4.0</span>
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
                <li>
                  <a href="/dashboard">Dashboard</a>
                </li>
                {/* <li>
                  <a>Analytics</a>
                </li> */}
                <li>
                  <a href="/nutrition">Nutrition</a>
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
                <li>
                  <ShareButton
                    title="Gambit Training App"
                    text="Check this app out!"
                    url="https://app.acidgambit.com"
                  />
                </li>
              </ul>
            </div>
            <a className="text-xl normal-case btn btn-ghost" href="/">
              Gambit <span className="pt-1 text-xs">v0.4.0</span>
            </a>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              {/* <li>
                <a className="text-agGray">Analytics</a>
              </li> */}
              <li>
                <a href="/nutrition">Nutrition</a>
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
              <li>
                <ShareButton
                  title="Gambit Training App"
                  text="Check this app out!"
                  url="https://app.acidgambit.com"
                />
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="tooltip tooltip-bottom" data-tip="coming soon!">
              <a>
                <TbSquarePlus size="1.4rem" />
              </a>
            </div>
            <div className="px-2 dropdown dropdown-end">
              <label tabIndex={0} className="m-1 avatar placeholder">
                <div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
                  <span className="text-xs">A</span>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="w-48 p-2 mt-3 shadow menu-compact dropdown-content menu bg-base-100 rounded-box"
              >
                <li>
                  <a href="/account">Profile</a>
                </li>
                <li>
                  <a onClick={handleSignOut}>Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="navbar-end">
            <a className="btn btn-outline" onClick={handleSignOut}>
              Sign Out
            </a>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Nav;
