import Hero31 from "@/components/Home/Hero";
import JobSection from "@/components/Home/JobSection";
import Head from "next/head";
import { useEffect } from "react";
import ReactGA from "react-ga";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LandJobber - Find Your Dream Job | Job Search Platform</title>
        <meta
          name="description"
          content="LandJobber is a leading job search platform connecting job seekers with top companies. Find your dream job in tech, design, marketing, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="LandJobber - Job Search Platform" />
        <meta
          property="og:description"
          content="Explore job opportunities across industries with LandJobber. Find jobs, apply easily, and land your next career opportunity."
        />
        <meta property="og:image" content="/image.png" />
        <meta property="og:url" content="https://landjobber.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="LandJobber - Find Your Dream Job | Job Search Platform"
        />
        <meta
          name="twitter:description"
          content="LandJobber connects job seekers with top companies. Explore job openings in tech, design, marketing, and more."
        />

        {/* Additional SEO tags */}
        <meta
          name="keywords"
          content="jobs, job search, job platform, job portal, web developer jobs, tech jobs, marketing jobs, remote jobs, career, job listings, job opportunities, LandJobber"
        />
        <meta name="author" content="LandJobber Team" />
        <link rel="canonical" href="https://landjobber.vercel.app/" />
        <link rel="icon" href="/logo.avif" />

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              title: "Find Jobs on LandJobber",
              description:
                "LandJobber is a leading job search platform helping job seekers connect with top companies across industries.",
              datePosted: "2024-10-16",
              employmentType: "Full-time",
              hiringOrganization: {
                "@type": "Organization",
                name: "LandJobber",
                sameAs: "https://landjobber.vercel.app/",
                logo: "https://landjobber.vercel.app/logo.png",
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "123 Job Street",
                  addressLocality: "JobCity",
                  addressRegion: "JobRegion",
                  postalCode: "12345",
                  addressCountry: "US",
                },
              },
            }),
          }}
        />

        <script
          type="text/javascript"
          src="//pl26295256.profitableratecpm.com/12/79/a1/1279a17b3b73f443a8d470fe42be2ee8.js"
        ></script>
      </Head>

      <div>
        <Hero31 />
        <JobSection />
      </div>
    </div>
  );
}
