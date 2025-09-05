"use client"

import type React from "react"
import DashboardLayout from "@/components/Layout/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, GraduationCap, BarChart3, TrendingUp, Activity, Server, Database, Zap } from "lucide-react"
import { motion } from "framer-motion"

const AdminDashboard: React.FC = () => {
  const stats = [
    { title: "Total Students", value: "1,234", icon: Users, change: "+12%", color: "from-cyan-500 to-blue-500" },
    { title: "Total Teachers", value: "56", icon: GraduationCap, change: "+3%", color: "from-purple-500 to-pink-500" },
    { title: "Total Courses", value: "89", icon: BookOpen, change: "+8%", color: "from-green-500 to-emerald-500" },
    { title: "Completion Rate", value: "87%", icon: BarChart3, change: "+5%", color: "from-orange-500 to-red-500" },
  ]

  const activities = [
    { type: "registration", message: "New student registration", time: "2 minutes ago", color: "bg-blue-500" },
    { type: "completion", message: "Course completion milestone", time: "15 minutes ago", color: "bg-green-500" },
    { type: "grades", message: "Teacher submitted grades", time: "1 hour ago", color: "bg-yellow-500" },
    { type: "system", message: "System backup completed", time: "2 hours ago", color: "bg-purple-500" },
    { type: "attendance", message: "Attendance report generated", time: "3 hours ago", color: "bg-cyan-500" },
  ]

  const systemMetrics = [
    { label: "Server Status", value: "Online", status: "healthy", icon: Server },
    { label: "Database", value: "Healthy", status: "healthy", icon: Database },
    { label: "Active Users", value: "234", status: "normal", icon: Users },
    { label: "Response Time", value: "45ms", status: "excellent", icon: Zap },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
      case "excellent":
        return "text-green-400"
      case "normal":
        return "text-blue-400"
      case "warning":
        return "text-yellow-400"
      default:
        return "text-gray-400"
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

      <DashboardLayout title="Admin Dashboard">
        <div className="relative z-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gray-900/80 backdrop-blur-xl border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-300 mb-1">{stat.title}</p>
                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                        <p className="text-sm text-green-400 mt-1">{stat.change} from last month</p>
                      </div>
                      <div
                        className={`p-3 rounded-full bg-gradient-to-r ${stat.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                      >
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="bg-gray-900/80 backdrop-blur-xl border-gray-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Activity className="mr-2 h-5 w-5 text-cyan-400" />
                    Recent Activities
                  </CardTitle>
                  <CardDescription className="text-gray-300">Latest system activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.map((activity, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className={`w-3 h-3 ${activity.color} rounded-full animate-pulse`}></div>
                        <div className="flex-1">
                          <span className="text-sm text-gray-200">{activity.message}</span>
                          <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Card className="bg-gray-900/80 backdrop-blur-xl border-gray-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <TrendingUp className="mr-2 h-5 w-5 text-green-400" />
                    System Overview
                  </CardTitle>
                  <CardDescription className="text-gray-300">Platform performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemMetrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <div className="flex items-center space-x-3">
                          <metric.icon className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-200">{metric.label}</span>
                        </div>
                        <span className={`text-sm font-medium ${getStatusColor(metric.status)}`}>{metric.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Card className="bg-gray-900/80 backdrop-blur-xl border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Performance Analytics</CardTitle>
                <CardDescription className="text-gray-300">System usage and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">98.5%</div>
                    <div className="text-sm text-gray-300">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">2.3s</div>
                    <div className="text-sm text-gray-300">Avg Load Time</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-1">1,847</div>
                    <div className="text-sm text-gray-300">Daily Active Users</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default AdminDashboard
