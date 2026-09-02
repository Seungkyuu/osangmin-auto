import type { Metadata } from "next";
import "./globals.css";
// 도메인은 sitemap.ts·robots.ts와 함께 쓰므로 lib/site-config.ts 한 곳에서만
// 정의한다(여기서 따로 선언하면 도메인 변경 시 어긋난다).
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

const TITLE = "자동차는 오상민 — 신차·중고차·리스·렌트·관리·세차·탁송";
const DESCRIPTION =
  "신차·중고차 매매부터 리스·렌트, 정기관리·세차·탁송까지. 차량에 대해 모든 것을 관리해드립니다. 24시간 문의 가능 010-2256-8025.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
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
