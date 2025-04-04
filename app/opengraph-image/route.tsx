import { ImageResponse } from 'next/og'

export const runtime = 'edge'

function toBase64(buffer: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
}

export async function GET() {
  try {
    const [fontRegular, fontBold, logo] = await Promise.all([
      fetch(new URL('../_assets/BeVietnamPro-400.ttf', import.meta.url)).then((res) => res.arrayBuffer()),
      fetch(new URL('../_assets/BeVietnamPro-700.ttf', import.meta.url)).then((res) => res.arrayBuffer()),
      fetch(new URL('../_assets/opengraph-image.png', import.meta.url)).then((res) => res.arrayBuffer()),
    ])

    const logoBase64 = toBase64(logo)

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#00D37F',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px',
            fontFamily: 'Be Vietnam Pro',
          }}
        >
          <img
            src={`data:image/png;base64,${logoBase64}`}
            alt="UTRITION"
            width={800}
            height={400}
            style={{ objectFit: 'contain' }}
          />
          <div
            style={{
              color: '#fff',
              fontSize: 48,
              fontWeight: 700,
              textAlign: 'center',
              marginTop: '-60px',
              letterSpacing: '-0.025em',
            }}
          >
            Catalyze Health with AI
          </div>
        </div>
      ),
      {
        fonts: [
          {
            name: 'Be Vietnam Pro',
            data: fontRegular,
            style: 'normal',
            weight: 400,
          },
          {
            name: 'Be Vietnam Pro',
            data: fontBold,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    )
  } catch (e) {
    console.error('OG image generation failed:', e)
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#111',
            color: '#fff',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 60,
          }}
        >
          UTRITION
        </div>
      ),
    )
  }
}
