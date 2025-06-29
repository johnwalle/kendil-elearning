'use client';

import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function AuthForm() {
  const [mode, setMode] = useState<'signup' | 'login'>('signup');

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#2a3e6c] to-[#6b8ac9]">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl mx-auto my-28 p-8">
        <h1 className="text-2xl font-bold text-center text-indigo-900">Kendil</h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          Empower Your Learning Journey
        </p>

        {/* Toggle tabs */}
        <div className="flex mb-6 border rounded-md overflow-hidden">
          {['signup', 'login'].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m as typeof mode)}
              className={`cursor-pointer w-1/2 py-2 text-sm font-medium ${
                mode === m
                  ? 'bg-indigo-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              {m === 'signup' ? 'Sign Up' : 'Login'}
            </button>
          ))}
        </div>

        {/* Render form */}
        {mode === 'signup' ? <SignupForm /> : <LoginForm />}
      </div>
    </div>
  );
}