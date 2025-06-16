import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const jobTitleSuggestions = {
  "Frontend Developer": {
    languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    tools: ["VSCode", "Git", "Figma"],
    frameworksOS: ["React", "Tailwind CSS", "Bootstrap"],
    coursework: ["Web Development", "UI/UX Design"],
  },
  "Backend Developer": {
    languages: ["Python", "Java", "Node.js"],
    tools: ["Postman", "Git", "Docker"],
    frameworksOS: ["Django", "Express.js", "Linux"],
    coursework: ["Database Management", "API Development"],
  },
  "Full Stack Developer": {
    languages: ["JavaScript", "Python", "HTML", "CSS"],
    tools: ["VSCode", "GitHub", "Docker"],
    frameworksOS: ["React", "Node.js", "Express", "Tailwind CSS"],
    coursework: ["Full Stack Development", "Software Engineering"],
  },
};

const ResumeForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTitle: "",
    fullName: "",
    location: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    languages: [],
    developerTools: [],
    frameworksOS: [],
    coursework: [],
    softSkills: [],
    education: [
      { institution: "", board: "", qualification: "", graduated: "", performanceLabel: "", performance: "" },
    ],
    achievements: "",
    projects: "",
  });

  const [suggestions, setSuggestions] = useState({ languages: [], developerTools: [], frameworksOS: [], coursework: [] });

  useEffect(() => {
    if (formData.jobTitle && jobTitleSuggestions[formData.jobTitle]) {
      setSuggestions(jobTitleSuggestions[formData.jobTitle]);
    } else {
      setSuggestions({ languages: [], developerTools: [], frameworksOS: [], coursework: [] });
    }
  }, [formData.jobTitle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "softSkills") {
      const parsed = value
        .split(/[,\n]/)
        .map(skill => skill.trim())
        .filter(Boolean);
      setFormData({ ...formData, softSkills: parsed });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleArrayChange = (name, value) => {
    const newValue = value.trim();
    if (newValue && !formData[name].includes(newValue)) {
      setFormData({ ...formData, [name]: [...formData[name], newValue] });
    }
  };

  const handleCommaSeparatedChange = (e, name) => {
    const values = e.target.value.split(',');
    const last = values.pop();
    values.forEach(val => handleArrayChange(name, val));
    e.target.value = last;
  };

  const handleEducationChange = (index, field, value) => {
    const updated = formData.education.map((edu, i) => {
      if (i === index) {
        const updatedEdu = { ...edu, [field]: value };

        if (field === "institution") {
          const schoolKeywords = ["School", "High School", "Secondary", "Primary"];
          const isSchool = schoolKeywords.some(word => value.toLowerCase().includes(word.toLowerCase()));
          updatedEdu.performanceLabel = isSchool ? "Percentage" : "CGPA / GPA";
        }

        return updatedEdu;
      }
      return edu;
    });
    setFormData({ ...formData, education: updated });
  };

  const addEducationField = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { institution: "", board: "", qualification: "", graduated: "", performanceLabel: "", performance: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("resumeData", JSON.stringify(formData));
    navigate("/result");
  };

  const renderSuggestionChips = (category) => (
    <div className="flex flex-wrap gap-2 mt-2">
      {(suggestions[category] || []).map((item) => (
        <button
          type="button"
          key={item}
          onClick={() => handleArrayChange(category, item)}
          className="px-3 py-1 border text-sm rounded-full hover:bg-indigo-100 border-indigo-400 text-indigo-700"
        >
          {item}
        </button>
      ))}
    </div>
  );

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Create Your Resume</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8 space-y-10">

        <section>
          <label className="block text-lg font-semibold text-indigo-600 mb-2">Job Title Applying For</label>
          <select
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          >
            <option value="">Select a Job Title</option>
            {Object.keys(jobTitleSuggestions).map((title) => (
              <option key={title} value={title}>{title}</option>
            ))}
          </select>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["fullName", "location", "email", "phone", "linkedin", "github"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full border border-gray-300 rounded-lg p-4"
              />
            ))}
          </div>
        </section>

        <hr className="border-gray-200" />

        {[{ name: "languages", label: "Languages" }, { name: "developerTools", label: "Developer Tools" }, { name: "frameworksOS", label: "Frameworks / OS" }, { name: "coursework", label: "Coursework" }].map(({ name, label }) => (
          <section key={name}>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{label}</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData[name].map((item) => (
                <span key={item} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">{item}</span>
              ))}
            </div>
            <input
              type="text"
              onChange={(e) => handleCommaSeparatedChange(e, name)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  e.preventDefault();
                  handleArrayChange(name, e.target.value.trim());
                  e.target.value = "";
                }
              }}
              placeholder={`Enter ${label} (comma or Enter to add)`}
              className="w-full border border-gray-300 rounded-lg p-4"
            />
            {renderSuggestionChips(name)}
          </section>
        ))}

        <hr className="border-gray-200" />

        <section>
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Soft Skills</h3>
          <input
            type="text"
            name="softSkills"
            value={formData.softSkills.join(', ')}
            onChange={handleChange}
            placeholder="e.g., Leadership, Communication, Time Management"
            className="w-full border border-gray-300 rounded-lg p-4"
          />
        </section>

        <hr className="border-gray-200" />

        <section>
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="border p-4 rounded-lg mb-4 space-y-2">
              {["institution", "board", "qualification"].map((field) => (
                <input
                  key={`${index}-${field}`}
                  type="text"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData.education[index][field] || ""}
                  onChange={(e) => handleEducationChange(index, field, e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                />
              ))}
              <input
                type="text"
                placeholder="Graduated / Pursuing"
                value={edu.graduated || ""}
                onChange={(e) => handleEducationChange(index, "graduated", e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
              <input
                type="text"
                placeholder={edu.performanceLabel || "Performance"}
                value={edu.performance || ""}
                onChange={(e) => handleEducationChange(index, "performance", e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addEducationField}
            className="mt-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200"
          >
            + Add More Education
          </button>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Achievements</h3>
          <textarea
            name="achievements"
            rows={5}
            value={formData.achievements}
            onChange={handleChange}
            placeholder="Use bullets or dashes for each achievement"
            className="w-full border border-gray-300 rounded-lg p-4"
          />
        </section>

        <section>
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Projects</h3>
          <textarea
            name="projects"
            rows={6}
            value={formData.projects}
            onChange={handleChange}
            placeholder="Mention key projects and their descriptions"
            className="w-full border border-gray-300 rounded-lg p-4"
          />
        </section>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          Generate Resume
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;
