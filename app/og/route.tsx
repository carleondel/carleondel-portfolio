import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { getDictionary } from "@/data/i18n";

export function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang") === "es" ? "es" : "en";
  const { profile } = getDictionary(lang);
  const h = profile.headline;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0b0d",
          backgroundImage: "radial-gradient(circle at 0% 0%, rgba(94,234,212,0.18), transparent 45%)",
          color: "#ececec",
          fontFamily: "sans-serif",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>Carlos León</div>
            <div style={{ display: "flex", fontSize: 30, color: "#5eead4" }}>{profile.role}</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: 950,
                marginTop: 24,
                fontSize: 52,
                lineHeight: 1.15,
                color: "#b9bec5",
              }}
            >
              {`${h.start}${h.day}${h.middle}${h.night}${h.end}`}
            </div>
          </div>

          <div style={{ display: "flex", gap: 14 }}>
            {["Astrafy", "Google Cloud", "dbt", "Python", "Next.js"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  borderRadius: 999,
                  padding: "10px 20px",
                  fontSize: 22,
                  color: "#5eead4",
                  background: "rgba(94,234,212,0.1)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
