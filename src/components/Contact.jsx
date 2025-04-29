import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Mail, MessageSquare } from "lucide-react"

const Contact = () => {
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
            <MessageSquare className="mx-auto h-12 w-12 text-primary mb-6" />
            <h1 className="mb-4 text-4xl font-bold">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Contact Form</h2>
              <form className="space-y-4" action="https://formspree.io/f/xovdjweegett" method="POST">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-md border bg-background px-4 py-2"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-md border bg-background px-4 py-2"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    className="w-full rounded-md border bg-background px-4 py-2"
                    rows="4"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <Button className="w-full" type="submit">Send Message</Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Connect</h2>
              <p className="text-muted-foreground">
                You can also reach out to me on social media or via email.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:connect@serversanctum.in"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>connect@serversanctum.in</span>
                </a>
                <a
                  href="https://github.com/subhobose0003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.464-1.11-1.464-.908-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.09.636-1.341-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.547 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://twitter.com/deguye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.13 12.13 0 013 4.8a4.28 4.28 0 001.33 5.71c-.7-.02-1.37-.21-1.95-.54v.05a4.29 4.29 0 003.43 4.2c-.43.12-.89.16-1.36.06a4.29 4.29 0 004 2.97A8.6 8.6 0 012 19.54 12.13 12.13 0 008.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 4.59a8.36 8.36 0 01-2.54.7z"/></svg>
                  <span>Twitter</span>
                </a>
                <a
                  href="https://linkedin.com/in/subhasis-bose/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/></svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
