"use client"

import type React from "react"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  children?: React.ReactNode
  index: number
}

export function FeatureCard({ icon: Icon, title, description, children, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative overflow-hidden rounded-xl border border-slate-800/50 bg-slate-900/20 backdrop-blur-sm p-6 hover:border-indigo-500/30 transition-all duration-300"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-sky-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 via-sky-500/20 to-fuchsia-500/20 group-hover:from-indigo-500/30 group-hover:via-sky-500/30 group-hover:to-fuchsia-500/30 transition-all duration-300">
          <Icon className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
        </div>

        <h3 className="mb-2 text-lg font-semibold text-slate-100 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        <p className="mb-4 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
          {description}
        </p>

        {children && <div className="mt-4">{children}</div>}
      </div>
    </motion.div>
  )
}
