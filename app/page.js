import CompanyCarousel from "@/components/company-carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, ChevronRight, Layout, Workflow } from "lucide-react";
import faq from "@/data/faq";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import Image from "next/image";

const features = [
  {
    title: "Real-Time Collaboration",
    desc: "Work together with your team seamlessly with live updates and notifications.",
    icon: Layout,
  },
  {
    title: "Customizable Workflows",
    desc: "Create and manage workflows that suit your team's unique project needs.",
    icon: Workflow,
  },
  {
    title: "Comprehensive Reporting",
    desc: "Gain insights into project performance with detailed analytics and reports.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section  */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-sans sm:text-3xl lg:text-4xl font-semibold text-black pb-6 flex flex-col">
          Your Collaborative Workspace for Streamlined Project Management <br />
          <span className="flex items-center mx-auto gap-5 sm:gap-4">
            with{" "}
            {/* <Image
              src={"/file.svg"}
              alt="Syncro"
              width={300}
              height={50}
              className="h-10 sm:h-24 w-auto object-contain"
            /> */}
            <h2 className="text-sky-400 font-serif text-4xl">Syncro</h2>
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Syncro simplifies complex project management by bringing clarity and
          efficiency to every stage of development.
        </p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-4">
            Get Started <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
        <Link href="#features">
          <Button size="lg" variant="destructive" className="mr-4">
            Learn More
          </Button>
        </Link>
      </section>

      <section id="feature" className="bg-slate-50 py-1 px-5">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-12 text-center ">
            Key Features{" "}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 mb-4 text-sky-400" />
                    <h4 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className=" py-20">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-12 text-center ">
            Trusted By Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>

      <section className=" py-15 px-5">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-12 text-center ">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((faqs, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-sans">
                  {faqs.question}{" "}
                </AccordionTrigger>
                <AccordionContent className="text-base font-sans">
                  {faqs.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
