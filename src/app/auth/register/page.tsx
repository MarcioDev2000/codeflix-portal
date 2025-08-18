'use client';
import React from 'react';
import { Form } from '../form';
import Link from 'next/link';

export default function RegisterForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // lógica de cadastro
    console.log("Register form submitted ✅");
  };

  return (
    <Form
      title="Register"
      fields={[
        { id: 'name', type: 'text', label: 'Name' },
        { id: 'email', type: 'email', label: 'Email' },
        { id: 'password', type: 'password', label: 'Password' },
      ]}
      submitText="Register"
      footer={
        <p className="text-sm text-gray-500 text-center">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-red-500 hover:underline font-semibold">
            Login
          </Link>
        </p>
      }
      handleSubmit={handleSubmit}
    />
  );
}
