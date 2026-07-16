import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#07070b",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(124,108,255,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(34,211,238,0.18), transparent 45%)",
          color: "#e7e9ee",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 30,
            color: "#7c6cff",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#7c6cff",
              color: "#fff",
              fontWeight: 800,
            }}
          >
            LB
          </div>
          {siteConfig.role}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#9aa1b1",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Modern, responsive web apps with React, Next.js & TypeScript.
        </div>
      </div>
    ),
    { ...size },
  );
}
