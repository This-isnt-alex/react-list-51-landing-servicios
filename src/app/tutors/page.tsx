import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Star, Search, Filter, MapPin, Clock, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function TutorsPage() {
  const tutors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      specialties: ["Calculus", "Algebra", "Statistics"],
      rating: 4.9,
      reviews: 150,
      price: 45,
      location: "Online & New York",
      education: "PhD Mathematics, MIT",
      experience: "8 years",
      image: "/placeholder-avatar-1.jpg",
      verified: true,
      responseTime: "Within 1 hour"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      subject: "Computer Science",
      specialties: ["Python", "Data Structures", "Algorithms"],
      rating: 4.8,
      reviews: 89,
      price: 55,
      location: "Online & California",
      education: "MS Computer Science, Stanford",
      experience: "6 years",
      image: "/placeholder-avatar-2.jpg",
      verified: true,
      responseTime: "Within 2 hours"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      subject: "Chemistry",
      specialties: ["Organic Chemistry", "Biochemistry", "General Chemistry"],
      rating: 4.9,
      reviews: 124,
      price: 50,
      location: "Online & Texas",
      education: "PhD Chemistry, Harvard",
      experience: "10 years",
      image: "/placeholder-avatar-3.jpg",
      verified: true,
      responseTime: "Within 30 minutes"
    },
    {
      id: 4,
      name: "James Wilson",
      subject: "Physics",
      specialties: ["Mechanics", "Electromagnetism", "Quantum Physics"],
      rating: 4.7,
      reviews: 67,
      price: 40,
      location: "Online",
      education: "MS Physics, Caltech",
      experience: "4 years",
      image: "/placeholder-avatar-4.jpg",
      verified: true,
      responseTime: "Within 3 hours"
    },
    {
      id: 5,
      name: "Dr. Maria Garcia",
      subject: "Biology",
      specialties: ["Molecular Biology", "Genetics", "Cell Biology"],
      rating: 4.8,
      reviews: 98,
      price: 48,
      location: "Online & Florida",
      education: "PhD Biology, Johns Hopkins",
      experience: "7 years",
      image: "/placeholder-avatar-5.jpg",
      verified: true,
      responseTime: "Within 1 hour"
    },
    {
      id: 6,
      name: "Robert Kim",
      subject: "Economics",
      specialties: ["Microeconomics", "Macroeconomics", "Econometrics"],
      rating: 4.6,
      reviews: 45,
      price: 42,
      location: "Online & Illinois",
      education: "PhD Economics, University of Chicago",
      experience: "5 years",
      image: "/placeholder-avatar-6.jpg",
      verified: true,
      responseTime: "Within 4 hours"
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
                <Link href="/tutors" className="text-blue-600 font-medium px-3 py-2 rounded-md text-sm">Find Tutors</Link>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Tutor</h1>
          <p className="text-gray-600">Browse through our qualified educators and find the right match for your learning needs.</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by subject, tutor name, or keyword..."
                className="pl-10"
              />
            </div>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
                <SelectItem value="computer-science">Computer Science</SelectItem>
                <SelectItem value="economics">Economics</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-30">$0 - $30/hr</SelectItem>
                <SelectItem value="30-50">$30 - $50/hr</SelectItem>
                <SelectItem value="50-70">$50 - $70/hr</SelectItem>
                <SelectItem value="70+">$70+/hr</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="4.5+">4.5+ Stars</SelectItem>
                <SelectItem value="4.0+">4.0+ Stars</SelectItem>
                <SelectItem value="3.5+">3.5+ Stars</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Times</SelectItem>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
                <SelectItem value="weekend">Weekend</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">{tutors.length} tutors found</p>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Most Relevant</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <Card key={tutor.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={tutor.image} alt={tutor.name} />
                      <AvatarFallback>{tutor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{tutor.name}</CardTitle>
                        {tutor.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm">{tutor.subject}</CardDescription>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{tutor.rating}</span>
                        <span className="text-xs text-gray-500">({tutor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">${tutor.price}</p>
                    <p className="text-xs text-gray-500">per hour</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {tutor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>{tutor.education}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{tutor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Responds {tutor.responseTime}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1">View Profile</Button>
                  <Button variant="outline" className="flex-1">Message</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Tutors
          </Button>
        </div>
      </div>
    </div>
  );
}
