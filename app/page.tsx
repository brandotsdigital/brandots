import Hero from "@/components/Hero"
import AwardsScroll from "@/components/AwardsScroll" 
import About from "@/components/About"
import Services from "@/components/Services"
// import Portfolio from "@/components/Portfolio"
import Technologies from "@/components/Technologies"
import Industries from "@/components/Industries"
import GlobalOffices from "@/components/GlobalOffices"
import StrategicPartnerships from "@/components/StrategicPartnerships"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main
      className="min-h-screen w-full bg-white text-neutral-900 antialiased overflow-x-hidden scroll-smooth flex flex-col px-0 sm:px-2 md:px-4 lg:px-0"
    >
      <Hero />
      <AwardsScroll />
      <About />
      <Services />
      {/* <Portfolio /> is now hidden on the homepage */}
      {/* <Portfolio /> */}
      <Technologies />
      <Industries />
      <GlobalOffices />
      <StrategicPartnerships />
      {/* <Blog /> */}
      <Contact />
    </main>
  );
}
