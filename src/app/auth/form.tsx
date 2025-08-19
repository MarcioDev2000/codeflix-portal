'use client';
import React from 'react';
import { InputField } from './InputField';


type Field = {
  id: string;
  type: string;
  label: string;
};

type FormProps = {
  title: string;
  fields: Field[];
  submitText: string;
  altButtonText?: string;
  altButtonAction?: () => void;
  footer?: React.ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Form: React.FC<FormProps> = ({
  title,
  fields,
  submitText,
  altButtonText,
  altButtonAction,
  footer,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col space-y-6 rounded bg-[#040404dc] bg-opacity-80 px-10 py-12 shadow-lg "
    >
      {/* Título */}
      <h1 className="text-3xl font-bold">{title}</h1>

      {/* Campos dinâmicos */}
      <div className="flex flex-col space-y-4">
        {fields.map((field) => (
          <InputField key={field.id} id={field.id} type={field.type} label={field.label} />
        ))}
      </div>

      {/* Botão principal */}
      <button
        className="flex w-full items-center justify-center rounded bg-red-600 px-6 py-3 text-lg font-semibold text-white hover:bg-red-700"
        type="submit"
      >
        {submitText}
      </button>

      {/* Botão alternativo */}
      {altButtonText && (
        <>
          <p className="flex items-center justify-center">OR</p>
          <button
            type="button"
            onClick={altButtonAction}
            className="flex w-full items-center justify-center rounded bg-[rgba(251,251,253,0.19)] px-6 py-3 text-lg font-semibold text-white hover:bg-[rgba(71,71,75,0.51)] transition-colors duration-200"
          >
            {altButtonText}
          </button>
        </>
      )}

      {/* Footer dinâmico */}
      {footer}
    </form>
  );
};
