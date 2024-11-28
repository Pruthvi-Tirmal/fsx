import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqList } from "@/constants/faq";
import React from "react";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-4 mt-10 space-y-8 bg-white required-padding">
      <h1 className="text-4xl font-semibold text-center text-gray-800">
        Questions & Answers
      </h1>
      <div className="flex items-center mx-5 sm:mx-10 lg:mx-20 flex-column">
        <Accordion className="w-full" type="single" collapsible>
          {faqList.map((item) => (
            <AccordionItem key={item.id} value={item.question}>
              <AccordionTrigger className="text-base font-semibold sm:text-lg md:text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="sm:text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
