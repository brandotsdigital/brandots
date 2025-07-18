import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services | Brandots Technologies - Digital Solutions & Mobile App Development",
  description:
    "Comprehensive digital services including mobile app development, web development, AI/ML, blockchain, cloud services, and digital transformation solutions.",
}

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
              Uncover proof of Brandots' impact across 500+ digital deliveries for 12+ industries.
              <Link href="#case-studies" className="ml-2 underline hover:no-underline">
                Explore Now →
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="text-blue-400">Discover</span>| <span className="text-purple-400">Develop</span>|{" "}
              <span className="text-orange-400">Deploy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Unlock the true potential of your business with our digital engineering services.
            </p>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Let's Discuss Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Service Categories Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {serviceCategories.map((category, index) => (
                <Link
                  key={index}
                  href={`#${category.slug}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    index === 0 ? "bg-orange-500 text-white" : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Section */}
      <section id="mobile-app-dev" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Mobile App Development
                </h2>
                <h3 className="text-xl md:text-2xl text-gray-300 font-medium">
                  Augmenting the mobile experience for your users
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Whatever your niche, industry, or product may be, we can deliver an app that will skyrocket your
                  market position while captivating your users and audience. Using DevOps and agile methodologies, we
                  uncover value prepositions from your offerings embedding them in a futuristic app.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Validate Your Product Idea
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/product-consulting"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Product Consulting</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link
                  href="/services/mobile-first-design"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Mobile-First Design</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
              <Link
                href="/services/pwa"
                className="block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">PWA</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation Section */}
      <section id="digital-transformation" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Digital Transformation
                </h2>
                <h3 className="text-xl md:text-2xl text-gray-300 font-medium">
                  Maximizing capabilities by strengthening technology
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Thriving in the 21st century is not a challenge with technology by your side. With our advanced
                  digital transformation services we transform entire industries with innovation and ingenuity building
                  business resiliency for the future.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get the Full Rundown
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/supply-chain-management"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Supply Chain Management</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link
                  href="/services/legacy-app-modernization"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Legacy App Modernization</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthcare professional using digital solution"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">YouComm</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Infusing digital into patient care, we developed an app that revolutionized patient-caregiver
                  communication.
                </p>
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Results</h4>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">60%</div>
                      <div className="text-gray-400">Faster Response by Caregivers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">5+</div>
                      <div className="text-gray-400">Hospitals in the US Deployed the Solution</div>
                    </div>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 w-fit"
                >
                  View Success Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      <section id="software-development" className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900">
        {/* Service Categories Navigation */}
        <div className="bg-black/30 backdrop-blur-sm border-y border-white/10 mb-16">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {serviceCategories.map((category, index) => (
                <Link
                  key={index}
                  href={`#${category.slug}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    index === 3 ? "bg-blue-500 text-white" : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Software Development
                </h2>
                <h3 className="text-xl md:text-2xl text-gray-300 font-medium">
                  Exceeding expectations by surpassing benchmarks
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  We are agile, we are innovative, we are Brandots and we engineer software solutions that cater to your
                  specific pain points head-on delivering value and unlocking revenue.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get the Full Rundown
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/erp-software-development"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">ERP Software Development</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link
                  href="/services/custom-crm-development"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Custom CRM Development</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link
                  href="/services/ar-vr-development"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">AR/VR Development</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link
                  href="/services/iot-development"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">IoT Development</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
              <Link
                href="/services/microservices"
                className="block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Microservices</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experience Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Harness the 9+ years of full stack experience we have across{" "}
              <span className="text-cyan-400">FinTech</span>, <span className="text-cyan-400">eCommerce</span>,{" "}
              <span className="text-cyan-400">Healthcare</span>, <span className="text-cyan-400">Aviation</span>, and
              20+ other industries to solve your complex business challenges
            </h2>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Talk to Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section id="cloud-services" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Cloud Services</h2>
                <h3 className="text-xl md:text-2xl text-gray-300 font-medium">
                  Enable scalability on-demand with cloud computing
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Gone are the days of on-prem servers and as an extension, server rooms. We handhold our clients in
                  moving their data to the cloud, optimize their cloud spend, and develop architectures that are robust
                  to the core. With our cloud managed services, let us handle your cloud operations while you handle
                  your business.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get the Full Rundown
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/cloud-consulting"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Cloud Consulting</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link
                  href="/services/cloud-managed-services"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Cloud Managed Services</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Services Section */}
      <section id="blockchain-services" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Blockchain Services
                </h2>
                <h3 className="text-xl md:text-2xl text-gray-300 font-medium">
                  The future of the internet is decentralized
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  With security and privacy at its core, blockchain technology gives the power back to the hands of the
                  users and we develop avant-garde dApps, Metaverse spaces, and other solutions that revolutionize and
                  transform your business and operations.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get the Full Rundown
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/nft-marketplace-development"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">NFT Marketplace Development</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link
                  href="/services/metaverse-development"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Metaverse Development</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
              <Link
                href="/services/dapp-development"
                className="block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">dApp Development</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Data Science & Analytics Section */}
      <section id="data-science-analytics" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Data Science & Analytics
                </h2>
                <h3 className="text-xl md:text-2xl text-gray-300 font-medium">
                  They say data is the new oil; we agree!
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  In this age of the consumer, all that a company has is data to listen to what the customers want. That
                  is why we provide next-generation data science and analytics services crunching numbers so you won't
                  have to.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get the Full Rundown
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/business-intelligence"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Business Intelligence</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link
                  href="/services/data-engineering"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Data Engineering</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & ML Section */}
      <section id="ai-ml" className="py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">AI & ML</h2>
                <h3 className="text-xl md:text-2xl text-gray-300 font-medium">
                  Intelligent solutions for tomorrow's challenges
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Harness the power of artificial intelligence and machine learning to automate processes, gain
                  predictive insights, and create intelligent applications that adapt and learn from user behavior.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get the Full Rundown
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/ai-chatbots"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">AI Chatbots</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link
                  href="/services/computer-vision"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Computer Vision</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
              <Link
                href="/services/predictive-analytics"
                className="block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Predictive Analytics</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Consulting Section */}
      <section id="it-consulting" className="py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">IT Consulting</h2>
                <h3 className="text-xl md:text-2xl text-gray-300 font-medium">
                  Strategic technology guidance for business growth
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Navigate the complex technology landscape with our expert IT consulting services. We help businesses
                  make informed technology decisions, optimize IT infrastructure, and align technology strategy with
                  business objectives.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get the Full Rundown
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/technology-strategy"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Technology Strategy</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link
                  href="/services/it-infrastructure"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">IT Infrastructure</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Section */}
      <section id="devops" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">DevOps</h2>
                <h3 className="text-xl md:text-2xl text-gray-300 font-medium">Streamline development and operations</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Accelerate your software delivery with our DevOps services. We implement CI/CD pipelines,
                  infrastructure automation, and monitoring solutions that enable faster, more reliable software
                  deployments.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get the Full Rundown
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/ci-cd-pipelines"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">CI/CD Pipelines</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link
                  href="/services/infrastructure-automation"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Infrastructure Automation</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business with Technology?
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto">
            Let's discuss how our comprehensive digital services can help you achieve your business goals and drive
            growth in today's competitive landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-semibold"
            >
              Schedule a Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg font-semibold"
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Data
const serviceCategories = [
  { name: "Product Design & Ideation", slug: "product-design-ideation" },
  { name: "Mobile App Dev", slug: "mobile-app-dev" },
  { name: "Digital Transformation", slug: "digital-transformation" },
  { name: "Software Development", slug: "software-development" },
  { name: "Cloud Services", slug: "cloud-services" },
  { name: "Blockchain Services", slug: "blockchain-services" },
  { name: "Data Science & Analytics", slug: "data-science-analytics" },
  { name: "AI & ML", slug: "ai-ml" },
  { name: "IT Consulting", slug: "it-consulting" },
  { name: "DevOps", slug: "devops" },
]
