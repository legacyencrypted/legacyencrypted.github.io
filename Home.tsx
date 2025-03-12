import { useRef } from "react";
import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";
import HowItWorksStep from "@/components/HowItWorksStep";
import FaqItem from "@/components/FaqItem";
import PhilippinesBackground from "@/components/PhilippinesBackground";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { features, howItWorksSteps, faqItems } from "@/lib/types";

const Home = () => {
  const waitlistRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Philippines themed background with flag colors and map */}
      <PhilippinesBackground />
      
      <Navbar 
        onFeatureClick={() => scrollToSection(featuresRef)} 
        onHowItWorksClick={() => scrollToSection(howItWorksRef)}
        onFaqClick={() => scrollToSection(faqRef)}
        onWaitlistClick={() => scrollToSection(waitlistRef)}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100" ref={waitlistRef}>
        {/* Background decoration */}
        <div className="hidden lg:block lg:absolute lg:inset-0">
          <svg className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="pattern-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-primary/20" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#pattern-1)" />
          </svg>
        </div>
        
        {/* Animated decoration */}
        <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6 animate-fadeIn">
              Premium Wholesale Supplier
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-dark tracking-tight mb-6">
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 inline-block animate-slideUp animation-delay-100">Manila Smokez</span>
              <span className="block mt-1 animate-slideUp animation-delay-300">Premium Smoke Shop Vendor</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fadeIn animation-delay-500">
              Experience premium smoke accessories. We supply the finest products to smoke shops and events in Florida. Join our waitlist to be the first to know when we launch.
            </p>
            
            <WaitlistForm />

            {/* Social proof */}
            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  MS
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                  JK
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
                  RT
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold">
                  +
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-medium text-gray-500">Joined by <span className="font-bold text-primary">350+</span> shop owners</p>
                <div className="flex mt-1 items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-gray-500 text-xs">5.0 rating</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="w-full bg-[#333B46] h-80 flex items-center justify-center overflow-hidden relative">
                  {/* Space gray background with smoke effect */}
                  <div className="absolute inset-0 opacity-20" 
                    style={{
                      backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  ></div>
                  
                  {/* Smoke icon */}
                  <svg className="w-40 h-40 z-20 text-white opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 19H5a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v3M16 3v4M14 5h4"></path>
                    <path d="M5 10v4M9 10v4M13 10v4M17 10v4"></path>
                    <path d="M8 18c0 2.2 1.8 4 4 4s4-1.8 4-4"></path>
                    <circle cx="12" cy="18" r="1"></circle>
                    <path d="M10 18c0-1.1.9-2 2-2s2 .9 2 2"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold text-dark">Manila Smokez Catalog</div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Preview</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-3">
              Our Offerings
            </div>
            <h2 className="text-3xl font-extrabold text-dark sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Premium Products for Smoke Shops & Events
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Manila Smokez supplies the highest quality products to elevate your business. Here's what we offer:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                iconBgColor={feature.iconBgColor}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50" ref={howItWorksRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-3">
              Simple Process
            </div>
            <h2 className="text-3xl font-extrabold text-dark sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              How Manila Smokez Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our streamlined wholesale process makes partnering with us incredibly simple.
            </p>
          </div>

          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Steps */}
            <div className="space-y-12 lg:space-y-0 relative">
              {howItWorksSteps.map((step, index) => (
                <HowItWorksStep 
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  bulletPoints={step.bulletPoints}
                  icon={step.icon}
                  color={step.color}
                  isEven={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white" ref={faqRef}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-3">
              Common Questions
            </div>
            <h2 className="text-3xl font-extrabold text-dark sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Find answers to common questions about Manila Smokez wholesale services.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <FaqItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-purple-600 opacity-90"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-12 bg-white opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white opacity-5"></div>
        <div 
          className="absolute right-0 top-0 h-full w-1/3 opacity-10"
          style={{
            background: "radial-gradient(circle at right, white, transparent 70%)"
          }}
        ></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                filter: 'blur(20px)',
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-6">
            Limited Time Opportunity
          </div>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6 drop-shadow-md">
            Ready to Elevate Your Smoke Shop Business?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join our wholesale network and gain exclusive access to premium products from Manila Smokez. Be among the first to offer unique high-quality designs to your Florida customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              onClick={() => scrollToSection(waitlistRef)}
              variant="secondary"
              className="bg-white text-primary font-semibold py-3 px-8 rounded-md shadow-lg hover:shadow-xl hover:bg-opacity-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-150 ease-in-out transform hover:-translate-y-0.5"
            >
              Join the Waitlist
            </Button>
            <Button 
              onClick={() => scrollToSection(featuresRef)}
              variant="outline"
              className="border-white text-white font-medium py-3 px-8 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              View Our Products
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <span className="text-2xl font-bold">Manila Smokez</span>
              <p className="mt-2 text-gray-400 max-w-md">
                Premium wholesale supplier of smoking accessories with Southeast Asian-inspired designs. Join our waitlist for early access to our catalog.
              </p>
              <WaitlistForm isFooter={true} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><Button variant="link" onClick={() => scrollToSection(featuresRef)} className="text-base text-gray-300 hover:text-white p-0">Features</Button></li>
                <li><Button variant="link" onClick={() => scrollToSection(howItWorksRef)} className="text-base text-gray-300 hover:text-white p-0">How It Works</Button></li>
                <li><Button variant="link" onClick={() => scrollToSection(faqRef)} className="text-base text-gray-300 hover:text-white p-0">FAQ</Button></li>
                <li><Button variant="link" className="text-base text-gray-300 hover:text-white p-0">Pricing</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><Button variant="link" className="text-base text-gray-300 hover:text-white p-0">About</Button></li>
                <li><Button variant="link" className="text-base text-gray-300 hover:text-white p-0">Blog</Button></li>
                <li><Button variant="link" className="text-base text-gray-300 hover:text-white p-0">Jobs</Button></li>
                <li><Button variant="link" className="text-base text-gray-300 hover:text-white p-0">Contact</Button></li>
              </ul>
            </div>
          </div>
          <Separator className="mt-12 border-gray-700" />
          <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">&copy; 2025 Manila Smokez. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
