"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

interface PopupProps {
  isOpen: boolean
  onClose: () => void
  type?: "contact" | "testimonial" | "custom"
  title?: string
  children?: React.ReactNode
}

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Steve Gertsch",
    position: "Project Manager",
    company: "Auto Auction",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "After researching numerous companies, we finally found Brandots, and it was the best decision we could have made.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO",
    company: "HealthTech Solutions",
    image: "/placeholder.svg?height=60&width=60",
    quote: "Brandots Technologies delivered an exceptional mobile app that transformed our patient engagement.",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Founder",
    company: "FinanceFlow",
    image: "/placeholder.svg?height=60&width=60",
    quote: "Working with Brandots was a game-changer for our fintech startup. Highly recommended!",
  },
]

const companyLogos = [
  { name: "Entrepreneur", subtitle: "App Development Company Of The Year" },
  { name: "Deloitte", subtitle: "Technology Fast 50 2023-24" },
  { name: "Statista", subtitle: "India's Growth Champions in IT" },
]

export default function Popup({ isOpen, onClose, type = "contact", title, children }: PopupProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    project: "",
    countryCode: "+91",
    contactNumber: "",
    captcha: "",
  })
  const [captchaAnswer] = useState(() => {
    const a = Math.floor(Math.random() * 10) + 1
    const b = Math.floor(Math.random() * 10) + 1
    return { question: `${a} + ${b} =`, answer: a + b }
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (Number.parseInt(formData.captcha) === captchaAnswer.answer) {
      console.log("Form submitted:", formData)
      onClose()
    } else {
      alert("Please solve the captcha correctly")
    }
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Popup Container - Reduced size */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors touch-manipulation"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        {type === "contact" && (
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* Left Side - Testimonials - Reduced padding */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 lg:p-6 flex flex-col">
              <div className="mb-4">
                <h2 className="text-xl lg:text-2xl font-bold text-blue-600 mb-2">Leaving already?</h2>
                <p className="text-gray-700 text-sm lg:text-base">
                  Hear from our clients and why 500+ businesses trust Brandots
                </p>
              </div>

              {/* Testimonial Dots */}
              <div className="flex space-x-2 mb-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors touch-manipulation ${
                      index === currentTestimonial ? "bg-blue-500" : "bg-blue-200"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Content - Compact */}
              <div className="flex-1 flex flex-col justify-center relative">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden mx-auto mb-3 border-2 border-white shadow-lg">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{testimonials[currentTestimonial].name}</h3>
                  <div className="inline-block bg-white px-3 py-1 rounded-full text-xs text-gray-600 border">
                    {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-lg relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                  <div className="text-blue-500 text-2xl mb-1">"</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{testimonials[currentTestimonial].quote}</p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors touch-manipulation"
                  >
                    <ChevronLeft className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors touch-manipulation"
                  >
                    <ChevronRight className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form - Reduced padding */}
            <div className="p-4 lg:p-6 flex flex-col">
              <div className="mb-4">
                <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 leading-tight">
                  Tell us what you need, and we'll get back with a cost and timeline estimate
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 space-y-4">
                <div>
                  <Input
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full h-10 border-0 border-b-2 border-gray-200 rounded-none focus:border-blue-500 focus:ring-0 bg-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="E-Mail ID*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-10 border-0 border-b-2 border-gray-200 rounded-none focus:border-blue-500 focus:ring-0 bg-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="project"
                    placeholder="Describe Your Project/Idea In Brief"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full min-h-[60px] border-0 border-b-2 border-gray-200 rounded-none focus:border-blue-500 focus:ring-0 bg-transparent resize-none text-sm"
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <Input
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="w-full h-10 border-0 border-b-2 border-gray-200 rounded-none focus:border-blue-500 focus:ring-0 bg-transparent text-sm"
                    />
                  </div>
                  <div className="col-span-2">
                    <Input
                      name="contactNumber"
                      placeholder="Contact Number*"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="w-full h-10 border-0 border-b-2 border-gray-200 rounded-none focus:border-blue-500 focus:ring-0 bg-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 items-center">
                  <div className="text-base font-medium text-gray-700">{captchaAnswer.question}</div>
                  <Input
                    name="captcha"
                    placeholder="Answer"
                    value={formData.captcha}
                    onChange={handleInputChange}
                    className="w-full h-10 border-0 border-b-2 border-gray-200 rounded-none focus:border-blue-500 focus:ring-0 bg-transparent text-sm"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-sm font-semibold transition-colors touch-manipulation"
                >
                  Schedule Free Consultation
                </Button>
              </form>
            </div>
          </div>
        )}

        {type === "custom" && (
          <div className="p-4 lg:p-6">
            {title && <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>}
            {children}
          </div>
        )}

        {/* Bottom Company Logos - Compact */}
        <div className="bg-gray-900 text-white p-3">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-400">1600+</div>
              <div className="text-xs text-gray-300">engineers delivered</div>
            </div>
            {companyLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="text-sm font-bold text-white">{logo.name}</div>
                <div className="text-xs text-gray-400">{logo.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
