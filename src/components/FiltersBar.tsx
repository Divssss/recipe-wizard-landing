
import React from 'react';

const FiltersBar = () => (
  <div className="flex flex-wrap gap-3 items-center border p-3 rounded-xl bg-white/80 mb-8 shadow-sm">
    <div className="flex gap-2">
      <span className="font-semibold text-md">Filter:</span>
      <button className="bg-brand-light text-brand font-medium px-3 py-1 rounded-full hover:bg-brand shadow transition">Veg</button>
      <button className="bg-white border text-gray-700 px-3 py-1 rounded-full hover:bg-brand-light">Under 30 mins</button>
      <button className="bg-white border text-gray-700 px-3 py-1 rounded-full hover:bg-brand-light">No-bake</button>
      <button className="bg-white border text-gray-700 px-3 py-1 rounded-full hover:bg-brand-light">Gluten-free</button>
      <button className="bg-white border text-gray-700 px-3 py-1 rounded-full hover:bg-brand-light">Savory</button>
    </div>
    <div className="flex gap-2 ml-auto">
      <span className="font-semibold text-md">Sort by:</span>
      <select className="border rounded-md px-2 py-1 ml-1 bg-white">
        <option>Time</option>
        <option>Calories</option>
        <option>Healthiness</option>
        <option>Protein</option>
      </select>
    </div>
  </div>
);

export default FiltersBar;
