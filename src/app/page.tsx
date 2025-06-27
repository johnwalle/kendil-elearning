import type { Metadata } from 'next';
import Testimonial from '@/components/landing/Testimonal';
import FeaturedCourses from '@/components/landing/FeaturedCourses';
import LeaderboardSection from '@/components/landing/LeaderboardSection';
import Image from 'next/image';
import { BrainCircuit, Clock, BadgeCheck } from 'lucide-react';

// ✅ Page-specific metadata
export const metadata: Metadata = {
  title: 'Kendil E-learning | Learn Smarter with AI',
  description:
    'AI-powered personalized learning platform for students and professionals. Flexible courses, certificates, and smart recommendations.',
  openGraph: {
    title: 'Kendil E-learning',
    description:
      'Boost your skills with AI-enhanced flexible learning. Start for free today.',
    url: 'https://yourdomain.com',
    siteName: 'Kendil E-learning',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kendil E-learning Hero Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kendil E-learning',
    description: 'Learn faster and smarter with AI-powered E-learning.',
    images: ['https://yourdomain.com/og-image.jpg'],
  },
};

// ✅ Icon/Feature config
const features = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-white" />,
    title: 'AI-Powered Learning',
    description:
      'Personalized learning paths powered by AI that adapt to your pace and style.',
    color: 'bg-[#1f3e94]',
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: 'Flexible Courses',
    description:
      'Learn at your own pace with 24/7 access to high-quality courses.',
    color: 'bg-[#ff7a00]',
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-white" />,
    title: 'Certificates',
    description:
      'Earn industry-recognized certificates to boost your career.',
    color: 'bg-[#1f3e94]',
  },
];

// ✅ Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800" id="main">
      {/* ========== HERO SECTION ========== */}
      <section
        className="bg-gradient-to-br from-[#1f3e94] to-[#0b49a1] text-white"
        aria-label="Hero section"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-14 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Empower Your <br />
              Learning Journey
            </h1>
            <p className="text-white/90 text-lg max-w-md mx-auto md:mx-0">
              Transform your skills with AI-powered courses designed for
              students, professionals, and schools worldwide.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
              <button className="bg-[#FF7A00] hover:bg-[#e56e00] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors">
                Sign Up Free
              </button>
              <button className="border border-white hover:border-[#FF7A00] text-white hover:text-[#FF7A00] font-semibold px-6 py-3 rounded-lg transition-colors">
                Browse Courses
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6b9182cd7d-cd3ebca0b5ca15b59785.png"
              alt="Students learning digitally"
              width={400}
              height={320}
              className="rounded-xl drop-shadow-lg object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* ========== FEATURED COURSES ========== */}
      <FeaturedCourses />

      {/* ========== AI RECOMMENDATIONS ========== */}
      <section
        className="px-4 py-16 bg-white text-center"
        aria-labelledby="ai-recommend"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="ai-recommend"
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          >
            AI-Powered Recommendations
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Personalized course suggestions based on your goals
          </p>

          <div className="bg-gradient-to-r from-[#1f3e94] to-[#0b49a1] text-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold mb-2">
                Smart Learning Path Generator
              </h3>
              <p className="text-white/90 max-w-xl mb-6">
                Our AI analyzes your progress and suggests the best next course
                for your career.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition duration-300">
                Get My Recommendations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LEADERBOARD ========== */}
      <LeaderboardSection />

      {/* ========== TESTIMONIALS ========== */}
      <Testimonial />

      {/* ========== WHY CHOOSE US ========== */}
      <section
        className="bg-[#f8f9fc] py-20"
        aria-labelledby="why-choose-heading"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2
            id="why-choose-heading"
            className="text-3xl md:text-4xl font-extrabold text-[#0b2e78] text-center mb-12"
          >
            Why Choose Kendil E-learning?
          </h2>
          <div className="grid gap-12 md:grid-cols-3 text-center">
            {features.map((feature, index) => (
              <div key={index} className="space-y-5">
                <div
                  className={`w-14 h-14 mx-auto flex items-center justify-center rounded-full ${feature.color}`}
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 px-4 md:px-0">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
