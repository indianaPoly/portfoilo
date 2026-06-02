import { ImageResponse } from 'next/og';

import { getPostBySlug } from '../../../lib/posts';

export const alt = 'Blog Post';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function BlogOgImage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const title = post?.frontmatter.title ?? 'Blog Post';
  const category = post?.frontmatter.category ?? '';
  const date = post?.frontmatter.date ?? '';

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
            width: '72px',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
            background: '#157347',
            color: '#ffffff',
            fontSize: '44px',
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
              fontSize: '32px',
              fontWeight: 900,
              letterSpacing: '-0.04em',
            }}
          >
            Poly Journal
          </div>
          <div
            style={{
              color: '#6b7280',
              fontSize: '20px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            www.poly-journal.xyz
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div
          style={{
            fontSize: '56px',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.04em',
            maxWidth: '900px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          fontSize: '24px',
          fontWeight: 700,
        }}
      >
        {category ? (
          <span
            style={{
              color: '#157347',
              background: '#eaf8ef',
              padding: '8px 20px',
              borderRadius: '999px',
            }}
          >
            {category}
          </span>
        ) : null}
        {date ? <span style={{ color: '#6b7280' }}>{date}</span> : null}
      </div>
    </div>,
    size
  );
}
