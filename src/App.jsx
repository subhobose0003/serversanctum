import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar"
import Home from "@/components/Home"
import Blog from "@/components/Blog"
import BlogPost from "@/components/BlogPost"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-background">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Toaster />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
