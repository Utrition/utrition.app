import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./components/theme-toggle";
import { ThemeAwareScreenshotCSS } from "./components/theme-aware-screenshot-css";
import { features } from "./data/features";
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://utrition.ai'),
    openGraph: {
      images: [
        {
          url: 'https://utrition.ai/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'UTRITION OG Image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['https://utrition.ai/opengraph-image'],
    },
  }
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[var(--background)]">
      {/* Header and Hero Wrapper */}
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="container mx-auto px-4 sm:px-6 py-4 sm:py-8 flex justify-between items-center">
          <div className="h-8 sm:h-10">
            <Image
              src="/utrition-logo.png?height=40&width=150"
              alt="UTRITION Logo"
              width={150}
              height={40}
              className="h-full w-auto"
              priority
            />
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <Link href="https://utrition.notion.site/12fbcc38ac63802ea0b0c49950dc2512?pvs=105">
              <button className="px-3 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base bg-[var(--primary)] text-white font-semibold rounded-[50px] hover:opacity-90 transition duration-300 inline-block">
                Sign Up
              </button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 text-center max-w-7xl flex-grow flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal mb-4 sm:mb-6 leading-tight">
            Catalyzing Health with AI.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-[var(--text)] max-w-3xl mx-auto">
            We&apos;re improving global well-being by utilizing AI to simplify
            food information and access for everyone.
          </p>
          <div className="inline-block">
            <Link href="#stress">
              <button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border border-[var(--primary)] text-text font-semibold rounded-[50px] hover:bg-[var(--primary)] hover:text-white transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* Problem Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="bg-[var(--subsection)] rounded-4xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-[var(--text)] text-3xl md:text-4xl lg:text-5xl font-normal mb-4 leading-tight">
                It&apos;s Hard to Find What&apos;s Right for You.
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg md:text-xl text-[var(--text)] ">
                With endless options and confusing labels, healthy eating can
                feel overwhelming. Whether you&apos;re short on time or unsure
                where to start, finding the right foods shouldn&apos;t be this
                hard.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
            <div className="text-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-normal text-[var(--primary)] mb-4">
                20%
              </p>
              <p className="text-lg">
                Say it&apos;s a lack of knowledge
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-normal text-[var(--primary)] mb-4">
                23%
              </p>
              <p className="text-lg">
                Think it takes too much time
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-normal text-[var(--primary)] mb-4">
                40%
              </p>
              <p className="text-lg">
                Believe it is too expensive
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stress Section */}
      <section
        id="stress"
        className="container mx-auto px-6 py-16 md:py-24 text-center max-w-4xl"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 leading-tight">
          The Stress of Navigating on Your Own.
        </h2>
        <p className="text-lg md:text-xl">
          Navigating food choices can be frustrating. You risk eating hidden
          allergens or ingredients that don&apos;t fit your diet, spend time
          reading confusing labels, and end up wasting money on foods that
          don&apos;t work for you. With{" "}
          <span className="text-[#00D37F] font-normal">UTRITION</span>, just
          scan and get clear, instant answers. No more guesswork.
        </p>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-12 text-center">
          Our Commitment to Your Health & Convenience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[var(--subsection)] rounded-[20px] p-8"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-normal mb-4">{feature.title}</h3>
              <p>
                {feature.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-[var(--subsection)] rounded-[20px] p-8 flex flex-col justify-between text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-normal mb-8">
                Let&apos;s Simplify Your Shopping Experience
              </h3>
            </div>
            <div className="mt-8">
              <Link href="https://utrition.notion.site/12fbcc38ac63802ea0b0c49950dc2512?pvs=105">
                <button className="px-6 py-2 bg-[var(--primary)] text-white rounded-[50px] hover:opacity-90 transition duration-300 inline-block">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Set. Scan. Swipe. Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 ">
          <div className="md:w-1/2 ">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-normal mb-6 leading-tight text-[var(--primary)]">
              Set. Scan. Swipe.
            </h2>
            <p className="text-lg text-[var(--text)] md:text-4xl">
              Smarter eating in three simple steps: set your dietary
              preferences, scan any food item with your phone, and choose the
              best options that fit your lifestyle. With{" "}
              <span className="text-[var(--primary)] font-normal">UTRITION</span>,
              making informed food choices has never been easier.
            </p>
          </div>
          <div className="md:w-1/2">
            <ThemeAwareScreenshotCSS />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="bg-[var(--cta-bg)] rounded-[38px] p-8 md:p-16 text-center text-white max-w-[1359px] mx-auto shadow-lg">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight text-white">
            We Make it Easy for You
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white">
            Take the guesswork out of food choices. Join{" "}
            <span className="text-[#00D37F] font-normal">UTRITION</span> and get
            personalized recommendations tailored to your lifestyle.
          </p>
          <Link href="https://utrition.notion.site/12fbcc38ac63802ea0b0c49950dc2512?pvs=105">
            <button className="px-8 py-3 bg-[#00D37F] text-white rounded-[50px] hover:bg-[#00B26C] transition duration-300 inline-block">
              Sign Up
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-15 mb-4 md:mb-0">
            Copyright © 2025 UTRITION, Inc. All Rights Reserved.
          </p>
          <div className="text-15">
            <Link href="#" className="hover:text-[var(--primary)] mr-4">
              Contact Us
            </Link>
            <Link href="#" className="hover:text-[var(--primary)] mr-4">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[var(--primary)]">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
