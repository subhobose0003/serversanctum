import React from "react"
import { motion } from "framer-motion"
import { Code, Server, Database, Globe } from "lucide-react"

const skills = [
  {
    category: "Automation & DevOps",
    items: ["CI/CD", "Infrastructure as Code", "Kubernetes", "Docker", "AWS", "Monitoring"],
    icon: <Globe className="h-6 w-6" />,
  },
  {
    category: "Cloud & Platforms",
    items: ["AWS", "Azure", "GCP", "Hybrid Cloud", "Linux"],
    icon: <Server className="h-6 w-6" />,
  },
  {
    category: "Programming & Scripting",
    items: ["Python", "Bash", "JavaScript", "Node.js", "TypeScript"],
    icon: <Code className="h-6 w-6" />,
  },
  {
    category: "Legacy & Integration",
    items: ["System Integration", "Legacy Modernization", "APIs", "Database Migration"],
    icon: <Database className="h-6 w-6" />,
  },
]

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <div className="mb-8">
              <img 
                className="mx-auto h-32 w-32 rounded-full border-4 border-primary/20"
                alt="Profile picture"
                src="/blog-images/profile.jpg" />
            </div>
            <h1 className="mb-4 text-4xl font-bold">About Me</h1>
            <p className="text-lg text-muted-foreground">
              I’m a software engineer focused on infrastructure and automation. I help clients streamline operations and modernize their environments by designing robust, scalable architectures that bridge open-source and proprietary tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-2xl font-bold">My Journey</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground">
                My professional journey has been defined by a passion for building pragmatic, future-ready solutions that align with business goals. Whether modernizing legacy setups or architecting new platforms from the ground up, I thrive on delivering results that empower organizations to achieve operational excellence. I have developed a keen understanding of the interplay between technology and business needs, enabling me to design infrastructures that are not only technically sound but also strategically aligned. Every project is an opportunity to transform complexity into clarity, driving efficiency and sustainable growth for my clients.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="mb-8 text-2xl font-bold">Skills & Expertise</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="rounded-lg border bg-card p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="text-primary">{skill.icon}</div>
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
