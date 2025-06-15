
import React from 'react';

type Recipe = {
  image: string;
  title: string;
  time: string;
  calories: string;
  tags: string[];
};

const colorForTag = (tag: string) => {
  switch (tag) {
    case "Veg": return "bg-brand-light text-brand";
    case "Baked": return "bg-brand-accent text-brand-primary";
    case "No-bake": return "bg-brand-neutral text-gray-600";
    case "Gluten-free": return "bg-green-100 text-green-800";
    case "Sweet": return "bg-yellow-100 text-yellow-700";
    case "Savory": return "bg-orange-100 text-orange-700";
    case "Protein Boost": return "bg-blue-100 text-blue-700";
    default: return "bg-gray-100 text-gray-600";
  }
};

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => (
  <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col gap-4 relative min-w-[250px]">
    <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-gray-100 mb-2">
      <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover object-center" />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-lg leading-tight mb-2">{recipe.title}</h3>
      <div className="flex flex-wrap gap-1 mb-1">
        {recipe.tags.map(tag => (
          <span key={tag} className={`px-2 py-1 rounded-full text-xs font-medium ${colorForTag(tag)}`}>{tag}</span>
        ))}
      </div>
      <div className="flex items-center mt-2 gap-3 text-sm text-gray-500">
        <span>⏱ {recipe.time}</span>
        <span>∙</span>
        <span>🔥 {recipe.calories} kcal</span>
      </div>
    </div>
  </div>
);

export default RecipeCard;
