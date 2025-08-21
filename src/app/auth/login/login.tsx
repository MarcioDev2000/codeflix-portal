"use client";
import { Form } from "../form";
import Footer from "../footer";
import { z } from "zod";
import React, { useState } from "react";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email or mobile number" }) // mensagem se vazio
    .email({ message: "That’s not a valid email address. Try again!" }), // mensagem se formato inválido
  password: z
    .string()
    .min(4, { message: "Your password must be between 4 and 60 characters." })
    .max(60, { message: "Your password must be between 4 and 60 characters." }),
});

export default function LoginForm() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = loginSchema.safeParse(values);

    if (!result.success) {
      const formattedErrors: { email?: string; password?: string } = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as "email" | "password";
        formattedErrors[field] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }

    console.log("Login form submitted", result.data);
    setErrors({});
  };

  return (
    <Form
      title="Sign In"
      fields={[
        {
          id: "email",
          type: "email",
          label: "Email",
          value: values.email,
          onChange: handleChange,
          error: errors.email,
        },
        {
          id: "password",
          type: "password",
          label: "Password",
          value: values.password,
          onChange: handleChange,
          error: errors.password,
        },
      ]}
      submitText="Sign In"
      altButtonText="Use a Sign-In Code"
      altButtonAction={() => alert("Código de login!")}
      footer={<Footer />}
      handleSubmit={handleSubmit}
    />
  );
}
