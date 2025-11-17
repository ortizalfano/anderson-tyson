import React from 'react';

interface AndersonTysonLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export function AndersonTysonLogo({ className = '', size = 'md', showWordmark = true }: AndersonTysonLogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-label="Anderson Tyson logo mark"
          role="img"
        >
          <g>
            <path d="M16 4L28 16L16 16L4 4L16 4Z" fill="#0B2447" className="drop-shadow-sm" />
            <path d="M16 4L28 16L28 28L20 20L16 4Z" fill="#19376D" className="drop-shadow-sm" />
            <path d="M4 4L16 16L12 20L4 28L4 4Z" fill="#576CBC" className="drop-shadow-sm" />
            <path d="M16 16L28 16L20 20L12 20L16 16Z" fill="#6E84D2" className="drop-shadow-sm" />
            <rect x="14" y="14" width="4" height="4" fill="#ffffff" className="drop-shadow-sm" />
          </g>
        </svg>
      </div>
      {showWordmark && (
        <span className="text-base font-semibold tracking-tight text-foreground">
          Anderson Tyson
        </span>
      )}
    </div>
  );
}


