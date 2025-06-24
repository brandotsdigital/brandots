import { Smartphone, Code, Palette, Cloud, Brain, Shield, Globe, Cog } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
	{
		icon: Smartphone,
		title: "Mobile App Development",
		description:
			"We build native iOS and Android apps, cross-platform solutions, and progressive web apps that deliver exceptional user experiences and drive business growth.",
		features: [
			"Native iOS Development",
			"Native Android Development",
			"Cross-Platform Apps",
			"Progressive Web Apps",
		],
		color: "from-blue-500 to-blue-600",
		image: "/placeholder.svg?height=300&width=300",
	},
	{
		icon: Code,
		title: "Custom Software Development",
		description:
			"Our custom software development services help businesses streamline operations, improve efficiency, and achieve digital transformation goals.",
		features: ["Enterprise Software", "Web Applications", "API Development", "System Integration"],
		color: "from-green-500 to-green-600",
		image: "/placeholder.svg?height=300&width=300",
	},
	{
		icon: Brain,
		title: "AI & Machine Learning",
		description:
			"Leverage the power of artificial intelligence and machine learning to build intelligent applications that provide predictive insights and automation.",
		features: ["AI Chatbots", "Predictive Analytics", "Computer Vision", "Natural Language Processing"],
		color: "from-purple-500 to-purple-600",
		image: "/placeholder.svg?height=300&width=300",
	},
	{
		icon: Palette,
		title: "UI/UX Design Services",
		description:
			"Our design team creates intuitive, engaging, and conversion-focused user interfaces that enhance user experience and drive business results.",
		features: ["User Experience Design", "User Interface Design", "Prototyping", "Design Systems"],
		color: "from-pink-500 to-pink-600",
		image: "/placeholder.svg?height=300&width=300",
	},
]

const additionalServices = [
	{
		icon: Globe,
		title: "Web Development",
		description: "Responsive web applications and websites built with modern frameworks and technologies.",
		color: "from-orange-500 to-orange-600",
	},
	{
		icon: Cloud,
		title: "Cloud Solutions",
		description: "Comprehensive cloud services including migration, optimization, and infrastructure management.",
		color: "from-cyan-500 to-cyan-600",
	},
	{
		icon: Shield,
		title: "Blockchain Development",
		description: "Secure and transparent blockchain solutions for various business applications.",
		color: "from-yellow-500 to-yellow-600",
	},
	{
		icon: Cog,
		title: "Digital Transformation",
		description: "End-to-end digital transformation services to modernize your business operations.",
		color: "from-red-500 to-red-600",
	},
]

