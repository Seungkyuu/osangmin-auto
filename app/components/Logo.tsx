/**
 * 워드마크 — 별도 이미지 자산 없이 SVG로 렌더링(어느 해상도에서도 또렷).
 * 마크(뱃지)는 "오" 글자 + 계기판 바늘을 연상시키는 호(arc)를 겹쳐,
 * "24시간 계기판" 컨셉을 로고 자체에도 심었다.
 */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="12" fill="var(--accent)" />
      <path
        d="M9 27a13 13 0 0 1 26 0"
        stroke="var(--accent-ink)"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <text
        x="22"
        y="31"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="21"
        fontWeight="800"
        fill="var(--accent-ink)"
      >
        오
      </text>
    </svg>
  );
}

export function Wordmark({
  size = "md",
  showTagline = true,
}: {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}) {
  const dims = { sm: 30, md: 44, lg: 88 }[size];
  const nameSize = { sm: 16, md: 19, lg: 40 }[size];
  const gap = { sm: 8, md: 10, lg: 20 }[size];

  return (
    <div style={{ display: "flex", alignItems: "center", gap }}>
      <LogoMark size={dims} />
      <div>
        <div
          style={{
            fontSize: nameSize,
            fontWeight: 800,
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}
        >
          자동차는 오상민
        </div>
        {showTagline && (
          <div
            style={{
              fontSize: size === "lg" ? 15 : 11,
              color: "var(--ink-soft)",
              marginTop: size === "lg" ? 6 : 2,
              fontWeight: 500,
            }}
          >
            차량에 대해 모든 것을 관리해드립니다
          </div>
        )}
      </div>
    </div>
  );
}
