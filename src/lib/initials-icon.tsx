import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

// Renders the site's initials (white Geist Bold on black) as a PNG.
// Used by app/icon.tsx (browser tab) and app/apple-icon.tsx (iPhone home screen).
export async function renderInitialsIcon(size: number, rounded: boolean) {
  const font = await readFile(
    join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans/Geist-Bold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#ffffff",
          borderRadius: rounded ? "50%" : 0,
          fontFamily: "Geist",
          fontSize: size * 0.44,
          letterSpacing: -size * 0.02,
          paddingBottom: size * 0.02,
        }}
      >
        {DATA.initials}
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: "Geist", data: font, weight: 700, style: "normal" }],
    }
  );
}
