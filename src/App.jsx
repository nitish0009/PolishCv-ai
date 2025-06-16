import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ResumeForm from "./pages/ResumeForm";
import ResumeResult from "./pages/ResumeResult";
import About from "./pages/About";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow pt-24 px-4 sm:px-8 md:px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<ResumeForm />} />
          <Route path="/result" element={<ResumeResult />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
