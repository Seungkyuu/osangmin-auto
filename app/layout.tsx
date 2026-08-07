import type { Metadata } from "next";
import "./globals.css";

const TITLE = "자동차는 오상민 — 신차·중고차·리스·렌트·관리·세차·탁송";
const DESCRIPTION =
  "신차·중고차 매매부터 리스·렌트, 정기관리·세차·탁송까지. 차량에 대해 모든 것을 관리해드립니다. 24시간 문의 가능 010-2256-8025.";

// ⚠ 실제 배포 도메인이 확정되면 여기를 바꾼다 — 이 값이 틀리면 카카오톡
// 링크 미리보기가 이미지를 못 불러온다(og:image가 절대경로로 만들어짐).
const SITE_URL = "https://osangmin-auto.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "자동차는 오상민",
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    // 네이버 서치어드바이저 사이트 소유확인 코드.
    other: { "naver-site-verification": "ce40335619bd06af79bc5ba1317430c747a68ac3" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
