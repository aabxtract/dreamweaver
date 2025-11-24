import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <circle cx="50" cy="50" r="40" />

    {/* Blockchain Node Structure */}
    <circle cx="50" cy="50" r="8" />
    <circle cx="35" cy="35" r="5" />
    <circle cx="65" cy="35" r="5" />
    <circle cx="50" cy="68" r="5" />

    <path d="M50 50 L 35 35" />
    <path d="M50 50 L 65 35" />
    <path d="M50 50 L 50 68" />
    <path d="M35 35 L 65 35" />

    {/* Dreamcatcher Elements */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 50 50)`}>
        <path d="M50 10 L50 2" />
        <circle cx="50" cy="2" r="2" fill="currentColor" />
      </g>
    ))}
  </svg>
);

export default Logo;
