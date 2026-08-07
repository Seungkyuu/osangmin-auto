import styles from "./page.module.css";
import { LogoMark, Wordmark } from "./components/Logo";

const PHONE = "010-2256-8025";
const PHONE_HREF = "tel:01022568025";

const NAV = [
  { label: "신차·중고차", href: "#services" },
  { label: "리스·렌트", href: "#services" },
  { label: "차량관리", href: "#services" },
  { label: "세차 단가표", href: "#pricing" },
  { label: "탁송", href: "#services" },
];

const SERVICES: { badge: string; name: string; desc: string; tag: string }[] = [
  { badge: "신", name: "신차매매", desc: "차종·트림 상담부터 견적 비교까지 처음부터 같이 짭니다.", tag: "매매" },
  { badge: "중", name: "중고차매매", desc: "매입·판매 모두 진행, 시세와 상태를 투명하게 알려드립니다.", tag: "매매" },
  { badge: "리", name: "리스", desc: "운용·금융리스 조건을 비교해 가장 유리한 안을 찾아드립니다.", tag: "이용" },
  { badge: "렌", name: "렌트", desc: "장기·단기 렌트 모두 취급, 조건에 맞는 상품을 추천합니다.", tag: "이용" },
  { badge: "관", name: "차량관리", desc: "정기점검·소모품 교체까지 타이밍 놓치지 않게 챙깁니다.", tag: "관리" },
  { badge: "세", name: "세차", desc: "4단계 코스로 필요한 만큼만 — 상세는 아래 단가표 참고.", tag: "관리" },
  { badge: "탁", name: "탁송", desc: "전국 어디든 안전하게, 세차와 함께 신청하면 한 번에 처리.", tag: "관리" },
];

const WASH_TIERS = [
  {
    tier: "COURSE 01",
    name: "라이트 세차",
    price: "50,000",
    time: "약 30분",
    items: ["외부 물세차", "휠·타이어 세척", "타월 건조"],
    premium: false,
  },
  {
    tier: "COURSE 02",
    name: "스탠다드 세차",
    price: "100,000",
    time: "약 60분",
    items: ["라이트 세차 전 항목", "실내 진공청소·매트 세척", "유리 발수코팅"],
    premium: false,
  },
  {
    tier: "COURSE 03",
    name: "디테일링 케어",
    price: "200,000",
    time: "약 2시간",
    items: ["스탠다드 세차 전 항목", "외부 왁스코팅", "엔진룸 클리닝·실내 스팀 살균"],
    premium: false,
  },
  {
    tier: "COURSE 04",
    name: "프리미엄 풀케어",
    price: "400,000",
    time: "약 4시간~",
    items: ["디테일링 케어 전 항목", "유리막코팅·가죽시트 케어", "하부 언더코팅 세척"],
    premium: true,
  },
];

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={`wrap ${styles.headerInner}`}>
          <a href="#top" aria-label="자동차는 오상민 홈">
            <Wordmark size="sm" showTagline={false} />
          </a>
          <nav className={styles.nav} aria-label="주요 서비스">
            {NAV.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a href={PHONE_HREF} className={`btn primary sm ${styles.headerCall}`}>
            {PHONE}
          </a>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={`wrap ${styles.heroInner}`}>
            <span className={styles.slogan}>차량에 대해 모든 것을 관리해드립니다</span>
            <h1 className={styles.headline}>
              사는 것부터 타는 것,<br />관리하는 것까지 <em>오상민</em>이 끝까지 맡습니다
            </h1>
            <p className={styles.sub}>
              신차·중고차 매매, 리스·렌트 상담부터 정기관리·세차·탁송까지 —
              차 한 대에 필요한 모든 순간을 한 사람이 책임집니다.
              급한 일은 새벽에도 생기니까, 문의는 24시간 언제든 받습니다.
            </p>
            <div className={styles.ctaRow}>
              <a href={PHONE_HREF} className="btn primary">📞 지금 전화 상담 {PHONE}</a>
              <a href="#pricing" className="btn ghost">세차 단가표 보기</a>
            </div>
            <div className={styles.badgeRow}>
              <span className={styles.badge247}><span className={styles.dot} />24시간 문의 가능</span>
              {SERVICES.map((s) => <span key={s.name}>{s.name}</span>)}
            </div>

            <div className={styles.wordmarkBig}>
              <Wordmark size="lg" />
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <div className="wrap">
            <div className={styles.sectionHead}>
              <span className="eyebrow">SERVICES</span>
              <h2 style={{ marginTop: 10 }}>취급 서비스 7종</h2>
              <p>매매부터 관리까지, 차와 관련된 모든 용건을 한 곳에서</p>
            </div>
            <div className={styles.svcGrid}>
              {SERVICES.map((s) => (
                <div key={s.name} className={styles.svcCard}>
                  <div className={styles.svcIcon}>{s.badge}</div>
                  <span className={styles.svcTag}>{s.tag}</span>
                  <div className={styles.svcName}>{s.name}</div>
                  <div className={styles.svcDesc}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className={styles.section}>
          <div className="wrap">
            <div className={styles.sectionHead}>
              <span className="eyebrow">WASH PRICING</span>
              <h2 style={{ marginTop: 10 }}>세차 단가표</h2>
              <p>위로 갈수록 케어 항목이 그대로 쌓이는 구조 — 필요한 만큼만 고르면 됩니다</p>
            </div>
            <div className={styles.priceWrap}>
              <div className={styles.priceGrid}>
                {WASH_TIERS.map((t) => (
                  <div key={t.name} className={`${styles.priceCard} ${t.premium ? styles.premium : ""}`}>
                    <span className={styles.priceTier}>{t.tier}</span>
                    <div className={styles.priceName}>{t.name}</div>
                    <div className={`${styles.priceNum} tabular`}>{t.price}<small>원</small></div>
                    <div className={styles.priceTime}>{t.time}</div>
                    <ul className={styles.priceList}>
                      {t.items.map((it) => <li key={it}>{it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.priceFoot}>
              <span>표시 가격은 부가세 별도</span>
              <span>출장(방문) 세차 시 탁송비 별도 청구</span>
              <span>차종(경차/대형·SUV)별 할증은 상담 시 안내</span>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="wrap">
            <span className={`${styles.badge247}`} style={{ marginBottom: 14 }}>
              <span className={styles.dot} />24시간 문의 가능
            </span>
            <h2>차 때문에 고민되는 모든 순간, 오상민에게 전화하세요</h2>
            <p>상담은 전화 한 통으로 끝</p>
            <a href={PHONE_HREF} className={`btn primary ${styles.ctaBig}`}>📞 {PHONE}</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`wrap ${styles.footerInner}`}>
          <LogoMark size={32} />
          <span className={styles.footerNote}>차량에 대해 모든 것을 관리해드립니다</span>
          <a href={PHONE_HREF} className={`${styles.footerCall} tabular`}>{PHONE}</a>
        </div>
      </footer>
    </>
  );
}
