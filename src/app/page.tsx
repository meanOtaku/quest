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
import { SlCalender } from "react-icons/sl";
import { PiSparkleThin } from "react-icons/pi";

export default function Landing() {
  return (
    <div>
      <div>
      <div className={landing.floatingButton}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round"/>
        </svg>
    </div>
      </div>
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
          <div className="text-6xl">
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
          <div className="text-6xl">Onboard business in 3 simple steps</div>
          <div className="text-s mt-2 text-slate-400">
            Quick assisted onboarding with 30day free trial. No credit card
            needed.
          </div>
        </div>
        <div className="flex flex-row place-content-center space-x-11">
          <div className="flex flex-col text-wrap" style={{ width: "20%" }}>
            <div className={`text-7xl place-self-center ${landing.icon}`}>
              {" "}
              <div className={landing.iconIn}>
                <GoPerson />
              </div>{" "}
            </div>
            <div className="text-xl font-bold m-5">
              Claim your preset profile
            </div>
            Unlock tailored service and seamlessly elevate your experience by
            claiming your preset profile today.
          </div>
          <div className="flex flex-col text-wrap" style={{ width: "20%" }}>
            <div className={`text-7xl place-self-center ${landing.icon}`}>
              <div className={landing.iconIn}>
                <IoArchiveOutline />
              </div>{" "}
            </div>
            <div className="text-xl font-bold m-5">Add services</div>
            Make use of multiple scheduling, pricing options to add services.
            Choose from pre-created scheduling templates.
          </div>
          <div className="flex flex-col text-wrap" style={{ width: "20%" }}>
            <div className={`text-7xl place-self-center ${landing.icon}`}>
              <div className={landing.iconIn}>
                <LuAirplay />
              </div>{" "}
            </div>
            <div className="text-xl font-bold m-5">Built Website</div>
            Build your online storefront your way, seamlessly integrating all
            services for a cohesive and efficient Client experience.
          </div>
        </div>
        <div
          className="flex flex-col"
          style={{ alignItems: "center", marginTop: "20vh" }}
        >
          <div className="text-6xl mb-6">Why Rmax?</div>
          <div style={{ color: "grey", width: "70%" }}>
            Rmax is designed to simplify and transform the way service
            businesses operate. From onboarding, scheduling and billing to
            client management, payments and growth, Rmax integrates everything
            in one easy-to-use platform connecting all the stake holders.
          </div>
        </div>
        <div className="flex flex-row size-3/4">
          <div className="grid grid-rows-3">
            <div className={`row-span-1 m-2 ${landing.boxBorder}`}>
              <div
                className={`text-4xl place-content-center ${landing.colorPricingName}`}
              >
                <SlCalender />{" "}
              </div>
              Scheduling
              <br />
              Manage appointments, classes, and events, workshops with... View
              details
            </div>
            <div className={`row-span-2 m-2 ${landing.boxBorder}`}>
              Billing & Payments
              <br />
              Streamline invoicing and payments with automated workflows,
              reducing ... View details
            </div>
          </div>
          <div className="grid grid-rows-3">
            <div className={`m-2 ${landing.boxBorder}`}>
              Client Management & CRM
              <br />
              Keep track of customer data, preferences, and interactions to...
              View details
            </div>
            <div className={`m-2 ${landing.boxBorder}`}>
              Marketing & Engagement Tools
              <br />
              Boost client retention and grow your business with integrated...
              ... View details
            </div>
            <div className={`m-2 ${landing.boxBorder}`}>
              Multi-Location Management
              <br />
              Manage multiple locations with ease, assigning roles and
              permissions... ... View details
            </div>
          </div>
          <div className="grid grid-rows-3">
            <div className={`row-span-1 m-2 ${landing.boxBorder}`}>
              AI Powered Insights
              <br />
              Know exactly what is happening in business and get actionable...
              View details
            </div>
            <div className={`row-span-2 m-2 ${landing.boxBorder}`}>
              Custom Branded website
              <br />
              Qest&apos;s Custom Branded Website Builder allows you to create a
              fully personalized... View details
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20vh" }}>
          <div className="text-6xl">
            Empowering Service <br /> Providers Across Industries
          </div>
          <br />
          Whether you&apos;re in sports, education, wellness, household
          services, or niche markets, our technology <br /> simplifies your
          business operations, making it easier for you to focus on what you do
          best.
        </div>
        <div>{/* <ImageCarousel /> */}</div>
        <div style={{ alignItems: "center" }}>
          <div className="text-6xl">
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
            <br /> $17 / month
            <br /> billed monthly
            <br />
            <div className="flex flex-row mt-10">
              <VscCheck /> Commercial License
            </div>
            <br />
            <div className="flex flex-row">
              <VscCheck /> 100+ HTML UI Elements
            </div>
            <br />
            <div className="flex flex-row">
              <VscCheck /> Unlimited Domain Support
            </div>
            <br />
            <div
              className="flex flex-row"
              style={{ color: "rgba(128, 128, 128, 0.511)" }}
            >
              <VscClose /> 6 Month Premium Support
            </div>
            <br />
            <div
              className="flex flex-row"
              style={{ color: "rgba(128, 128, 128, 0.511)" }}
            >
              <VscClose /> Life Time Updates
            </div>
          </div>
          <div className={landing.boxPricing}>
            <div className={landing.colorPricingName}>Premium</div>
            <br /> $88 / month
            <br /> billed monthly
            <div className="flex flex-row mt-10">
              <VscCheck /> Commercial License
            </div>
            <br />
            <div className="flex flex-row">
              <VscCheck /> 100+ HTML UI Elements
            </div>
            <br />
            <div className="flex flex-row">
              <VscCheck /> Unlimited Domain Support
            </div>
            <br />
            <div className="flex flex-row">
              <VscCheck /> 6 Month Premium Support
            </div>
            <br />
            <div className="flex flex-row">
              <VscCheck /> Life Time Updates
            </div>
          </div>
        </div>
        <div>
          <Link href={""}>Explore In-Depth Difference</Link>
        </div>
        <div>
          <div className="text-6xl mb-3">Manage Your Business On the Go</div>
          With free Business Mobile App, you can manage your entire service
          business from <br />
          anywhere. Stay connected and stay in control, no matter where your day
          takes you.
        </div>
        <div className="flex flex-row">
          <div
            className={`flex flex-row mr-2 ${landing.boxBorder}`}
            style={{ alignItems: "center" }}
          >
            {" "}
            <SiApple /> App store
          </div>
          <div
            className={`flex flex-row ${landing.boxBorder}`}
            style={{ alignItems: "center" }}
          >
            {" "}
            <BsGooglePlay /> Google Play
          </div>
        </div>
      </div>
      <Questions />
    </div>
  );
}
