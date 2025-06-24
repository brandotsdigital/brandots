"use client"

import { useState } from "react"
import Image from "next/image"
import { Monitor, Settings, Smartphone, Database, Server, Cloud, ArrowRight } from "lucide-react"

const technologyCategories = [
	{
		id: "frontend",
		title: "Frontend Programming Languages",
		icon: Monitor,
		technologies: [
			{ name: "react-logo-icon", logo: "/react-logo-icon.svg" },
			{ name: "vuejs-logo", logo: "/vuejs-logo.svg" },
			{ name: "ng-logo", logo: "/ng-logo.svg" },
			{ name: "nextlogo", logo: "/nextlogo.svg" },
			{ name: "javascript-lg", logo: "/javascript-lg.svg" },
			{ name: "html-logo", logo: "/html-logo.svg" },
			{ name: "css-logo", logo: "/css-logo.svg" },
			{ name: "ember-logo", logo: "/ember-logo.svg" },
			{ name: "meteor", logo: "/meteor.svg" },
		],
	},
	{
		id: "backend",
		title: "Backend Programming Languages",
		icon: Settings,
		technologies: [
			{ name: ".NET", logo: "/dot-net-lang.svg" },
			{ name: "Java", logo: "/java-tech-icon.svg" },
			{ name: "Python", logo: "/python-tech-icon.svg" },
			{ name: "PHP", logo: "/php-logo.svg" },
			{ name: "Node.js", logo: "/node_js.svg" },
			{ name: "GO", logo: "/go_lang.svg" },
		],
	},
	{
		id: "mobile",
		title: "Mobile",
		icon: Smartphone,
		technologies: [
			{ name: "mobile-react", logo: "/mobile-react.svg" },
			{ name: "mobile-android", logo: "/mobile-android.svg" },
			{ name: "mobile-flutter", logo: "/mobile-futter.svg" },
			{ name: "xamarin", logo: "/mobile-xamarin.svg" },
			{ name: "Cordova", logo: "/mobile-cordova.svg" },
			{ name: "ionic", logo: "/mobile-ionic.svg" },
			{ name: "ios", logo: "/mobile-ios.svg" },
			{ name: "PWA", logo: "/mobile-pwa-logo.svg" },
		],
	},
	{
		id: "bigdata",
		title: "Big Data",
		icon: Database,
		technologies: [
			{ name: "stream-analytics", logo: "/stream-analytics-tech-icon.svg" },
			{ name: "amazon-kinesis", logo: "/amazon-kinesis-tech-icon.svg" },
			{ name: "apache-storm", logo: "/apache-storm-tech-icon.svg" },
			{ name: "azure-event-hub", logo: "/azure-event-hub-tech-icon.svg" },
			{ name: "nifi", logo: "/nifi-tech-icon.svg" },
		],
	},
	{
		id: "databases",
		title: "Databases / Data Storages",
		icon: Server,
		technologies: [
			{ name: "hive", logo: "/hive-tech-icon.svg" },
			{ name: "mongodb", logo: "/mongodb-tech-icon.svg" },
			{ name: "cassandra", logo: "/cassandra-tech-icon.svg" },
			{ name: "postgre-sql", logo: "/postgre-sql-tech-icon.svg" },
			{ name: "mysql", logo: "/mysql-tech-icon.svg" },
			{ name: "oracle", logo: "/oracle-tech-icon.svg" },
			{ name: "hbase", logo: "/hbase-tech-icon.svg" },
		],
	},
	{
		id: "cloud",
		title: "Cloud DB, Warehouses And Storage",
		icon: Cloud,
		technologies: [
			{ name: "amazon-redshift", logo: "/amazon-redshift.svg" },
			{ name: "aws-elasticache", logo: "/aws-elasticache.svg" },
			{ name: "azure-blob-storage", logo: "/azure-blob-storage.svg" },
			{ name: "amazon-documentdb", logo: "/amazon-documentdb.svg" },
			{ name: "amazon-dynamodb", logo: "/amazon-dynamodb.svg" },
			{ name: "amazon-rds", logo: "/amazon-rds.svg" },
			{ name: "azure-cosmos-DB", logo: "/azure-cosmos-DB.svg" },
			{ name: "google-cloud-sql-1", logo: "/google-cloud-sql-1.svg" },
		],
	},
]

export default function Technologies() {
	const [activeTab, setActiveTab] = useState("backend")

	const activeCategory = technologyCategories.find((cat) => cat.id === activeTab)

	return (
		<section id="technologies" className="py-20 bg-gray-900">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
						Tech Capabilities Driving Digital
						<br />
						Transformation For Our Clients
					</h2>
				</div>

				<div className="max-w-7xl mx-auto">
					<div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-3xl overflow-hidden shadow-2xl">
						<div className="grid lg:grid-cols-5 min-h-[500px]">
							{/* Left Sidebar - Technology Categories */}
							<div className="lg:col-span-2 p-8 lg:p-12">
								<div className="space-y-4">
									{technologyCategories.map((category) => (
										<button
											key={category.id}
											onClick={() => setActiveTab(category.id)}
											className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left group ${
												activeTab === category.id
													? "bg-white/20 backdrop-blur-sm border border-white/30"
													: "hover:bg-white/10 border border-transparent"
											}`}
										>
											<div className="flex items-center space-x-4">
												<div
													className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 ${
														activeTab === category.id ? "scale-110" : "group-hover:scale-105"
													}`}
												>
													<category.icon className="h-6 w-6 text-white" />
												</div>
												<span className="text-white font-medium text-lg">{category.title}</span>
											</div>
											{activeTab === category.id && <ArrowRight className="h-5 w-5 text-white animate-pulse" />}
										</button>
									))}
								</div>
							</div>

							{/* Right Content - Technology Icons */}
							<div className="lg:col-span-3 bg-gray-50 p-8 lg:p-12">
								<div className="h-full flex flex-col">
									<div className="mb-8">
										<h3 className="text-2xl font-bold text-gray-900 mb-2">{activeCategory?.title}</h3>
										<div className="w-16 h-1 bg-orange-500 rounded-full"></div>
									</div>

									<div className="flex-1 flex items-center">
										<div className="w-full">
											<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
												{activeCategory?.technologies.map((tech, index) => (
													<div
														key={tech.name}
														className="group text-center transform transition-all duration-300 hover:scale-110"
														style={{
															animationDelay: `${index * 100}ms`,
														}}
													>
														<div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 border border-gray-100">
															<Image
																src={tech.logo || "/placeholder.svg"}
																alt={tech.name}
																width={40}
																height={40}
																className="w-10 h-10 object-contain"
															/>
														</div>
														<h4 className="font-semibold text-gray-900 text-sm group-hover:text-orange-500 transition-colors">
															{tech.name}
														</h4>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Technology Expertise Stats */}
				<div className="mt-20 text-center">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
							<div className="text-gray-400 font-medium">Technologies Mastered</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
							<div className="text-gray-400 font-medium">Latest Frameworks</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
							<div className="text-gray-400 font-medium">Technical Support</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold text-white mb-2">9+</div>
							<div className="text-gray-400 font-medium">Years Experience</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
