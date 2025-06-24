import Image from "next/image"

const partners = [
	{
		name: "AWS Well-Architected Partner",
		logo: "/images/Aws partner.png",
	},
	{
		name: "Google Cloud Partner",
		logo: "/images/gcp.png",
		},
	{
		name: "Microsoft Gold Certified Partner",
		logo: "/images/azure.jpeg",
	},
]

export default function StrategicPartnerships() {
	return (
		<section className="py-20 bg-gray-900 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left Content */}
					<div className="space-y-8">
						<div className="space-y-6">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
								Strategic Partnerships To
								<br />
								Unlock Greater Business Value
							</h2>
							<p className="text-xl text-gray-300 leading-relaxed">
								We collaborate with industry-leading technology partners to deliver cutting-edge solutions that drive
								innovation and accelerate your digital transformation journey.
							</p>
						</div>

						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
								<span className="text-gray-300">Certified partnerships with leading cloud providers</span>
							</div>
							<div className="flex items-center space-x-3">
								<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
								<span className="text-gray-300">Access to latest technologies and enterprise tools</span>
							</div>
							<div className="flex items-center space-x-3">
								<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
								<span className="text-gray-300">Preferred pricing and priority support for our clients</span>
							</div>
							<div className="flex items-center space-x-3">
								<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
								<span className="text-gray-300">Joint go-to-market strategies and co-innovation</span>
							</div>
						</div>

						<div className="pt-4">
							<div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-3">
								<div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
								<span className="text-orange-400 font-medium">Trusted by 500+ global enterprises</span>
							</div>
						</div>
					</div>

					{/* Right Content - Partner Logos */}
					<div className="space-y-8">
						<div className="grid grid-cols-2 gap-8">
							{partners.map((partner, index) => (
								<div
									key={index}
									className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 text-center"
								>
									<div className="h-32 flex items-center justify-center mb-4">
										{partner.logo.match(/\.(svg|gif)$/) ? (
											<img
												src={partner.logo}
												alt={partner.description || partner.name}
												width={400}
												height={200}
												className="h-24 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
											/>
										) : (
											<Image
												src={partner.logo || "/placeholder.svg"}
												alt={partner.description || partner.name}
												width={400}
												height={200}
												className="h-24 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
											/>
										)}
									</div>
									<h4 className="text-white font-semibold text-lg mb-2">{partner.name}</h4>
									<p className="text-gray-400 text-sm">{partner.description}</p>
								</div>
							))}

							{/* Partnership Stats */}
							<div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-6 border border-white/10">
								<div className="grid grid-cols-3 gap-4 text-center">
									<div>
										<div className="text-2xl font-bold text-white mb-1">15+</div>
										<div className="text-gray-400 text-sm">Technology Partners</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-white mb-1">100%</div>
										<div className="text-gray-400 text-sm">Certified Teams</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-white mb-1">24/7</div>
										<div className="text-gray-400 text-sm">Partner Support</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom CTA */}
				<div className="mt-20 text-center">
					<div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12">
						<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
							Ready to leverage our strategic partnerships?
						</h3>
						<p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
							Let's discuss how our technology partnerships can accelerate your project and deliver enterprise-grade
							solutions.
						</p>
						<button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
							Explore Partnership Benefits
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
