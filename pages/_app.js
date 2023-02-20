import "../styles/globals.css";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import Nav from "../components/site/Nav";
// import Footer from "../components/site/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Toaster />
      <Analytics />
    </SessionContextProvider>
  );
}

export default MyApp;
