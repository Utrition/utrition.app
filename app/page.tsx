import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "./components/check-icon";
import { ThemeToggle } from "./components/theme-toggle";
import { ThemeAwareScreenshotCSS } from "./components/theme-aware-screenshot-css";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Header and Hero Wrapper */}
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="container mx-auto px-6 py-8 flex justify-between items-center">
          <div className="h-10">
            <Image
              src="/utrition-logo.png?height=40&width=150"
              alt="UTRITION Logo"
              width={150}
              height={40}
              className="h-full w-auto"
              priority
            />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="https://utrition.notion.site/12fbcc38ac63802ea0b0c49950dc2512?pvs=105">
              <button className="px-6 py-2 bg-[#00D37F] text-white rounded-[50px] hover:bg-[#00B26C] transition duration-300 inline-block">
                Sign Up
              </button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 md:py-24 text-center max-w-7xl flex-grow flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight whitespace-nowrap">
            Catalyzing Health with AI.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            We&apos;re improving global well-being by utilizing AI to simplify
            food information and access for everyone.
          </p>
          <div className="inline-block">
            <div className="inline-block">
              <Link href="#stress">
                <button className="px-8 py-3 border border-[#00D37F] text-text dark:text-white rounded-[50px] hover:bg-[#00D37F] hover:text-white transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Problem Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="bg-[#F7F7F7] dark:bg-[#4C4C4C] rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4 leading-tight">
                It&apos;s Hard to Find What&apos;s Right for You.
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
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
              <p className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#00D37F] mb-4">
                20%
              </p>
              <p className="text-lg dark:text-gray-300">
                Say it&apos;s a lack of knowledge
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#00D37F] mb-4">
                23%
              </p>
              <p className="text-lg dark:text-gray-300">
                Think it takes too much time
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#00D37F] mb-4">
                40%
              </p>
              <p className="text-lg dark:text-gray-300">
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
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
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
          {/* Feature 1 */}
          <div className="bg-[#F7F7F7] dark:bg-[#4C4C4C] rounded-[20px] p-8">
            <div className="w-10 h-10 rounded-full bg-[#00D37F]/20 flex items-center justify-center mb-6">
              <CheckIcon />
            </div>
            <h3 className="text-2xl font-normal mb-4">Community</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We are only as strong as those around us. We&apos;re creating a
              place for you, our users, to follow and share your friends&apos;
              interests and preferences.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#F7F7F7] dark:bg-[#4C4C4C] rounded-[20px] p-8">
            <div className="w-10 h-10 rounded-full bg-[#00D37F]/20 flex items-center justify-center mb-6">
              <CheckIcon />
            </div>
            <h3 className="text-2xl font-normal mb-4">Personalized Diets</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We enable you to set up your personalized account ready for you to
              shop and swipe away using only your pantry items and our brief
              questionnaire.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#F7F7F7] dark:bg-[#4C4C4C] rounded-[20px] p-8">
            <div className="w-10 h-10 rounded-full bg-[#00D37F]/20 flex items-center justify-center mb-6">
              <CheckIcon />
            </div>
            <h3 className="text-2xl font-normal mb-4">
              Artificial Intelligence
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We are harnessing the power of AI to create personalized product
              and recipe recommendations specifically for you and your
              household.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#F7F7F7] dark:bg-[#4C4C4C] rounded-[20px] p-8">
            <div className="w-10 h-10 rounded-full bg-[#00D37F]/20 flex items-center justify-center mb-6">
              <CheckIcon />
            </div>
            <h3 className="text-2xl font-normal mb-4">Transparency</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We enable you to make your own informed consumer decisions based
              on credible, unbiased information.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-[#F7F7F7] dark:bg-[#4C4C4C] rounded-[20px] p-8">
            <div className="w-10 h-10 rounded-full bg-[#00D37F]/20 flex items-center justify-center mb-6">
              <CheckIcon />
            </div>
            <h3 className="text-2xl font-normal mb-4">Fitness & Lifestyle</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We are partnering with curated organizations including clubs,
              wellness centers, and gyms to help navigate you on your health
              journey.
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-[#F7F7F7] dark:bg-[#4C4C4C] rounded-[20px] p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-normal mb-4">
                Let&apos;s Simplify Your Shopping Experience
              </h3>
            </div>
            <div className="mt-8">
              <Link href="https://utrition.notion.site/12fbcc38ac63802ea0b0c49950dc2512?pvs=105">
                <button className="px-6 py-2 bg-[#00D37F] text-white rounded-[50px] hover:bg-[#00B26C] transition duration-300 inline-block">
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
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-normal mb-6 leading-tight text-[#00D37F]">
              Set. Scan. Swipe.
            </h2>
            <p className="text-lg text-[#0F2830] md:text-4xl text-gray-600 dark:text-white">
              Smarter eating in three simple steps: set your dietary
              preferences, scan any food item with your phone, and choose the
              best options that fit your lifestyle. With{" "}
              <span className="text-[#00D37F] font-normal">UTRITION</span>,
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
        <div className="bg-[#1E1E1E] dark:bg-[#4C4C4C] rounded-[38px] p-8 md:p-16 text-center text-white max-w-[1359px] mx-auto shadow-lg">
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
      <footer className="container mx-auto px-6 py-8 border-t dark:border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-15 mb-4 md:mb-0 text-gray-500 dark:text-gray-400">
            Copyright © 2025 UTRITION, Inc. All Rights Reserved.
          </p>
          <div className="text-15 text-gray-500 dark:text-gray-400">
            <Link href="#" className="hover:text-[#00D37F] mr-4">
              Contact Us
            </Link>
            <Link href="#" className="hover:text-[#00D37F] mr-4">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#00D37F]">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
