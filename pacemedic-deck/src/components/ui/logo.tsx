'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  isDarkMode?: boolean;
}

export function Logo({ className = '', width = 200, height = 60, isDarkMode = true }: LogoProps) {
  // Use pmedic_gradient.svg for both light and dark modes
  const logoSrc = '/assets/pmedic_gradient.svg';
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={logoSrc}
        alt="PaceMedic Logo"
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
} 