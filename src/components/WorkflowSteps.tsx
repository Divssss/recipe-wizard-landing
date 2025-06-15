
import React from 'react';
import { Camera, SquareCheckBig, ChefHat } from 'lucide-react';

const STEPS = [
  {
    title: "Snap or Upload",
    icon: <Camera size={32} className="text-brand" />,
    desc: "Take a photo of your fridge or upload ingredients.",
  },
  {
    title: "Or Pick Ingredients",
    icon: <SquareCheckBig size={32} className="text-brand" />,
    desc: "Select ingredients you have using smart checkboxes.",
  },
  {
    title: "Get AI Recipes",
    icon: <ChefHat size={32} className="text-brand" />,
    desc: "See tasty recipes based on what’s available.",
  },
];

const WorkflowSteps = () => (
  <section className="py-10 md:py-20 container">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 tracking-tight">
      How SmartChef Works
    </h2>
    <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
      {STEPS.map((step, i) => (
        <div
          key={step.title}
          className="bg-white/90 rounded-2xl shadow-md flex-1 min-w-[220px] flex flex-col items-center gap-4 px-8 py-8 hover:shadow-lg transition hover:scale-105"
        >
          <div className="mb-1">{step.icon}</div>
          <div className="font-semibold text-lg mb-2">{step.title}</div>
          <div className="text-gray-500 text-base text-center">{step.desc}</div>
          {i < STEPS.length - 1 && (
            <div className="hidden md:block absolute right-[-24px] top-1/2 -translate-y-1/2 text-brand text-3xl select-none" aria-hidden>
              →
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default WorkflowSteps;
