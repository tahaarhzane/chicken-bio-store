import { ImageResponse } from 'next/og';
import { GiRoastChicken } from 'react-icons/gi';

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#10B981',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '20px',
            height: '20px',
          }}
        >
          <ellipse cx="12" cy="14" rx="7" ry="8" fill="white"/>
          <circle cx="12" cy="7" r="4.5" fill="white"/>
          <path d="M 7.5 7 L 5 6 L 7.5 8 Z" fill="#F59E0B"/>
          <path d="M 12 2.5 Q 10 3 10 5 Q 12 3.5 14 5 Q 14 3 12 2.5 Z" fill="#EF4444"/>
          <circle cx="9" cy="7" r="1" fill="#1F2937"/>
          <path d="M 10 20 L 10 23 M 14 20 L 14 23" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    {
      width: 32,
      height: 32,
    },
  );
}