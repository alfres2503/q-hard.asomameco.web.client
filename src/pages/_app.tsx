import Head from "next/head";
import "@/styles/globals.css";
import { MemberProvider } from "@/context/MemberContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MemberProvider>
        <Head>
          <title>Asomameco</title>
          {/* <link rel="shortcut icon" href="/logo.svg" /> */}
        </Head>
        <Component {...pageProps} />
      </MemberProvider>
    </>
  );
}
