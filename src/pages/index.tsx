import { useMemberProvider } from "@/context/MemberContext";
import React, { useContext, useEffect } from "react";
import Image from "next/image";

const IndexPage = () => {
  const { currentMember } = useMemberProvider() as any;

  useEffect(() => {
    console.log(currentMember);
  }, [currentMember]);

  return (
    <>
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
              src="/images/asking.jpg"
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
                  src="/images/physicalAbuse.png"
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
                  src="/images/emotional.png"
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
                  src="/images/financialAbuse.png"
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
              src="/images/help.jpg"
              width="600"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
