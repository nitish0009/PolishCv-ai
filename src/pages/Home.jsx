import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-36 pb-24 min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      <div className="animate-fade-in-up">
        {/* Icon and Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 flex items-center justify-center gap-3">
          <Sparkles className="text-indigo-500 animate-pulse" size={36} />
          <span className="drop-shadow-sm">PolishCV AI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto mb-8">
          Create a polished, professional resume in seconds using our smart AI-powered generator.
        </p>

        {/* Call to Action */}
        <Link
          to="/generate"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl text-base md:text-lg font-semibold shadow-md transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Home;
