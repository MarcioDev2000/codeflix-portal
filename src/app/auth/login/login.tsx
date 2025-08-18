'use client';
import React from 'react';
import { Form } from '../form';
import Footer from '../footer'; 

export default function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login form submitted');
  };

  return (
    <Form
      title="Sign In"
      fields={[
        { id: 'email', type: 'email', label: 'Email or mobile number' },
        { id: 'password', type: 'password', label: 'Password' },
      ]}
      submitText="Sign In"
      altButtonText="Use a Sign-In Code"
      altButtonAction={() => alert('Código de login!')}
      footer={<Footer />} 
      handleSubmit={handleSubmit}
    />
  );
}
