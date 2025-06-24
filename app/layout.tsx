import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Brandots Technologies - Top Mobile App & Software Development Company",
  description:
    "Brandots Technologies is a leading mobile app development company offering custom software development, AI solutions, and digital transformation services. 500+ projects delivered globally.",
  keywords:
    "mobile app development company, custom software development, AI development, digital transformation, iOS app development, Android app development, web development, blockchain development",
  authors: [{ name: "Brandots Technologies" }],
  openGraph: {
    title: "Brandots Technologies - Top Mobile App & Software Development Company",
    description:
      "Leading mobile app development company offering custom software development, AI solutions, and digital transformation services. 500+ projects delivered globally.",
    url: "https://brandots.in",
    siteName: "Brandots Technologies",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brandots Technologies - Mobile App Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandots Technologies - Top Mobile App & Software Development Company",
    description:
      "Leading mobile app development company offering custom software development, AI solutions, and digital transformation services.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://brandots.in" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brandots Technologies",
              url: "https://brandots.in",
              logo: "https://brandots.in/logo.png",
              description: "Leading mobile app development and software development company",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Gujarat",
                addressLocality: "Ahmedabad",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-XXX-XXX-XXXX",
                contactType: "customer service",
                email: "contact@brandots.in",
              },
              sameAs: [
                "https://www.linkedin.com/company/brandots-technologies",
                "https://twitter.com/brandotstech",
                "https://www.facebook.com/brandotstech",
              ],
              foundingDate: "2019",
              numberOfEmployees: "50-100",
              industry: "Software Development",
              services: [
                "Mobile App Development",
                "Custom Software Development",
                "AI Development",
                "Blockchain Development",
                "Digital Transformation",
              ],
            }),
          }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
