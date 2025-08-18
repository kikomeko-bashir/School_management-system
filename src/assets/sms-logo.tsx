// src/assets/sms-logo.tsx
import React from 'react';

const SmsLogo: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="20" fill="currentColor" className="text-primary" />
      <text
        x="50"
        y="50"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="36"
        fontWeight="bold"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        SMS
      </text>
    </svg>
  );
};

export default SmsLogo;