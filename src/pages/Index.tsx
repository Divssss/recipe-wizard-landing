
import Hero from "@/components/Hero";
import WorkflowSteps from "@/components/WorkflowSteps";
import RecipeExamples from "@/components/RecipeExamples";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

const Index = () => {
  return (
    <div className="min-h-screen w-full font-sans bg-brand-neutral">
      <Hero />
      <WorkflowSteps />
      <RecipeExamples />
      <Testimonials />
      <Faq />
      <FinalCta />
      <footer className="text-center text-gray-400 py-8">
        &copy; {new Date().getFullYear()} SmartChef – Lovable demo. Not affiliated with any food brand.
      </footer>
    </div>
  );
};

export default Index;
