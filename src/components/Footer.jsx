import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background text-foreground py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <span className="text-sm">&copy; {new Date().getFullYear()} ServerSanctum. All rights reserved.</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/about" className="hover:underline">About</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
