'use client';
import React from 'react';
import { InputField } from '../InputField';
import Link from 'next/link';

export default function RegisterForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // lógica de cadastro
    console.log("Register form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Register</h1>
        <p className='text-sm text-gray-500'>
          Already have an account?{' '}
          <Link href="/auth/login" className='text-red-500 hover:underline'>
           Login
          </Link>
        </p>
      </div>

      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          id='name'
          type='text'
          label='Name'
          placeholder='Enter your name'
        />

        <InputField
          id='email'
          type='email'
          label='Email'
          placeholder='Enter your email'
        />

        <InputField
          id='password'
          type='password'
          label='Password'
          placeholder='Enter your password'
        />
      </div>
     
      <div className='flex justify-center space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-18'
          type='submit'
        >
          Register
        </button>
      </div>
    </form>
  );
}
