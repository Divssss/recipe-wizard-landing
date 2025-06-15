
import React, { useState } from 'react';

const FAQS = [
  {
    q: "Is SmartChef really free?",
    a: "Yes – early access is free, and you’ll always have access to basic features.",
  },
  {
    q: "How accurate are the recipes?",
    a: "SmartChef's AI suggests recipes tailored to what you have, based on large recipe databases and nutrition data.",
  },
  {
    q: "Can I upload any photo?",
    a: "You can upload a clear photo of your fridge/pantry or type/select your ingredients for best results.",
  },
  {
    q: "Do I need to register?",
    a: "No signup is required to generate recipe suggestions! Email capture is just for updates.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-14 container">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">FAQ</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {FAQS.map((item, idx) => (
          <div
            key={item.q}
            className="bg-white/90 rounded-xl shadow p-5 transition cursor-pointer"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg">{item.q}</span>
              <span className={`transition-transform ml-2 ${open === idx ? "rotate-90 text-brand" : "rotate-0"} text-lg font-bold`}>›</span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-200 text-gray-700 ${open === idx ? "max-h-[200px] mt-3 opacity-100" : "max-h-0 opacity-0"}`}
              style={{ willChange: 'max-height' }}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Faq;
