"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "QR Attendance", href: "#qr-attendance" },
    { name: "Face ID", href: "#face-id" },
    { name: "Reports", href: "#reports" },
    { name: "Schedule", href: "#schedule" },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-[#0b1220]/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-fuchsia-500 p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-md bg-[#0b1220]">
                <span className="text-sm font-bold text-white">AI</span>
              </div>
            </div>
            <span className="text-xl font-bold text-slate-100">AttendIQ</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="hidden md:block"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              <a href="/login">Login</a>
            </Button>
          </motion.div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-300">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0b1220] border-slate-800">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-slate-300 hover:text-white transition-colors duration-200 font-medium text-lg"
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button
                    asChild
                    className="bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 text-white mt-4"
                  >
                    <a href="/login">Login</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
