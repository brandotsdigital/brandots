const offices = [
  {
    country: "INDIA",
    city: "Ahmedabad",
    address: "B-25, Sector 58,\nNoida- 201301,\nDelhi - NCR, India",
    skyline: "/placeholder.svg?height=80&width=120",
  },
  {
    country: "USA",
    city: "New York",
    address: "79, Madison Ave\nManhattan, NY 10001,\nUSA",
    skyline: "/placeholder.svg?height=80&width=120",
  },
  {
    country: "Australia",
    city: "Brisbane",
    address: "Brandots Australia,\nEast Brisbane\nQLD 4169, Australia",
    skyline: "/placeholder.svg?height=80&width=120",
  },
  {
    country: "UK",
    city: "London",
    address: "3rd Floor, 86-90\nPaul Street EC2A-4NE\nLondon, UK",
    skyline: "/placeholder.svg?height=80&width=120",
  },
  {
    country: "UAE",
    city: "Dubai",
    address: "Tiger Al Yarmook Building,\n13th floor B-block\nAl Nahda St - Sharjah",
    skyline: "/placeholder.svg?height=80&width=120",
  },
  {
    country: "CANADA",
    city: "Toronto",
    address: "Suite 3810, Bankers Hall West,\n888 - 3rd Street Sw\nCalgary Alberta",
    skyline: "/placeholder.svg?height=80&width=120",
  },
]

export default function GlobalOffices() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
          <div className="flex items-center space-x-4 mb-8 lg:mb-0">
            <div className="text-3xl font-bold text-white">
              <span className="text-orange-500">Brandots</span> Technologies
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">★</span>
            </div>
            <span className="text-white font-medium">Most trusted IT & Development Company</span>
          </div>
        </div>

        {/* Global Offices Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="group text-center space-y-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              {/* City Skyline */}
              <div className="h-20 flex items-end justify-center mb-4">
                <div className="w-24 h-16 relative">
                  {/* Custom skyline SVG placeholder - you can replace with actual skyline illustrations */}
                  <svg
                    viewBox="0 0 120 80"
                    className="w-full h-full text-white/60 group-hover:text-white/80 transition-colors"
                    fill="currentColor"
                  >
                    <rect x="10" y="40" width="8" height="40" />
                    <rect x="20" y="30" width="6" height="50" />
                    <rect x="28" y="35" width="10" height="45" />
                    <rect x="40" y="20" width="8" height="60" />
                    <rect x="50" y="25" width="12" height="55" />
                    <rect x="65" y="45" width="6" height="35" />
                    <rect x="73" y="35" width="8" height="45" />
                    <rect x="83" y="40" width="10" height="40" />
                    <rect x="95" y="30" width="6" height="50" />
                    <rect x="103" y="50" width="8" height="30" />
                  </svg>
                </div>
              </div>

              {/* Country Name */}
              <h3 className="text-white font-bold text-lg tracking-wider">{office.country}</h3>

              {/* Address */}
              <div className="text-white/80 text-sm leading-relaxed">
                {office.address.split("\n").map((line, lineIndex) => (
                  <div key={lineIndex}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">6+</div>
            <div className="text-white/80">Global Offices</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">12+</div>
            <div className="text-white/80">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/80">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
