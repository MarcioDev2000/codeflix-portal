'use client';
import Image from "next/image";
import React from "react";


type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

export function Logo({ className = '', width = 128, height = 48 }: LogoProps) {
  return (
    <Image
      src="/logo.svg"   
      alt="Logo"
      width={width}     
      height={height}   
      className={className}
      priority         
    />
  );
}