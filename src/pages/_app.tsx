import Head from "next/head";
import "@/styles/globals.css";
import { MemberProvider } from "@/context/provider/MemberProvider";
import { NotificationProvider } from "@/context/provider/NotificationProvider";

export default function App({
  Component,
  pageProps,
}: {
  Component: React.ElementType;
  pageProps: any;
}) {
  return (
    <>
      <NotificationProvider>
        <MemberProvider>
          <Head>
            <title>Asomameco</title>
            <link rel="icon" href="/favicon.svg" />
            <meta
              name="description"
              content="Asociación Maridos A Mecate Corto"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </MemberProvider>
      </NotificationProvider>
    </>
  );
}
