'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import GoogleButton from './GoogleButton';
import Link from 'next/link'; // Import Link from next/link

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: any) => {
        e.preventDefault();
        // TODO: Handle login
    };

    return (
        <form onSubmit={handleLogin} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900"
                    placeholder="you@example.com"
                    style={{ color: '#1f2937' }} // Dark gray for input text
                    required
                />
            </div>

            <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-10 transition-colors text-gray-900"
                    placeholder="••••••••"
                    style={{ color: '#1f2937' }} // Dark gray for input text
                    required
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>

            <button
                type="submit"
                className="cursor-pointer w-full bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
            >
                Login
            </button>

            <div className="flex items-center justify-end">

                <Link href="/auth/forgot-password" className="text-sm text-indigo-500 hover:text-indigo-700">
                    Forgot Password?
                </Link>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm">or continue with</span>
                <div className="flex-1 h-px bg-gray-200" />
            </div>

            <GoogleButton />
        </form>
    );
}