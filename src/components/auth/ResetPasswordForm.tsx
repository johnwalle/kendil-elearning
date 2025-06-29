'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link'

export default function ResetPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);

    // Password strength checker
    const checkPasswordStrength = (pass: any) => {
        let strength = 0;
        if (pass.length > 8) strength += 25;
        if (/[A-Z]/.test(pass)) strength += 25;
        if (/[0-9]/.test(pass)) strength += 25;
        if (/[!@#$%^&*]/.test(pass)) strength += 25;
        setPasswordStrength(strength);
    };

    const handlePasswordChange = (e: any) => {
        const pass = e.target.value;
        setPassword(pass);
        checkPasswordStrength(pass);
    };

    const handleReset = (e: any) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // TODO: Handle password reset logic
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-[#2a3e6c] to-[#6b8ac9]">
            <div className="w-full max-w-md bg-white shadow-xl rounded-xl mx-auto my-24 py-10 p-8">
                <h1 className="text-2xl font-bold text-center text-indigo-900">Kendil</h1>
                <p className="text-sm text-center text-gray-600 mb-6">Empower Your Learning Journey</p>
                <form onSubmit={handleReset} className="space-y-6">
                    <div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-10 transition-colors text-gray-900"
                                placeholder="••••••••"
                                value={password}
                                onChange={handlePasswordChange}
                                style={{ color: '#1f2937' }}
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
                        {/* Password Strength Bar */}
                        <div className="mt-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-300 ${passwordStrength >= 75
                                        ? 'bg-green-500'
                                        : passwordStrength >= 50
                                            ? 'bg-yellow-500'
                                            : passwordStrength > 0
                                                ? 'bg-red-500'
                                                : 'bg-gray-300'
                                        }`}
                                    style={{ width: `${passwordStrength}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                {passwordStrength >= 75
                                    ? 'Strong'
                                    : passwordStrength >= 50
                                        ? 'Medium'
                                        : passwordStrength > 0
                                            ? 'Weak'
                                            : 'Enter password'}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
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
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
                    >
                        Reset Password
                    </button>

                    <div className="flex items-center gap-4 text-gray-500">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-sm">or</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>
                    <button
                        type="button"
                        className="w-full cursor-pointer bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition"
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