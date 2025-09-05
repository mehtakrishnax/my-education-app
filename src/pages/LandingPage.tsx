"use client"

import { motion } from "framer-motion"
import {
  CheckCircle,
  QrCode,
  Camera,
  Calendar,
  BarChart3,
  Bell,
  Users,
  GraduationCap,
  Target,
  Percent,
  ArrowRight,
  Scan,
  UserCheck,
  AlertTriangle,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/Navbar"
import { FeatureCard } from "@/components/FeatureCard"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-slate-100 overflow-x-hidden">
      {/* Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance"
                >
                  Attendance that{" "}
                  <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
                    runs itself.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-slate-400 text-pretty max-w-2xl"
                >
                  Manual, QR, Face ID—one place. Real-time reports and nudges.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                  asChild
                >
                  <a href="/dashboard" className="inline-flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Try Demo
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                  asChild
                >
                  <a href="/dashboard" className="inline-flex items-center gap-2">
                    See Dashboards
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl border border-slate-800/50 bg-slate-900/20 backdrop-blur-sm p-6 shadow-2xl">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">Take Attendance</h3>
                </div>

                <Tabs defaultValue="manual" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
                    <TabsTrigger value="manual" className="text-xs">
                      Manual
                    </TabsTrigger>
                    <TabsTrigger value="qr" className="text-xs">
                      QR
                    </TabsTrigger>
                    <TabsTrigger value="face" className="text-xs">
                      Face
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="manual" className="mt-4 space-y-3">
                    {["John Doe", "Jane Smith", "Mike Johnson"].map((name, i) => (
                      <div key={name} className="flex items-center justify-between p-2 rounded-lg bg-slate-800/30">
                        <span className="text-sm text-slate-300">{name}</span>
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="qr" className="mt-4">
                    <div className="flex items-center justify-center p-8 rounded-lg bg-slate-800/30">
                      <QrCode className="h-16 w-16 text-indigo-400" />
                    </div>
                  </TabsContent>

                  <TabsContent value="face" className="mt-4">
                    <div className="flex items-center justify-center p-8 rounded-lg bg-slate-800/30">
                      <Camera className="h-16 w-16 text-sky-400" />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800/50">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: GraduationCap, label: "Schools", value: "2,500+" },
              { icon: Users, label: "Teachers", value: "15,000+" },
              { icon: Target, label: "Students", value: "500K+" },
              { icon: Percent, label: "Accuracy", value: "99.8%" },
            ].map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 via-sky-500/20 to-fuchsia-500/20 mb-3">
                  <stat.icon className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="text-2xl font-bold text-slate-100">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 text-balance">
              Everything you need for{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
                smart attendance
              </span>
            </h2>
            <p className="text-xl text-slate-400 text-pretty max-w-2xl mx-auto">
              From manual check-ins to AI-powered face recognition, we've got every attendance method covered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={CheckCircle}
              title="Manual Attendance"
              description="Traditional roll call with digital efficiency"
              index={0}
            >
              <div className="space-y-2">
                {["Quick check-in", "Bulk actions", "Offline support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                    {feature}
                  </div>
                ))}
              </div>
            </FeatureCard>

            <FeatureCard
              icon={QrCode}
              title="QR Scan"
              description="Generate class QR codes for instant attendance"
              index={1}
            >
              <div className="flex items-center justify-center p-4 rounded-lg bg-slate-800/30">
                <QrCode className="h-12 w-12 text-indigo-400" />
              </div>
            </FeatureCard>

            <FeatureCard
              icon={Camera}
              title="Face Recognition"
              description="AI-powered facial recognition for seamless check-ins"
              index={2}
            >
              <div className="flex items-center justify-center p-4 rounded-lg bg-slate-800/30">
                <div className="w-16 h-12 rounded border-2 border-dashed border-sky-400/50 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-sky-400" />
                </div>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={Calendar}
              title="Smart Scheduler"
              description="Drag-and-drop calendar with automated reminders"
              index={3}
            >
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-sm ${i % 7 === 0 || i % 7 === 6 ? "bg-slate-700" : "bg-indigo-500/30"}`}
                  />
                ))}
              </div>
            </FeatureCard>

            <FeatureCard
              icon={BarChart3}
              title="Advanced Reports"
              description="Real-time analytics with visual insights"
              index={4}
            >
              <div className="flex items-end justify-center gap-1 h-12">
                {[60, 80, 40, 90, 70].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-indigo-500 to-sky-500 rounded-sm w-3"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </FeatureCard>

            <FeatureCard
              icon={Bell}
              title="Smart Notifications"
              description="Automated alerts and attendance reminders"
              index={5}
            >
              <div className="space-y-2">
                <div className="p-2 rounded bg-indigo-500/20 border-l-2 border-indigo-500">
                  <div className="text-xs text-indigo-300">Class starting in 5 min</div>
                </div>
                <div className="p-2 rounded bg-amber-500/20 border-l-2 border-amber-500">
                  <div className="text-xs text-amber-300">3 students absent</div>
                </div>
              </div>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* QR Spotlight */}
      <section id="qr-attendance" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-100 mb-4">Generate Class QR</h3>
                <div className="inline-block p-8 rounded-2xl border border-slate-800/50 bg-slate-900/20 backdrop-blur-sm">
                  <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                    <QrCode className="h-24 w-24 text-slate-900" />
                  </div>
                </div>
                <Button className="mt-6 bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 text-white">
                  Generate QR Code
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-slate-100">How QR Attendance Works</h3>

              <div className="space-y-6">
                {[
                  { icon: Scan, title: "Open Scanner", desc: "Students scan the class QR code" },
                  { icon: UserCheck, title: "Auto Mark", desc: "Attendance marked automatically" },
                  { icon: AlertTriangle, title: "Absentees Flagged", desc: "Missing students highlighted instantly" },
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500/20 via-sky-500/20 to-fuchsia-500/20 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100 mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">How It Works</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Get started with AttendIQ in three simple steps</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Create Class", desc: "Set up your class and add students" },
              { icon: CheckCircle, title: "Mark Attendance", desc: "Use any method: manual, QR, or Face ID" },
              { icon: BarChart3, title: "Get Insights", desc: "View real-time reports and analytics" },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 via-sky-500/20 to-fuchsia-500/20 border border-slate-800/50">
                    <step.icon className="h-8 w-8 text-indigo-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 flex items-center justify-center text-xs font-bold text-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-fuchsia-500 p-0.5">
                  <div className="flex h-full w-full items-center justify-center rounded-md bg-[#0b1220]">
                    <span className="text-sm font-bold text-white">AI</span>
                  </div>
                </div>
                <span className="text-xl font-bold text-slate-100">AttendIQ</span>
              </div>
              <p className="text-slate-400 text-sm">Smart attendance management for modern educational institutions.</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-100 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#qr-attendance" className="hover:text-white transition-colors">
                    QR Attendance
                  </a>
                </li>
                <li>
                  <a href="#face-id" className="hover:text-white transition-colors">
                    Face ID
                  </a>
                </li>
                <li>
                  <a href="#reports" className="hover:text-white transition-colors">
                    Reports
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-100 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-100 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800/50 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 AttendIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
