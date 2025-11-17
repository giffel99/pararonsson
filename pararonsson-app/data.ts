// /data.ts

export const about = {
  text: "I am a software engineer with a broad interest in technology and its applications. \
        I have a strong educational background, including a BSc in Software Engineering and an MSc in Data Science & AI. \
         I enjoy staying active through running, walking in the city, and playing padel or board games with friends. \
          From time to time, I also spend time in nature, enjoying long walks and trails.",
};

export const education = [
  {
    school: "Chalmers University of Technology",
    degree: "Civilingenjör, Informationsteknik",
    years: "2018 – 2024",
  },
  {
    school: "University of Technology",
    degree: "MSc in Data Science and AI",
    years: "2021 – 2024",
  },
  {
    school: "University of Technology",
    degree: "BSc in Software Engineering",
    years: "2018 – 2021",
  },
];

export const experience = [
  {
    company: "Infotiv",
    role: "Software Developer",
    location: "Gothenburg, Sweden",
    period: "Feb 2025 – Now",
    description:
      "I am part of two projects (SMILE IV & ARTWORK) where we are building a simulation that can track robots, workers and other objects moving \
        around inside of a warehouse, using cameras. This simulation is built using Gazebo and ROS2 stack. The robots acting inside of the simulation \
        receive their location using the camera setup.",
  },
  {
    company: "Infotiv",
    role: "Teacher / Educator",
    location: "Gothenburg, Sweden",
    period: "Nov 2024 – Jan 2025",
    description:
      "I was assigned to teach a course called 'Testing and Typescript' for the \
Higher Vocational Education school IT-Högskolan. My work consisted of \
administrating the course and holding lectures for the students.",
  },
  {
    company: "Infotiv",
    role: "Technical consultant",
    location: "Gothenburg, Sweden",
    period: "Sep 2024 – Nov 2024",
    description:
      "I worked on an internal project involving the continued development of an autonomous \
platform. During my time on this project, I have gained further experience \
in embedded programming and working at the circuit level. Updating \
outdated documentation is a priority to ensure quality for this project.",
  },
  {
    company: "AstraZeneca",
    role: "Master's thesis",
    location: "Gothenburg, Sweden",
    period: "Jan 2024 – Jun 2024",
    description:
      "In collaboration with a AztraZeneca, I conduced my master's thesis titled: 'Prediction of Drug Metabolites Using a Deep Learning Language Model'.\
      The purpose of the thesis was to gain further insights into the application of the deep neural networks for metabolite prediction and identification for drug molecules. \
       Project consisted of: Implementing a deep neural network, extracting and curating publicly available data, and training the model to input a drug molecule to generate a \
       list of probable molecules. We used the Focused Transformer, which uses the the deep learning Transformer architecture, as our model. The data, we managed to extract \
        and cure ourselves. We created a framework where it is possible to train and test the model. All of the work is available on a public github repository that contains the \
         framework built for training and testing where it is possible to continue on the project.",
  },
  {
    company: "Centiro",
    role: "Software developer",
    location: "Borås, Sweden",
    period: "Jun 2022 – Dec 2023",
    description:
      "Worked for the company as a software developer and worked together with a team that had responsibility over a handful of services that the company offers. \
       Responsibilities consisted of developing new web services and maintaining existing ones. Responsibilities were also to be an active member during our sprints, \
        and discuss the work status of the various products.",
  },
  {
    company: "Centiro",
    role: "Summer intern",
    location: "Borås, Sweden",
    period: "Jun 2021 – Aug 2021",
    description:
      "Worked as a developer for Centiro during the summer. Main tasks were \
    to work together with a team and work on front-end and back-end \
    development tasks.",
  },
  {
    company: "Chalmers",
    role: "Bachelor thesis",
    location: "Gothenburg, Sweden",
    period: "Jan 2020 – Jun 2021",
    description:
      "Conducted bachelor's thesis, with the aim of implementing a Real Time Position Tracking System for a Transportation Company. \
     This was done by creating a web platform that can track multiple positions of users in real time. This platform would also be suited to \
      the needs of a transportation company we worked with. The project consisted of three parts, (1) a mobile application where users \
allow the app to know their location, (2) a data cloud which holds the necessary information about users and their current positions, and Finally (3), \
a web interface that a coordinator uses to view all of their workers on a map in real time. The result of the project was a mobile app for Android and iOS developed in Flutter, \
 using the language Dart. The cloud platform used was Google Cloud. Lastly, the web page was developed in the Vue framework.",
  },
];
export const skills = {
  frontend: [
    "Angular",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
  ],

  backend: [
    "Node.js",
    ".NET",
    "ASP.NET",
    "C#",
    "Java",
    "C++",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Linux/Ubuntu",
  ],

  ai: [
    "Python",
    "Pandas",
    "NumPy",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "R",
    "MATLAB",
  ],

  other: [
    "Git",
    "ROS2",
    "Gazebo",
    "Slurm",
    "Agile/Scrum",
    "Teaching",
    "TDD/BDD",
    "Class B driver's license",
  ],
};

export const projects = [
  {
    title: "what-am-i-feeling-today.vercel.app, made in Next.js",
    image: "/what_am_i_feeling_today.png",
    link: "https://what-am-i-feeling-today.vercel.app/",
  },
  {
    title: "Lehultsskogtjanst.se, made in wordpress.",
    image: "/lehultsskogstjanst.jpeg",
    link: "https://lehultsskogstjanst.se/",
  },
  {
    title: "Master thesis",
    image: "/transformer.png",
    link: "https://github.com/giffel99/metabolism_prediction",
  },
  {
    title: "Simple Wordle made in C++",
    image: "https://placehold.co/600x400",
    link: "https://github.com/giffel99/swedish_wordle_cpp",
  },
];
