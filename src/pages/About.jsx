import React from "react";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 mb-6 text-indigo-700">
          <Sparkles size={28} />
          <h1 className="text-4xl font-bold">About This Project</h1>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>PolishCV AI</strong> is a free and open-source tool designed to help
          users create professional, polished resumes in seconds. It leverages the power of a
          <span className="font-semibold text-indigo-600"> React + TailwindCSS</span> frontend,
          connected to a lightweight
          <span className="font-semibold text-indigo-600"> Python Flask</span> backend.
        </p>

        <p className="mt-6 text-gray-600 italic">
          Built with ❤️ by Nitish Sharma using free, open-source tools — no OpenAI APIs, no hidden costs.
        </p>
      </div>
    </section>
  );
};

export default About;
