
import React from 'react';

const FinalCta = () => (
  <section className="py-16 px-6 bg-brand-beige rounded-2xl shadow-lg mx-auto container max-w-4xl my-14 flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-brand">Ready to Cook Smarter?</h2>
    <p className="mb-7 text-center text-gray-700 text-xl">
      Get early access so you can save time, reduce waste, and eat better – all with help from SmartChef.
    </p>
    <form className="flex flex-col sm:flex-row gap-3 w-full max-w-lg" onSubmit={e => e.preventDefault()}>
      <input
        type="email"
        className="rounded-lg px-4 py-3 bg-white border border-gray-300 focus:ring-brand focus:border-brand placeholder-gray-400 text-base flex-1 shadow"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="bg-brand text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-emerald-600 hover:scale-105 duration-150 ease-in-out shadow-md"
      >
        Get My Spot
      </button>
    </form>
    <div className="text-sm text-gray-400 mt-3">
      Join fellow home cooks and get notified at launch!
    </div>
  </section>
);

export default FinalCta;
