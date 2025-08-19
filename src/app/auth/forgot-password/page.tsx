'use client';
import React, { useState } from 'react';
import { Form } from '../form';
import Link from 'next/link';
import { z } from 'zod';

const forgotSchema = z.object({
  email: z.string().min(1, 'Email or mobile number is required'),
});

export default function ForgotPasswordForm() {
  const [values, setValues] = useState({ email: '' });
  const [errors, setErrors] = useState<{ email?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = forgotSchema.safeParse(values);

    if (!result.success) {
      const formattedErrors: { email?: string } = {};
      result.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0] as 'email'] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }

    console.log("Forgot password form submitted ✅", result.data);
    setErrors({});
  };

  return (
    <Form
      title="Forgot Password"
      fields={[
        {
          id: "email",
          type: "email",
          label: "Email",
          value: values.email,
          onChange: handleChange,
          error: errors.email,
        },
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