export default function Services() {
	return (
		<section id="services" className="py-16 lg:py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12 lg:mb-16">
					<div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
						Our Services
					</div>
					<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
						<span className="text-orange-500">Mobile app development</span> services that drive business growth
					</h2>
					<p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						As a leading mobile app development company, we offer comprehensive services from strategy and design to
						development and deployment.
					</p>
				</div>
				{/* Replace the two cards with a themed UI representation */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
					{/* Mobile App Development UI Card */}
					<div className="relative bg-gradient-to-br from-blue-500 via-orange-400 to-pink-500 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center border-4 border-white overflow-hidden">
						<div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl z-0"></div>
						<Smartphone className="h-16 w-16 text-white mb-4 z-10" />
						<h3 className="text-2xl font-bold text-white mb-2 z-10 drop-shadow">Mobile App Development</h3>
						<p className="text-white/90 mb-4 z-10 max-w-xs">
							We build native iOS and Android apps, cross-platform solutions, and PWAs for business growth.
						</p>
						<ul className="space-y-2 mb-6 z-10">
							<li className="flex items-center justify-center text-white/90 text-base">
								<span className="w-2 h-2 bg-white rounded-full mr-2"></span>iOS & Android
							</li>
							<li className="flex items-center justify-center text-white/90 text-base">
								<span className="w-2 h-2 bg-white rounded-full mr-2"></span>Cross-Platform
							</li>
							<li className="flex items-center justify-center text-white/90 text-base">
								<span className="w-2 h-2 bg-white rounded-full mr-2"></span>PWAs
							</li>
						</ul>
						<Button className="bg-white text-orange-500 hover:bg-orange-100 font-semibold px-8 py-3 rounded-full shadow-lg transition-all z-10">
							Get Started
						</Button>
					</div>
					{/* Custom Software Development UI Card */}
					<div className="relative bg-gradient-to-br from-green-500 via-blue-400 to-purple-500 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center border-4 border-white overflow-hidden">
						<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl z-0"></div>
						<Code className="h-16 w-16 text-white mb-4 z-10" />
						<h3 className="text-2xl font-bold text-white mb-2 z-10 drop-shadow">
							Custom Software Development
						</h3>
						<p className="text-white/90 mb-4 z-10 max-w-xs">
							Streamline operations and achieve digital transformation with tailored software solutions.<br/>
						</p>
						<ul className="space-y-2 mb-6 z-10">
							<li className="flex items-center justify-center text-white/90 text-base">
								<span className="w-2 h-2 bg-white rounded-full mr-2"></span>Enterprise Software
							</li>
							<li className="flex items-center justify-center text-white/90 text-base">
								<span className="w-2 h-2 bg-white rounded-full mr-2"></span>Web Applications
							</li>
							<li className="flex items-center justify-center text-white/90 text-base">
								<span className="w-2 h-2 bg-white rounded-full mr-2"></span>API Development
							</li>
						</ul>
						<Button className="bg-white text-green-600 hover:bg-green-100 font-semibold px-8 py-3 rounded-full shadow-lg transition-all z-10">
							Learn More
						</Button>
					</div>
				</div>

				{/* Secondary Services - Mobile grid */}
				<div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
					{services.slice(2, 4).map((service, index) => (
						<Card
							key={index}
							className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-3 overflow-hidden"
						>
							<CardHeader className="pb-4">
								<div
									className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${service.color} rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									<service.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
								</div>
								<CardTitle className="text-lg lg:text-xl font-bold text-gray-900 leading-tight group-hover:text-orange-500 transition-colors">
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4 lg:space-y-6">
								<CardDescription className="text-gray-600 leading-relaxed text-sm lg:text-base">
									{service.description}
								</CardDescription>
								<div className="space-y-3">
									<h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
									<ul className="space-y-2">
										{service.features.map((feature, featureIndex) => (
											<li key={featureIndex} className="flex items-center text-sm text-gray-600">
												<div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
												{feature}
											</li>
										))}
									</ul>
								</div>
								<Button
									variant="outline"
									size="sm"
									className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 touch-manipulation"
								>
									Learn More
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Additional Services - Mobile grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
					{additionalServices.map((service, index) => (
						<div
							key={index}
							className="bg-white p-4 lg:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
						>
							<div
								className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${service.color} rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4`}
							>
								<service.icon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
							</div>
							<h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
							<p className="text-sm text-gray-600 mb-3 lg:mb-4">{service.description}</p>
							<Button variant="link" className="text-orange-500 hover:text-orange-600 p-0 text-sm">
								Learn More →
							</Button>
						</div>
					))}
				</div>

				{/* CTA Section - Mobile optimized */}
				<div className="text-center mt-12 lg:mt-16">
					<div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12 text-white">
						<h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6">
							Ready to build your next mobile app?
						</h3>
						<p className="text-base lg:text-xl mb-6 lg:mb-8 opacity-90 max-w-3xl mx-auto">
							Let's discuss your project requirements and create a mobile app that drives business growth.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
							<Button
								size="lg"
								className="bg-white text-orange-500 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold touch-manipulation"
							>
								Get Free Consultation
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-white text-white hover:bg-white hover:text-orange-500 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold touch-manipulation"
							>
								View Our Portfolio
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
