"use client";
import Link from "next/link";
import landing from "./style.module.css";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { VscCheck, VscClose, VscSearch } from "react-icons/vsc";
import { SiApple } from "react-icons/si";
import { BsGooglePlay } from "react-icons/bs";
import { Input } from "@/components/ui/input";
import Questions from "@/component/questions/question";
import { GoPerson } from "react-icons/go";
import { LuAirplay } from "react-icons/lu";
import { IoArchiveOutline } from "react-icons/io5";
import { SlBriefcase, SlCalender } from "react-icons/sl";
import { PiSparkleThin } from "react-icons/pi";
import { CarouselSize } from "@/component/carousel/carousel";
import Image from "next/image";

import computer from "../../public/image4.png";
import ads from "../../public/image5.png";
import { MdArrowForwardIos } from "react-icons/md";
import { GiSparkles } from "react-icons/gi";
import apple from "../../public/apple.svg"
import google from "../../public/playStore.svg"

export default function Landing() {
  return (
    <div className="font-thin">
      <button className={landing.floatingButton}>
        <PiSparkleThin />
      </button>
      <div className="landing-page flex flex-col items-center text-center space-y-20">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Button
            variant="outline"
            type="submit"
            style={{ textAlign: "right" }}
          >
            AI
            <div className={`flex flex-row ${landing.logo}`}>
              R <div className={landing.red}>Max</div>
            </div>
          </Button>
          <Input
            style={{ width: "120vw" }}
            type="email"
            placeholder="Ask Q! e.g Tell me about key Features."
          />
        </div>
        <div>
          <div className="text-6xl font-medium">
            Maximize Your Impact
            <br />
            <span style={{ color: "rgb(227, 92, 65)" }}>
              Business with &nbsp;
            </span>
            R<span style={{ color: "rgb(148, 35, 27)" }}>MAX</span>
          </div>
          <br />
          Enhance your business with Rmax&apos;s all-in-one
          platform—streamlining client
          <br />
          engagement, automating workflows, and fueling growth.
        </div>
        <div className="flex" style={{ gap: "2vw" }}>
          <button className={`${landing.orangeButton}`}>Get Started →</button>
          <button
            className={`${landing.fakeButton}`}
            style={{ boxShadow: "1px 1px 2px" }}
          >
            Book A Demo
          </button>
        </div>
        <div
          className="flex flex-row justify-between"
          style={{ width: "60%", fontSize: "large" }}
        >
          <div className={`${landing.fakeButton}`}>Seemless Onboarding</div>
          <div className={`${landing.fakeButton}`}>Client Engaementent</div>
          <div className={`${landing.fakeButton}`}>Generate Report</div>
          <div className={`${landing.fakeButton}`}>Revenue Growth</div>
        </div>
        <div>
          <div className="text-6xl font-medium">
            Onboard business in 3 simple steps
          </div>
          <div className="text-s mt-2 text-slate-400">
            Quick assisted onboarding with 30day free trial. No credit card
            needed.
          </div>
        </div>
        <div className="flex flex-row place-content-center space-x-11">
          <div className="flex flex-col text-wrap" style={{ width: "20%" }}>
            <div className={`text-7xl place-self-center ${landing.icon}`}>
              <div className={landing.iconIn}>
                <GoPerson />
              </div>
            </div>
            <div className="text-xl font-medium m-5">
              Claim your preset profile
            </div>
            Unlock tailored service and seamlessly elevate your experience by
            claiming your preset profile today.
          </div>
          <div className="flex flex-col text-wrap" style={{ width: "20%" }}>
            <div className={`text-7xl place-self-center ${landing.icon}`}>
              <div className={landing.iconIn}>
                <IoArchiveOutline />
              </div>
            </div>
            <div className="text-xl font-medium m-5">Add services</div>
            Make use of multiple scheduling, pricing options to add services.
            Choose from pre-created scheduling templates.
          </div>
          <div className="flex flex-col text-wrap" style={{ width: "20%" }}>
            <div className={`text-7xl place-self-center ${landing.icon}`}>
              <div className={landing.iconIn}>
                <LuAirplay />
              </div>
            </div>
            <div className="text-xl font-medium m-5">Built Website</div>
            Build your online storefront your way, seamlessly integrating all
            services for a cohesive and efficient Client experience.
          </div>
        </div>
        <div
          className="flex flex-col"
          style={{ alignItems: "center", marginTop: "20vh" }}
        >
          <div className="text-6xl mb-6 font-medium">Why Rmax?</div>
          <div style={{ color: "grey", width: "70%" }}>
            Rmax is designed to simplify and transform the way service
            businesses operate. From onboarding, scheduling and billing to
            client management, payments and growth, Rmax integrates everything
            in one easy-to-use platform connecting all the stake holders.
          </div>
        </div>
        <div className="grid grid-rows-9 gap-3 grid-cols-3 grid-flow-col size-2/4 w-2/3 h-3/3">
          <div className={`row-span-3 space-y-7 ${landing.boxBorder}`}>
            <div
              className={`text-4xl flex place-content-center mt-7 ${landing.colorPricingName}`}
            >
              <SlCalender />
            </div>
            <div
              className={`flex flex-col space-y-3 place-items-center ${landing.boxText}`}
            >
              <div className="font-medium mb-3">Scheduling</div>
              Manage appointments, classes, and events, workshops with...
              <br />
              <button className={`flex flex-row ${landing.link}`}>
                View details <MdArrowForwardIos />
              </button>
            </div>
          </div>
          <div
            className={`row-span-5 space-y-7 place-items-center ${landing.boxBorder}`}
          >
            <Image
              priority
              src={computer}
              height={500}
              width={500}
              className={landing.image}
              alt="Jorden"
            />
            <div
              className={`row-span-2 flex flex-col space-y-3 place-items-center ${landing.boxText}`}
            >
              <div className="font-medium mb-3">
              Billing & Payments

              </div>
              <br />
              Streamline invoicing and payments with automated workflows,
              reducing ...
              <br />
              <button className={`flex flex-row ${landing.link}`}>
                View details <MdArrowForwardIos />
              </button>
            </div>
          </div>
          <div className={`space-y-7 row-span-2 ${landing.boxBorder}`}>
            <div
              className={`flex flex-col place-items-center space-y-2 ${landing.boxText}`}
            >
              <div className="font-medium mb-7 mt-6">
              Client Management & CRM

              </div>
              Keep track of customer data, preferences, and interactions to...
              <br />
              <br />
              <button className={`flex flex-row ${landing.link}`}>
                View details <MdArrowForwardIos />
              </button>
            </div>
          </div>
          <div className={`space-y-7 row-span-4 ${landing.boxBorder}`}>
            <div
              className={`text-4xl flex place-content-center mt-20 ${landing.colorPricingName}`}
            >
              <SlBriefcase />
            </div>
            <div
              className={`flex flex-col place-items-center space-y-4 ${landing.boxText}`}
            >
              <div className="font-medium mb-5">Marketing & Engagement Tools</div>
              Boost client retention and grow your business with integrated...
              <br />
              <button className={`flex flex-row ${landing.link}`}>
                View details <MdArrowForwardIos />
              </button>
            </div>
          </div>
          <div className={`space-y-7 row-span-2 ${landing.boxBorder}`}>
            <div
              className={`flex flex-col place-items-center space-y-4 ${landing.boxText}`}
            >
              <div className="font-medium mt-9 mb-7">Multi-Location Management</div>
              Manage multiple locations with ease, assigning roles and
              permissions...
              <br />
              <button className={`flex flex-row ${landing.link}`}>
                View details <MdArrowForwardIos />
              </button>
            </div>
          </div>
          <div
            className={`flex flex-col row-span-3 space-y-7 place-items-center ${landing.boxBorder}`}
          >
            <div
              className={`text-6xl flex place-content-center mt-7 ${landing.colorPricingName}`}
            >
              <GiSparkles />
            </div>
            <div
              className={`flex flex-col space-y-3 place-items-center ${landing.boxText}`}
            >
              <div className="font-medium mb-7">AI Powered Insights</div>
              Know exactly what is happening in business and get actionable...
              <button className={`flex flex-row ${landing.link}`}>
                View details <MdArrowForwardIos />
              </button>
            </div>
          </div>
          <div className={`row-span-5 space-y-7 m-2 ${landing.boxBorder}`}>
            <div
              className={`flex flex-col place-items-center mt-7 space-y-4 ${landing.boxText}`}
            >
              <div className="font-medium mb-5">Custom Branded website</div>
              Qest&apos;s Custom Branded Website Builder allows you to create a
              fully personalized...
              <br />
              <button className={`flex flex-row ${landing.link}`}>
                View details <MdArrowForwardIos />
              </button>
            </div>
            <Image
              priority
              src={ads}
              height={500}
              width={500}
              className={landing.image}
              alt="Jorden"
            />
          </div>
        </div>
        <div style={{ marginTop: "20vh" }}>
          <div className="text-6xl font-medium">
            Empowering Service <br /> Providers Across Industries
          </div>
          <br />
          Whether you&apos;re in sports, education, wellness, household
          services, or niche markets, our technology <br /> simplifies your
          business operations, making it easier for you to focus on what you do
          best.
        </div>
        <div>
          <CarouselSize />
        </div>
        <div style={{ alignItems: "center" }}>
          <div className="text-6xl font-medium">
            Choose Plan <br /> That&apos;s Right For You
          </div>
          <br />
          Simple and transparent pricing. Start for free, upgrade when you love
          it. <br />
          <div className={landing.red}>30 day free trial in a button</div>
          <div className="mt-10">
            Running a <strong>Growth Business</strong> or{" "}
            <strong>Enterprise</strong>? Let&apos;s connect - &nbsp;
            <button className={landing.orangeButton}>Talk to Sales</button>
          </div>
          <div
            style={{ gap: "1vw", alignItems: "center" }}
            className="flex flex-row place-content-center mt-10"
          >
            Monthly
            <Switch />
            Yearly
            <div className={landing.orangeButton}>Save 25%</div>
          </div>
        </div>
        <div className="flex flex-row" style={{ gap: "2vw" }}>
          <div className={landing.boxPricing}>
            <div className={landing.colorPricingName}>Starter</div>
            <br /> <span className="text-5xl font-bold">$17</span> / month
            <br /> billed monthly
            <br />
            <div className="flex flex-row mt-10 place-items-center">
              <VscCheck style={{color: 'green'}} className="text-xl" /> &nbsp; Commercial License
            </div>
            <br />
            <div className="flex flex-row place-items-center">
              <VscCheck style={{color: 'green'}} className="text-xl" /> &nbsp; 100+ HTML UI Elements
            </div>
            <br />
            <div className="flex flex-row place-items-center">
              <VscCheck style={{color: 'green'}} className="text-xl" /> &nbsp; Unlimited Domain Support
            </div>
            <br />
            <div
              className="flex flex-row place-items-center"
              style={{ color: "rgba(128, 128, 128, 0.511)" }}
            >
              <VscClose className="text-xl" /> &nbsp; 6 Month Premium Support
            </div>
            <br />
            <div
              className="flex flex-row place-items-center"
              style={{ color: "rgba(128, 128, 128, 0.511)" }}
            >
              <VscClose className="text-xl" /> &nbsp; Life Time Updates
            </div>
            <div className="felx flex-col place-items-center mt-7">
              <button className={` font-medium ${landing.orangeButtonLight}`}>Get Started →</button>
              <div className="font-thin text-xs">
                No credit card required
              </div>
            </div>
          </div>
          <div className={landing.boxPricing}>
            <div className={landing.colorPricingName}>Premium</div>
            <br /><span className="text-5xl font-bold">$88</span>  / month
            <br /> billed monthly
            <div className="flex flex-row mt-10 place-items-center">
              <VscCheck style={{color: 'green'}} className="text-xl" /> &nbsp; Commercial License
            </div>
            <br />
            <div className="flex flex-row place-items-center">
              <VscCheck style={{color: 'green'}} className="text-xl" /> &nbsp; 100+ HTML UI Elements
            </div>
            <br />
            <div className="flex flex-row place-items-center">
              <VscCheck style={{color: 'green'}} className="text-xl" /> &nbsp; Unlimited Domain Support
            </div>
            <br />
            <div className="flex flex-row place-items-center">
              <VscCheck style={{color: 'green'}} className="text-xl" /> &nbsp; 6 Month Premium Support
            </div>
            <br />
            <div className="flex flex-row place-items-center">
              <VscCheck style={{color: 'green'}} className="text-xl" /> &nbsp; Life Time Updates
            </div>
            <div className="felx flex-col place-items-center mt-7">
              <button className={` font-medium ${landing.orangeButtonLight}`}>Get Started →</button>
              <div className="font-thin text-xs">
                No credit card required
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link href={""} className={landing.link}>Explore In-Depth Difference</Link>
        </div>
        <div>
          <div className="text-6xl mb-3 font-medium">Manage Your Business On the Go</div>
          With free Business Mobile App, you can manage your entire service
          business from <br />
          anywhere. Stay connected and stay in control, no matter where your day
          takes you.
        </div>
        <div className="flex flex-row gap-5 text-3xl font-normal">
          <div
            className={`flex flex-row mr-2 p-4 gap-2 ${landing.boxBorder}`}
            style={{ alignItems: "center" }}
          >
            <SiApple /> App store
          </div>
          <div
            className={`flex flex-row p-4 gap-2 ${landing.boxBorder}`}
            style={{ alignItems: "center" }}
          >
            <Image
                      priority
                      src={google}
                      width={20}
                      height={20}
                      alt="google"
                      className={landing.icons}
                  /> Google Play
          </div>
        </div>
      </div>
      <Questions />
    </div>
  );
}
