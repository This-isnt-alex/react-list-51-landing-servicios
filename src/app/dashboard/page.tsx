"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Calendar,
  Clock,
  Star,
  MessageCircle,
  Video,
  User,
  CreditCard,
  TrendingUp,
  BookmarkPlus,
  Search,
  Bell
} from "lucide-react";
import Link from "next/link";

export default function StudentDashboard() {
  const upcomingSessions = [
    {
      id: 1,
      tutor: "Dr. Sarah Johnson",
      subject: "Mathematics",
      topic: "Calculus - Derivatives",
      date: "Today",
      time: "2:00 PM",
      duration: "1 hour",
      sessionType: "Video Call",
      tutorImage: "/placeholder-avatar-1.jpg"
    },
    {
      id: 2,
      tutor: "Prof. Michael Chen",
      subject: "Computer Science",
      topic: "Data Structures - Binary Trees",
      date: "Tomorrow",
      time: "10:00 AM",
      duration: "1.5 hours",
      sessionType: "Video Call",
      tutorImage: "/placeholder-avatar-2.jpg"
    },
    {
      id: 3,
      tutor: "Dr. Emily Rodriguez",
      subject: "Chemistry",
      topic: "Organic Chemistry Review",
      date: "Mar 15",
      time: "3:30 PM",
      duration: "1 hour",
      sessionType: "Video Call",
      tutorImage: "/placeholder-avatar-3.jpg"
    }
  ];

  const recentSessions = [
    {
      id: 1,
      tutor: "James Wilson",
      subject: "Physics",
      topic: "Quantum Mechanics",
      date: "Mar 10",
      rating: 5,
      notes: "Excellent explanation of wave functions",
      tutorImage: "/placeholder-avatar-4.jpg"
    },
    {
      id: 2,
      tutor: "Dr. Maria Garcia",
      subject: "Biology",
      topic: "Cell Division",
      date: "Mar 8",
      rating: 4,
      notes: "Very helpful with mitosis process",
      tutorImage: "/placeholder-avatar-5.jpg"
    }
  ];

  const favoriteTutors = [
    {
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      rating: 4.9,
      image: "/placeholder-avatar-1.jpg"
    },
    {
      name: "Prof. Michael Chen",
      subject: "Computer Science",
      rating: 4.8,
      image: "/placeholder-avatar-2.jpg"
    },
    {
      name: "Dr. Emily Rodriguez",
      subject: "Chemistry",
      rating: 4.9,
      image: "/placeholder-avatar-3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TutorConnect</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/dashboard" className="text-blue-600 font-medium px-3 py-2 rounded-md text-sm">Dashboard</Link>
                <Link href="/tutors" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Find Tutors</Link>
                <Link href="/sessions" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">My Sessions</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/student-avatar.jpg" alt="Student" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's your learning progress and upcoming sessions.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+3 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hours Learned</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">36</div>
              <p className="text-xs text-muted-foreground">+5 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">From tutor feedback</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Subjects</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Math, Physics, Chemistry</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Search className="h-5 w-5" />
                Find a Tutor
              </CardTitle>
              <CardDescription>Browse our expert tutors and book a session</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tutors">
                <Button className="w-full">Browse Tutors</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Calendar className="h-5 w-5" />
                Schedule Session
              </CardTitle>
              <CardDescription>Book with your favorite tutors quickly</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-100">
                Quick Schedule
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <MessageCircle className="h-5 w-5" />
                Messages
              </CardTitle>
              <CardDescription>Chat with your tutors</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-100">
                View Messages
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Sessions */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="upcoming" className="space-y-6">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
                <TabsTrigger value="recent">Recent Sessions</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-4">
                {upcomingSessions.map((session) => (
                  <Card key={session.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={session.tutorImage} alt={session.tutor} />
                            <AvatarFallback>{session.tutor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{session.tutor}</CardTitle>
                            <CardDescription>{session.subject} • {session.topic}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="gap-1">
                          <Video className="h-3 w-3" />
                          {session.sessionType}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {session.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {session.time} ({session.duration})
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          <Button size="sm">
                            <Video className="h-4 w-4 mr-1" />
                            Join Session
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="recent" className="space-y-4">
                {recentSessions.map((session) => (
                  <Card key={session.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={session.tutorImage} alt={session.tutor} />
                            <AvatarFallback>{session.tutor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{session.tutor}</CardTitle>
                            <CardDescription>{session.subject} • {session.topic}</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={`star-${session.id}-${i}`}
                              className={`h-4 w-4 ${
                                i < session.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {session.date}
                          </div>
                          <div className="text-gray-700">"{session.notes}"</div>
                        </div>
                        <Button variant="outline" size="sm">
                          Book Again
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Favorite Tutors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookmarkPlus className="h-5 w-5" />
                  Favorite Tutors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {favoriteTutors.map((tutor) => (
                  <div key={tutor.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={tutor.image} alt={tutor.name} />
                        <AvatarFallback>{tutor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{tutor.name}</p>
                        <p className="text-xs text-gray-600">{tutor.subject}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{tutor.rating}</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full text-sm">
                  View All Favorites
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <User className="h-4 w-4" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <CreditCard className="h-4 w-4" />
                  Payment Methods
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule Preferences
                </Button>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card>
              <CardHeader>
                <CardTitle>This Month's Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Mathematics</span>
                    <span>8 hours</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Physics</span>
                    <span>6 hours</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Chemistry</span>
                    <span>4 hours</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '40%' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
