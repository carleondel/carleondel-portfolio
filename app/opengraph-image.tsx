import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "sans-serif",
          padding: "56px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 32,
            border: "1px solid #222222",
            borderRadius: 24,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: "#888888",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Carlos Leon
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 820,
                fontSize: 72,
                fontWeight: 600,
                lineHeight: 1.04,
              }}
            >
              Data Engineer, analytics-focused
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 860,
                fontSize: 28,
                lineHeight: 1.35,
                color: "#b8b8b8",
              }}
            >
              Building business-facing data products and modern data workflows
              with dbt, Google Cloud, Python, and SQL.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            {["Astrafy", "Analytics Engineering", "dbt", "BigQuery", "Python"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    border: "1px solid #222222",
                    borderRadius: 999,
                    padding: "10px 18px",
                    fontSize: 22,
                    color: "#c9c9c9",
                    background: "#111111",
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    size
  );
}
