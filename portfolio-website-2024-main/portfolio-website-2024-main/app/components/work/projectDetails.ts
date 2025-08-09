import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiOpenai,
  SiOpencv,
  SiAnaconda,
  SiDlib,
  SiPytorch,
  SiGooglecloud,
  SiNvidia,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
    id: 0,
    name: "AeroPlanar",
    description:
      "AI Powered app designed for architects and engineers to streamline their workflows.",
    technologies: [SiTypescript, SiReact, SiTailwindcss, SiPython, SiOpenai],
    techNames: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Python",
      "OpenAI",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://python.org/",
      "https://convex.app/",
      "https://openai.com/",
    ],
    github: "https://github.com/Aerovity/AeroPlanar",
    demo: "https://github.com/Aerovity/AeroPlanar",
    image: "/projects/AeroPlanar.jpg",
    available: true,
  },
  {
    id: 0,
    name: "MetaSahra ",
    description:
      "First NorthAfrican and Arab AI Agent focused Devloping Company.",
    technologies: [SiTypescript, SiReact, SiTailwindcss, SiPython, SiOpenai],
    techNames: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Python",
      "OpenAI",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://python.org/",
      "https://convex.app/",
      "https://openai.com/",
    ],
    github: "https://www.metasahra.com/",
    demo: "https://www.metasahra.com/",
    image: "/projects/MetaSahra.png",
    available: true,
  },
  {
    id: 0,
    name: "Riglii - AI Powered NorthAfrican Freelance Website",
    description:
      "AI powered NorthAfrican Freelance Website",
    technologies: [SiTypescript, SiReact, SiTailwindcss, SiPython, SiOpenai],
    techNames: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Python",
      "OpenAI",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://python.org/",
      "https://convex.app/",
      "https://openai.com/",
    ],
    github: "https://riglii.com/",
    demo: "https://riglii.com/",
    image: "/projects/riglii.png",
    available: true,
  },
  {
    id: 0,
    name: "CV-Vision",
    description:
      "Your AI web-extension CV assistant, helping you to create CVs that stands out.",
    technologies: [SiTypescript, SiReact, SiTailwindcss, SiPython, SiOpenai],
    techNames: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Python",
      "OpenAI",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://python.org/",
      "https://convex.app/",
      "https://openai.com/",
    ],
    github: "https://github.com/faisalmujawar148/cvision",
    demo: "https://github.com/faisalmujawar148/cvision",
    image: "/projects/Cvision.png",
    available: true,
  },
  {
    id: 1,
    name: ":)Smiley",
    description:
      "AI trained Fake Smile Detector Model.",
    technologies: [SiPython, SiPytorch, SiReact, SiOpencv, SiDlib],
    techNames: ["Python", "C", "React", "Opencv", "Dlib"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://isocpp.org/",
      "https://react.org/",
      "https://opencv.org/",
      "https://Dlib.net/",
    ],
    github: "https://github.com/Aerovity/Smiley---Smile-Detector",
    demo: "https://www.linkedin.com/posts/abdelaziz-brahmi_we-all-face-people-giving-us-fake-smiles-activity-7313195640690245635-_c4e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQBIYYBoelbzKzwGq2qpl5YgA7OfPAZ7EQ",
    image: "/projects/smiley.jpg",
    available: true,
  },

  {
    id: 2,
    name: "ArticSense",
    description:
      "AI trained Model to detect and classify polar animal species.",
    technologies: [SiPython, SiAnaconda, SiOpencv, SiPytorch, SiGooglecloud],
    techNames: ["Python", "Ananconda", "OpenCV", "Pytorch", "Google Cloud"],
    techLinks: [
      "https://www.python.org/",
      "https://Ananconda.org/",
      "https://OpenCV.org/",
      "https://www.pytorch.org/",
      "https://googlecloud.com/",
    ],
    github: "https://github.com/Aerovity/ArticSense---Snow-Animals-AI-Spotter",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7318308996644331529/",
    image: "/projects/ArticSense.png",
    available: true,
  },
  {
    id: 3,
    name: "LabelFlow",
    description: "AI-powered application for automated data labeling using Nvidia Grounding Dino",
    technologies: [SiPython, SiAnaconda, SiOpencv, SiTypescript, SiNvidia],
    techNames: ["Python", "Ananconda", "OpenCV", "TypeScript", "Nvidia"],
    techLinks: [
      "https://www.python.org/",
      "https://Ananconda.org/",
      "https://OpenCV.org/",
      "https://www.typescriptlang.org/",
      "https://www.nvidia.com/"
    ],
    github: "https://lnkd.in/eVEjeUFUhttps://github.com/Aerovity/LabelFlow---AI-Data-Label-App",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7319007469408587776/",
    image: "/projects/LabelFlow.png",
    available: true,
  },
  {
    id: 3,
    name: "Tentacle 3D - AI-Powered 3D Modeling Tool",
    description: "AI-powered application for 3D modeling and design.",
    technologies: [SiPython, SiAnaconda, SiOpencv, SiTypescript, SiNvidia],
    techNames: ["Python", "Ananconda", "OpenCV", "TypeScript", "Nvidia"],
    techLinks: [
      "https://www.python.org/",
      "https://Ananconda.org/",
      "https://OpenCV.org/",
      "https://www.typescriptlang.org/",
      "https://www.nvidia.com/"
    ],
    github: "https://github.com/Aerovity/Tentacle3D",
    demo: "https://github.com/Aerovity/Tentacle3D",
    image: "/projects/Tentacle.jpg",
    available: true,
  },
  
];
