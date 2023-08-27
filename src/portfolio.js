/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hicham El Baz",
  title: "Welcome to my world. I'm Hicham",
  subTitle: emoji(
    "🛠️ Diverse Engineering Expertise | 📊 Data Analytics Pro 3.5+ Years Shaping AGV Systems & Leading Operations Across Industries 🌍🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WPnQhBlCQ77Xv8OfCI2qfVcgF_HmCL0d/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/hicham-el-baz/",
  google: "https://scholar.google.com/citations?user=mBYWX-YAAAAJ&hl=en",
  gmail: "helbaz1@binghamton.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "SYSTEMS SCIENCE AND INDUSTRIAL ENGINEERING",
  skills: [
    emoji(
      "⚡ Designed new CFP system, 40% smaller footprint, 60% less conveyor belt complexity, $4.5M savings"
    ),
    emoji("⚡ Statistical analysis and data mining of pharmacy operations"),
    emoji(
      "⚡ Simulation modeling with FlexSim and Demo3D"),
    emoji(
      "⚡ Python, SAS, SQL for advanced analytics"),
    emoji(
      "⚡ Multivariate data analysis - logistic regression, PCA, clustering, sensitivity analysis"
    ),
    emoji(
      "⚡ Project management, Lean Six Sigma Green Belt certified"),
    emoji(
        "⚡ Developed AGV sorting system optimization"),
    emoji(
          "⚡ Data visualization with Tableau and data cleaning with SQL"),
    emoji(
            "⚡ Predictive modeling - logistic regression, exploratory data analysis"),
    emoji(
              "⚡ Fluent in Arabic, English, French, Turkish"),
  
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    //{
    //  skillName: "aws",
     // fontAwesomeClassname: "fab fa-aws"
    //},
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Binghamton University",
      logo: require("./assets/images/05.png"),
      subHeader: "Ph.D. in Systems Science and Industrial Engineering",
      duration: "August 2023 - Expected May 2027",
    },
    {
      schoolName: "Binghamton University",
      logo: require("./assets/images/05.png"),
      subHeader: "Master of Science in Systems Science and Industrial Engineering",
      duration: "August 2021 - August 2023",
      desc: "Participated in 8 research projects and published 3 papers",
      descBullets: [
        "Thesis: Enhanced Package Assignment Optimization in AGV Sorting Systems: Heuristic-based Stochastic Algorithms for Central Fill Pharmacies",
      ]
    },
    {
      schoolName: "Mugla Sitki Kocman University",
      logo: require("./assets/images/06.png"),
      subHeader: "Bachelor of Science in Energy Systems Engineering",
      duration: "September 2016 - May 2020",
      desc: "Ranked top 10% in the program. Took courses about Entrepreneurship in The Energy Sector, Economical Analysis of Energy Systems, Engineering Economy",
      descBullets: ["Capstone: Performance Analysis and Optimization of Organic Rankine Cycle (ORC)"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL",
      progressPercentage: "90%"
    },
    {
      Stack: "Tableau",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Associate",
      company: "iA",
      companylogo: require("./assets/images/iA.png"),
      date: "August 2021 – Present",
      desc: "Advanced AGV sorting systems in central fill pharmacies (CFP) through meticulous data analysis, simulation modeling, and system design optimization",
      //descBullets: [
      //  "Statistical Analysis and Data Mining",
      //  "System Design in CFPs",
      //  "AGV Sorting System in CFPs"
      //]
    },
    {
      role: "Operations Assistant Manager",
      company: "El Baz Invest",
      companylogo: require("./assets/images/BC.jpeg"),
      date: "July 2020 – July 2021",
      desc: "Spearheaded operations by streamlining daily tasks with optimized systems, managing significant banking transactions, and contributing to sustainable agricultural projects, including a vast olive tree farm"
    },
    {
      role: "Energy Systems Engineer Trainee",
      company: "Disolar Energy",
      companylogo: require("./assets/images/DD.png"),
      date: "June 2019 – July 2019",
      desc: "Managed and maintained solar power plants, ensuring optimal performance, while collaborating on technical solutions and cost estimations for project enhancement"
    },
    {
      role: "Mechanical Engineer Trainee",
      company: "Bosch",
      companylogo: require("./assets/images/BB.png"),
      date: "January 2019 – May 2019",
      desc: "Pioneered the design of an ultrasonic steam device, collaborated with the engineering team on quality control processes, and evaluated boiler performance through rigorous testing"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Collaborative Analytics & Optimization Projects with Research Lab Teams & Student Cohorts",
  projects: [
    {
      image: require("./assets/images/Designer.png"),
      projectName: "World Cup Sponsoring Decision Analytics",
      projectDesc: "Developed a World Cup prediction model using logistic regression with Python",
      footerLink: [
        {
          name: "More Details",
          url: "https://drive.google.com/file/d/18xIL2MK4fnXh46fO6iHmU0SahdtqpPK5/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/09.png"),
      projectName: "Data Analysis of Netflix",
      projectDesc: "Analyzed Netflix data with SQL and presented insights via Tableau",
      footerLink: [
        {
          name: "More Details",
          url: "https://drive.google.com/file/d/18xIL2MK4fnXh46fO6iHmU0SahdtqpPK5/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/08.png"),
      projectName: "Cycle Time Improvement in CFP Based on Simulation",
      projectDesc: "Optimized a CFP conveyor system design using simulation",
      footerLink: [
        {
          name: "More Details",
          url: "https://drive.google.com/file/d/18xIL2MK4fnXh46fO6iHmU0SahdtqpPK5/view?usp=sharing"
        }
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  //subtitle:
  //  "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "The Complete SQL Bootcamp",
      //subtitle:
        //"First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/10.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-b3eb629b-8831-4a95-a09d-cf2267dc141d/"
        }
      ]
    },
    {
      title: "Lean Six Sigma Green Belt",
      //subtitle:
       // "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/GB.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/8efd154b-9611-4cec-9972-eed46c45144b/public_url"
        }
      ]
    },

    {
      title: "Agile Project Management",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/12.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/M6Q67Q85KTCQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publications",
  //subtitle:
   // "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "True", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://iise.confex.com/iise/2023/meetingapp.cgi/Paper/2694",
      title: "IISE Annual Conference 2023",
      description:
        "Simulation-based Modeling and Analysis for the AGV Sorting System of CFPs"
    },
    {
      url: "https://iise.confex.com/iise/2023/meetingapp.cgi/Paper/3419",
      title: "IISE Annual Conference 2023",
      description:
       "Cycle Time Improvement in CFP Based on Simulation"
    },
    {
      url: "https://iise.confex.com/iise/2023/meetingapp.cgi/Paper/2708",
      title: "IISE Annual Conference 2023",
      description:
        "A Simulation-Based Study for CFP System Conveyor Layout Improvement"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  //subtitle:
   // "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (607) 727 - 1022",
  email_address: "helbaz1@binghamton.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
