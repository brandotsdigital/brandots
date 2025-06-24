"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import MegaMenu from "./MegaMenu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMegaMenuOpen = (category: string) => {
    setActiveMegaMenu(category)
  }

  const handleMegaMenuClose = () => {
    setActiveMegaMenu(null)
  }

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-gray-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 (955) 331-3339</span>
            </div>
            <span>INFO@brandots.in</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/careers" className="hover:text-orange-500 transition-colors">
              Careers
            </Link>
            <Link href="#blog" className="hover:text-orange-500 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <Link href="/" className="flex items-center">
              <div className="text-xl lg:text-2xl font-bold text-gray-900">
                <span className="text-orange-500">Brandots</span> Technologies
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 relative">
              <div className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                  onMouseEnter={() => handleMegaMenuOpen("services")}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                  onMouseEnter={() => handleMegaMenuOpen("solutions")}
                >
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                  onMouseEnter={() => handleMegaMenuOpen("industries")}
                >
                  Industries
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <Link href="/services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Services
              </Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Portfolio
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Company
              </Link>
              <Link href="#blog" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Insights
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white touch-manipulation"
              >
                Get Quote
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white touch-manipulation">Let's Connect</Button>
            </div>

            {/* Mobile Menu Button - Larger touch target */}
            <button className="lg:hidden p-2 touch-manipulation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mega Menu */}
          <MegaMenu isOpen={!!activeMegaMenu} category={activeMegaMenu || ""} onClose={handleMegaMenuClose} />

          {/* Mobile Navigation - Improved spacing */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#solutions"
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="#industries"
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  href="#portfolio"
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Company
                </Link>
                <Link
                  href="/careers"
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  href="#blog"
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Insights
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex flex-col space-y-3 pt-4">
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Button>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Let's Connect
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
