import React from 'react';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-14 md:py-24 bg-brand-neutral rounded-xl shadow-md min-h-[450px] flex items-center">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex-1 max-w-xl">
          <div className="flex items-center mb-2">
            <span className="inline-block bg-brand-light text-brand font-semibold px-3 py-1 rounded-full text-xs tracking-wider shadow">AI-Powered</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-4 leading-tight drop-shadow-sm">
            SmartChef
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-6">
            Instantly find delicious recipes with the ingredients you already have. Let AI turn what’s in your fridge into your next meal!
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="rounded-lg px-4 py-3 bg-white border border-gray-300 focus:ring-brand focus:border-brand placeholder-gray-400 text-base flex-1 shadow"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-brand text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-emerald-600 hover:scale-105 duration-150 ease-in-out shadow-md"
            >
              Get Early Access
            </button>
          </form>
          <Button
            className="mt-4 w-full sm:w-auto bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition"
            onClick={() => navigate("/generate")}
            type="button"
          >
            Try SmartChef
          </Button>
          <div className="text-sm text-gray-400 mt-3">
            No spam, ever. Only SmartChef updates!
          </div>
        </div>
        <div className="w-full max-w-md flex-1 flex items-center justify-center">
          <div className="relative bg-white/70 rounded-2xl shadow-lg overflow-hidden w-full aspect-[5/4] border border-brand">
            <img
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80"
              alt="Fridge ingredients"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-white/75 px-4 py-2 rounded-lg text-brand shadow text-sm font-medium">
              Upload your fridge or pantry pic
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
