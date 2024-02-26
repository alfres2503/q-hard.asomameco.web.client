import { MemberContext, useMemberProvider } from "@/context/MemberContext";
import React, { useContext, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
import Asomameco from "../../public/images/asking.jpg";
import physical from "../../public/images/physicalAbuse.png";
import emotional from "../../public/images/emotional.png";
import financial from "../../public/images/financialAbuse.png";
import help from "../../public/images/help.jpg";
import Image from "next/image";

const IndexPage = () => {
  const { currentMember } = useMemberProvider() as any;

  useEffect(() => {
    console.log(currentMember);
  }, [currentMember]);

  return (
    <>
      {/* <div className="w-full h-screen bg-fixed bg-no-repeat bg-cover bg-center   object-cover flex items-center">
      <Sidebar />
      <h1>Esto es una página de index, el usuario logeado es:</h1>
      {currentMember ? (
        <div>
          <h2>
            {currentMember.firstName} {currentMember.lastName}
          </h2>
          <p>Email: {currentMember.email}</p>
        </div>
      ) : (
        <h2>Princesa no te has logeado</h2>
      )}
      <img src="https://media.licdn.com/dms/image/D5603AQG36ea_uZU1Qw/profile-displayphoto-shrink_800_800/0/1690389947675?e=2147483647&v=beta&t=csmRee2js5A_Eq0K8B62-BY24p_JqsU0nxKZGFPOtqo" />
//     </div> 
// <div className="bg-gray-50/90">
//       <div className="container grid gap-4 px-20 py-6 text-center md:gap-8 md:px-6 lg:grid-cols-2 xl:gap-10">
//         <div className="flex flex-col justify-center space-y-2">
//           <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Break the Silence</h1>
//           <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//             Domestic violence is never okay. Let's work together to end abuse.
//           </p>
//         </div>
//          <img
//           alt="Hero"
//           className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
//           height="350"
//           src="public/images/asking.png"
//           width="700"
//         /> 
//       </div>
//     </div>
//     <section className="w-full py-12 md:py-24 lg:py-32">
//       <div className="container grid gap-4 px-4 md:gap-8 md:px-6">
//         <div className="grid gap-2 md:gap-4 lg:gap-6">
//           <Link
//             className="flex items-center gap-4 text-base font-medium rounded-md transition-colors hover:bg-gray-50/40 hover:text-gray-900 dark:hover:bg-gray-900/40 dark:hover:text-gray-50"
//             href="#"
//           >
//             <HomeIcon className="w-5 h-5 rounded-lg bg-gray-100 p-1 dark:bg-gray-800" />
//             Understanding Domestic Violence
//           </Link>
//           <Link
//             className="flex items-center gap-4 text-base font-medium rounded-md transition-colors hover:bg-gray-50/40 hover:text-gray-900 dark:hover:bg-gray-900/40 dark:hover:text-gray-50"
//             href="#"
//           >
//             <BabyIcon className="w-5 h-5 rounded-lg bg-gray-100 p-1 dark:bg-gray-800" />
//             Effects on Children
//           </Link>
//           <Link
//             className="flex items-center gap-4 text-base font-medium rounded-md transition-colors hover:bg-gray-50/40 hover:text-gray-900 dark:hover:bg-gray-900/40 dark:hover:text-gray-50"
//             href="#"
//           >
//             <HelpingHandIcon className="w-5 h-5 rounded-lg bg-gray-100 p-1 dark:bg-gray-800" />
//             Seeking Help and Support
//           </Link>
//           <Link
//             className="flex items-center gap-4 text-base font-medium rounded-md transition-colors hover:bg-gray-50/40 hover:text-gray-900 dark:hover:bg-gray-900/40 dark:hover:text-gray-50"
//             href="#"
//           >
//             <LibraryIcon className="w-5 h-5 rounded-lg bg-gray-100 p-1 dark:bg-gray-800" />
//             Legal Resources
//           </Link>
//         </div>
//       </div>
//     </section>
//     <nav aria-label="Top" className="w-full border-t">
//       <div className="container flex items-center justify-center h-12 px-4 text-sm md:px-6">
//         <Link
//           className="flex items-center gap-2 font-medium text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"
//           href="#"
//         >
//           <HomeIcon className="w-4 h-4 rounded-lg bg-gray-100 p-1 dark:bg-gray-800" />
//           Home
//         </Link>
//         <Link className="font-medium text-gray-500 dark:text-gray-400" href="#">
//           About Us
//         </Link>
//         <Link className="font-medium text-gray-500 dark:text-gray-400" href="#">
//           Contact
//         </Link>
//         <Link className="font-medium text-gray-500 dark:text-gray-400" href="#">
//           Get Involved
//         </Link>
//       </div>
//     </nav>
//     <footer className="w-full">
//       <div className="container grid max-w-6xl gap-4 px-4 py-12 text-center md:grid-cols-2 md:gap-8 md:px-6 lg:py-16">
//         <div className="space-y-4">
//           <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">About Us</h2>
//           <p className="text-gray-500 md:text-base/relaxed dark:text-gray-400">
//             We are a non-profit organization dedicated to supporting victims of domestic violence.
//           </p>
//         </div>
//         <div className="space-y-4">
//           <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact Us</h2>
//           <p className="text-gray-500 md:text-base/relaxed dark:text-gray-400">123 Shelter Lane, Cityville, USA</p>
//           <p className="text-gray-500 md:text-base/relaxed dark:text-gray-400">Email: contact@example.com</p>
//         </div>
//       </div>
//       <div className="border-t border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-950">
//         <div className="container flex items-center justify-center h-16 px-4 text-sm md:px-6">
//           <p className="text-gray-500 dark:text-gray-400">© 2023 Example</p>
//           <div className="ml-auto flex items-center gap-4">
//             <Link className="text-gray-500 hover:underline dark:text-gray-400 dark:hover:underline" href="#">
//               Privacy
//             </Link>
//             <Link className="text-gray-500 hover:underline dark:text-gray-400 dark:hover:underline" href="#">
//               Terms
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer> */}

      <section className=" flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-50/90">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Break the Silence
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let's work together to end domestic violence. It starts with
                awareness and understanding.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src={Asomameco}
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Recognize the signs</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Understanding the warning signs of an abusive
                      relationship.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Get help</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Resources for those experiencing domestic violence.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Support survivors</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      How to help those affected by domestic violence.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="flex justify-center items-center py-12 lg:py-40">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3 ">
            <h1 className="text-3xl  font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Break the Silence
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              You are not alone. We're here to help you find safety and support.
            </p>
          </div>
          <div className="flex flex-col gap-2 mx-auto min-[400px]:flex-row justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  px-8 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Get Help
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  px-8 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Donate
            </Link>
          </div>
        </div>
      </div> */}

      <div className="flex justify-center items-center py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              You Deserve to be Safe
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Domestic violence is a pattern of abusive behavior in a
              relationship that is used by one partner to gain or maintain power
              and control over another partner.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-6 md:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Types of Abuse
            </h2>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Domestic violence can take many forms, including physical,
              emotional, and financial abuse.
            </p>
          </div>
          <div className="mx-auto max-w-[900px] grid grid-cols-1 items-start gap-4 md:grid-cols-3 md:items-center md:gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="grid w-16 h-16 rounded-full bg-gray-100 items-center justify-center">
                <Image
                  alt="Icon"
                  height="50"
                  src={physical}
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <h3 className="text-xl font-bold">Physical Abuse</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Physical violence or aggression, including hitting, kicking, and
                other forms of bodily harm.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="grid w-16 h-16 rounded-full bg-gray-100 items-center justify-center">
                <Image
                  alt="Icon"
                  height="32"
                  src={emotional}
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="50"
                />
              </div>
              <h3 className="text-xl font-bold">Emotional Abuse</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Psychological abuse, such as intimidation, gaslighting, and
                verbal attacks designed to undermine the victim's self-esteem.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="grid w-16 h-16 rounded-full bg-gray-100 items-center justify-center">
                <Image
                  alt="Icon"
                  height="32"
                  src={financial}
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="50"
                />
              </div>
              <h3 className="text-xl font-bold">Financial Abuse</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Controlling the victim's access to financial resources, such as
                money, bank accounts, and employment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center items-center py-12 md:py-24 lg:py-32  bg-gray-50/90">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get Help
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              If you or someone you know is experiencing domestic violence, it's
              important to seek help. There are organizations and hotlines that
              can provide support and resources.
            </p>
          </div>
        </div>
      </div>    */}

      <section className=" flex justify-center items-centerpy-12 lg:py-24  bg-gray-50/90">
        <div className="container grid items-start gap-4 px-4 md:px-6 lg:gap-10 lg:grid-cols-2 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-6xl/none">
                Get Help
              </h2>
              <p className="max-w-prose text-gray-500 md:text-xl dark:text-gray-400">
                If you are a victim of domestic violence, it is important to
                seek help as soon as possible. There are many organizations...
              </p>
            </div>
          </div>
          <div className="flex items-center space-y-4 lg:order-last">
            <Image
              alt="Hero"
              className="aspect-[2/1] rounded-lg object-cover"
              height="300"
              src={help}
              width="600"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
