import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Asomameco</title>
        {/* <link rel="shortcut icon" href="/logo.svg" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
