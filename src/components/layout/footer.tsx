'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            🎓 Kendil E-learning
          </h2>
          <p className="text-sm">
            Empowering learners worldwide with AI-driven education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/courses" className="hover:underline">Courses</Link></li>
            <li><Link href="/instructors" className="hover:underline">Instructors</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/help-center" className="hover:underline">Help Center</Link></li>
            <li><Link href="/community" className="hover:underline">Community</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
            <li><Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-blue-700" />

      {/* Bottom Text */}
      <div className="text-center text-xs text-blue-300">
        © 2025 Kendil E-learning. All rights reserved.
      </div>
    </footer>
  );
}
