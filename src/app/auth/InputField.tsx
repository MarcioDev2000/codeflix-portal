import React, { useState } from 'react';
import { XCircleIcon } from "@heroicons/react/24/solid";
export type InputFieldProps = {
  id: string;
  type: string;
  label: string;
  minLength?: number;
  maxLength?: number;
};

export const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  label,
  minLength = 4,
  maxLength = 60,
}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

   
    if (type === 'password') {
      if (newValue.length === 0) {
        setError('Your password must contain between 4 and 60 characters.');
      } else if (newValue.length < minLength || newValue.length > maxLength) {
        setError('Your password must contain between 4 and 60 characters.');
      } else {
        setError('');
      }
    }

   
    if (type === 'email') {
      const isEmail = /\S+@\S+\.\S+/.test(newValue);
      const isPhone = /^[0-9]{9,}$/.test(newValue);

      if (newValue.length === 0) {
        setError('Please enter a valid email or mobile number.');
      } else if (!isEmail && !isPhone) {
        setError('Please enter a valid email or mobile number.');
      } else {
        setError('');
      }
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="relative w-full">
        <input
          id={id}
          type={type}
          name={id}
          value={value}
          onChange={handleChange}
          placeholder=" "
          className={`peer w-full rounded px-4 pt-8 pb-2 text-sm text-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-2
            ${
              error
                ? "border border-[rgb(229,62,62)] focus:ring-red-500 bg-black"
                : "border-transparent focus:ring-white bg-[rgba(55,65,81,0.79)]"
            }`}
        />
        <label
          htmlFor={id}
          className={`absolute left-4 text-base transition-all duration-200
            ${
              value.length > 0
                ? "top-2 text-sm text-white"
                : "top-1/2 -translate-y-1/2 text-[rgb(236,237,238)]"
            }  
            peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-white`}
        >
          {label}
        </label>
      </div>

      
       {error && (
        <p className="mt-1 flex items-center text-sm text-[rgb(229,62,62)]">
          <XCircleIcon className="h-4 w-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};
