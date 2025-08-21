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
                <p>
                  <strong>Summary:</strong> P&P Optica is an optics company that specializes in food safety, particularly in meat production. 
                    They develop machines that use visual and hyperspectral cameras to detect foreign contaminants in a production line environment.
                    These contaminants are identified using artificial intelligence, and the models that are used are developed in-house. 
                    Computing is integral to their business model - in AI, machine learning, and the programs used to process the mass amounts of data
                    for each model. PPO is currently the only company in the food safety industry to use both hyperspectral and visual imaging, giving them a niche spot on
		    the market and the ability to meet customer's needs more effectively.

                    For my Summer and Fall 2024 co-op work terms, I began working at P&P Optica (PPO) as part of an 8 month co-op extending from mid June to the end of the                		    fall school semester in late December.
                    I worked in their Data Services department as a data technician, and assisted with the collection and processing of data. 
                    In order to create and train their models, large amounts of data are required, and quality data is integral to a good machine learning model.
                    We collected large samples of data based on foreign materials that would be found at
                    our customers' facilities, annotated and post-processed this data, and finally uploaded it so our software team could start developing a model. Most of 		    the time we ran data collection in house, but luckily I was able to travel to a customer plant in the States to experience how an in-field data collection 		    worked. My team and I spent a week running data samples, interacting 
                    with our customer, and troubleshooting any issues that arose during our stay.  


                    My learning goals going into my coop term were as follows:

                    - Learn how to better approach difficult problems with an open mindset. Develop strategies to divide problems into manageable subunits without getting 		    lost in the enormity of them.

                    - Further develop effective teamwork and communication skills, so as to more efficiently collaborate on projects and communicate thought processes.

                    - Further develop and utilize my skills in Python and/or other programming languages in any available scenario at PPO.

                    I was also inspired to develop additional learning goals that pertained more specifically to my tasks at PPO:

                    - Become involved in all aspects of the data services team, and participate in data collection and post-processing/annotation.

                    - Travel to one or more customer plants to experience an on-site data collection, and help install or setup one of our machines.

                    - Learn as much as possible about the hardware and software that go into developing one of our machines.



                     I was successful in completing either fully or partially a good number of these goals, as described below:

                     - I have had multiple times where I have participated in team projects, as my work environment was very team-oriented, and through these experiences I am now confident in my ability to collaborate and communicate effectively. I have found that I am a very social person in my work environment, and in my next work term, I would like to improve on communicating in a more professional context.

                    - I travelled in-field to perform a data collection and assist in setup of one of our machines, interacted with our customer and troubleshooted any malfunctions. I was part of a team, 
                    and through clear communication and effective collaboration, we completed our assigned collection using only 80% of the projected time required.

                    - I have been faced with problems that I have had to learn how to solve, and have improved significantly in learning how to approach them. I am less overwhelmed by assigned projects, 
                    and have no problems asking for guidance when needed.
                    
                    - I was given opportunities to explore the PPO codebase, and help program spreadsheets that were integral to maintaining consistent customer data, 
                    using JavaScript. Unfortunately, my job was not centered around developing our software, so there were limited opportunities to code.
                    
                    - I  worked in both data collection and post-processing scenarios, and became proficient in the procedures used in both processes. Needed little to no oversight by my manager, and was always able to meet project deadlines. 


                    My time at P&P Optica has been insightful and stimulating, and I am really happy with how these two work terms have gone. 
                    I enjoyed learning the unique aspects of my job and looking for new opportunities that presented themselves. I  set attainable goals for myself 
                    during my time there and was successful in completing them. I would like to acknowledge my awesome managers, Jenny Udema and Brittany Cronier, and the wonderful coworkers I had in the 
                    data services team, for being a constant positive force in encouraging me in my work and learning. Thank you, P&P Optica, for an incredible work experience!

                </p>
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
                <p>
                  <strong>Summary:</strong> Over the course of summer 2025, I had the privilege of participating in Cognizant's second-ever co-op term. I want to highlight my experience, share what I learned and discuss the tasks and challenges that I faced during my time at this company.

Cognizant is a huge multi-national tech corporation, boasting spot #217 in the American Fortune 500 list. It has large offices in the States, Canada, India, and numerous other countries. It acts as a tech consulting company, developing and maintaining software for other large businesses, such as banks, universities, healthcare, and other industries. Going into this co-op term, I was excited to finally get some professional software development experience - getting to work at an industry leader was a huge added bonus, giving me the opportunity to experience what development processes look like at companies as big as Cognizant.

