"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Star, Users, DollarSign, Clock, CheckCircle, Upload, Plus, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BecomeTutorPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);

  const subjects = [
    "Mathematics", "Physics", "Chemistry", "Biology", "Computer Science",
    "English", "History", "Economics", "Psychology", "Statistics",
    "Calculus", "Algebra", "Spanish", "French", "SAT Prep", "ACT Prep"
  ];

  const timeSlots = [
    "Monday Morning", "Monday Afternoon", "Monday Evening",
    "Tuesday Morning", "Tuesday Afternoon", "Tuesday Evening",
    "Wednesday Morning", "Wednesday Afternoon", "Wednesday Evening",
    "Thursday Morning", "Thursday Afternoon", "Thursday Evening",
    "Friday Morning", "Friday Afternoon", "Friday Evening",
    "Saturday Morning", "Saturday Afternoon", "Saturday Evening",
    "Sunday Morning", "Sunday Afternoon", "Sunday Evening"
  ];

  const addSubject = (subject: string) => {
    if (!selectedSubjects.includes(subject)) {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const removeSubject = (subject: string) => {
    setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
  };

  const toggleAvailability = (slot: string) => {
    if (availability.includes(slot)) {
      setAvailability(availability.filter(s => s !== slot));
    } else {
      setAvailability([...availability, slot]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TutorConnect</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/tutors" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Find Tutors</Link>
                <Link href="/become-tutor" className="text-blue-600 font-medium px-3 py-2 rounded-md text-sm">Become a Tutor</Link>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Share Your Knowledge,
            <span className="text-blue-600"> Earn Money</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of educators who are making a difference while earning extra income. Teach what you love, when you want.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Flexible Schedule</CardTitle>
                <CardDescription>Teach on your own time, whenever works for you</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Competitive Pay</CardTitle>
                <CardDescription>Set your own rates and earn $30-80+ per hour</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Build Your Reputation</CardTitle>
                <CardDescription>Get reviews and build a following of students</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">24/7 Support</CardTitle>
                <CardDescription>Get help whenever you need it from our team</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Tutoring Journey</h2>
            <p className="text-gray-600">Complete your profile to start connecting with students</p>
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Tutor Application</CardTitle>
              <CardDescription>Tell us about yourself and your expertise</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="subjects">Subjects</TabsTrigger>
                  <TabsTrigger value="availability">Availability</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <Input placeholder="City, State" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Upload your profile photo</p>
                      <Button variant="outline">Choose File</Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                      placeholder="Tell students about yourself, your teaching style, and what makes you a great tutor..."
                    />
                  </div>
                </TabsContent>

                <TabsContent value="education" className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Highest Degree</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your highest degree" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="professional">Professional Degree</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Field of Study</label>
                    <Input placeholder="e.g., Mathematics, Computer Science, English Literature" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">University/Institution</label>
                    <Input placeholder="Enter your university or institution name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                    <Input type="number" placeholder="2020" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Experience</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Certifications (Optional)</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="List any relevant certifications, licenses, or professional qualifications..."
                    />
                  </div>
                </TabsContent>

                <TabsContent value="subjects" className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Select Subjects You Can Teach</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                      {subjects.map((subject) => (
                        <button
                          key={subject}
                          onClick={() => addSubject(subject)}
                          className={`p-2 text-sm border rounded-md transition-colors ${
                            selectedSubjects.includes(subject)
                              ? 'bg-blue-100 border-blue-300 text-blue-700'
                              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {subject}
                        </button>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Selected Subjects</label>
                      <div className="flex flex-wrap gap-2">
                        {selectedSubjects.map((subject) => (
                          <Badge key={subject} variant="secondary" className="gap-1">
                            {subject}
                            <button onClick={() => removeSubject(subject)}>
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate (USD)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <Input type="number" placeholder="45" className="pl-8" />
                      <span className="absolute right-3 top-3 text-gray-500">/hour</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Average rates: $30-50 for undergraduate, $50-80 for graduate level</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Specialties</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Describe your specific areas of expertise within your subjects..."
                    />
                  </div>
                </TabsContent>

                <TabsContent value="availability" className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">When are you available to teach?</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => toggleAvailability(slot)}
                          className={`p-3 text-sm border rounded-md transition-colors ${
                            availability.includes(slot)
                              ? 'bg-blue-100 border-blue-300 text-blue-700'
                              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Teaching Method</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">Online Only</SelectItem>
                        <SelectItem value="in-person">In-Person Only</SelectItem>
                        <SelectItem value="both">Both Online and In-Person</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Any additional information about your availability or preferences..."
                    />
                  </div>
                </TabsContent>

                <div className="flex justify-between pt-6">
                  <Button variant="outline">Save Draft</Button>
                  <Button>Submit Application</Button>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Basic Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bachelor's degree or higher</li>
                  <li>• Strong knowledge in your subject area</li>
                  <li>• Reliable internet connection</li>
                  <li>• Enthusiasm for teaching</li>
                  <li>• Professional communication skills</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Application Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Complete the application form</li>
                  <li>• Background check verification</li>
                  <li>• Subject knowledge assessment</li>
                  <li>• Profile review and approval</li>
                  <li>• Start teaching and earning!</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
