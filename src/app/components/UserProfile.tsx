'use client';
import Image from "next/image";
import React from "react";

export const UserProfile = () => (
  <div className="flex items-center space-x-2 md:space-x-4">
    <p className="hidden cursor-not-allowed lg:inline">Benazir Santos</p>
    <Image
      src="/profile.png"
      alt="User Avatar"
      className="cursor-pointer rounded"
      width={40}
      height={40} />
  </div>
);