Going into this term, my goals were to further develop my software engineering skills, specifically involving languages and resources that are actually used in the workforce right now. I wanted to learn a front-end framework like react, improve my Python, and learn how to set up and utilize cloud computing resources. I felt these skills would be a lot more useful than the things I've been learning so far at University in terms of being applicable to popular tech stacks. Throughout the development process, I was able to work with all of the aforementioned languages and resources. I think they will be very useful for whatever my next placement is, due to the commonality of Python in most companies of script development.

My work term goals that I posted to Experience Guelph are as follows:


* Goal 1
Due to language and knowledge barriers in my workplace, I sometimes find it difficult to effectively communicate my thoughts to managers and coworkers. I want to improve the clarity and effectiveness of my oral communication in workplace conversations.

* Action Plan 1
 I will try different communication strategies, such as speaking more slowly, adding more detail, and checking for understanding during discussions to see which methods are most effective.

* Measure of Success 1
 I will track how often I need to revisit or clarify discussion points, with the goal of reducing these instances. I would like to achieve noticeable improvement by July 30th.

Completed: I got better at communicating with managers due to getting to know them and their speech patterns better, and by communicating more slowly and asking for elaboration where I felt there was a lack of clarity.


* Goal 2
Currently, I am the de facto spokesperson for my development team. I would therefore like to develop my leadership skills by informally guiding my team through the successful development of our application, fostering collaboration, accountability, and technical progress without holding an official leadership title.

* Action Plan 2
Initiate regular team check-ins to align goals and track progress, proactively support team members, take ownership of organizing tasks, and encourage open communication and feedback within the team.
Lead by example through strong work ethic, reliability, and positive attitude.

* Measure of Success 2
Positive informal feedback from team members regarding collaboration and coordination, timely completion of key application milestones with minimal delays, increased team cohesion and clarity of roles and responsibilities, recognition from peers or supervisors for initiative and team contribution.

Partially completed: As the co-op went on, my team started becoming more vocal with management, and all of them took leadership of their various mini-projects. Therefore, I did not have to take on such a big leadership role - however, during the start, I felt like I took good responsibility and initiative with the project.


* Goal 3
As we continue developing our application, I've encountered challenges in diagnosing and resolving bugs efficiently. I want to strengthen my technical problem-solving skills, particularly in debugging and implementing effective solutions. I want to improve my ability to identify, analyze, and resolve bugs during the development process to contribute to a stable and reliable application.

* Action Plan 3
 I will approach debugging more systematically by using tools such as logging, breakpoints, and test cases. I will also review relevant documentation, collaborate with teammates when needed, and reflect on recurring issues to prevent future bugs.

* Measure of Success 3
 I will measure success by reducing the number of recurring bugs, increasing the speed and accuracy of my debugging process, and contributing to the development of a bug-free application by July 30th.

Completed: With the assistance of my coworkers, we developed a bug-free application by the aforementioned date. My debugging skills improved during the dev process, as there were a lot of opportunities to debug various front-end and backend issues. I got more comfortable with terminal and console to figure out bugs as well.


My task during this coop was to develop a full-stack application to assist QA personnel with writing test cases for data transformation accuracy. The application would take an Excel mapping sheet as input, and output a set of natural language test cases, as well as SQL scripts that could be auto-ran on the user's database to fetch their mapped data. As part of a team of 5 people, I used Python and Microsoft Azure to develop and host the backend and make API calls to a database, blob storage, and an AI resource, and used ReactJS to develop the frontend UI. I utilized my existing knowledge of Python and JS, and had to learn about Azure and cloud computing on the fly as we developed in order to ship a completed product at the end of our term.

My time at Cognizant was an awesome learning experience and a good taste of what software development processes look like in the corporate world. I went into this term hoping that I could learn more than simply what my university experience had taught me, and my expectations were exceeded. I learned a lot about modern development practices, React, Azure, and Git (I fixed my fair share of merge conflicts along the way :) ).

I would like to acknowledge and thank my mentors at Cognizant, namely Sakthi, Garima, and Gagandeep for being great resources and for their guidance through this project! I would also like to thank my teammates Simon, Ruben, Chloe, and Joey for their support and knowledge, as well as them being a great bunch of people who I had fun developing with.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
