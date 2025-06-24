"use client"

import { Play, Star, Award, Users, TrendingUp, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import PopupTrigger from "@/components/PopupTrigger"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    // Only generate random bubbles on the client
    setBubbles(
      Array.from({ length: 20 }).map(() => {
        return {
          width: (Math.random() * 6 + 2).toFixed(2),
          height: (Math.random() * 6 + 2).toFixed(2),
          top: (Math.random() * 100).toFixed(2),
          left: (Math.random() * 100).toFixed(2),
          duration: (Math.random() * 10 + 10).toFixed(2),
          opacity: (Math.random() * 0.5 + 0.3).toFixed(3),
        }
      })
    );
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: `${bubble.width}px`,
              height: `${bubble.height}px`,
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              animation: `float ${bubble.duration}s linear infinite`,
              opacity: Number(bubble.opacity),
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Trust Indicators - Mobile optimized */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 lg:gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
                <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-500 fill-current" />
                <span className="font-semibold text-white text-xs lg:text-sm">4.8</span>
                <span className="text-gray-300 text-xs lg:text-sm">Clutch</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
                <Award className="h-3 w-3 lg:h-4 lg:w-4 text-orange-500" />
                <span className="font-semibold text-white text-xs lg:text-sm">Top</span>
                <span className="text-gray-300 text-xs lg:text-sm">Developer</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
                <Users className="h-3 w-3 lg:h-4 lg:w-4 text-blue-500" />
                <span className="font-semibold text-white text-xs lg:text-sm">2800+</span>
                <span className="text-gray-300 text-xs lg:text-sm">Projects</span>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                We build <span className="text-orange-500">digital products</span> that help businesses and startups
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Brandots Technologies is a leading mobile app development company that transforms businesses through
                innovative digital solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <PopupTrigger
                triggerText="Let's build your app"
                popupType="contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold touch-manipulation"
              />
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:bg-white/10 touch-manipulation"
                asChild
              >
                <a href="https://www.youtube.com/watch?v=foDPDP31wlo" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  Watch our story
                </a>
              </Button>
            </div>

            {/* Key Features - Mobile grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 pt-6 lg:pt-8">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">2800+ Apps & IT Products Delivered</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">150+ AI Solutions Built</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">98% Client Satisfaction</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">24/7 Technical Support</span>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl lg:rounded-3xl p-2 shadow-2xl">
              <video
                src="/brandotsvideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl lg:rounded-2xl object-cover bg-black"
                poster="/placeholder.jpg"
                title="AI Animated Video"
              />
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <div className="hidden lg:block absolute top-10 right-10 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <div>
                  <div className="text-sm font-semibold">Revenue</div>
                  <div className="text-xs text-gray-500">+40% Growth</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute bottom-10 left-10 bg-white rounded-2xl p-4 shadow-xl animate-pulse">
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                <div>
                  <div className="text-sm font-semibold">Rating</div>
                  <div className="text-xs text-gray-500">4.8/5 Stars</div>
                </div>
              </div>
            </div>

            {/* Stats Overlay - Mobile optimized */}
            <div className="absolute -bottom-4 lg:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-2xl w-4/5 z-20 backdrop-blur-md border border-gray-200">
              <div className="grid grid-cols-3 gap-2 lg:gap-4 text-center">
                <div>
                  <div className="text-lg lg:text-2xl font-bold text-gray-900">1200+</div>
                  <div className="text-xs text-gray-600">Apps Delivered</div>
                </div>
                <div>
                  <div className="text-lg lg:text-2xl font-bold text-gray-900">435+</div>
                  <div className="text-xs text-gray-600">AI Solutions</div>
                </div>
                <div>
                  <div className="text-lg lg:text-2xl font-bold text-gray-900">12+</div>
                  <div className="text-xs text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  )
}
