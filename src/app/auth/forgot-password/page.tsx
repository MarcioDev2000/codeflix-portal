'use client';
import React from 'react';
import { Form } from '../form';
import Link from 'next/link';

export default function ForgotPasswordForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Forgot password form submitted");

  };

  return (
    <Form
      title="Forgot Password"
      fields={[
        { id: 'email', type: 'email', label: 'Email or mobile number' },
      ]}
      submitText="Send Reset"
      footer={
        <p className="text-sm text-gray-500 text-center">
          Remembered your password?{" "}
          <Link
            href="/auth/login"
            className="text-red-500 hover:underline font-semibold"
          >
            Sign In
          </Link>
        </p>
      }
      handleSubmit={handleSubmit}
    />
  );
}
