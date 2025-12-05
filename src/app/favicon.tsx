import { ImageResponse } from 'next/og';

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 28,
          background: '#10B981',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
          fontWeight: 'bold',
          borderRadius: '4px',
        }}
      >
        🐔
      </div>
    ),
    {
      width: 32,
      height: 32,
    },
  );
}