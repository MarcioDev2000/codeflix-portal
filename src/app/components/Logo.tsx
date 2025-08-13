'use client';
import Image from "next/image";
import React from "react";

/* ====== Componentes pequenos reutilizáveis ====== */
export const Logo = () => (
  <Image src="/logo.svg" alt="Codeflix Logo" width={120} height={40} />
);
