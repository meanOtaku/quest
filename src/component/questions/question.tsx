import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VscSearch } from "react-icons/vsc";

import question from './question.module.css'

export default function Questions() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="flex flex-col items-center text-center space-y-20 mt-20">
      <div>
        <div className="text-6xl font-medium">Frequently Asked Questions</div>
        <br />
        Find answers to common questions about our services and features. <br />
        For more details, contact our support team.
      </div>
      <div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            style={{ width: "120vw" }}
            type="email"
            placeholder="Ask Q! e.g Tell me about key Features."
          />
          <Button className={question.orangeButton} type="submit">
            <VscSearch />
          </Button>
        </div>
      </div>
      <div style={{ width: "60%" }}>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="p-6"
            style={{ textAlign: "left" }}
          >
            <AccordionTrigger>
              <div className="text-xl">What is RMax?</div>
            </AccordionTrigger>
            <AccordionContent>
              <div style={{ color: "grey" }}>
                Qest, is a SaaS platform/ecosystem that lets any small to medium
                service business setup & manage their business quickly & easily.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="p-6"
            style={{ textAlign: "left" }}
          >
            <AccordionTrigger>
              <div className="text-xl">How does it work?</div>
            </AccordionTrigger>
            <AccordionContent>{defaultContent}</AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="p-6"
            style={{ textAlign: "left" }}
          >
            <AccordionTrigger>
              <div className="text-xl">How much does it cost?</div>
            </AccordionTrigger>
            <AccordionContent>{defaultContent}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
