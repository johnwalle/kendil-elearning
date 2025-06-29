'use client';

import { useState } from 'react';
import Link from 'next/link';
import GoogleButton from './GoogleButton';

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState('');

    const handleForgotPassword = (e: any) => {
        e.preventDefault();
        // TODO: Handle forgot password logic (e.g., send reset link)
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-[#2a3e6c] to-[#6b8ac9]">
            <div className="w-full max-w-md bg-white shadow-xl rounded-xl mx-auto my-24 py-10 p-8">
                <h1 className="text-2xl font-bold text-center text-indigo-900">Kendil</h1>
                <p className="text-sm text-center text-gray-600 mb-6">
                    Empower Your Learning Journey
                </p>

                <form onSubmit={handleForgotPassword} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ color: '#1f2937' }}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
                    >
                        Send Reset Link
                    </button>

                    <div className="flex items-center gap-4 text-gray-500">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-sm">or</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    <button
                        type="button"
                        className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition"
                        onClick={() => {/* TODO: Navigate to Login */ }}
                    >
                        <Link
                            href="/auth/signup"
                        >
                            Back to Login
                        </Link>
                    </button>

                </form>
            </div>
        </div>

    );
}