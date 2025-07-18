import Link from "next/link"
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const services = [
    "Mobile App Development",
    "Custom Software Development",
    "AI & ML Development",
    "UI/UX Design",
    "Web Development",
    "Cloud Solutions",
    "Blockchain Development",
    "Digital Transformation",
  ]

  const industries = [
    "Healthcare",
    "Fintech",
    "E-commerce",
    "Education",
    "Transportation",
    "Real Estate",
    "Food & Restaurant",
    "Gaming & Entertainment",
  ]

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "Portfolio",
    "Case Studies",
    "Testimonials",
    "Awards & Recognition",
    "Press & Media",
  ]

  const resources = [
    "Blog",
    "Whitepapers",
    "Case Studies",
    "Documentation",
    "Support Center",
    "Developer Tools",
    "API Documentation",
    "Community",
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">Stay ahead with mobile app insights</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Subscribe to our newsletter for the latest trends, development tips, and industry insights delivered
                straight to your inbox.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>Join 10,000+ developers and business leaders</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 h-12"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 px-8 h-12 rounded-full font-semibold">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                <span className="text-orange-500">Brandots</span> Technologies
              </div>
              <p className="text-gray-400 leading-relaxed">
                Leading mobile app development company with 9+ years of experience delivering innovative digital
                solutions that transform businesses and drive growth across 12+ countries.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">info@brandots.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">+91 (955) 331-3339</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">Hyderabad, India</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://in.linkedin.com/company/brandotsss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/brandots.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="http://instagram.com/brandots.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Industries</h4>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="py-12 border-t border-gray-800">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">Awards & Certifications</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-90">
            <div className="flex justify-center">
              <img src="/images/certi7.png" alt="Great place to work" className="h-28 w-auto" />
            </div>
            <div className="flex justify-center">
              <img src="/images/certi2.svg" alt="ISO Certification" className="h-28 w-auto" />
            </div>
            <div className="flex justify-center">
              <img src="/images/certi3.png" alt="Economic Times Growth Champions 2023" className="h-28 w-auto" />
            </div>
            <div className="flex justify-center">
              <img src="/images/certi4.png" alt="Times Business Awards" className="h-28 w-auto rounded-full" />
            </div>
            <div className="flex justify-center">
              <img src="/images/certi6.png" alt="Clutch 100 Fastest Growth 2025" className="h-28 w-auto" />
            </div>
            <div className="flex justify-center">
              <img src="/images/certi1.webp" alt="Gold Award" className="h-28 w-auto" />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Brandots Technologies. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-white hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-white hover:text-orange-500 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookie-policy" className="text-white hover:text-orange-500 transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Sitemap
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
