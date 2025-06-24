"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Smartphone, Code, Brain, Palette, Globe, Cloud, Shield, Cog } from "lucide-react"

interface MegaMenuProps {
  isOpen: boolean
  category: string
  onClose: () => void
}

const serviceItems = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS and Android apps with exceptional user experiences.",
    link: "/services",
    color: "bg-blue-500",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions for your business needs.",
    link: "/services",
    color: "bg-green-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by AI and ML technologies.",
    link: "/services",
    color: "bg-purple-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions for digital experiences.",
    link: "/services",
    color: "bg-pink-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive web applications with modern frameworks.",
    link: "/services",
    color: "bg-orange-500",
  },
  {
    icon: Cloud,
    description: "Comprehensive cloud services and infrastructure management.",
    title: "Cloud Solutions",
    link: "/services",
    color: "bg-cyan-500",
  },
  {
    icon: Shield,
    title: "Blockchain Development",
    description: "Secure blockchain solutions for business applications.",
    link: "/services",
    color: "bg-yellow-500",
  },
  {
    icon: Cog,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services.",
    link: "/services",
    color: "bg-red-500",
  },
]

const solutionItems = [
  {
    title: "Enterprise Solutions",
    items: ["ERP Systems", "CRM Solutions", "Business Intelligence", "Workflow Automation"],
    link: "/services",
  },
  {
    title: "E-commerce Solutions",
    items: ["Online Stores", "Marketplace Platforms", "Payment Gateways", "Inventory Management"],
    link: "/services",
  },
  {
    title: "Healthcare Solutions",
    items: ["Telemedicine", "EHR/EMR Systems", "Healthcare Analytics", "Medical Compliance"],
    link: "/services",
  },
  {
    title: "Fintech Solutions",
    items: ["Payment Processing", "Digital Banking", "Investment Platforms", "Blockchain Integration"],
    link: "/services",
  },
]

const industryItems = [
  {
    title: "Healthcare",
    link: "#healthcare-industry",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "Fintech",
    link: "#fintech-industry",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "E-commerce",
    link: "#ecommerce-industry",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "Education",
    link: "#education-industry",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "Transportation",
    link: "#transportation-industry",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "Real Estate",
    link: "#realestate-industry",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function MegaMenu({ isOpen, category, onClose }: MegaMenuProps) {
  if (!isOpen) return null

  return (
    <div
      className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 z-50"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4 py-8">
        {category === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceItems.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={onClose}
              >
                <div className={`${service.color} p-3 rounded-lg text-white`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {category === "solutions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionItems.map((solution, index) => (
              <div key={index} className="space-y-4">
                <Link
                  href={solution.link}
                  className="font-semibold text-gray-900 hover:text-orange-500 transition-colors"
                  onClick={onClose}
                >
                  {solution.title}
                </Link>
                <ul className="space-y-2">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href="/services"
                        className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center"
                        onClick={onClose}
                      >
                        <ChevronRight className="h-4 w-4 mr-1 text-orange-500" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {category === "industries" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industryItems.map((industry, index) => (
              <Link
                key={index}
                href={industry.link}
                className="group text-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={onClose}
              >
                <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    width={40}
                    height={40}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                  {industry.title}
                </h3>
              </Link>
            ))}
          </div>
        )}

        {/* Featured Section at Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold text-gray-900">Featured Case Study</h4>
              <p className="text-sm text-gray-600">
                See how we helped a healthcare provider increase patient engagement by 45%
              </p>
            </div>
            <Link
              href="#case-study"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              onClick={onClose}
            >
              View Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
