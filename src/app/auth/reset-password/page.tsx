'use client';

import ResetPasswordForm from '@/components/auth/ResetPasswordForm';

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500">
            <ResetPasswordForm />
        </div>
    );
}