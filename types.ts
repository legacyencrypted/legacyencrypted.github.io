import { ReactNode } from "react";

// Define iconTypes as a string for now, we'll render them as components in the UI
// This prevents JSX parsing issues in this TS file
export type IconType = string;

// Feature Section
export interface Feature {
  icon: IconType;
  iconBgColor: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "Flame",
    iconBgColor: "bg-primary",
    title: "Premium Glassware",
    description: "Discover our collection of high-quality, handcrafted glassware featuring designs inspired by Southeast Asian artistry."
  },
  {
    icon: "PalmtreeCoco",
    iconBgColor: "bg-secondary",
    title: "Artisan Pipes & Tools",
    description: "Exquisitely carved pipes and accessories made from sustainable materials by master craftsmen from Manila."
  },
  {
    icon: "Package",
    iconBgColor: "bg-accent",
    title: "Customizable Products",
    description: "Offer your customers personalized smoking accessories with custom designs that showcase your brand identity."
  },
  {
    icon: "Store",
    iconBgColor: "bg-primary",
    title: "Smoke Shop Equipment",
    description: "Full-service solutions for smoke shop owners, including display cases, storage solutions, and point-of-sale systems."
  },
  {
    icon: "CalendarDays",
    iconBgColor: "bg-secondary",
    title: "Event Supplies",
    description: "Everything you need for smoke-friendly events and pop-ups, including branded tents, displays, and promotional materials."
  },
  {
    icon: "HeadSet",
    iconBgColor: "bg-accent",
    title: "24/7 Support",
    description: "Our dedicated support team is always available to help you resolve any issues and ensure your complete satisfaction."
  }
];

// How It Works Section
export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
  bulletPoints: string[];
  icon: IconType;
  color: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: 1,
    title: "Join Our Wholesale Network",
    description: "Register for a Manila Smokez wholesale account to access our premium products at competitive prices.",
    bulletPoints: [
      "Simple verification process",
      "Business credentials review",
      "Exclusive wholesale pricing"
    ],
    icon: "Building",
    color: "bg-primary text-primary"
  },
  {
    number: 2,
    title: "Browse & Order Products",
    description: "Explore our extensive catalog of high-quality smoke accessories and place your order through our easy-to-use platform.",
    bulletPoints: [
      "Comprehensive product catalog",
      "Bulk order discounts",
      "Customization options"
    ],
    icon: "ShoppingCart",
    color: "bg-secondary text-secondary"
  },
  {
    number: 3,
    title: "Receive & Sell",
    description: "We handle shipping and logistics to ensure your products arrive safely. Start selling and watch your profits grow.",
    bulletPoints: [
      "Prompt delivery timeframes",
      "Secure packaging solutions",
      "Ongoing support and reordering"
    ],
    icon: "PackageCheck",
    color: "bg-accent text-accent"
  }
];

// FAQ Section
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What is Manila Smokez?",
    answer: "Manila Smokez is a premium wholesale supplier of high-quality smoking accessories and equipment for smoke shops and event organizers. We offer an extensive range of products crafted with Southeast Asian influences and designs."
  },
  {
    question: "What are your minimum order requirements?",
    answer: "Our minimum order requirements vary by product category. We offer flexible wholesale options to accommodate businesses of all sizes, from established smoke shops to startups and event coordinators. Specific details will be provided upon account approval."
  },
  {
    question: "When will Manila Smokez launch?",
    answer: "We're currently in the final stages of establishing our supply chain and will launch operations soon. Join our waitlist to receive updates on our progress and be among the first to gain access to our wholesale platform."
  },
  {
    question: "Do you offer custom branding options?",
    answer: "Yes, we provide custom branding and white-label options for many of our products. This allows smoke shops to create unique offerings with their own logos and designs. Custom orders typically require longer lead times and higher minimum quantities."
  },
  {
    question: "What regions do you serve?",
    answer: "Initially, we'll be serving smoke shops across North America with plans to expand to Europe and Australia. International shipping options are available for qualified wholesale partners with specific requirements."
  }
];
