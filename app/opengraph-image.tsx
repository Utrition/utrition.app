import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'UTRITION - Catalyze Health with AI'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

const beVietnamProBold = await fetch(
  new URL("./fonts/BeVietnamPro-700.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const beVietnamProRegular = await fetch(
  new URL("./fonts/BeVietnamPro-400.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function Image() {
  const logoData = await fetch(
    new URL("./_assets/opengraph-image.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: '#00D37F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0',
          padding: '48px',
          fontFamily: "Be Vietnam Pro",
        }}
      >
        {/* Logo Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            @ts-expect-error
            <img
              src={`data:image/png;base64,${Buffer.from(logoData).toString('base64')}`}
              alt="UTRITION"
              width={800}
              height={400}
              style={{
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Tagline */}
          <div
            style={{
              color: 'white',
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              textAlign: 'center',
              opacity: 0.9,
              maxWidth: '80%',
              fontFamily: "Be Vietnam Pro",
              marginTop: '-60px', // Pull the tagline up closer to the logo
            }}
          >
            Catalyze Health with AI
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Be Vietnam Pro',
          data: beVietnamProRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Be Vietnam Pro',
          data: beVietnamProBold,
          style: 'normal',
          weight: 700,
        }
      ]
    }
  )
} 