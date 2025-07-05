"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Card, CardContent } from "@/components/ui/card"
import Chatbot from "@/components/Chatbot"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@brandots.in",
      description: "Drop us a line anytime!",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9553313339",
      description: "Mon-Fri from 9am to 6pm IST",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Sanvi Yamuna Pride, Avyas Tech Park, #1-98/B Plot# 20&21, VIP Hills, Silicon Valley, Madhapur, Telangana 500081",
      description: "Come say hello at our office",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "Saturday: 10:00 AM - 4:00 PM",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <>
      <section id="contact" className="py-10 lg:py-12 bg-white">
      <div className="container mx-auto px-2">
        <div className="text-center mb-6 lg:mb-8">
          <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1.5 rounded-full text-xs font-semibold mb-2">
            Get In Touch
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 lg:mb-3">
            Let's build your next <span className="text-orange-500">mobile app</span> together
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with a cutting-edge mobile application? Our expert team is here to discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Contact Information - Mobile optimized */}
          <div className="lg:col-span-1 space-y-4 lg:space-y-5">
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-3 lg:space-x-4">
                      <div
                        className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${info.color} rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base lg:text-lg">{info.title}</h4>
                        <p className="text-gray-900 font-semibold text-sm lg:text-base">{info.details}</p>
                        <p className="text-gray-600 text-xs lg:text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us - Mobile card */}
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-2xl">
              <CardContent className="p-4 lg:p-5">
                <h4 className="font-bold text-base lg:text-lg mb-2 lg:mb-3">Why Choose Brandots Technologies?</h4>
                <ul className="space-y-2 lg:space-y-2.5">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Leading mobile app development company with 500+ successful projects
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      98% client satisfaction rate with dedicated project management
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Expert team specializing in native iOS, Android, and cross-platform development
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Mobile optimized */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-white">
              <CardContent className="p-2 lg:p-3 xl:p-4">
                <div className="mb-2 lg:mb-2">
                  <h3 className="text-base lg:text-lg xl:text-xl font-bold text-gray-900 mb-1 lg:mb-1">
                    Tell us about your project
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs lg:text-sm">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-1 lg:space-y-2">
                  <div className="grid md:grid-cols-2 gap-1 lg:gap-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-9 lg:h-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500 touch-manipulation bg-white text-gray-900 placeholder-gray-400 text-xs"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-9 lg:h-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500 touch-manipulation bg-white text-gray-900 placeholder-gray-400 text-xs"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-1 lg:gap-2">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full h-9 lg:h-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500 touch-manipulation bg-white text-gray-900 placeholder-gray-400 text-xs"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-gray-700 mb-1">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full h-9 lg:h-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500 touch-manipulation bg-white text-gray-900 placeholder-gray-400 text-xs"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-1 lg:gap-2">
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-gray-700 mb-1">
                        Service Required *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-9 lg:h-10 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 touch-manipulation bg-white text-gray-900 placeholder-gray-400 text-xs"
                      >
                        <option value="">Select a service</option>
                        <option value="mobile-app-development">Mobile App Development</option>
                        <option value="custom-software">Custom Software Development</option>
                        <option value="ai-ml-development">AI & ML Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold text-gray-700 mb-1">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full h-9 lg:h-10 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 touch-manipulation bg-white text-gray-900 placeholder-gray-400 text-xs"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-25k">Under $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-1">
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500 touch-manipulation bg-white text-gray-900 placeholder-gray-400 text-xs"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-semibold text-xs lg:text-sm h-9 lg:h-10 touch-manipulation"
                  >
                    Send Message & Get Free Consultation
                    <Send className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </Button>
                </form>

                <div className="mt-3 lg:mt-4 p-2 lg:p-3 bg-gray-50 rounded-lg lg:rounded-xl">
                  <div className="flex items-center space-x-2 mb-2 lg:mb-2.5">
                    <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5 text-orange-500" />
                    <h4 className="font-semibold text-gray-900 text-xs lg:text-sm">What happens next?</h4>
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                      <span>We'll review your requirements within 24 hours</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                      <span>Schedule a free consultation call</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                      <span>Receive a detailed proposal with timeline and pricing</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ...Google Maps and Visit Our Office section removed as requested... */}
      </div>
      {/* <Chatbot /> */}
    </section>
    </>
  )
}
