import Image from "next/image"
import { ExternalLink, ArrowRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    title: "Telemedicine Mobile App",
    category: "Healthcare",
    description:
      "A comprehensive telemedicine platform that connects patients with healthcare providers through secure video consultations, appointment scheduling, and health monitoring features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Node.js", "MongoDB", "WebRTC", "AWS"],
    results: ["2M+ Downloads", "4.8★ App Store Rating", "50% Faster Consultations"],
    platform: "iOS & Android",
    industry: "Healthcare",
  },
  {
    title: "Digital Banking Application",
    category: "Fintech",
    description:
      "A next-generation mobile banking app with AI-powered financial insights, secure transactions, biometric authentication, and personalized investment recommendations.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Flutter", "Python", "PostgreSQL", "AI/ML", "Blockchain"],
    results: ["1M+ Active Users", "99.9% Uptime", "40% Increase in Engagement"],
    platform: "iOS & Android",
    industry: "Finance",
  },
  {
    title: "E-commerce Marketplace",
    category: "Retail",
    description:
      "Multi-vendor e-commerce platform with advanced search, AR try-on features, and seamless payment integration for enhanced shopping experience.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Microservices", "Redis", "Stripe", "AR Kit"],
    results: ["500K+ Orders", "35% Higher Conversion", "4.7★ User Rating"],
    platform: "iOS & Android",
    industry: "E-commerce",
  },
  {
    title: "EdTech Learning Platform",
    category: "Education",
    description:
      "Interactive learning platform with gamification, progress tracking, and AI-powered personalized learning paths for students.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Native iOS/Android", "Django", "Machine Learning", "WebRTC"],
    results: ["100K+ Students", "90% Course Completion", "4.9★ Rating"],
    platform: "iOS & Android",
    industry: "Education",
  },
  {
    title: "Food Delivery App",
    category: "Food & Beverage",
    description:
      "On-demand food delivery application with real-time tracking, smart recommendations, and seamless ordering experience.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Node.js", "MongoDB", "Google Maps", "Socket.io"],
    results: ["300K+ Orders", "25 Min Avg Delivery", "4.6★ App Rating"],
    platform: "iOS & Android",
    industry: "Food & Beverage",
  },
  {
    title: "Fitness & Wellness App",
    category: "Health & Fitness",
    description:
      "Comprehensive fitness tracking app with workout plans, nutrition guidance, and social features for motivation and community building.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Swift", "Kotlin", "Firebase", "HealthKit", "Core ML"],
    results: ["200K+ Downloads", "70% Daily Active Users", "4.8★ Store Rating"],
    platform: "iOS & Android",
    industry: "Health & Fitness",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-500">mobile app development</span> portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of successful mobile applications that have transformed businesses across various
            industries. Each project showcases our expertise in delivering innovative, scalable, and user-centric mobile
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {item.platform}
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{item.description}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md text-xs font-medium">
                          +{item.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <div className="space-y-1">
                      {item.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="h-3 w-3 text-orange-500 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Apps Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">10M+</div>
              <div className="text-gray-600 font-medium">App Downloads</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">4.8★</div>
              <div className="text-gray-600 font-medium">Average App Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
