'use client';
import Image from "next/image";
import React from "react";

/* ====== Componentes pequenos reutilizáveis ====== */
export const Logo = () => (
  <Image src="/logo.svg" className="mx-6" alt="Codeflix Logo" width={120} height={40} />
);
