import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Moon, Sun, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? "text-primary" : "text-foreground"
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <picture>
              <source srcSet="/terminal-logo.webp" type="image/webp" />
              <img src="/terminal-logo.png" alt="Server Sanctum Logo" className="h-8 w-8 rounded bg-primary p-1" loading="lazy" />
            </picture>
            <span className="font-bold text-xl tracking-tight">Server Sanctum</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className={`transition-colors hover:text-primary ${isActive("/")}`}>
              Home
            </Link>
            <Link to="/blog" className={`transition-colors hover:text-primary ${isActive("/blog")}`}>
              Blog
            </Link>
            <Link to="/about" className={`transition-colors hover:text-primary ${isActive("/about")}`}>
              About
            </Link>
            <Link to="/contact" className={`transition-colors hover:text-primary ${isActive("/contact")}`}>
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="hover:bg-secondary"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-secondary">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
