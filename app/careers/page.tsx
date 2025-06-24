import type { Metadata } from "next"
import Image from "next/image"
import {
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Coffee,
  Gamepad2,
  GraduationCap,
  ArrowRight,
  Search,
  Filter,
  Briefcase,
  DollarSign,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Careers | Join Brandots Technologies - Build Your Future in Tech",
  description:
    "Join our team of 50+ passionate developers and innovators. Explore exciting career opportunities in mobile app development, AI/ML, and cutting-edge technologies at Brandots Technologies.",
}

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior React Native Developer",
      department: "Mobile Development",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "4-6 years",
      salary: "₹12-18 LPA",
      description:
        "Lead mobile app development projects using React Native, mentor junior developers, and architect scalable mobile solutions.",
      skills: ["React Native", "JavaScript", "TypeScript", "Redux", "Firebase"],
      posted: "2 days ago",
      urgent: true,
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "Artificial Intelligence",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹15-22 LPA",
      description:
        "Develop and deploy machine learning models, work on computer vision projects, and implement AI solutions for client projects.",
      skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP"],
      posted: "1 week ago",
      urgent: false,
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹8-12 LPA",
      description: "Create intuitive user interfaces and exceptional user experiences for mobile and web applications.",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
      posted: "3 days ago",
      urgent: false,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Hybrid",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹10-16 LPA",
      description: "Manage cloud infrastructure, implement CI/CD pipelines, and ensure scalable deployment processes.",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      posted: "5 days ago",
      urgent: true,
    },
    {
      id: 5,
      title: "Flutter Developer",
      department: "Mobile Development",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹8-14 LPA",
      description:
        "Build cross-platform mobile applications using Flutter framework and collaborate with design teams.",
      skills: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management"],
      posted: "1 week ago",
      urgent: false,
    },
    {
      id: 6,
      title: "Business Development Executive",
      department: "Sales & Marketing",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹6-10 LPA",
      description: "Drive business growth, manage client relationships, and identify new market opportunities.",
      skills: ["Sales", "Client Management", "Market Research", "Communication", "CRM"],
      posted: "4 days ago",
      urgent: false,
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, mental health support, and wellness programs for you and your family.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description:
        "Annual learning budget, conference attendance, certification support, and skill development programs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, unlimited coffee, and recreational activities.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Clear career progression paths, mentorship programs, and opportunities to lead innovative projects.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-competitive salaries, performance bonuses, equity options, and annual salary reviews.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Gamepad2,
      title: "Fun & Recreation",
      description: "Team outings, gaming zones, celebration events, and a vibrant office culture.",
      color: "from-pink-500 to-rose-500",
    },
  ]

  const stats = [
    { number: "50+", label: "Team Members", icon: Users },
    { number: "9+", label: "Years of Growth", icon: TrendingUp },
    { number: "95%", label: "Employee Satisfaction", icon: Heart },
    { number: "6", label: "Global Offices", icon: MapPin },
  ]

  const departments = [
    "All Departments",
    "Mobile Development",
    "Artificial Intelligence",
    "Design",
    "Infrastructure",
    "Sales & Marketing",
    "Quality Assurance",
    "Project Management",
  ]

  const locations = ["All Locations", "Ahmedabad", "Remote", "Hybrid", "USA", "UK", "Australia"]

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-float"></div>
            <div
              className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-20 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                Join Our Team
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Build Your <span className="text-orange-500">Career</span> in Technology with{" "}
                <span className="text-blue-600">Brandots</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Join 50+ passionate innovators who are transforming businesses through cutting-edge mobile applications
                and AI solutions. Grow your career while making a global impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg">
                  View Open Positions
                </Button>
                <Button variant="outline" className="border-gray-300 px-8 py-4 rounded-full text-lg">
                  Learn About Culture
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-orange-100 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Search Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover exciting opportunities to grow your career and work on innovative projects that impact millions
                of users worldwide.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-12">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input placeholder="Search jobs..." className="pl-10 h-12 border-gray-300 focus:border-orange-500" />
                </div>
                <select className="h-12 px-4 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-orange-500">
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <select className="h-12 px-4 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-orange-500">
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white h-12">
                  <Filter className="mr-2 h-5 w-5" />
                  Filter Jobs
                </Button>
              </div>
            </div>

            {/* Job Listings */}
            <div className="grid gap-6">
              {jobOpenings.map((job) => (
                <Card
                  key={job.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                          {job.urgent && (
                            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                              Urgent
                            </span>
                          )}
                          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {job.department}
                          </span>
                        </div>

                        <p className="text-gray-600 leading-relaxed">{job.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {job.skills.slice(0, 4).map((skill) => (
                            <span
                              key={skill}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                          {job.skills.length > 4 && (
                            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-md text-sm font-medium">
                              +{job.skills.length - 4} more
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-orange-500" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-2 text-orange-500" />
                            {job.experience}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-2 text-orange-500" />
                            {job.salary}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 lg:mt-0 lg:ml-8 flex flex-col sm:flex-row lg:flex-col gap-3">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="border-gray-300">
                          View Details
                        </Button>
                        <div className="text-sm text-gray-500 text-center lg:text-left mt-2">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          Posted {job.posted}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold"
              >
                Load More Jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in creating an environment where our team members can thrive, grow, and make a meaningful
                impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Our <span className="text-orange-500">Culture</span> & Values
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    At Brandots Technologies, we foster a culture of innovation, collaboration, and continuous learning.
                    Our team is our greatest asset, and we're committed to creating an environment where everyone can
                    succeed.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Innovation First</h4>
                      <p className="text-gray-600">
                        We encourage creative thinking and provide the freedom to experiment with new technologies and
                        approaches.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Collaborative Environment</h4>
                      <p className="text-gray-600">
                        Cross-functional teams work together to deliver exceptional results and learn from each other.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Growth Mindset</h4>
                      <p className="text-gray-600">
                        Continuous learning and professional development are integral parts of our company culture.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                  Learn More About Our Culture
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Team culture at Brandots Technologies"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />

                {/* Floating Culture Stats */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">95%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">4.8★</div>
                    <div className="text-sm text-gray-600">Glassdoor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Take the next step in your career and be part of a team that's shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold">
                Apply for a Position
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-full text-lg"
              >
                Submit Your Resume
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
