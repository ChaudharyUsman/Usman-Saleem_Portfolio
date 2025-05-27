"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Projects.module.css"
import { ExternalLink, Github } from "lucide-react"

type ProjectCategory = "all" | "fullstack" | "ai" | "aiagent" | "mobile"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: ProjectCategory[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const projects: Project[] = [
    {
      id: 2,
      title: "Capital Valley (FYP)",
      description: "Capital Valley is a platform connecting startups with investors, helping new businesses secure funding and grow. It ensures idea protection, enables communication, and offers premium features like priority messaging. By bridging this gap, it fosters innovation, boosts economic growth, and supports the IT sector.",
      image: "/projects/CapitalValley.png",
      category: ["fullstack", "ai"],
      technologies: ["React", "Node.js", "openai", "Express"],
      liveUrl: "https://capitalvally.com/",
      githubUrl: "https://github.com/UsmanAli90/Capital_Valley",
    },
    {
      id: 1,
      title: "Task Management App",
      description: "A simple yet powerful web-based task management tool that helps you organize your daily workflow into three clear stages: Pending, In Progress, and Completed.",
      image: "/projects/task-management.jpg",
      category: ["aiagent"],
      technologies: ["TypeScript", "Assistant", "Gmail API"],
      liveUrl: "https://TaskManagement.com/",
      githubUrl: "https://github.com/ChaudharyUsman/To-do?tab=readme-ov-file",
    },
    {
      id: 3,
      title: "Math Riddle Generator",
      description: "The Math Riddle Generator is a Streamlit-based web application that generates unique math riddles based on user input. It leverages a fine-tuned GPT-2 model to create engaging and challenging riddles for users.",
      image: "/projects/Math Riddel.png",
      category: ["mobile","ai"],
      technologies: [ "Python","openai",  "TailwindCSS"],
      githubUrl: "https://github.com/ChaudharyUsman/Math-Riddle-Generator?tab=readme-ov-file",
    },

    {
      id: 6,
      title: "Transforming-Code-AI-Powered-C-Pseudocode-Translator",
      description: "This project is an AI-powered Transformer-based Translator that converts C++ code to Pseudocode and vice versa using a deep learning model. Built using PyTorch and Streamlit, this tool helps students, educators, and developers automate code translation while maintaining logic and structure.",
      image: "/projects/Transforming-Code-AI-Powered.png",
      category: ["aiagent"],
      technologies: ["AI","AI Agent", "Lead Generation","Openai"],
      githubUrl: "https://github.com/ChaudharyUsman/Transforming-Code-AI-Powered-C-Pseudocode-Translator-",
    },
    {
      id: 4,
      title: "Roman-Urdu-Poetry-Generator-LSTM",
      description: "The project demonstrates the use of deep learning techniques for natural language generation in low-resource languages like Roman Urdu. It's an excellent example of applying LSTM networks for sequence modeling tasks.",
      image: "/projects/roman urdu.png",
      category: ["ai", "aiagent"],
      technologies: ["AI","AI Agent", "Lead Generation","Openai"],
      githubUrl: "https://github.com/ChaudharyUsman/Roman-Urdu-Poetry-Generator-LSTM",
    },
    {
      id: 5,
      title: "Tesla Stock Price Prediction using LSTM",
      description: "This project aims to analyze and forecast Tesla's stock prices using Long Short-Term Memory (LSTM), a type of recurrent neural network (RNN) well-suited for time series forecasting. By leveraging historical stock data, we build a predictive model to estimate future stock prices.",
      image: "/projects/stock.png",
      category: ["ai","fullstack"],
      technologies: ["Python", "AI","AI Agent", "Lead Generation","Openai"],
      liveUrl: "https://PredictionLSTM.netlify.app/", 
      githubUrl: "https://github.com/ChaudharyUsman/Tesla-Stock-Price-Prediction-using-LSTM",
       },
    {
      id: 7,
      title: "Online Book Store",
      description: "A simple and responsive online book store website built using a full-stack approach.This project simulates an e-commerce platform where users can explore a collection of books, view details, and interact with features like signup/login, cart management, and more — all in a fully functional environment that includes both frontend and backend components.",
      image: "/projects/onlinebook.png",
      category: [ "fullstack"],
      technologies: ["React.js", "Openai", "Node.js", "Gmail API"],
      liveUrl: "https://onlinebookstore9197.netlify.app/",
    },
   
    {
      id: 9,
      title: "Predict Weather",
      description: "Developed a weather prediction application using open weather api to provide accurate weather forecasts.",
      image: "/projects/weather.png",
      category: ["fullstack"],
      technologies: ["React", "API", "Open Weather API"],
      githubUrl: "https://github.com/ChaudharyUsman/Weather-App",
    },

    {
      id: 9,
      title: "BodyFat-Explorer",
      description: "Bodyfat Explorer is an R package for analyzing and visualizing body fat composition data. It offers tools for data import, statistical analysis, modeling, and custom visualizations. Ideal for fitness enthusiasts, researchers, and healthcare professionals.",
      image: "/projects/bodyfat.png",
      category: ["ai"],
      technologies: ["R" , "Openai"],
      githubUrl: "https://github.com/ChaudharyUsman/BodyFat-Explorer",
    },

  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category.includes(activeCategory))

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className={styles.categories}>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "all" ? styles.active : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "fullstack" ? styles.active : ""}`}
            onClick={() => setActiveCategory("fullstack")}
          >
            Full Stack
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "ai" ? styles.active : ""}`}
            onClick={() => setActiveCategory("ai")}
          >
            AI & ML
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "aiagent" ? styles.active : ""}`}
            onClick={() => setActiveCategory("aiagent")}
          >
            Ai Agent & Chatbot
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "mobile" ? styles.active : ""}`}
            onClick={() => setActiveCategory("mobile")}
          >
            Mobile
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
