// Contact Page Component
import support from "./Support.module.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className={`landing-page flex flex-col items-center text-center space-y-20 ${support.customInput}`}>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Button variant="outline" type="submit" style={{ textAlign: "right" }}>
          AI
          <div className={`flex flex-row ${support.logo}`}>
            R <div className={support.red}>Max</div>
          </div>
        </Button>
        <Input
          style={{ width: "120vw" }}
          type="email"
          placeholder="Ask Q! e.g Tell me about key Features."
        />
      </div>
      <div className="text-6xl" style={{ textAlign: "left", width: "80%" }}>
        Get in touch with us.
        <br />
        We&apos;re here to assist you.
      </div>
      <form action="" className="flex flex-col space-y-5" style={{ width: "80%" }}>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 text-left">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="text">Business Name*</Label>
            <Input
              type="text"
              id="text"
              placeholder="Search for your business listing 🔎"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="text">Your Name*</Label>
            <Input type="text" id="text" placeholder="Enter your name" />
          </div>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 text-left">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="number">Phone number*</Label>
            <Input
              type="phone"
              id="phone"
              placeholder="Enter phone number"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email Address*</Label>
            <Input type="email" id="email" placeholder="e.g: xyz@gmail.com" />
          </div>
        </div>
        <div className="grid w-full gap-1.5">
          <Label className="text-left" htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
        <button className={`place-self-start ${support.submitButton}`}>Leave us a Message →</button>
      </form>
      <div className={`sm:flex sm:flex-row text-left sm:justify-between sm:space-x-7 space-y-7 sm:p-20 sm:pl-40 sm:pr-40`} style={{width: '100%', backgroundColor: '#f0f0f0'}}>
        <div>
          Contact Info
          <div className="sm:text-6xl text-xl">
            We are always <br />
            happy to assist you
          </div>
        </div>
        <div>
          Email Address
          <br />
          Support@RMax.com
          <br />
          Assistance hours: <br />
          Monday - Friday 6 am to 8 pm <br />
          EST
        </div>
        <div>
          Contact Number <br />
          +91-8657491236 <br />
          Assistance hours: <br />
          Monday - Friday 6 am to 8 pm <br />
          EST
        </div>
      </div>
    </div>
  );
}
