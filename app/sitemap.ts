import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

// 단일 페이지 사이트라 항목이 하나뿐이다 — 섹션은 전부 같은 문서 안의
// 앵커(#services 등)라서 별도 URL이 없다.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
