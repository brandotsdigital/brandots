import Image from "next/image"
import { CheckCircle, Users, Award, Target, Lightbulb, Globe, Heart, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const globalOffices = [
    {
      country: "India",
      city: "Hyderabad",
      address: "Sanvi Yamuna Pride, Avyas Tech Park, #1-98/B Plot# 20&21, VIP Hills, Silicon Valley, Madhapur, Telangana 500081",
      phone: "+91 9553313339",
      email: "info@brandots.in",
      timezone: "IST (GMT+5:30)",
      isHeadquarters: true,
    },
    {
      country: "USA",
      city: "New York",
      address: "79, Madison Ave, Manhattan, NY 10001, USA",
      phone: "+1 945 367 4727",
      email: "usa@brandots.in",
      timezone: "EST (GMT-5)",
      isHeadquarters: false,
    },
    {
      country: "UK",
      city: "London",
      address: "3rd Floor, 86-90 Paul Street EC2A-4NE, London, UK",
      phone: "+44 945 367 4727",
      email: "uk@brandots.in",
      timezone: "GMT (GMT+0)",
      isHeadquarters: false,
    },
    {
      country: "Australia",
      city: "Brisbane",
      address: "Brandots Australia, East Brisbane QLD 4169, Australia",
      phone: "+61 (XXX) XXX-XXXX",
      email: "australia@brandots.in",
      timezone: "AEST (GMT+10)",
      isHeadquarters: false,
    },
  ]
  const achievements = [
    "500+ Mobile Apps Successfully Delivered",
    "150+ AI & ML Solutions Implemented",
    "98% Client Retention Rate Achieved",
    "12+ Countries Served Globally",
    "24/7 Dedicated Technical Support",
    "ISO 27001 & CMMI Level 3 Certified",
  ]

  const stats = [
    { number: "12+", label: "Years of Excellence", icon: Award },
    { number: "2800+", label: "Projects Delivered", icon: Target },
    { number: "840+", label: "Happy Clients", icon: Users },
    { number: "28+", label: "Expert Developers", icon: Lightbulb },
  ]

  const values = [
    {
      icon: Heart,
      title: "Client-Centric Approach",
      description: "We put our clients at the heart of everything we do, ensuring their success is our primary goal.",
    },
    {
      icon: Zap,
      title: "Innovation & Excellence",
      description: "We constantly push boundaries and strive for excellence in every project we undertake.",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We build lasting relationships through honest communication and reliable delivery.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We create solutions that make a positive impact on businesses and communities worldwide.",
    },
  ]

  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      description:
        "Started as a small team of 5 passionate developers with a vision to transform businesses through technology.",
    },
    {
      year: "2017",
      title: "First Milestone",
      description: "Delivered 50+ successful projects and expanded our team to 15 skilled professionals.",
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Opened international offices and started serving clients across 12+ countries.",
    },
    {
      year: "2021",
      title: "AI & Innovation",
      description: "Launched our AI/ML division and became leaders in emerging technology solutions.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Achieved ISO certifications and won multiple industry awards for excellence.",
    },
  ]

  const leadership = [
    {
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      education: "B.Tech Computer Science, MBA Technology Management",
      image: "/images/ceo-brandots-event.png",
      description: "Visionary leader with 12+ years of experience in technology and business strategy.",
    },
    {
      name: "Priya Sharma",
      position: "CTO & Co-Founder",
      education: "M.Tech Software Engineering, Certified Scrum Master",
      image: "/placeholder.svg?height=300&width=300",
      description: "Technology expert leading our innovation initiatives and technical excellence.",
    },
    {
      name: "Amit Patel",
      position: "VP of Operations",
      education: "MBA Operations, PMP Certified",
      image: "/images/ceo-awards-ceremony.png",
      description: "Operations specialist ensuring seamless project delivery and client satisfaction.",
    },
  ]

  return (
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
              About Brandots Technologies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Meet The Vision Of <span className="text-orange-500">50+ Humans</span> Whose Action Built{" "}
              <span className="text-blue-600">500+ Digital Masterpieces</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              We are a group of agile thinkers who grew from the ground base of just 5 enthusiastic problem solvers in
              2015 to a team of 50+ tech experts matching the top industry skills, qualifications, and experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg">
                Our Story
              </Button>
              <Button variant="outline" className="border-gray-300 px-8 py-4 rounded-full text-lg">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Our <span className="text-orange-500">Journey</span> From Startup to Industry Leader
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded in 2015 with a simple mission: to help businesses leverage technology for unprecedented
                  growth. What started as a small team of passionate developers has evolved into a leading mobile app
                  development company.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Our journey has been marked by continuous innovation, client success, and team growth. We've
                  successfully delivered 500+ mobile applications across various industries including healthcare,
                  fintech, e-commerce, and education.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we stand as a trusted technology partner for businesses worldwide, with offices across
                  multiple countries and a team of 50+ skilled professionals dedicated to creating exceptional digital
                  experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/ceo-brandots-event.png"
                  alt="Brandots Technologies CEO at company event"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">12+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">2,800+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Achievements in Numbers</h3>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Numbers that speak for our excellence and commitment to delivering outstanding results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
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

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Growth Timeline</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our journey from startup to industry leader.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-full max-w-md ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      {/*
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visionary leaders driving innovation and excellence in mobile app development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="aspect-square relative">
                    <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h4>
                    <div className="text-orange-500 font-semibold mb-2">{leader.position}</div>
                    <div className="text-sm text-gray-500 mb-3">{leader.education}</div>
                    <p className="text-gray-600 text-sm">{leader.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business with Technology?
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join 150+ satisfied clients who have transformed their businesses with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold">
              Start Your Project
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-full text-lg"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

    {/* Global Offices Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With offices across multiple continents, we provide 24/7 support and local expertise to serve our global clientele.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {globalOffices.map((office, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${office.isHeadquarters ? "ring-2 ring-orange-500" : ""}`}
            >
              <CardContent className="p-6">
                {office.isHeadquarters && (
                  <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Headquarters
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {office.city}, {office.country}
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    {/* MapPin icon */}
                    <svg className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10c-4.418 0-8-4.03-8-9 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.97-3.582 9-8 9z"/></svg>
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* Phone icon */}
                    <svg className="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.28 1.61.46 2.39a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.78.18 1.58.33 2.39.46A2 2 0 0 1 21 16.91z"/></svg>
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* Mail icon */}
                    <svg className="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zm16 0l-8 8-8-8"/></svg>
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* Clock icon */}
                    <svg className="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>
                    <span>{office.timezone}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                  Contact This Office
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
