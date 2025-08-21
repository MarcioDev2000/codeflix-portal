"use client";
import React, { useState } from "react";
import { Form } from "../form";
import Link from "next/link";

export default function RegisterForm() {
  const [values, setValues] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Register form submitted", values);
  };

  return (
    <Form
      title="Register"
      fields={[
        {
          id: "name",
          type: "text",
          label: "Name",
          value: values.name,
          onChange: handleChange,
        },
        {
          id: "email",
          type: "email",
          label: "Email",
          value: values.email,
          onChange: handleChange,
        },
        {
          id: "password",
          type: "password",
          label: "Password",
          value: values.password,
          onChange: handleChange,
        },
      ]}
      submitText="Register"
      footer={
        <p className="text-sm text-gray-500 text-center">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-red-500 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      }
      handleSubmit={handleSubmit}
    />
  );
}
