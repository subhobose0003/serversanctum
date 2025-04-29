import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Terminal, Code, Laptop, Settings } from "lucide-react"
import FeaturedBlogs from "./FeaturedBlogs";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-background py-20 hero-pattern">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container relative z-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Terminal className="mx-auto h-12 w-12 text-primary mb-6" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Tech Insights & Automation Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-lg text-muted-foreground"
            >
              Exploring the frontiers of automation, DevOps, and cloud architecture. Join me on this journey of continuous learning, system orchestration, and engineering excellence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/blog">
                <Button size="lg" className="group">
                  Read the Blog
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <FeaturedBlogs />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Settings className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automation Workflows</h3>
              <p className="text-muted-foreground">Orchestrating systems and processes for efficiency</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Terminal className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">DevOps Practices</h3>
              <p className="text-muted-foreground">Implementing efficient deployment pipelines</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Laptop className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Tech Stack</h3>
              <p className="text-muted-foreground">Using cutting-edge technologies</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
