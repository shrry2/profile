import { ImageResponse } from 'next/server';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Takaki Takeuchi';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const logoUrl = 'https://takaki.takeu.ch/assets/logo.png';

// Image generation
const Image = async () => {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(to right, #808080, #3fada8)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          color: '#fff',
        }}
      >
        {/* left column */}
        <div
          style={{
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUrl}
            width={240}
            height={240}
            style={{
              borderRadius: '50%',
            }}
            alt="logo"
          />
        </div>

        {/* right column */}
        <div
          style={{
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 120, fontWeight: 'bold' }}>
            Takaki Takeuchi
          </span>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
};

export default Image;
