"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, Clock, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
	{
		title: "How to Choose the Right Mobile App Development Partner in 2025",
		excerpt:
			"A step-by-step guide to selecting a reliable mobile app development company for your business needs, including key questions to ask and red flags to avoid.",
		image: "/images/blog-choose-partner.jpg",
		author: "Priya Sharma",
		date: "June 10, 2025",
		readTime: "7 min read",
		views: "1.2K",
		category: "Business",
		slug: "choose-mobile-app-partner-2025",
		featured: true,
	},
	{
		title: "Top Mobile App Design Trends to Watch in 2025",
		excerpt:
			"Discover the latest UI/UX design trends for mobile apps, from neomorphism to advanced micro-interactions, and how they impact user engagement.",
		image: "/images/blog-design-trends-2025.jpg",
		author: "Amit Patel",
		date: "June 5, 2025",
		readTime: "6 min read",
		views: "980",
		category: "Design",
		slug: "mobile-app-design-trends-2025",
		featured: false,
	},
	{
		title: "AI in Mobile Apps: Real-World Use Cases for 2025",
		excerpt:
			"Explore how artificial intelligence is powering smarter, more personalized mobile apps across industries in 2025.",
		image: "/images/blog-ai-mobile-apps.jpg",
		author: "Sonia Verma",
		date: "May 28, 2025",
		readTime: "8 min read",
		views: "1.7K",
		category: "AI & Technology",
		slug: "ai-mobile-apps-2025",
		featured: false,
	},
	{
		title: "How to Monetize Your Mobile App in 2025: Strategies That Work",
		excerpt:
			"Learn about the most effective monetization models for mobile apps in 2025, including subscriptions, in-app purchases, and ads.",
		image: "/images/blog-monetize-app.jpg",
		author: "Rahul Singh",
		date: "May 20, 2025",
		readTime: "5 min read",
		views: "1.4K",
		category: "Business",
		slug: "monetize-mobile-app-2025",
		featured: false,
	},
	{
		title: "Mobile App Security Essentials for 2025",
		excerpt:
			"Essential security practices and tools every mobile app developer should know to protect user data and ensure compliance in 2025.",
		image: "/images/blog-app-security.jpg",
		author: "Neha Gupta",
		date: "May 15, 2025",
		readTime: "9 min read",
		views: "1.1K",
		category: "Security",
		slug: "mobile-app-security-2025",
		featured: false,
	},
	{
		title: "The Rise of Super Apps: What It Means for Businesses in 2025",
		excerpt:
			"Understand the super app phenomenon and how businesses can leverage all-in-one platforms to reach more users in 2025.",
		image: "/images/blog-super-apps.jpg",
		author: "Vikram Rao",
		date: "May 10, 2025",
		readTime: "8 min read",
		views: "1.6K",
		category: "Strategy",
		slug: "rise-of-super-apps-2025",
		featured: false,
	},
]

const categories = [
	"All",
	"Mobile Development",
	"AI & Technology",
	"Development",
	"Security",
	"Strategy",
	"Business",
]

export default function Blog() {
	return (
		<section id="blog" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
						Insights & Blog
					</div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
						Latest insights on{" "}
						<span className="text-orange-500">mobile app development</span> and
						technology trends
					</h2>
					<p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						Stay updated with the latest mobile app development trends, industry
						insights, and best practices. Our expert team shares valuable knowledge
						to help you make informed decisions about your mobile app development
						projects.
					</p>
				</div>

				{/* Category Filter */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category, index) => (
						<button
							key={index}
							className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
								index === 0
									? "bg-orange-500 text-white shadow-lg"
									: "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500 shadow-sm"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Blog Section - Auto-scrolling single row */}
				<div className="relative w-full overflow-x-hidden py-12">
					<div
						className="flex gap-8 animate-scroll-x"
						style={{ animation: "scroll-x 15s linear infinite" }}
					>
						{blogPosts.concat(blogPosts).map((post, i) => (
							<div
								key={i}
								className="min-w-[320px] max-w-xs bg-white rounded-xl shadow-lg p-6 flex-shrink-0"
							>
								<div className="h-32 w-full bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
									<Image
										src={post.image}
										alt={post.title}
										fill
										className="object-cover rounded-lg"
									/>
								</div>
								<h4 className="font-bold text-lg mb-2 line-clamp-2">
									{post.title}
								</h4>
								<p className="text-gray-600 text-sm mb-2 line-clamp-3">
									{post.excerpt}
								</p>
								<div className="flex items-center text-xs text-gray-400 gap-2 mb-1">
									<Calendar className="w-4 h-4" /> {post.date}
									<Clock className="w-4 h-4 ml-2" /> {post.readTime}
									<Eye className="w-4 h-4 ml-2" /> {post.views}
								</div>
								<span className="text-xs text-orange-500 font-semibold">
									{post.category}
								</span>
							</div>
						))}
					</div>
					<style jsx>{`
						@keyframes scroll-x {
							0% {
								transform: translateX(0);
							}
							100% {
								transform: translateX(-50%);
							}
						}
					`}</style>
				</div>

				<div className="text-center mt-12">
					<Button
						size="lg"
						className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold"
					>
						View All Articles
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</div>
			</div>
		</section>
	)
}
