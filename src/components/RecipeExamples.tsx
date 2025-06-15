
import React from 'react';
import FiltersBar from './FiltersBar';
import RecipeCard from './RecipeCard';

const demoRecipes = [
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    title: "Avocado Toast Deluxe",
    time: "7 min",
    calories: "280",
    tags: ["Veg", "Gluten-free", "Savory"],
  },
  {
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
    title: "Quick Egg Bake",
    time: "18 min",
    calories: "410",
    tags: ["Protein Boost", "Baked", "Non-veg"],
  },
  {
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=400&q=80",
    title: "Peanut Butter Overnight Oats",
    time: "5 min + chill",
    calories: "340",
    tags: ["No-bake", "Sweet", "Veg"],
  },
];

const RecipeExamples = () => (
  <section className="py-10 md:py-20 container">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Example Recipes Just for You</h2>
    <div className="max-w-2xl mx-auto text-center mb-4 text-gray-500">
      Personalize with dietary filters, baking prefs, and nutrition sorting.
    </div>
    <FiltersBar />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {demoRecipes.map(recipe => (
        <RecipeCard key={recipe.title} recipe={recipe} />
      ))}
    </div>
  </section>
);

export default RecipeExamples;
