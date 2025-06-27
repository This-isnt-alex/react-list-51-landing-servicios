import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Search,
  Calendar,
  Video,
  Star,
  CreditCard,
  UserPlus,
  FileText,
  CheckCircle,
  MessageSquare,
  TrendingUp,
  Shield
} from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
  const studentSteps = [
    {
      step: 1,
      title: "Browse Tutors",
      description: "Search through our verified tutors by subject, price, rating, and availability.",
      icon: Search,
      details: ["Filter by subject and expertise", "Compare ratings and reviews", "Check tutor availability", "View pricing and credentials"]
    },
    {
      step: 2,
      title: "Book a Session",
      description: "Select your preferred tutor and schedule a session that fits your calendar.",
      icon: Calendar,
      details: ["Choose date and time", "Select session duration", "Add session notes", "Secure payment processing"]
    },
    {
      step: 3,
      title: "Learn Online",
      description: "Join your session via video call and get personalized, one-on-one instruction.",
      icon: Video,
      details: ["HD video conferencing", "Screen sharing capabilities", "Interactive whiteboard", "Session recording available"]
    },
    {
      step: 4,
      title: "Rate & Review",
      description: "After your session, rate your tutor and help other students find great educators.",
      icon: Star,
      details: ["Rate your experience", "Leave detailed feedback", "Book follow-up sessions", "Track your progress"]
    }
  ];

  const tutorSteps = [
    {
      step: 1,
      title: "Create Profile",
      description: "Sign up and create your comprehensive tutor profile with credentials and expertise.",
      icon: UserPlus,
      details: ["Add your education background", "List your subjects and specialties", "Set your hourly rates", "Upload profile photo"]
    },
    {
      step: 2,
      title: "Get Verified",
      description: "Complete our verification process to build trust with potential students.",
      icon: FileText,
      details: ["Background check", "Education verification", "Subject knowledge assessment", "Profile review and approval"]
    },
    {
      step: 3,
      title: "Receive Bookings",
      description: "Students will find and book sessions with you based on your expertise and availability.",
      icon: Calendar,
      details: ["Set your availability", "Receive booking notifications", "Communicate with students", "Manage your schedule"]
    },
    {
      step: 4,
      title: "Teach & Earn",
      description: "Conduct sessions, help students learn, and earn money doing what you love.",
      icon: TrendingUp,
      details: ["Teach via video sessions", "Use interactive tools", "Build student relationships", "Get paid securely"]
    }
  ];

  const features = [
    {
      title: "Secure Payments",
      description: "All transactions are processed securely with multiple payment options.",
      icon: CreditCard
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it from our dedicated support team.",
      icon: MessageSquare
    },
    {
      title: "Quality Assurance",
      description: "All tutors are verified and background-checked for your safety.",
      icon: Shield
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning progress and session history over time.",
      icon: TrendingUp
    }
  ];

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
                <Link href="/become-tutor" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Become a Tutor</Link>
                <Link href="/how-it-works" className="text-blue-600 font-medium px-3 py-2 rounded-md text-sm">How it Works</Link>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How TutorConnect
            <span className="text-blue-600"> Works</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Simple, secure, and effective. Learn how our platform connects students with expert tutors for personalized learning experiences.
          </p>
        </div>
      </section>

      {/* For Students Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Students</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting help with your studies has never been easier. Follow these simple steps to connect with expert tutors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <Card key={step.step} className="relative">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <Badge className="absolute -top-2 -left-2 bg-blue-600 text-white">
                      {step.step}
                    </Badge>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/tutors">
              <Button size="lg" className="text-lg px-8 py-3">
                Find Your Tutor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For Tutors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Tutors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Share your expertise and earn money by teaching students around the world. Here's how to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tutorSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <Card key={step.step} className="relative">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <Badge className="absolute -top-2 -left-2 bg-green-600 text-white">
                      {step.step}
                    </Badge>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/become-tutor">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Teaching
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've built a comprehensive platform with everything you need for successful online tutoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600">No hidden fees. Pay only for the sessions you book.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-600">For Students</CardTitle>
                <CardDescription>Pay per session with no monthly fees</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">$30-80</div>
                  <div className="text-gray-600">per hour session</div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    No subscription required
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Choose your own schedule
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Cancel anytime
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Secure payment processing
                  </li>
                </ul>
                <Link href="/tutors">
                  <Button className="w-full">Find Tutors</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-green-600">For Tutors</CardTitle>
                <CardDescription>Keep 85% of your earnings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
                  <div className="text-gray-600">of session earnings</div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Set your own rates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Weekly payouts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    No setup fees
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Professional tools included
                  </li>
                </ul>
                <Link href="/become-tutor">
                  <Button className="w-full">Start Teaching</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How do I know if a tutor is qualified?</h3>
                <p className="text-gray-600 text-sm">All tutors go through a verification process including background checks, education verification, and subject assessments. You can view their credentials, ratings, and reviews from other students.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What if I'm not satisfied with a session?</h3>
                <p className="text-gray-600 text-sm">We offer a satisfaction guarantee. If you're not happy with your session, contact our support team within 24 hours and we'll work to resolve the issue or provide a refund.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I schedule recurring sessions?</h3>
                <p className="text-gray-600 text-sm">Yes! You can book multiple sessions with the same tutor and set up recurring weekly or monthly sessions based on your learning schedule.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How do payments work?</h3>
                <p className="text-gray-600 text-sm">Students pay securely through our platform before each session. Tutors receive payment within 24 hours after the session is completed. We support all major credit cards and PayPal.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What technology do I need?</h3>
                <p className="text-gray-600 text-sm">Just a computer or tablet with a reliable internet connection, webcam, and microphone. Our platform works in any modern web browser - no software downloads required.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I cancel or reschedule sessions?</h3>
                <p className="text-gray-600 text-sm">Yes, you can cancel or reschedule sessions up to 24 hours in advance without penalty. Late cancellations may be subject to fees as outlined in our terms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of students and tutors who are already part of our learning community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tutors">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Find a Tutor
              </Button>
            </Link>
            <Link href="/become-tutor">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600">
                Become a Tutor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
