import React from "react";

const parseResumeContent = (content) => {
  const lines = content.split("\n").filter((line) => line.trim() !== "");

  const sections = {
    name: "",
    email: "",
    role: "",
    education: "",
    skills: [],
    experience: [],
  };

  lines.forEach((line) => {
    const lower = line.toLowerCase();
    if (lower.startsWith("name:")) sections.name = line.split(":")[1].trim();
    else if (lower.startsWith("email:")) sections.email = line.split(":")[1].trim();
    else if (lower.startsWith("role:")) sections.role = line.split(":")[1].trim();
    else if (lower.startsWith("education:")) sections.education = line.split(":")[1].trim();
    else if (lower.startsWith("skills:"))
      sections.skills = line.split(":")[1].split(",").map((s) => s.trim());
    else if (lower.startsWith("experience:"))
      sections.experience = line.split(":")[1].split(",").map((e) => e.trim());
  });

  return sections;
};

const ResumeCard = ({ content }) => {
  if (!content) {
    return (
      <div className="text-center text-gray-500 py-8">
        No resume content available.
      </div>
    );
  }

  const { name, email, role, education, skills, experience } =
    parseResumeContent(content);

  return (
    <div className="text-gray-800 space-y-6 leading-relaxed text-[15px]">
      {/* Header */}
      <div className="border-b pb-4 text-center">
        <h1 className="text-2xl font-bold text-indigo-700">{name}</h1>
        <p className="text-sm text-gray-600">{email}</p>
        <p className="text-md font-medium mt-1 text-indigo-500">{role}</p>
      </div>

      {/* Education */}
      {education && (
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-1">Education</h2>
          <p>{education}</p>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-1">Skills</h2>
          <ul className="list-disc list-inside">
            {skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-1">Experience</h2>
          <ul className="list-disc list-inside">
            {experience.map((exp, idx) => (
              <li key={idx}>{exp}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResumeCard;
