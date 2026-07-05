import { ImageResponse } from "next/og";

async function loadGoogleFont(
  family: string,
  text: string,
  weight: number,
  italic = false,
) {
  const ital = italic ? "1," : "0,";
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(
    / /g,
    "+",
  )}:ital,wght@${ital}${weight}&text=${encodeURIComponent(text)}`;
  const css = await (
    await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    })
  ).text();
  const match = css.match(
    /src: url\((.+?)\) format\(['"]?(woff2?|opentype|truetype)['"]?\)/,
  );
  if (!match) throw new Error(`Failed to load font ${family} ${weight}`);
  const res = await fetch(match[1]);
  return await res.arrayBuffer();
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const rawTitle = url.searchParams.get("title") || "Alfred's Portfolio";
  const title = rawTitle.length > 140 ? rawTitle.slice(0, 137) + "…" : rawTitle;

  const eyebrow = "PORTFOLIO";
  const name = "Alfred J. Lin";
  const role = "Product Designer";
  const site = "alfredjlin.com";

  const uiText = `${eyebrow}${name}${role}${site}`;
  const [garamond, manropeRegular, manropeBold] = await Promise.all([
    loadGoogleFont("EB Garamond", title, 500),
    loadGoogleFont("Manrope", uiText, 400),
    loadGoogleFont("Manrope", uiText, 700),
  ]);

  const titleSize =
    title.length <= 28
      ? 104
      : title.length <= 50
        ? 84
        : title.length <= 80
          ? 64
          : 52;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fafcfd",
        padding: "56px 80px",
        fontFamily: "Manrope",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 20,
          borderBottom: "1px solid #E3E9F0",
        }}
      >
        <div
          style={{
            fontSize: 16,
            letterSpacing: 6,
            color: "#5A6B7B",
            fontWeight: 700,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#9BA8B6",
            letterSpacing: 1,
          }}
        >
          {site}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          paddingTop: 56,
          paddingBottom: 56,
        }}
      >
        <div
          style={{
            fontFamily: "EB Garamond",
            fontWeight: 500,
            fontSize: titleSize,
            lineHeight: 1.08,
            color: "#0A2540",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderTop: "1px solid #E3E9F0",
          paddingTop: 20,
        }}
      >
        <div style={{ fontSize: 26, color: "#0A2540", fontWeight: 700 }}>
          {name}
        </div>
        <div style={{ fontSize: 20, color: "#5A6B7B", marginTop: 4 }}>
          {role}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "EB Garamond",
          data: garamond,
          style: "normal",
          weight: 500,
        },
        { name: "Manrope", data: manropeRegular, style: "normal", weight: 400 },
        { name: "Manrope", data: manropeBold, style: "normal", weight: 700 },
      ],
    },
  );
}
