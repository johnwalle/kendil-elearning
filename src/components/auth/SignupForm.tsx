'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import GoogleButton from './GoogleButton';

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState<'student' | 'institution' | 'freelancer'>('student');
    const [password, setPassword] = useState('');
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

    const handleSignup = (e: any) => {
        e.preventDefault();
        // TODO: Handle signup
    };

    return (
        <form onSubmit={handleSignup} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900"
                    placeholder="Enter your full name"
                    style={{ color: '#1f2937' }} // Dark gray for input text
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900"
                    placeholder="Enter your email"
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
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
                <div className="relative">
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value as typeof role)}
                        className="w-full cursor-pointer appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 transition-all"
                    >
                        <option value="student">Student</option>
                        <option value="institution">Institution</option>
                        <option value="freelancer">Freelancer</option>
                    </select>

                    {/* Downward arrow */}
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                            className="h-4 w-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="cursor-pointer w-full bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
            >
                Register
            </button>

            <div className="flex items-center gap-4 text-gray-500">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm">or continue with</span>
                <div className="flex-1 h-px bg-gray-200" />
            </div>

            <GoogleButton />
        </form>
    );
}