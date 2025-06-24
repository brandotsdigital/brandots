import {
  Heart,
  Banknote,
  ShoppingCart,
  GraduationCap,
  Car,
  Building2,
  Plane,
  Utensils,
  Gamepad2,
  Zap,
  Home,
  Briefcase,
} from "lucide-react"

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant healthcare apps, telemedicine platforms, and medical management systems.",
    projects: "80+ Projects",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Banknote,
    title: "Fintech",
    description: "Secure banking apps, payment gateways, investment platforms, and financial management solutions.",
    projects: "60+ Projects",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Multi-vendor marketplaces, shopping apps, inventory management, and retail solutions.",
    projects: "120+ Projects",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "E-learning platforms, educational apps, LMS systems, and online course applications.",
    projects: "50+ Projects",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Ride-sharing apps, fleet management, logistics platforms, and delivery solutions.",
    projects: "40+ Projects",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property listing apps, real estate CRM, virtual tours, and property management platforms.",
    projects: "35+ Projects",
    color: "from-gray-500 to-slate-500",
  },
  {
    icon: Plane,
    title: "Travel & Tourism",
    description: "Booking platforms, travel guides, hotel management, and tourism applications.",
    projects: "30+ Projects",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Utensils,
    title: "Food & Restaurant",
    description: "Food delivery apps, restaurant management, recipe platforms, and dining solutions.",
    projects: "70+ Projects",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Entertainment",
    description: "Mobile games, entertainment platforms, streaming apps, and interactive media solutions.",
    projects: "25+ Projects",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Smart grid apps, energy management, utility billing, and renewable energy platforms.",
    projects: "20+ Projects",
    color: "from-lime-500 to-green-500",
  },
  {
    icon: Home,
    title: "Smart Home & IoT",
    description: "IoT applications, smart home automation, connected devices, and home security apps.",
    projects: "45+ Projects",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Briefcase,
    title: "Enterprise & SaaS",
    description: "Business applications, SaaS platforms, productivity tools, and enterprise solutions.",
    projects: "90+ Projects",
    color: "from-slate-500 to-gray-500",
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Industries We Serve
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-orange-500">Mobile app development</span> across diverse industries
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We have extensive experience developing mobile applications across various industries, delivering
            specialized solutions that address unique challenges and drive digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <industry.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{industry.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-semibold text-sm">{industry.projects}</span>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <span className="text-orange-500 group-hover:text-white text-sm font-bold">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Industry Expertise & Impact</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse industry experience enables us to deliver tailored mobile solutions that drive real business
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">12+</div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Apps Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
