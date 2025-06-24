import type { Metadata } from "next"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Contact Us | Brandots Technologies - Get in Touch for Mobile App Development",
  description:
    "Contact Brandots Technologies for mobile app development, custom software solutions, and digital transformation services. Get free consultation and project estimates.",
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@brandots.in",
      secondary: "",
      description: "Drop us a line anytime! We respond within 24 hours.",
      color: "from-blue-500 to-blue-600",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 9553313339",
      secondary: "",
      description: "Speak directly with our experts. Available Mon-Fri 9AM-6PM IST.",
      color: "from-green-500 to-green-600",
      action: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      primary: "Available 24/7",
      secondary: "Instant responses",
      description: "Get immediate assistance through our live chat support.",
      color: "from-purple-500 to-purple-600",
      action: "Start Chat",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      primary: "Sanvi Yamuna Pride, Avyas Tech Park, #1-98/B Plot# 20&21, VIP Hills, Silicon Valley, Madhapur, Telangana 500081",
      secondary: "Telangana 500081, India",
      description: "Schedule a visit to meet our team and discuss your project in person.",
      color: "from-orange-500 to-orange-600",
      action: "Get Directions",
    },
  ]

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

  const faqs = [
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "The timeline varies based on complexity, but typically ranges from 3-8 months for a complete mobile app with backend integration.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in React Native, Flutter, native iOS/Android development, AI/ML, blockchain, and cloud technologies.",
    },
    {
      question: "Can you help with app store submission?",
      answer: "We handle the complete app store submission process for both iOS App Store and Google Play Store.",
    },
    {
      question: "Do you work with startups and enterprises?",
      answer:
        "Yes, we work with businesses of all sizes - from early-stage startups to Fortune 500 companies across various industries.",
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Award },
    { number: "150+", label: "Happy Clients", icon: Users },
    { number: "24/7", label: "Support Available", icon: Headphones },
    { number: "98%", label: "Client Satisfaction", icon: Star },
  ]

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
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Let's Build Your Next <span className="text-orange-500">Mobile App</span> Together
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Ready to transform your business with cutting-edge mobile technology? Our expert team is here to discuss
                your project and provide customized solutions that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg">
                  Start Your Project
                </Button>
                <Button variant="outline" className="border-gray-300 px-8 py-4 rounded-full text-lg">
                  Schedule Consultation
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

        {/* Contact Methods Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the most convenient way to reach out to us. Our team is ready to assist you with your mobile app
                development needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="font-semibold text-gray-900">{method.primary}</p>
                      <p className="text-gray-600">{method.secondary}</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-6">{method.description}</p>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">{method.action}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <Card className="shadow-2xl border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Tell Us About Your Project</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Fill out the form below and our team will get back to you within 24 hours with a detailed
                        proposal and timeline.
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="w-full h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="w-full h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            placeholder="Enter your email address"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="w-full h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          className="w-full h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          placeholder="Enter your company name"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                            Service Required *
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          >
                            <option value="">Select a service</option>
                            <option value="mobile-app-development">Mobile App Development</option>
                            <option value="custom-software">Custom Software Development</option>
                            <option value="ai-ml-development">AI & ML Development</option>
                            <option value="ui-ux-design">UI/UX Design</option>
                            <option value="web-development">Web Development</option>
                            <option value="cloud-solutions">Cloud Solutions</option>
                            <option value="blockchain-development">Blockchain Development</option>
                            <option value="digital-transformation">Digital Transformation</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                            Project Budget
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-25k">Under $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="100k-250k">$100,000 - $250,000</option>
                            <option value="over-250k">Over $250,000</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                          Project Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-3-months">1-3 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="6-12-months">6-12 months</option>
                          <option value="over-12-months">Over 12 months</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          placeholder="Tell us about your project requirements, target audience, key features, and any specific goals you want to achieve..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-semibold text-lg h-14"
                      >
                        Send Message & Get Free Consultation
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>

                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                      <div className="flex items-center space-x-3 mb-4">
                        <MessageCircle className="h-6 w-6 text-orange-500" />
                        <h4 className="font-semibold text-gray-900">What happens next?</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>We'll review your requirements within 24 hours</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Schedule a free consultation call to discuss your project</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Receive a detailed proposal with timeline and pricing</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Start your project with our expert development team</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Brandots Technologies?</h3>
                  <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-2xl">
                    <CardContent className="p-8">
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            Leading mobile app development company with 500+ successful projects
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            98% client satisfaction rate with dedicated project management
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            Expert team specializing in native iOS, Android, and cross-platform development
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            Agile development methodology with transparent communication
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            Free consultation and competitive pricing with no hidden costs
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            24/7 support and post-launch maintenance services
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                    >
                      <Twitter className="h-6 w-6 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                    >
                      <Facebook className="h-6 w-6 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                    >
                      <Instagram className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </div>

                {/* Quick Contact */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">info@brandots.in</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">+91 9553313339</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM IST</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">www.brandots.in</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Global Offices Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With offices across multiple continents, we provide 24/7 support and local expertise to serve our global
                clientele.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {globalOffices.map((office, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    office.isHeadquarters ? "ring-2 ring-orange-500" : ""
                  }`}
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
                        <MapPin className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-orange-500" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-orange-500" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-orange-500" />
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

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get quick answers to common questions about our mobile app development services and process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                Contact Our Support Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Visit Our Headquarters</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Located in the heart of Ahmedabad, Gujarat. Schedule a visit to meet our team and discuss your project
                in person.
              </p>
            </div>
            <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-6" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Interactive Google Maps</h4>
                <p className="text-gray-600 mb-4">Embedded map will be displayed here</p>
                <p className="text-sm text-gray-500 mb-4">Ahmedabad, Gujarat, India</p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Directions</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Mobile App Project?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 150+ satisfied clients who have transformed their businesses with our innovative mobile solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold">
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-full text-lg"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
