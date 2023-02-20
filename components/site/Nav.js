import { useUser } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { TbSquarePlus } from "react-icons/tb";

const Nav = () => {
  const router = useRouter();
  const user = useUser();
  const supabase = useSupabaseClient();
  const [name, setName] = useState("");

  useEffect(() => {
    getProfile();
  }, [user]);

  const handleSignOut = () => {
    supabase.auth.signOut();
    router.push("/");
  };

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setName(data.full_name);
      }
    } catch (error) {
      // alert("Error loading user data!");
      console.log(error);
    }
  }

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
                <li>
                  <a href="/nutrition">Nutrition</a>
                </li>
                <li>
                  <a className="text-borderGray">Analytics</a>
                </li>
                <li>
                  <a className="text-borderGray">Leaderbord</a>
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
              <li>
                <a href="/nutrition">Nutrition</a>
              </li>
              <li>
                <a className="text-borderGray">Analytics</a>
              </li>
              <li>
                <a className="text-borderGray">Leaderbord</a>
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
                  <span className="text-xs">
                    {name ? name.charAt(0).toUpperCase() : ""}
                  </span>
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
                  <label htmlFor="help-modal">Quick Help</label>
                </li>
                <li>
                  <a onClick={handleSignOut}>Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Quick Help Modal
      Below the modal link to keep out of the drop down */}
      <input type="checkbox" id="help-modal" className="modal-toggle" />
      <div className="modal">
        <div className="relative modal-box">
          <label
            htmlFor="help-modal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <div className="text-center">
            <p className="py-1 text-lg font-bold">👋 Quick Help</p>
            <div className="text-sm">
              <p>Welcome to the Gambit App!</p>
              <p>Here are a few pointers to get you started:</p>
              <div className="text-left">
                <ul className="list-decimal list-inside">
                  <li className="py-2">
                    You can get back to this screen at any time by clicking the
                    icon in the top right and clicking "quick help".
                  </li>
                  <li className="py-2 underline">
                    For a better app experience, click the share button on
                    safari on IOS, then click "add to home screen".
                  </li>
                  <li className="py-2">
                    Start by updating your name, username, and training goals in
                    your{" "}
                    <a className="font-bold underline" href="/account">
                      profile
                    </a>
                    .
                  </li>
                  <li className="py-2">
                    You can select a training program by selecting one from the
                    training library on the{" "}
                    <a className="font-bold underline" href="/">
                      homepage
                    </a>
                    .
                  </li>
                  <li className="py-2">
                    You can access your training at any time by going to your{" "}
                    <a className="font-bold underline" href="/dashboard">
                      training dashboard
                    </a>
                    .
                  </li>
                  <li className="py-2">
                    You can complete your first workout by going to your
                    dashboard, clicking "view workout" and "complete workout".
                  </li>
                  <li className="py-2">
                    You can find out your calorie needs and macros by going to{" "}
                    <a className="font-bold underline" href="/nutrition">
                      nutrition
                    </a>
                    .
                  </li>
                  <li className="py-2">
                    You can add a custom workout at any time by clicking the +
                    sign in the top right.
                  </li>
                  <li className="py-2">
                    You can find out detailed information on programming,
                    nutrition, training fundamentals, and more in the guide by
                    clicking the menu in the top left and clicking Guide.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
