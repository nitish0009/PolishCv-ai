import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ResumeResult = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("resumeData");

    if (data) {
      setResumeData(JSON.parse(data));

      // ✅ Clear after use
      localStorage.removeItem("resumeData");
    }
  }, []);

  if (!resumeData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">You haven’t created a resume yet</h2>
        <p className="text-gray-600 mb-6">Start building your professional resume now with AI assistance.</p>
        <Link
          to="/generate"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Generate Resume
        </Link>
      </div>
    );
  }

  const {
    name,
    email,
    phone,
    address,
    summary,
    education,
    experience,
    projects,
    skills,
    languages,
    frameworks,
    tools,
  } = resumeData;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-12 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-xl">
        {/* Header */}
        <div className="text-center border-b pb-4 mb-4">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <p className="text-sm text-gray-600">{email} | {phone} | {address}</p>
        </div>

        {/* Summary */}
        {summary && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-indigo-700 border-b mb-2">Professional Summary</h2>
            <p className="text-gray-700 text-sm">{summary}</p>
          </section>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-indigo-700 border-b mb-2">Education</h2>
            <ul className="space-y-2 text-sm">
              {education.map((edu, idx) => (
                <li key={idx}>
                  <strong>{edu.degree}</strong> – {edu.institution} ({edu.year})
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Experience */}
        {experience?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-indigo-700 border-b mb-2">Experience</h2>
            <ul className="space-y-2 text-sm">
              {experience.map((exp, idx) => (
                <li key={idx}>
                  <strong>{exp.role}</strong> – {exp.company} ({exp.duration})
                  <p className="text-gray-600">{exp.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-indigo-700 border-b mb-2">Projects</h2>
            <ul className="space-y-2 text-sm">
              {projects.map((proj, idx) => (
                <li key={idx}>
                  <strong>{proj.title}</strong>: {proj.description}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Skills */}
        {(skills?.length > 0 || languages?.length > 0 || frameworks?.length > 0 || tools?.length > 0) && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-indigo-700 border-b mb-2">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-sm">
              {skills?.length > 0 && <div><strong>Core:</strong> {skills.join(", ")}</div>}
              {languages?.length > 0 && <div><strong>Languages:</strong> {languages.join(", ")}</div>}
              {frameworks?.length > 0 && <div><strong>Frameworks/OS:</strong> {frameworks.join(", ")}</div>}
              {tools?.length > 0 && <div><strong>Tools:</strong> {tools.join(", ")}</div>}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ResumeResult;
