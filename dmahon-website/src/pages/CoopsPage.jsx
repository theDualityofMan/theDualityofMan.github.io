import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Modern icons
import cog1 from '../assets/cog1.jpg';
import cog2 from '../assets/cog2.jpg';
import cog3 from '../assets/cog3.jpg';
import cog4 from '../assets/cog4.jpg';
import cog5 from '../assets/cog5.jpg';
import ppo1 from '../assets/ppo1.jpg';
import ppo2 from '../assets/ppo2.jpg';
import ppo3 from '../assets/ppo3.jpg';

export default function CoopsPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      {/* Outer Container */}
      <div className="bg-black/40 backdrop-blur-lg shadow-2xl flex flex-col items-center w-[70vw] min-h-[70vh]">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-white mb-6 tracking-wide">
          My Co-op Work Terms
        </h1>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl text-center leading-relaxed">
          Below are detailed reports from my completed and upcoming co-op work
          terms. Click on each section to view the full report.
        </p>

        {/* Accordion Container */}
        <div className="w-full space-y-6">
          {/* Section 1 */}
          <div className="bg-white/10 hover:bg-white/20 shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection("2024")}
              className="w-full flex justify-between items-center px-6 py-5 !text-white font-semibold text-2xl"
              style={{ cursor: 'pointer' }}
            >
              P&P Optica: Jan 2024 – Aug 2024
              {openSection === "2024" ? (
                <ChevronUp className="w-7 h-7" />
              ) : (
                <ChevronDown className="w-7 h-7" />
              )}
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openSection === "2024" ? "max-h-[600px] p-6" : "max-h-0 p-0"
              }`}
            >   
                <div className="text-gray-200 text-lg text-left space-y-3 leading-relaxed max-h-[55vh] overflow-y-auto pr-3 custom-scrollbar">
                  <div className="flex flex-row justify-start mb-4 gap-4">
                    <img src={ppo1} alt="P&P Optica" className="rounded-lg shadow-lg w-1/3 object-cover" />
                    <img src={ppo2} alt="P&P Optica" className="rounded-lg shadow-lg w-1/3 object-cover" />
                    <img src={ppo3} alt="P&P Optica" className="rounded-lg shadow-lg w-1/3 object-cover" />
                  </div>
                <p><strong>Company:</strong> P&P Optica</p>
                <p><strong>Position:</strong> Data Technician Intern</p>
                <div>
  <p>
    <strong>Summary:</strong>
  </p>
  <p style={{ marginLeft: '20px' }}>
    P&amp;P Optica (PPO) is an optics company specializing in food safety, particularly in meat production. 
    They develop machines that use visual and hyperspectral cameras to detect foreign contaminants in a production line environment. 
    These contaminants are identified using artificial intelligence, and the models used are developed in-house. 
    Computing plays a critical role in PPO's business model — from AI and machine learning to programs used to process the large volumes of data needed for each model. 
    PPO is currently the only company in the food safety industry to use both hyperspectral and visual imaging, giving them a unique niche and allowing them to better meet customer needs.
  </p>

  <p style={{ marginLeft: '20px' }}>
    For my Summer and Fall 2024 co-op work terms, I worked at P&amp;P Optica as part of an 8-month placement extending from mid-June to late December. 
    I worked in the Data Services department as a Data Technician, where I assisted with collecting and processing data. 
    In order to create and train models, large amounts of high-quality data were required. 
    We collected samples of data based on foreign materials found at customer facilities, annotated and post-processed this data, and uploaded it so the software team could begin model development.
    Most of the time, data collection was done in-house, but I was fortunate to travel to a customer plant in the U.S. 
    There, I spent a week running data samples, interacting with the customer, and troubleshooting issues during the collection process.
  </p>

  <p>
    <strong>Learning Goals:</strong>
  </p>
  <ul style={{ marginLeft: '40px' }}>
    <li>Learn to approach difficult problems with an open mindset and develop strategies to divide problems into manageable subunits.</li>
    <li>Further develop teamwork and communication skills to collaborate effectively and explain thought processes clearly.</li>
    <li>Improve proficiency in Python and/or other programming languages where possible at PPO.</li>
  </ul>

  <p>
    <strong>Additional Goals at PPO:</strong>
  </p>
  <ul style={{ marginLeft: '40px' }}>
    <li>Become involved in all aspects of the Data Services team, including data collection and post-processing/annotation.</li>
    <li>Travel to one or more customer plants to experience an on-site data collection and assist with machine setup.</li>
    <li>Learn as much as possible about the hardware and software that go into developing PPO’s machines.</li>
  </ul>

  <p>
    <strong>Goal Completion:</strong>
  </p>
  <ul style={{ marginLeft: '40px' }}>
    <li>
      I participated in multiple team projects in a highly collaborative work environment. Through these experiences, I became confident in my ability to work as part of a team and communicate effectively. I also realized that while I am naturally social at work, I would like to improve my ability to communicate in a more professional context in future roles.
    </li>
    <li>
      I traveled on-site for a data collection and assisted with setting up one of PPO’s machines. I worked directly with our customer and troubleshot any issues during setup. Thanks to clear communication and effective collaboration, my team completed the assigned collection in only 80% of the projected time.
    </li>
    <li>
      I was regularly faced with challenging problems and significantly improved at breaking them down into smaller, manageable tasks. I became less overwhelmed by assigned projects and more comfortable asking for guidance when needed.
    </li>
    <li>
      I had opportunities to explore PPO’s codebase and contributed by writing JavaScript scripts to generate spreadsheets essential for maintaining customer data. Although my role was not primarily software-focused, these experiences strengthened my technical skills.
    </li>
    <li>
      I gained proficiency in both data collection and post-processing, requiring minimal oversight from my manager while consistently meeting project deadlines.
    </li>
  </ul>

  <p>
    <strong>Conclusion:</strong>
  </p>
  <p style={{ marginLeft: '20px' }}>
    My time at P&amp;P Optica was insightful and rewarding, and I am very happy with how these two work terms went. 
    I enjoyed learning the unique aspects of my role and seizing opportunities as they arose. 
    I successfully achieved most of my goals and grew both technically and professionally. 
    I would like to thank my managers, <em>Jenny Udema</em> and <em>Brittany Cronier</em>, as well as my amazing coworkers on the Data Services team, for their constant support and encouragement. 
    Thank you, P&amp;P Optica, for an incredible work experience!
  </p>
</div>

              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white/10 hover:bg-white/20 shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection("2025")}
              className="w-full flex justify-between items-center px-6 py-5 !text-white font-semibold text-2xl hover:bg-gray-400"
              style={{ cursor: 'pointer' }}
            >
              Cognizant: May 2025 – Aug 2025
              {openSection === "2025" ? (
                <ChevronUp className="w-7 h-7" />
              ) : (
                <ChevronDown className="w-7 h-7" />
              )}
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openSection === "2025" ? "max-h-[600px] p-6" : "max-h-0 p-0"
              }`}
            >
               <div className="text-gray-200 text-lg text-left space-y-3 leading-relaxed max-h-[55vh] overflow-y-auto pr-3 custom-scrollbar">
                  <div className="flex flex-row justify-start mb-4 gap-4">
                    <img src={cog4} alt="Cognizant" className="rounded-lg shadow-lg w-1/3 object-cover" />
                    <img src={cog5} alt="Cognizant" className="rounded-lg shadow-lg w-1/3 object-cover" />
                    <img src={cog3} alt="Cognizant" className="rounded-lg shadow-lg w-1/3 object-cover" />
                  </div>
                <p><strong>Company:</strong> Cognizant</p>
                <p><strong>Position:</strong> Software Engineering Intern</p>
                <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.8" }}>
                  {/* Title */}
                  <h2 style={{ textAlign: "center" }}>
                    Work Term Summary – Cognizant Technology Solutions (Summer 2025)
                  </h2>

                  {/* Introduction */}
                  <p style={{ textIndent: "40px" }}>
                    Over the course of summer 2025, I had the privilege of participating in Cognizant's
                    second-ever co-op term. I want to highlight my experience, share what I learned,
                    and discuss the tasks and challenges that I faced during my time at this company.
                  </p>

                  {/* About Cognizant */}
                  <p style={{ textIndent: "40px" }}>
                    <strong>About Cognizant:</strong> Cognizant is a huge multinational tech corporation,
                    boasting spot #217 in the American Fortune 500 list. It has large offices in the
                    States, Canada, India, and numerous other countries. As a tech consulting company,
                    it develops and maintains software for other large businesses such as banks,
                    universities, healthcare, and more. Going into this co-op term, I was excited to
                    finally gain professional software development experience — working at an industry
                    leader was a huge added bonus, giving me the opportunity to experience development
                    processes at a company of this scale.
                  </p>

                  {/* Goals */}
                  <p style={{ textIndent: "40px" }}>
                    <strong>Initial Goals:</strong> My objectives for this work term were to strengthen
                    my software engineering skills, particularly focusing on tools and frameworks
                    currently used in the industry. I aimed to learn a front-end framework like React,
                    improve my Python skills, and become comfortable with cloud computing resources.
                    These goals aligned with my desire to gain practical experience beyond what I’ve
                    learned in university courses.
                  </p>

                  {/* Experience Guelph Goals */}
                  <p style={{ textIndent: "40px" }}>
                    <strong>Experience Guelph Goals:</strong>
                  </p>

                  {/* Goal 1 */}
                  <ul style={{ marginLeft: "60px" }}>
                    <li>
                      <strong>Goal 1:</strong> Improve oral communication with managers and coworkers.
                      <ul style={{ marginLeft: "40px" }}>
                        <li>
                          <strong>Action Plan:</strong> Use strategies such as speaking more slowly,
                          adding detail, and checking for understanding during discussions.
                        </li>
                        <li>
                          <strong>Measure of Success:</strong> Track how often I need to revisit or
                          clarify discussion points, aiming for noticeable improvement by July 30th.
                        </li>
                        <li>
                          <strong>Completion:</strong> Successfully improved communication by getting
                          to know my managers’ styles, speaking more clearly, and asking for elaboration
                          when necessary.
                        </li>
                      </ul>
                    </li>
                  </ul>

                  {/* Goal 2 */}
                  <ul style={{ marginLeft: "60px" }}>
                    <li>
                      <strong>Goal 2:</strong> Develop leadership skills while acting as an informal
                      spokesperson for the development team.
                      <ul style={{ marginLeft: "40px" }}>
                        <li>
                          <strong>Action Plan:</strong> Hold regular team check-ins, organize tasks,
                          support team members, and encourage collaboration and feedback.
                        </li>
                        <li>
                          <strong>Measure of Success:</strong> Positive feedback from teammates,
                          timely milestone completion, and improved team cohesion.
                        </li>
                        <li>
                          <strong>Completion:</strong> Partially completed — early on, I took initiative
                          in organizing the project, but later my teammates became more vocal and took
                          ownership of their respective tasks.
                        </li>
                      </ul>
                    </li>
                  </ul>

                  {/* Goal 3 */}
                  <ul style={{ marginLeft: "60px" }}>
                    <li>
                      <strong>Goal 3:</strong> Strengthen debugging and technical problem-solving skills.
                      <ul style={{ marginLeft: "40px" }}>
                        <li>
                          <strong>Action Plan:</strong> Use systematic debugging techniques including
                          logging, breakpoints, test cases, and collaborating with teammates when needed.
                        </li>
                        <li>
                          <strong>Measure of Success:</strong> Reduce recurring bugs, improve debugging
                          speed, and contribute to a stable, reliable application by July 30th.
                        </li>
                        <li>
                          <strong>Completion:</strong> Successfully completed — I improved significantly
                          in debugging and became much more confident using terminal and console tools.
                        </li>
                      </ul>
                    </li>
                  </ul>

                  {/* Project Overview */}
                  <p style={{ textIndent: "40px" }}>
                    <strong>Project Overview:</strong> My primary task during this co-op was to develop
                    a full-stack application to assist QA personnel in writing test cases for data
                    transformation accuracy. The app takes an Excel mapping sheet as input and outputs
                    both natural language test cases and SQL scripts that can be automatically executed
                    on a user’s database. As part of a five-person team, I used Python and Microsoft
                    Azure for backend development and ReactJS for the frontend UI. I also learned how
                    to set up and manage cloud resources on the fly, which was critical for shipping
                    the completed product by the end of the term.
                  </p>

                  {/* Takeaways */}
                  <p style={{ textIndent: "40px" }}>
                    <strong>Key Takeaways:</strong> My time at Cognizant was an incredible learning
                    experience and gave me valuable exposure to software development practices in a
                    large corporate setting. I learned React, Azure, Git (including resolving plenty
                    of merge conflicts!), and modern development workflows. The experience exceeded
                    my expectations and helped me grow significantly as a developer.
                  </p>

                  {/* Acknowledgements */}
                  <p style={{ textIndent: "40px" }}>
                    <strong>Acknowledgements:</strong> I would like to thank my mentors — Sakthi,
                    Garima, and Gagandeep — for their guidance throughout the project. I’d also like
                    to thank my teammates Simon, Ruben, Chloe, and Joey for their collaboration,
                    support, and making this an enjoyable and productive experience.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
