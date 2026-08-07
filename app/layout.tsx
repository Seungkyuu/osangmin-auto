import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "자동차는 오상민 — 신차·중고차·리스·렌트·관리·세차·탁송",
  description:
    "신차·중고차 매매부터 리스·렌트, 정기관리·세차·탁송까지. 차량에 대해 모든 것을 관리해드립니다. 24시간 문의 가능 010-2256-8025.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
