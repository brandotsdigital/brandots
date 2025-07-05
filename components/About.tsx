import Image from "next/image"
import { CheckCircle, Users, Award, Target, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                About Brandots Technologies
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We are a <span className="text-orange-500">top mobile app development company</span> building next-gen
                solutions
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Brandots Technologies is a leading mobile app development company with 12+ years of experience in
                delivering innovative digital solutions. We specialize in creating mobile applications that transform
                businesses and drive digital growth.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Our team of expert developers, designers, and strategists work collaboratively to build mobile apps that
                not only meet your business requirements but exceed user expectations. We have successfully delivered
                500+ mobile applications across various industries including healthcare, fintech, e-commerce, and
                education.
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

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                Learn More About Us
              </Button>
              <Button className="bg-white text-orange-500 border border-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full">
                View Our Work
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/mobile_app_developer_.gif?height=300&width=300"
                alt="About Brandots Technologies"
                width={300}
                height={300}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">9+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-2xl p-4 md:p-6">
          <div className="text-center mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Our Achievements</h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for our excellence and commitment to delivering outstanding results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders driving innovation and excellence in mobile app development.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <Image
                  src="/images/ceo-brandots-event.png"
                  alt="CEO of Brandots Technologies"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="md:col-span-2 space-y-6">
                <blockquote className="text-xl md:text-2xl leading-relaxed">
                  "At Brandots Technologies, we believe in transforming ideas into powerful mobile experiences. Our
                  mission is to help businesses leverage the latest technologies to achieve unprecedented growth and
                  success in the digital world."
                </blockquote>
                <div>
                  <div className="text-xl font-bold">SRIVATHSAVA CH</div>
                  <div className="text-orange-200">CEO & Founder</div>
                  <div className="text-sm text-orange-100 mt-2">B.Tech Computer Science, MBA Technology Management</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
