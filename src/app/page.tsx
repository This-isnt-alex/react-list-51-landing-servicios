import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Users, Star, Clock, Shield, Award } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TutorConnect</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/tutors" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Find Tutors</Link>
                <Link href="/become-tutor" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Become a Tutor</Link>
                <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">How it Works</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="text-blue-600"> Tutor</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with expert tutors for personalized learning. Master any subject with one-on-one guidance from qualified educators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Find a Tutor
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Become a Tutor
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TutorConnect?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make learning accessible, flexible, and effective with our comprehensive tutoring platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Expert Tutors</CardTitle>
                <CardDescription>
                  Qualified educators with proven track records in their subjects
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Flexible Scheduling</CardTitle>
                <CardDescription>
                  Book sessions that fit your schedule, available 24/7
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Safe & Secure</CardTitle>
                <CardDescription>
                  Background-checked tutors with secure payment processing
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Subjects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Subjects</h2>
            <p className="text-gray-600">Find expert tutors for these in-demand subjects</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Mathematics", "Physics", "Chemistry", "Biology", "English",
              "Computer Science", "Statistics", "Calculus", "Algebra", "History",
              "Economics", "Psychology", "Spanish", "French", "SAT Prep"
            ].map((subject) => (
              <Badge key={subject} variant="secondary" className="px-4 py-2 text-sm">
                {subject}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Tutors</h2>
            <p className="text-gray-600">Meet some of our top-rated educators</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                subject: "Mathematics",
                rating: 4.9,
                students: 150,
                price: "$45/hr",
                image: "/placeholder-avatar-1.jpg"
              },
              {
                name: "Prof. Michael Chen",
                subject: "Computer Science",
                rating: 4.8,
                students: 89,
                price: "$55/hr",
                image: "/placeholder-avatar-2.jpg"
              },
              {
                name: "Dr. Emily Rodriguez",
                subject: "Chemistry",
                rating: 4.9,
                students: 124,
                price: "$50/hr",
                image: "/placeholder-avatar-3.jpg"
              }
            ].map((tutor) => (
              <Card key={tutor.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={tutor.image} alt={tutor.name} />
                    <AvatarFallback>{tutor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{tutor.name}</CardTitle>
                  <CardDescription>{tutor.subject}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{tutor.rating}</span>
                    <span className="text-gray-500">({tutor.students} students)</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{tutor.price}</p>
                  <Button className="w-full">View Profile</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of students who have improved their grades with our expert tutors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Find Your Tutor
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">TutorConnect</span>
              </div>
              <p className="text-gray-400">
                Connecting students with expert tutors for personalized learning experiences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Students</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tutors" className="hover:text-white">Find Tutors</Link></li>
                <li><Link href="/subjects" className="hover:text-white">Browse Subjects</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white">How it Works</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Tutors</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/become-tutor" className="hover:text-white">Become a Tutor</Link></li>
                <li><Link href="/tutor-resources" className="hover:text-white">Resources</Link></li>
                <li><Link href="/tutor-support" className="hover:text-white">Support</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TutorConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
