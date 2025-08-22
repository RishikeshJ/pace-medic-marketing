'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  isDarkMode?: boolean;
}

export function Logo({ className = '', width = 200, height = 60, isDarkMode = true }: LogoProps) {
  // Use pmedword.svg for the new logo
  const logoSrc = '/assets/pmedword.svg';
  
  // Professional color scheme that works in both themes
  // Light mode: Professional teal for contrast on light background
  // Dark mode: Clean white for natural appearance on dark background
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={logoSrc}
        alt="PaceMedic Logo"
        width={width}
        height={height}
        className="object-contain w-52 h-18 md:w-[1000px] md:h-[300px]"
        style={{
          filter: isDarkMode 
            ? 'brightness(0) saturate(100%) invert(100%)' // Clean white for dark mode
            : 'brightness(0) saturate(100%) invert(25%) sepia(50%) saturate(1000%) hue-rotate(160deg) brightness(90%) contrast(120%)' // Professional teal for light mode
        }}
      />
    </div>
  );
} 