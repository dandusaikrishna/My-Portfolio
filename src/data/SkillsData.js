import {
    FaBootstrap,
    FaCss3Alt,
    FaGithub,
    FaHtml5,
    FaCode, // Generic coding icon
    FaPuzzlePiece, // Icon to represent Problem Solving
    FaDatabase, // Generic database icon to represent SQL
} from "react-icons/fa";
import { DiJavascript1, DiPython, DiJava, DiMysql } from "react-icons/di";
import { SiDjango } from "react-icons/si";

import {
    SiTailwindcss,
    SiFirebase,
    SiMaterialui,
    SiPython, // Python icon for skills related to Python
} from "react-icons/si";

export const SkillsData = [
    // Your specified order starts here
    {
        name: "Python",
        icon: <DiPython />,
    },
    {
        name: "Java",
        icon: <DiJava />,
    },
    {
        name: "C",
        icon: <FaCode />,
    },
    {
        name: "HTML",
        icon: <FaHtml5 />,
    },
    {
        name: "CSS",
        icon: <FaCss3Alt />,
    },
    {
        name: "Django",
        icon: <SiDjango />,
    },
    {
        name: "Django REST Framework",
        icon: <SiDjangoRest />,
    },
    // The remaining skills in their original order
    { name: "MySQL", icon: <DiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "Celery", icon: <FaCode /> }, 
    { name: "Git", icon: <FaGithub /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Jira", icon: <SiJirasoftware /> },
    { name: "AWS", icon: <SiAmazonaws /> },
    { name: "Excel", icon: <FaDatabase /> }, 
	{
        name: "DSA",
        icon: <FaCode />, // Generic coding icon for DSA
    },
    {
        name: "Problem Solving",
        icon: <FaPuzzlePiece />, // Using FaPuzzlePiece to represent Problem Solving
    },
    {
        name: "JavaScript",
        icon: <DiJavascript1 />,
    },
    {
        name: "Material UI",
        icon: <SiMaterialui />,
    },
    {
        name: "Git",
        icon: <FaGithub />,
    },
  
    {
        name: "SQL",
        icon: <FaDatabase />, // Generic database icon to represent SQL
    },
    {
        name: "Tkinter",
        icon: <SiPython />, // Python icon for Tkinter as it's a Python GUI library
    },
    {
        name: "OpenCV",
        icon: <SiPython />, // Python icon for OpenCV as it is often used in Python
    },
    {
        name: "NumPy",
        icon: <SiPython />, // Python icon for NumPy as it is often used in Python
    },
    {
        name: "Pandas",
        icon: <SiPython />, // Python icon for Pandas as it is often used in Python
    },
    {
        name: "GUI",
        icon: <FaCode />, // Generic coding icon for GUI as it involves coding
    },
    {
        name: "MySQL",
        icon: <DiMysql />,
    },
];
