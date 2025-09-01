import React from 'react';

// This component is a single-file, styled landing page for a cooking app.
// It uses Tailwind CSS for a clean and responsive design.
const About = () => {
  return (
    // Main container with a vibrant gradient background.
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100 p-4">
      
      {/* The central card container for the app's content. */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl max-w-xl w-full transform transition-all duration-500 hover:scale-[1.02]">
        
        {/* Main title for the cooking app. */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-6 leading-tight">
          Your Culinary Journey Awaits
        </h1>

        {/* A placeholder image to visually represent the app's purpose. */}
        <div className="flex justify-center mb-6">
          <img 
            src="https://placehold.co/600x400/FFF8E1/E65100?text=Cooking+App" 
            alt="A delicious meal" 
            className="rounded-xl shadow-lg w-full h-auto object-cover" 
          />
        </div>

        {/* Descriptive paragraph about the app's features. */}
        <p className="text-gray-600 text-center mb-8 text-lg">
          Discover thousands of delicious recipes from around the world. Whether you're a beginner or a seasoned chef, our app makes cooking fun, easy, and inspiring.
        </p>
        
        {/* A sub-heading for the value proposition. */}
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Cook, Share, and Enjoy
        </h2>
        
        {/* Content paragraph detailing the app's benefits. */}
        <p className="text-gray-500 text-center mb-10 leading-relaxed italic">
          Explore step-by-step instructions, save your favorite recipes, and share your own creations with a vibrant community of food lovers. Your next great meal is just a tap away.
        </p>
        
        {/* Call-to-action button with a warm color palette. */}
        <div className="flex justify-center">
          <button className="bg-orange-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300">
            Explore Recipes
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default About;
