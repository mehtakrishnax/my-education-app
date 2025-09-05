"use client"

import type React from "react"
import { useState } from "react"
import DashboardLayout from "@/components/Layout/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Calendar,
  FileText,
  Trophy,
  Clock,
  Star,
  Target,
  TrendingUp,
  Download,
  Eye,
  CheckCircle,
  AlertCircle,
  Users,
  Award,
  Book,
  Play,
  PenTool,
} from "lucide-react"
import { motion } from "framer-motion"

const StudentDashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("overview")

  // Mock data
  const courses = [
    {
      id: 1,
      name: "Mathematics",
      progress: 85,
      grade: "A-",
      instructor: "Dr. Smith",
      nextAssignment: "Calculus Problem Set",
      dueDate: "2024-03-15",
      totalAssignments: 12,
      completedAssignments: 10,
      credits: 3,
    },
    {
      id: 2,
      name: "Physics",
      progress: 72,
      grade: "B+",
      instructor: "Prof. Johnson",
      nextAssignment: "Lab Report",
      dueDate: "2024-03-18",
      totalAssignments: 8,
      completedAssignments: 6,
      credits: 4,
    },
    {
      id: 3,
      name: "Chemistry",
      progress: 90,
      grade: "A",
      instructor: "Dr. Wilson",
      nextAssignment: "Research Paper",
      dueDate: "2024-03-25",
      totalAssignments: 10,
      completedAssignments: 9,
      credits: 3,
    },
    {
      id: 4,
      name: "English Literature",
      progress: 78,
      grade: "B",
      instructor: "Ms. Davis",
      nextAssignment: "Essay Analysis",
      dueDate: "2024-03-20",
      totalAssignments: 15,
      completedAssignments: 12,
      credits: 3,
    },
    {
      id: 5,
      name: "Computer Science",
      progress: 95,
      grade: "A+",
      instructor: "Mr. Brown",
      nextAssignment: "Final Project",
      dueDate: "2024-04-01",
      totalAssignments: 6,
      completedAssignments: 6,
      credits: 4,
    },
    {
      id: 6,
      name: "History",
      progress: 68,
      grade: "B-",
      instructor: "Dr. Miller",
      nextAssignment: "Timeline Project",
      dueDate: "2024-03-22",
      totalAssignments: 9,
      completedAssignments: 6,
      credits: 2,
    },
  ]

  const upcomingAssignments = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Calculus Problem Set",
      dueDate: "Tomorrow",
      priority: "high",
      description: "Complete problems 1-25 from Chapter 12",
      estimatedTime: "2 hours",
      type: "homework",
    },
    {
      id: 2,
      subject: "Physics",
      title: "Lab Report",
      dueDate: "3 days",
      priority: "medium",
      description: "Wave interference experiment analysis",
      estimatedTime: "3 hours",
      type: "lab",
    },
    {
      id: 3,
      subject: "English Literature",
      title: "Essay Analysis",
      dueDate: "5 days",
      priority: "medium",
      description: 'Analyze themes in "To Kill a Mockingbird"',
      estimatedTime: "4 hours",
      type: "essay",
    },
    {
      id: 4,
      subject: "Chemistry",
      title: "Research Paper",
      dueDate: "1 week",
      priority: "low",
      description: "Environmental impact of chemical processes",
      estimatedTime: "6 hours",
      type: "research",
    },
  ]

  const recentGrades = [
    { subject: "Computer Science", assignment: "Algorithm Project", grade: "A+", date: "2024-03-10", points: "98/100" },
    { subject: "Mathematics", assignment: "Midterm Exam", grade: "A-", date: "2024-03-08", points: "92/100" },
    { subject: "Physics", assignment: "Quantum Mechanics Quiz", grade: "B+", date: "2024-03-05", points: "87/100" },
    { subject: "Chemistry", assignment: "Lab Practical", grade: "A", date: "2024-03-03", points: "95/100" },
    { subject: "English Literature", assignment: "Poetry Analysis", grade: "B", date: "2024-03-01", points: "85/100" },
  ]

  const schedule = [
    { time: "09:00 AM", subject: "Mathematics", room: "Room 201", type: "Lecture" },
    { time: "10:30 AM", subject: "Physics Lab", room: "Lab 105", type: "Laboratory" },
    { time: "01:00 PM", subject: "English Literature", room: "Room 304", type: "Seminar" },
    { time: "02:30 PM", subject: "Chemistry", room: "Room 205", type: "Lecture" },
    { time: "04:00 PM", subject: "Study Hall", room: "Library", type: "Self Study" },
  ]

  const achievements = [
    { title: "Dean's List", description: "Academic Excellence Fall 2023", icon: Trophy, color: "text-yellow-500" },
    { title: "Perfect Attendance", description: "30 days streak", icon: Award, color: "text-green-500" },
    { title: "Top Performer", description: "Computer Science Course", icon: Star, color: "text-purple-500" },
    { title: "Research Award", description: "Chemistry Department", icon: Target, color: "text-blue-500" },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "homework":
        return PenTool
      case "lab":
        return Book
      case "essay":
        return FileText
      case "research":
        return Target
      default:
        return FileText
    }
  }

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "text-green-600 bg-green-50"
    if (grade.startsWith("B")) return "text-blue-600 bg-blue-50"
    if (grade.startsWith("C")) return "text-yellow-600 bg-yellow-50"
    return "text-red-600 bg-red-50"
  }

  const calculateGPA = () => {
    let totalPoints = 0
    let totalCredits = 0

    courses.forEach((course) => {
      const gradePoints = {
        "A+": 4.0,
        A: 4.0,
        "A-": 3.7,
        "B+": 3.3,
        B: 3.0,
        "B-": 2.7,
        "C+": 2.3,
        C: 2.0,
        "C-": 1.7,
        D: 1.0,
        F: 0.0,
      }

      const points = gradePoints[course.grade as keyof typeof gradePoints] || 0
      totalPoints += points * course.credits
      totalCredits += course.credits
    })

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00"
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <DashboardLayout title="Student Dashboard">
        <div className="relative z-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gradient-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-xl border-blue-700/50 hover:border-blue-600/50 transition-all duration-300">
                <CardContent className="flex items-center p-6">
                  <div className="p-3 bg-blue-500/20 rounded-full mr-4 border border-blue-500/30">
                    <Trophy className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-200">Current GPA</p>
                    <p className="text-2xl font-bold text-white">{calculateGPA()}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gradient-to-r from-green-900/80 to-emerald-900/80 backdrop-blur-xl border-green-700/50 hover:border-green-600/50 transition-all duration-300">
                <CardContent className="flex items-center p-6">
                  <div className="p-3 bg-green-500/20 rounded-full mr-4 border border-green-500/30">
                    <BookOpen className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-200">Total Courses</p>
                    <p className="text-2xl font-bold text-white">{courses.length}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gradient-to-r from-purple-900/80 to-pink-900/80 backdrop-blur-xl border-purple-700/50 hover:border-purple-600/50 transition-all duration-300">
                <CardContent className="flex items-center p-6">
                  <div className="p-3 bg-purple-500/20 rounded-full mr-4 border border-purple-500/30">
                    <FileText className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-200">Assignments Due</p>
                    <p className="text-2xl font-bold text-white">{upcomingAssignments.length}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gradient-to-r from-orange-900/80 to-red-900/80 backdrop-blur-xl border-orange-700/50 hover:border-orange-600/50 transition-all duration-300">
                <CardContent className="flex items-center p-6">
                  <div className="p-3 bg-orange-500/20 rounded-full mr-4 border border-orange-500/30">
                    <Clock className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-orange-200">Study Hours</p>
                    <p className="text-2xl font-bold text-white">24.5</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-gray-900/80 backdrop-blur-xl border border-gray-700/50">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-gray-300"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="courses"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-gray-300"
                >
                  Courses
                </TabsTrigger>
                <TabsTrigger
                  value="assignments"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-gray-300"
                >
                  Assignments
                </TabsTrigger>
                <TabsTrigger
                  value="grades"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-gray-300"
                >
                  Grades
                </TabsTrigger>
                <TabsTrigger
                  value="schedule"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-gray-300"
                >
                  Schedule
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-gray-900/80 backdrop-blur-xl border-gray-700/50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <TrendingUp className="mr-2 h-5 w-5 text-cyan-400" />
                        Course Progress
                      </CardTitle>
                      <CardDescription className="text-gray-300">Your current academic progress</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {courses.slice(0, 3).map((course, index) => (
                          <motion.div
                            key={index}
                            className="space-y-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                          >
                            <div className="flex justify-between items-center">
                              <h3 className="font-semibold text-white">{course.name}</h3>
                              <Badge variant="outline" className={`${getGradeColor(course.grade)} border-current`}>
                                {course.grade}
                              </Badge>
                            </div>
                            <Progress value={course.progress} className="h-2 bg-gray-700" />
                            <div className="flex justify-between text-sm text-gray-400">
                              <span>{course.progress}% complete</span>
                              <span>
                                {course.completedAssignments}/{course.totalAssignments} assignments
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-4 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                        onClick={() => setSelectedTab("courses")}
                      >
                        View All Courses
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertCircle className="mr-2 h-5 w-5" />
                        Upcoming Assignments
                      </CardTitle>
                      <CardDescription>Stay on top of your deadlines</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingAssignments.slice(0, 3).map((assignment, index) => {
                          const TypeIcon = getTypeIcon(assignment.type)
                          return (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <TypeIcon className="h-4 w-4 text-gray-500" />
                                <div>
                                  <h4 className="font-semibold text-sm">{assignment.title}</h4>
                                  <p className="text-xs text-gray-600">{assignment.subject}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge className={getPriorityColor(assignment.priority)}>{assignment.priority}</Badge>
                                <span className="text-xs text-gray-600">Due in {assignment.dueDate}</span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-4 bg-transparent"
                        onClick={() => setSelectedTab("assignments")}
                      >
                        View All Assignments
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="mr-2 h-5 w-5" />
                        Recent Grades
                      </CardTitle>
                      <CardDescription>Your latest assessment results</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {recentGrades.slice(0, 4).map((grade, index) => (
                          <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                            <div>
                              <p className="font-medium text-sm">{grade.assignment}</p>
                              <p className="text-xs text-gray-600">{grade.subject}</p>
                            </div>
                            <div className="text-right">
                              <Badge className={getGradeColor(grade.grade)}>{grade.grade}</Badge>
                              <p className="text-xs text-gray-600 mt-1">{grade.points}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-4 bg-transparent"
                        onClick={() => setSelectedTab("grades")}
                      >
                        View All Grades
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="mr-2 h-5 w-5" />
                        Achievements
                      </CardTitle>
                      <CardDescription>Your academic accomplishments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {achievements.map((achievement, index) => {
                          const Icon = achievement.icon
                          return (
                            <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                              <Icon className={`h-6 w-6 ${achievement.color}`} />
                              <div>
                                <p className="font-medium text-sm">{achievement.title}</p>
                                <p className="text-xs text-gray-600">{achievement.description}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="courses" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <Card key={course.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{course.name}</CardTitle>
                          <Badge className={getGradeColor(course.grade)}>{course.grade}</Badge>
                        </div>
                        <CardDescription>
                          {course.instructor} • {course.credits} Credits
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>

                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Assignments:</span>
                              <span>
                                {course.completedAssignments}/{course.totalAssignments}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Next Assignment:</span>
                              <span className="font-medium">{course.nextAssignment}</span>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                              <Eye className="mr-2 h-4 w-4" />
                              View Course
                            </Button>
                            <Button size="sm" className="flex-1">
                              <Play className="mr-2 h-4 w-4" />
                              Continue
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="assignments" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {upcomingAssignments.map((assignment) => {
                    const TypeIcon = getTypeIcon(assignment.type)
                    return (
                      <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="flex items-center">
                              <TypeIcon className="mr-2 h-5 w-5" />
                              {assignment.title}
                            </CardTitle>
                            <Badge className={getPriorityColor(assignment.priority)}>{assignment.priority}</Badge>
                          </div>
                          <CardDescription>{assignment.subject}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-sm text-gray-700">{assignment.description}</p>

                            <div className="flex justify-between text-sm">
                              <span className="flex items-center text-gray-600">
                                <Clock className="mr-1 h-4 w-4" />
                                {assignment.estimatedTime}
                              </span>
                              <span className="flex items-center text-gray-600">
                                <Calendar className="mr-1 h-4 w-4" />
                                Due in {assignment.dueDate}
                              </span>
                            </div>

                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </Button>
                              <Button size="sm" className="flex-1">
                                <FileText className="mr-2 h-4 w-4" />
                                Start Work
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="grades" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Grade History</CardTitle>
                    <CardDescription>Detailed view of all your grades and assessments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentGrades.map((grade, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-full ${getGradeColor(grade.grade)}`}>
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{grade.assignment}</h3>
                              <p className="text-sm text-gray-600">{grade.subject}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={getGradeColor(grade.grade)}>{grade.grade}</Badge>
                            <p className="text-sm text-gray-600 mt-1">{grade.points}</p>
                            <p className="text-xs text-gray-500">{grade.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      Today's Schedule
                    </CardTitle>
                    <CardDescription>Your class schedule for today</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {schedule.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
                            <Clock className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">{item.subject}</h3>
                              <Badge variant="outline">{item.type}</Badge>
                            </div>
                            <p className="text-sm text-gray-600">{item.room}</p>
                            <p className="text-sm font-medium text-blue-600">{item.time}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            <Users className="mr-2 h-4 w-4" />
                            Join
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default StudentDashboard
