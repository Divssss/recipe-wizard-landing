
import React from 'react';

const testimonials = [
  {
    name: "Mona L.",
    quote: "SmartChef made dinner possible when my fridge felt empty. Love the healthy suggestions!",
  },
  {
    name: "Sanjay P.",
    quote: "Picked ingredients after a gym session, got high-protein recipes in seconds. Brilliant!",
  },
  {
    name: "Carla G.",
    quote: "As a busy parent, I only need 10 minutes to whip up a meal now – stress free.",
  },
];

const Testimonials = () => (
  <section className="py-12 container">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 tracking-tight">What Our Users Say</h2>
    <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
      {testimonials.map(t => (
        <div key={t.name} className="bg-white/80 p-6 rounded-xl shadow-md flex-1">
          <div className="text-lg italic mb-3 text-gray-700">"{t.quote}"</div>
          <div className="font-semibold text-brand text-md">– {t.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
