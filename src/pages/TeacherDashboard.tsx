"use client"

import type React from "react"
import DashboardLayout from "@/components/Layout/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Calendar, FileText, Clock, CheckCircle, AlertTriangle, Plus } from "lucide-react"
import { motion } from "framer-motion"

const TeacherDashboard: React.FC = () => {
  const classes = [
    {
      name: "Mathematics 101",
      students: 25,
      nextClass: "10:00 AM",
      attendance: "92%",
      assignments: 3,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Physics 201",
      students: 18,
      nextClass: "2:00 PM",
      attendance: "88%",
      assignments: 2,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Chemistry Lab",
      students: 15,
      nextClass: "Tomorrow",
      attendance: "95%",
      assignments: 1,
      color: "from-green-500 to-emerald-500",
    },
  ]

  const quickActions = [
    { title: "Create Assignment", icon: Plus, color: "from-cyan-500 to-blue-500" },
    { title: "Grade Papers", icon: FileText, color: "from-purple-500 to-pink-500" },
    { title: "Schedule Class", icon: Calendar, color: "from-green-500 to-emerald-500" },
    { title: "View Students", icon: Users, color: "from-orange-500 to-red-500" },
  ]

  const submissions = [
    { student: "John Smith", assignment: "Math Assignment", time: "2 minutes ago", status: "new" },
    { student: "Sarah Johnson", assignment: "Physics Lab", time: "15 minutes ago", status: "reviewed" },
    { student: "Mike Davis", assignment: "Chemistry Report", time: "1 hour ago", status: "new" },
    { student: "Emma Wilson", assignment: "Calculus Problem Set", time: "2 hours ago", status: "graded" },
  ]

  const deadlines = [
    { task: "Grade Midterm Exams", timeLeft: "2 days left", priority: "high" },
    { task: "Submit Progress Reports", timeLeft: "1 week left", priority: "medium" },
    { task: "Parent-Teacher Meetings", timeLeft: "2 weeks left", priority: "low" },
    { task: "Curriculum Review", timeLeft: "3 weeks left", priority: "low" },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-400"
      case "medium":
        return "text-yellow-400"
      case "low":
        return "text-green-400"
      default:
        return "text-gray-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new":
        return <AlertTriangle className="h-4 w-4 text-orange-400" />
      case "reviewed":
        return <Clock className="h-4 w-4 text-blue-400" />
      case "graded":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      default:
        return <FileText className="h-4 w-4 text-gray-400" />
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <DashboardLayout title="Teacher Dashboard">
        <div className="relative z-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className={`h-24 w-full bg-gradient-to-r ${action.color} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center space-y-2`}
                >
                  <action.icon className="h-6 w-6" />
                  <span className="text-sm font-medium">{action.title}</span>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card className="bg-gray-900/80 backdrop-blur-xl border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">My Classes</CardTitle>
                <CardDescription className="text-gray-300">Overview of your current classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classes.map((cls, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${cls.color} opacity-80`}>
                          <BookOpen className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{cls.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{cls.students} students</span>
                            <span>•</span>
                            <span>{cls.attendance} attendance</span>
                            <span>•</span>
                            <span>{cls.assignments} pending</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-200">Next class</p>
                        <p className="text-sm text-cyan-400">{cls.nextClass}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Card className="bg-gray-900/80 backdrop-blur-xl border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-white">Recent Submissions</CardTitle>
                  <CardDescription className="text-gray-300">Student work awaiting review</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {submissions.map((submission, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(submission.status)}
                          <div>
                            <span className="text-sm text-gray-200">{submission.student}</span>
                            <p className="text-xs text-gray-400">{submission.assignment}</p>
                            <p className="text-xs text-gray-500">{submission.time}</p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                        >
                          Review
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Card className="bg-gray-900/80 backdrop-blur-xl border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-white">Upcoming Deadlines</CardTitle>
                  <CardDescription className="text-gray-300">Important tasks and due dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {deadlines.map((deadline, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 + index * 0.1 }}
                      >
                        <span className="text-sm text-gray-200">{deadline.task}</span>
                        <span className={`text-sm font-medium ${getPriorityColor(deadline.priority)}`}>
                          {deadline.timeLeft}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default TeacherDashboard
