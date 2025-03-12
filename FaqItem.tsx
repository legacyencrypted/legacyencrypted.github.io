import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item" className="border border-gray-200 rounded-lg overflow-hidden">
        <AccordionTrigger 
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 focus:outline-none"
        >
          <span className="text-lg font-medium text-dark">{question}</span>
          <svg 
            className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5">
          <p className="text-gray-600">{answer}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqItem;
