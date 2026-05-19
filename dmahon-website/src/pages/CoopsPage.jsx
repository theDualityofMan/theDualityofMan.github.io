import React from "react";
import { useState } from "react";
import cog3 from '../assets/cog3.jpg';
import cog4 from '../assets/cog4.jpg';
import cog5 from '../assets/cog5.jpg';
import ppo1 from '../assets/ppo1.jpg';
import ppo2 from '../assets/ppo2.jpg';
import ppo3 from '../assets/ppo3.jpg';
import ppo4 from '../assets/ppo4.jpg';
import ppo5 from '../assets/ppo5.jpg';
import ppo6 from '../assets/ppo6.jpg';
import ppo7 from '../assets/ppo7.jpg';
import ppo8 from '../assets/ppo8.jpg';
import ppo9 from '../assets/ppo9.jpg';
import ppo10 from '../assets/ppo10.jpg';

export default function CoopsPage() {

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      {/* Outer Container */}
      <div className="bg-black/40 text-white backdrop-blur-lg shadow-2xl flex flex-col items-center w-[90vw] h-[90vh] -translate-y-8 overflow-auto no-scrollbar rounded-lg">
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.8" }}>
          <div className="flex flex-row justify-start mb-4 gap-4">
            <img src={ppo9} alt="PPO" className="rounded-lg shadow-lg w-1/4 object-cover" />
            <img src={ppo10} alt="PPO" className="rounded-lg shadow-lg w-1/4 object-cover" />
            <img src={ppo6} alt="PPO" className="rounded-lg shadow-lg w-1/4 object-cover" />
            <img src={ppo7} alt="PPO" className="rounded-lg shadow-lg w-1/4 object-cover" />
          </div>
          <br /><br /><br />
            <p><strong>Company:</strong> P&P Optica</p>
            <p><strong>Position:</strong> Machine Learning Co-op</p>
            <p>
              <strong>Summary:</strong>
            </p>
            <br/>
            {/* Introduction */}
            <p style={{ textIndent: "40px" }}>
              During my W25 and S25 work terms, I decided to return to P&P Optica, in Waterloo ON. 
              I was hired as a Model Developer Co-op for a 4 month contract, which I got extended to 
              an 8 month until the end of August. This report will only be covering the first 4 months 
              of my co-op experience so far (Jan to end of April). I was hired to develop machine learning 
              models alongside a team of 5-7 other developers and researchers.
            </p>
            <br/>
            {/* About PPO */}
            <p style={{ textIndent: "40px" }}>
              <strong>About PPO:</strong> First, a little background about the company - I may have 
              already listed it below under my other co-op experience with PPO, but I feel like I’ve gained 
              some further knowledge in the past few months. PPO is a product-based company operating within the 
              food safety industry, specifically in meat manufacturing. Our product is a machine that fits into a 
              customer’s production line and uses a combination of visual and hyperspectral imaging and machine 
              learning to detect and reject foreign material contaminations hiding in a customer’s product. Not 
              surprisingly, the company has a lot of software involved in this process - system software that runs 
              the very intricate machines, and model building software that allows us to train a variety of types of 
              models based on data that we collect in-plant with the help of our Data Services team (which I worked on 
              in my previous co-op term). Our main office is in Waterloo, but due to most of our clients being in the
              States and some overseas, we have specialists that travel around a lot and assist on-site in plants when 
              needed. We are the only company in our industry that uses hyperspectral imaging, which is helpful when 
              needed to identify chemical signatures of what the camera is seeing (in order to determine what is product 
              and what isn’t). Fun fact - in our early days of operation when PPO was purely a spectrometer company, 
              we supplied the International Space Station with a spectrometer! It is still onboard today. 
            </p>
            <br/>
            {/* Goals */}
            <p style={{ textIndent: "40px" }}>
              <strong>Initial Goals:</strong> 
            </p>

            {/* Experience Guelph Goals */}
            <p style={{ textIndent: "40px" }}>
              <strong>Experience Guelph Goals:</strong>
            </p>

            {/* Goal 1 */}
            <ul style={{ marginLeft: "60px" }}>
              <li>
                <strong>Goal 1:</strong> 	
                To work with linear SVMs and neural networks for a customer project, and contribute 
                to development and/or review of implementation of neural networks in our workflow.
                <ul style={{ marginLeft: "40px" }}>
                  <li>
                    <strong>Action Plan:</strong> 	
                      Request specific customer work from my manager that involves model design, and 
                      ask to be included in the neural network design process / ask to be exposed to it as much as possible.
                  </li>
                  <li>
                    <strong>Measure of Success:</strong> 	
                      Successfully ship a OvO and/or Neural Network models to a customer, and either successfully push or contribute 
                      to reviewing production code involved with implementing neural networks.
                  </li>
                  <li>
                    <strong>Completion:</strong> 		
                      I successfully contributed to shipping multiple One v One (OvO) models to various customers in the US, 
                      and contributed to reviewing neural network implementation code. At the time of writing this reflection, 
                      I also have a ticket to create a neural network for a customer using our new NN pipeline.
                  </li>
                </ul>
              </li>
            </ul>

            {/* Goal 2 */}
            <ul style={{ marginLeft: "60px" }}>
              <li>
                <strong>Goal 2:</strong> 	
                  Lead ML team by being scrum master for our agile process, and facilitate conversations 
                  about tickets and customer plans without having to be guided through the process. 
                <ul style={{ marginLeft: "40px" }}>
                  <li>
                    <strong>Action Plan:</strong> 	
                      Suggest that getting "thrown into the deep end" of the agile process might be the best way 
                      for me to learn it, and request to lead team meetings, story point evaluations, and sprint planning. 
                      Ask questions whenever I feel out of my depth, and don't feel awkward about leading people that are my seniors.
                  </li>
                  <li>
                    <strong>Measure of Success:</strong> 		
                      Lead the ML team as scrum master for one or more sprints, taking responsibility for 
                      checking up on tickets with individual teammates, facilitating conversations about projects 
                      in standup meetings, estimating story points, keeping track of customer demand,  and heading 
                      sprint planning meetings.
                  </li>
                  <li>
                    <strong>Completion:</strong> 
                      I lead the machine learning team as scrum master since early March for more than 4 sprints so far. 
                      I lead 5 standup meetings, 1 story point estimation and 1 sprint planning meeting per sprint, as well as 
                      figureheading at whatever miscellaneous meetings came up. At times I've needed to ask for assistance from 
                      my manager as to how to be a more effective scrum leader (what questions to ask, how to follow up with people
                      about their tickets, learning about different customer projects, etc.) - this has helped me gain broader company 
                      knowledge as a result, and helped me feel more confident in taking leadership positions among coworkers I would 
                      consider as my seniors. It's also helped me understand how much background knowledge and cross-company knowledge is 
                      required to be an effective leader, and provide background to tickets and projects.
                  </li>
                </ul>
              </li>
            </ul>

            {/* Goal 3 */}
            <ul style={{ marginLeft: "60px" }}>
              <li>
                <strong>Goal 3:</strong> 	
                    Deep dive into neural networks and machine learning and understand both the high-level concepts 
                    (datasets, parameters, etc) and the underlying math (forward + background propagation, gradient descent, etc.)
                <ul style={{ marginLeft: "40px" }}>
                  <li>
                    <strong>Action Plan:</strong> 	
                      In any lulls at work and in my free time, take a look at production code for model building to understand 
                      how the process works for PPO. Simultaneously, research videos/articles on how neural networks work at a low level 
                      (e.g. 3brown1blue on youtube.)
                  </li>
                  <li>
                    <strong>Measure of Success:</strong> Be able to fully explain the process of how a neural network learns, down to the math
                    at its core, and tie this in to how PPO uses it and legacy OvO models to meet customer demand.
                  </li>
                  <li>
                    <strong>Completion:</strong> 	
                      I feel confident in explaining most of the process of neural networks (low-level and high level), and can thoroughly explain how OvO models 
                      (linear SVMs), Gaussian mixture models, and neural network models are used on our machines to detect foreign objects in customer plants. 
                      However, I would like to continue learning about the math behind back-propogation, as I'm a bit fuzzy on how it works. 
                      I attempted to explain the whole process to my friends, Dad, and brother, and I felt like I had a bit of work to do on grasping
                      the concept myself. 
                  </li>
                </ul>
              </li>
            </ul>
            <br/>
            {/* Project Overview */}
            <p style={{ textIndent: "40px" }}>
              <strong>Project Overview:</strong> My job at PPO was to help the company meet customer 
              goals by developing machine learning models and developing scripts to help meet demand 
              from the ML team. Since PPO is customer-focused, making a sale to a customer means we do 
              model development for them once and then as an on-going process if an existing model 
              needs tweaking. Making a model involves first filtering training data received from the
              Data Services team, ensuring positive and negative class data is available to test the models
              on, running the model pipeline, running tests to ensure the model is up to customer standards, 
              and re-tweaking the model based on the results from these tests. The types of models themselves 
              include linear SVMs, Gaussian Mixture Models, and most recently neural networks, which I was 
              especially excited to work with. Once the model meets testing standards, it is deployed to the customer. 
            </p>
            <br/>
            <p style={{ textIndent: "40px" }}>
               I was also tasked with developing Python scripts to help with automating the entire above 
               process. Originally, all the scripts had to be ran separately, which made passing data between 
               each a grueling and time-consuming process. I made changes which fixed pre-existing bugs, wrote unit tests, 
               fixed linter errors,  added new functionality to speed up the model-making process. 
            </p>
            <br/>
            <p style={{ textIndent: "40px" }}>
              PPO, like many other companies, operates its ML team through Agile methodology. After discussing it with my 
              manager, I was assigned the task of scrum-master for the last two months. This involved running tri-weekly 
              standups, sprint planning and estimation meetings, and facilitating conversations with team members to understand 
              how they were progressing through their sprints. While my experience was at first obviously not up to scrum-master
              standards, I quickly gained enough domain knowledge through talking about customer projects and company infrastructure 
              with people inside and outside my team. 
            </p>
            <br/>
            <p style={{ textIndent: "40px" }}>
              For these above responsibilities, I needed a solid understanding of object oriented programming, Python, Linux, 
              Bash scripting, and machine learning concepts. School and previous coops had supplied me with Python and Linux 
              experience, but machine learning was somewhat new to me. I had watched a few videos on the topic before, but I 
              had never worked hands on with a model and the entire process it took to make it. Thankfully, the ML team was 
              very knowledgeable and accommodating, and helped walk me through the high-level concepts at first and then 
              explained low-level mechanisms as I started asking those questions.
            </p>
            <br/>
            {/* Takeaways */}
            <p style={{ textIndent: "40px" }}>
              <strong>Key Takeaways:</strong> My first 4 months taught me a lot about machine learning and how 
              the process works from start to finish. I gained valuable experience in running a team as a scrum 
              master and facilitating conversations among my teammates. I learned how to convey my gained knowledge 
              to new members, and most importantly, this position taught me how to ask good questions, as there was a 
              lot I didn’t know. I also enjoyed working with professionals in software, and learned a lot about review 
              processes and testing. 
            </p>
            <br/>
            {/* Acknowledgements */}
            <p style={{ textIndent: "40px" }}>
              <strong>Acknowledgements:</strong> I’d like to give a shout out my amazing manager, Scotty, and my 
              coworkers Hannah, Pooria, and Kesha for teaching me so much and being amazing resources to reach out 
              to, along with the SIS team for explaining how their code is incorporated into the process.
              I’d also like to acknowledge the honorary office cat Patty for being an amazing emotional support.
            </p>
            <br /><br /><br /><br /><br />


          <div className="flex flex-row justify-start mb-4 gap-4">
            <img src={cog4} alt="Cognizant" className="rounded-lg shadow-lg w-1/3 object-cover" />
            <img src={cog5} alt="Cognizant" className="rounded-lg shadow-lg w-1/3 object-cover" />
            <img src={cog3} alt="Cognizant" className="rounded-lg shadow-lg w-1/3 object-cover" />
          </div>
          <br /><br /><br />
            <p><strong>Company:</strong> Cognizant</p>
            <p><strong>Position:</strong> Software Engineering Intern</p>
            <p>
              <strong>Summary:</strong>
            </p>

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
            <br /><br /><br /><br /><br />


            <div className="flex flex-row justify-start mb-4 gap-4">
              <img src={ppo1} alt="P&P Optica" className="rounded-lg shadow-lg w-1/3 object-cover" />
              <img src={ppo2} alt="P&P Optica" className="rounded-lg shadow-lg w-1/3 object-cover" />
              <img src={ppo3} alt="P&P Optica" className="rounded-lg shadow-lg w-1/3 object-cover" />
            </div>
            <br /><br /><br />
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
  );
}
