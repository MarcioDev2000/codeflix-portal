'use client';
import React from 'react';
import { InputField } from '../InputField';
import Link from 'next/link';

export default function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col space-y-6 rounded bg-[#040404e4] bg-opacity-80 px-10 py-12 shadow-lg"
    >
      {/* Título */}
      <h1 className="text-3xl font-bold">Sign In</h1>

      {/* Campos de entrada */}
      <div className="flex flex-col space-y-4">
        <InputField
          id="email"
          type="email"
          label="Email or mobile number"
          
        />
        <InputField
          id="password"
          type="password"
          label="Password"
          
        />
      </div>

      {/* Botão principal */}
      <button
        className="flex w-full items-center justify-center rounded bg-red-600 px-6 py-3 text-lg font-semibold text-white hover:bg-red-700"
        type="submit"
      >
        Sign In
      </button>

      <p className='flex items-center justify-center'>OR</p>

      {/* Botão alternativo */}
      <button
        type="button"
        className="flex w-full items-center justify-center rounded bg-[rgba(55,65,81,0.79)] px-6 py-3 text-lg font-semibold text-white hover:bg-gray-600"
      >
        Use a Sign-In Code
      </button>

      {/* Links extras */}
      <div className="flex items-center justify-between text-sm text-gray-400">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="h-4 w-4 accent-red-600" />
          <span>Remember me</span>
        </label>
        <Link href="#" className="hover:underline">
          Forgot password?
        </Link>
      </div>

      {/* Link para registrar */}
      <p className="text-sm text-gray-400">
        New to Codeflix?{' '}
        <Link href="/auth/register" className="text-white hover:underline">
          Sign up now.
        </Link>
      </p>

    

      {/* Nota de segurança */}
      <p className="mt-2 text-xs text-gray-500">
        This page is protected by Google reCAPTCHA to ensure re not a bot.
      </p>
    </form>
  );
}
