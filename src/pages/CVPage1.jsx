import { MdLocationOn } from "react-icons/md";
import { FaGlobe, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import cvData from '../data/CVData.json';

const CVPage1 = ({ onNextPage }) => {
  return (
    <div className="max-w-[850px] mx-auto p-8 bg-white font-['Arial']">
      {/* Header */}
      <div className="grid grid-cols-2">
        <div className="col-span-1 mb-8">
          <h1 className="text-[24px] font-bold mb-2 text-[#333]">{cvData.personalInfo.name}</h1>
          <div className="flex items-center gap-2 text-[#555] text-[14px] mb-2">
            <span>{cvData.personalInfo.position}</span>
            <div className="flex items-center">
              <MdLocationOn className="mr-1" />
              <span>{cvData.personalInfo.location}</span>
            </div>
          </div>       
        </div>
        <div className="col-span-1 flex gap-4 text-[14px] text-[#777] mb-8">
          <a href="#" className="flex items-center gap-1">
            <FaGlobe /> {cvData.personalInfo.portfolio}
          </a>
          <a href="#" className="flex items-center gap-1">
            <MdEmail /> {cvData.personalInfo.email}
          </a>
          <a href="#" className="flex items-center gap-1">
            <FaPhone /> {cvData.personalInfo.phone}
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-[20px] font-bold text-[#444]">Professional Summary</h3>
        <p className="text-[14px] text-[#555] leading-[1.6] mb-4">{cvData.professionalSummary}</p>
        <hr className="my-4" />
      </div>
      {/* Work History Section */}
      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-4 text-[#444]">Work Experience</h2>
        {cvData.workHistory.map((job, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[16px] font-semibold text-[#666]">{job.position}
                <span className="text-[14px] text-[#666] font-medium"> - {job.company}</span>
              </h3>
              <p className="text-[14px] text-[#666]">{job.duration}</p>
            </div>
            <div className="flex mb-3">
              <h4 className="text-[14px] font-medium mb-2 me-4 text-[#555]">Projects:</h4>
              <div className="flex flex-wrap gap-2">
                {job.projects.map((project, projectIndex) => (
                  <span
                    key={projectIndex}
                    className="bg-gray-100 px-3 py-1 rounded-full text-[14px] text-[#555]"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[14px] font-medium mb-2 text-[#555]">Responsibilities:</h4>
              <ul className="list-disc list-inside">
                {job.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="text-[14px] text-[#555] mb-1 flex items-start leading-[1.6]">
                    <span className="inline-block w-2 h-2 bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <button 
        onClick={onNextPage}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-[14px]"
      >
        Next Page
      </button>
    </div>
  );
};

export default CVPage1;