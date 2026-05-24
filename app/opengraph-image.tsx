import { ImageResponse } from 'next/og';

export const alt = 'Poly Journal Tech Blog';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#ffffff',
        color: '#202124',
        padding: '72px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
        }}
      >
        <div
          style={{
            width: '92px',
            height: '92px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '26px',
            background: '#157347',
            color: '#ffffff',
            fontSize: '58px',
            fontWeight: 900,
            letterSpacing: '-0.08em',
          }}
        >
          P
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: '#157347',
              fontSize: '42px',
              fontWeight: 900,
              letterSpacing: '-0.04em',
            }}
          >
            Poly
          </div>
          <div
            style={{
              color: '#6b7280',
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            www.poly-journal.xyz
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div
          style={{
            fontSize: '82px',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.06em',
          }}
        >
          Poly Journal
        </div>
        <div
          style={{
            maxWidth: '880px',
            color: '#4a5058',
            fontSize: '36px',
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: '-0.04em',
          }}
        >
          Tech notes about development, infrastructure, and engineering culture.
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          color: '#157347',
          fontSize: '24px',
          fontWeight: 800,
        }}
      >
        <span>DEV</span>
        <span>·</span>
        <span>INFRA</span>
        <span>·</span>
        <span>CULTURE</span>
      </div>
    </div>,
    size
  );
}
