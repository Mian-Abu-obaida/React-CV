import cvData from '../data/CVData.json';
import { FaGlobe, FaPhone, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsBehance } from "react-icons/bs";
import { useEffect } from 'react';

const CVPage2 = ({ onPrevPage }) => {
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [onPrevPage]); 
  return (
    <div className="max-w-[850px] mx-auto p-4 sm:p-6 md:p-8 bg-white font-['Arial']">
      {/* Freelance Projects */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-[18px] sm:text-[24px] font-bold mb-3 sm:mb-4 text-[#444]">Freelance Projects</h2>
        {cvData.freelanceProjects.map((project, index) => (
          <div key={index} className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4">
              <h3 className="text-[18px] sm:text-[20px] font-bold mb-3 sm:mb-4 text-[#444] leading-[1.6]">{project.name}</h3>
              <span className="bg-gray-100 p-3 rounded-full text-[13px] sm:text-[14px] text-[#666]">{project.type}</span>
            </div>
            <p className="text-[13px] sm:text-[14px] text-[#555] mb-3 sm:mb-4 leading-[1.6]">{project.description}</p>
            
            {/* Nested Projects */}
            {project.Projects?.map((subProject, subIndex) => (
              <div key={subIndex} className="ml-3 sm:ml-6 mb-3 sm:mb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h4 className="text-[13px] sm:text-[14px] font-medium text-[#555] mb-1 sm:mb-0">{subProject.name}</h4>
                  <span className="bg-gray-100 p-3 rounded-full text-[13px] sm:text-[14px] text-[#666]">{subProject.type}</span>
                </div>
                {subProject.description && (
                  <p className="text-[13px] sm:text-[14px] text-[#555] leading-[1.6]">{subProject.description}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </section>
      <hr className="my-4" />

      {/* Tech Skills */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-[18px] sm:text-[20px] font-bold mb-3 sm:mb-4 text-[#444]">Tech Skills</h2>
        <p className="text-[13px] sm:text-[14px] text-[#555] leading-[1.6]">{cvData.techSkills}</p>
      </section>
      <hr className="my-4" />

      {/* Tools */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-[18px] sm:text-[20px] font-bold mb-3 sm:mb-4 text-[#444]">Tools</h2>
        <p className="text-[13px] sm:text-[14px] text-[#555] leading-[1.6]">{cvData.tools}</p>
      </section>
      <hr className="my-4" />

      {/* Certifications */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-[18px] sm:text-[20px] font-bold mb-3 sm:mb-4 text-[#444]">Certifications</h2>
        <ul className="list-disc list-inside">
          {cvData.certifications.map((cert, index) => (
            <li key={index} className="text-[13px] sm:text-[14px] text-[#555] mb-1 flex items-start leading-[1.6]">
              <span className="inline-block w-2 h-2 bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
              {cert}
            </li>
          ))}
        </ul>
      </section>
      <hr className="my-4" />

      {/* Education */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-[18px] sm:text-[20px] font-bold mb-3 sm:mb-4 text-[#444]">Education</h2>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <span className="text-[13px] sm:text-[14px] text-[#555] mb-1 sm:mb-0">{cvData.education.university}</span>
          <span className="text-[13px] sm:text-[14px] text-[#666]">{cvData.education.duration}</span>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-6 sm:mt-8">
        <h2 className="text-[18px] sm:text-[20px] font-bold mb-3 sm:mb-4 text-[#444]">Contact</h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-[13px] sm:text-[14px] text-[#777]">
          <a href={`mailto:${cvData.personalInfo.email}`} className="flex items-center gap-1">
            <MdEmail /> {cvData.personalInfo.email}
          </a>
          <a href={`tel:${cvData.personalInfo.phone}`} className="flex items-center gap-1">
            <FaPhone /> {cvData.personalInfo.phone}
          </a>
          <a href="#" className="flex items-center gap-1">
            <FaGlobe /> {cvData.personalInfo.website}
          </a>
          <a href="#" className="flex items-center gap-1">
            <BsBehance /> {cvData.personalInfo.portfolio}
          </a>
          <a href="#" className="flex items-center gap-1">
            <FaLinkedin /> {cvData.personalInfo.linkedin}
          </a>
        </div>
      </section>

      <button 
        onClick={onPrevPage}
        className="fixed bottom-4 left-4 bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-blue-600 text-[13px] sm:text-[14px]"
      >
        Previous Page
      </button>
    </div>
  );
};

export default CVPage2;