/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8Og0qhCCaAU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Button from "@/components/common/Button";
import Head from "next/head";
import Router from "next/router";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Asomameco | Error</title>
        <meta name="description" content="Error" />
      </Head>
      <div className="flex flex-col items-center gap-2 h-screen justify-center text-center py-12 px-4">
        <div className="flex flex-col gap-2">
          <img
            alt="Illustration"
            className=" object-center"
            src="/images/pagenotfound.svg"
            width="500"
          />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              ¿Te perdiste?
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Lo sentimos, no pudimos encontrar la página que estabas buscando,
              aquí tienes un par de enlaces que te pueden ayudar.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button
            onClick={() => Router.push("/")}
            className="inline-flex h-10 items-center justify-center px-8 text-sm font-medium gap-1 transition-colors"
          >
            Página principal →
          </Button>
          <Button
            onClick={() => Router.push("/contact")}
            className="inline-flex h-10 items-center justify-center px-8 text-sm font-medium gap-1 transition-colors"
          >
            Contáctanos →
          </Button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
