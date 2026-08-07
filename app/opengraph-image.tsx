import { ImageResponse } from "next/og";

// 빌드 시점에 PNG로 미리 생성해 CDN 정적 자산으로 서빙한다. edge 런타임으로
// 두면 요청마다 즉석 렌더라 카카오톡 같은 스크래퍼가 타임아웃될 수 있다.
export const alt = "자동차는 오상민 — 신차·중고차·리스·렌트·관리·세차·탁송";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#121317",
          color: "#f3f1ea",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* 로고 뱃지 — Satori는 원호(A 커맨드)의 large-arc-flag를 제대로
              못 그리므로, 사이트 로고의 계기판 호는 빼고 색면 뱃지 + "오"만
              쓴다(둥근 사각형과 텍스트는 정확히 렌더된다). */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 21,
              background: "#ff8a3d",
              color: "#201203",
              fontSize: 38,
              fontWeight: 800,
            }}
          >
            오
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            자동차는 오상민
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 27, color: "#ff8a3d", marginTop: 46, fontWeight: 700 }}>
          차량에 대해 모든 것을 관리해드립니다
        </div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, marginTop: 16, lineHeight: 1.4 }}>
          사는 것부터 타는 것, 관리하는 것까지
        </div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, lineHeight: 1.4 }}>
          한 사람이 끝까지 맡습니다
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#9a9da6", marginTop: 34 }}>
          신차 · 중고차 · 리스 · 렌트 · 관리 · 세차 · 탁송 · 24시간 문의 010-2256-8025
        </div>
      </div>
    ),
    { ...size },
  );
}
