import "../styles/globals.css";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  // create new client on every 1st render
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    // pass supabase client to SessionContextProvider
    // pass initialSession prop for SSR pages for session context (immediately available on client side)
    <SessionContextProvider
      supabaseClient={supabase}
      initalSession={pageProps.initalSession}
    >
      <Nav />
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}

export default MyApp;
