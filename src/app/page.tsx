import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";

const stats = [
  { value: "20,000+", label: "קישורים שנבנו", icon: IconLink },
  { value: "1,000+", label: "אתרים שקודמו", icon: IconGlobe },
  { value: "80+", label: "סוכנויות ומקדמים", icon: IconUsers },
  { value: "10+", label: "שנות ניסיון", icon: IconAward },
  { value: "3,000+", label: "מאגר אתרים פעיל", icon: IconDatabase },
  { value: "100%", label: "שקט מקישורים", icon: IconShield },
] as const;

const stories = [
  {
    title: "תנו לנו לספר לכם על ליאור",
    intro: "ליאור הגיע אלינו מאוד סקפטי, ואפילו חשדן וחסר סבלנות.",
    body: 'הוא הגיע אלינו אחרי שניסה לא מעט לבנות קישורים בעצמו, וגם אחרי שניסה כמה חברות בניית קישורים מוכרות בשוק. בסופו של דבר, כמו שהוא אמר, איך שהוא לא סובב את זה יצא לו להתעסק המון עם בניית הקישורים. אם זה בלעשות בעצמו, או אם זה ב"לבדוק" את מי שעשה לו. ולצערו, הוא התאכזב לא מעט.',
  },
  {
    title: "או על אוריאל",
    intro: 'אוריאל עשה הכול לבד, הרגיש שהוא פשוט "טובע" בעבודה השוטפת.',
    body: 'של הקידום, כשחלק מרכזי ממנה היתה עבודת הקישורים. אוריאל ממש רצה "להוריד מעצמו" את העבודה הסיזיפית של הקישורים. כיום, לא מעט שנים אחרי אותה שיחה, אוריאל עדיין לקוח שלנו, ומאז הוא לא מתעסק כלל עם בניית הקישורים.',
  },
  {
    title: "או על בן",
    intro: "בן הגיע אלינו כשרצה להוריד מעצמו וגם מהעובדים שלו את עבודת הקישורים.",
    body: "כיום, כבר שנה בערך, הכול רץ חלק. אנחנו מול העובדים של בן. בן בקושי בתמונה בכלל, והכול מתנהל בצורה אוטומטית.",
  },
] as const;

const objections = [
  {
    title: "אתם לא אוספים חשבוניות בעצמכם",
    sub: "יש לכם הנהלת חשבונות",
    reason: "כי הזמן שלכם שווה יותר",
    icon: IconReceipt,
    tone: "emerald" as const,
  },
  {
    title: "אתם לא כותבים את כל התוכן בעצמכם",
    sub: "יש לכם כותבי תוכן או עובדים שעושים זאת",
    reason: "כי הזמן שלכם שווה יותר",
    icon: IconPen,
    tone: "purple" as const,
  },
  {
    title: "אתם לא עושים כל משימה קטנה בעסק",
    sub: "יש לכם צוות",
    reason: "כי הזמן שלכם שווה יותר",
    icon: IconUsersGroup,
    tone: "amber" as const,
  },
] as const;

const objectionTones = {
  emerald: {
    border: "border-emerald-500/25 hover:border-emerald-400/60",
    bg: "from-emerald-500/12 via-[#0e1018] to-[#0a0d14]",
    iconWrap: "from-emerald-500/25 to-emerald-500/10 border-emerald-500/30",
    iconColor: "text-emerald-400",
    reason: "text-emerald-300/85",
  },
  purple: {
    border: "border-purple-500/25 hover:border-purple-400/60",
    bg: "from-purple-500/12 via-[#0e1018] to-[#0a0d14]",
    iconWrap: "from-purple-500/25 to-purple-500/10 border-purple-500/30",
    iconColor: "text-purple-400",
    reason: "text-purple-300/85",
  },
  amber: {
    border: "border-amber-500/25 hover:border-amber-400/60",
    bg: "from-amber-500/12 via-[#0e1018] to-[#0a0d14]",
    iconWrap: "from-amber-500/25 to-amber-500/10 border-amber-500/30",
    iconColor: "text-amber-400",
    reason: "text-amber-300/85",
  },
} as const;

const features = [
  {
    title: "קישורים איכותיים בלבד",
    body: "מאמרים באתרים אמיתיים, DA גבוה, ללא PBN. כל קישור עובר בדיקה קפדנית.",
    icon: IconShield,
  },
  {
    title: "חוסך לכם שעות עבודה",
    body: "לא צריך ספקים, לא צריך מעקבים. אנחנו מנהלים הכל מא' עד ת'.",
    icon: IconClock,
  },
  {
    title: "סקייל בלי מגבלות",
    body: "מתאים למקדמים עם מספר אתרים ולקוחות. נגדל איתכם בלי צווארי בקבוק.",
    icon: IconScale,
  },
  {
    title: "White Hat בלבד",
    body: "שיטות בטוחות לטווח ארוך בהתאם להנחיות גוגל. בלי סיכונים לאתרי הלקוחות שלכם.",
    icon: IconHat,
  },
  {
    title: "התאמה אישית לכל לקוח",
    body: "כל אתר מקבל אסטרטגיית קישורים שונה לפי נישה, DA יעד ותחרותיות.",
    icon: IconTarget,
  },
  {
    title: "דוחות מסודרים ושקופים",
    body: "אתם תמיד יודעים מה קורה. דוח חודשי עם כל הקישורים, מטריקות ומעמד.",
    icon: IconChart,
  },
] as const;

const goodFit = [
  "ממש לא רוצים כבר להתעסק בבניית קישורים",
  "מבינים ששירות איכותי עולה קצת יותר, ושווה כל שקל",
  "מעריכים תהליך מסודר, דוחות שקופים וצוות איכותי שאפשר לסמוך עליו",
  "רוצים להתפנות להגדיל את העסק שלכם, במקום להתעסק בקישורים",
] as const;

const badFit = [
  "קונים קישורים לפי המבצעים שיש כרגע",
  'מצפים לקישורים "איכותיים" ב-50 ש"ח',
  "מעדיפים לחסוך כמה שיותר על חשבון שירות איכותי ויציב לאורך זמן",
  "אוהבים לעבור בין ספקים ולקנות מכולם",
] as const;

const steps = [
  {
    num: "01",
    title: "בדיקת התאמה קצרה",
    body: "כל אחד מהכפתורים בעמוד הזה מוביל לשאלון קצרצר. נכיר אתכם קצת, ונבין אם ואיך אנחנו יכולים לעזור.",
    icon: IconSearch,
  },
  {
    num: "02",
    title: "שיחה קצרה",
    body: "בשיחה יקרו שני דברים. אנחנו נשמע אתכם ונבין מכם מה הכי חשוב לכם, וכמובן נסביר על שירותי בניית הקישורים שלנו.",
    icon: IconChat,
  },
  {
    num: "03",
    title: "מתניעים",
    body: "מתחילים עבודה. כבר מהרגע הראשון תרגישו בהבדל. הכול קורה במקצועיות, במהירות, ואיזה כיף, אתם לא צריכים להתעסק יותר עם קישורים.",
    icon: IconRocket,
  },
] as const;

const testimonials = [
  {
    title: "עבודה הרבה יותר טובה מעובד InHouse",
    quote:
      "עבודה נהדרת בכל חודש, הלינקים איכותיים ועוזרים לי להראות התקדמות בדוחות שלנו. עבודה הרבה יותר טובה מעובד InHouse מכיוון שהוא מוכן מבחינת תשתית ונותן מענה לכל הצרכים, מומלץ מאוד.",
    badge: "הלינקים איכותיים ועוזרים לי להראות התקדמות בדוחות שלנו",
    name: "דרור אבטליון",
    role: "אוקס פרסום, CEO and Founder",
    tone: "purple" as const,
  },
  {
    title: "המחיר הוגן, השירות איכותי, עמידה בזמנים",
    quote:
      "אני מזמין מזה מספר שנים קישורים איכותיים מאופיר שהתגלה כאיש מקצוע מעולה, מבין SEO ואת החשיבות הרלוונטיות והמדדים לבחינת איכות האתרים המפנים. אופיר והצוות שלו בונים עבור משרדינו קישורים איכותיים המשמשים כמחזקי SEO לצד קישורים המפנים תנועה שלבסוף גם הופכת להמרות. המחיר הוגן, השירות איכותי, עמידה בזמנים ואני ממליץ בחום.",
    badge: "המחיר הוגן, השירות איכותי, עמידה בזמנים",
    name: "ליאור פארקר לוי",
    role: "CEO and Founder, ROI Vision",
    tone: "emerald" as const,
  },
  {
    title: "השירות מעולה, נותן הרגשה של שותפות ואכפתיות",
    quote:
      "מקצוען אמיתי, מומחה בקידום אורגני ונותן פתרונות טובים שמותאמים לצרכינו. ולא פחות מזה, השירות מעולה, נותן הרגשה של שותפות ואכפתיות. מומלץ ביותר.",
    badge: "שותפות ואכפתיות, לא רק שירות",
    name: "Rami Moscovich",
    role: "CEO and Founder, AS-IS",
    tone: "yellow" as const,
  },
  {
    title: "דוח קישורים מגיע כמו שעון בדיוק בזמן",
    quote:
      "אחרי מספר רב של ניסיונות לא מוצלחים למצוא פתרון לבניית קישורים עבור הלקוחות שלי הגעתי דרך לקוח משותף לאופיר שהראה שדברים יכולים להתנהל בצורה מקצועית ושירותית מאוד. לא פחות חשוב, תהליך ההזמנה מתבצע באופן מסודר ומאוד ברור מה מקבלים בסוף החודש. דוח קישורים מגיע כמו שעון בדיוק בזמן לפני הוצאת דוחות ללקוחות. שירות מומלץ מאוד.",
    badge: "דוחות חודשיים בדיוק בזמן",
    name: "אסף שמעוני",
    role: "Managing Director, ALT DIGITAL MARKETING LTD",
    tone: "blue" as const,
  },
] as const;

const testimonialTones = {
  blue: {
    border: "border-blue-500/30",
    bg: "from-blue-500/10 to-blue-500/[0.03]",
    quote: "text-blue-400/70",
    badge: "bg-blue-500/15 text-blue-200 border-blue-500/30",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "from-emerald-500/10 to-emerald-500/[0.03]",
    quote: "text-emerald-400/70",
    badge: "bg-emerald-500/15 text-emerald-200 border-emerald-500/30",
  },
  yellow: {
    border: "border-yellow-500/30",
    bg: "from-yellow-500/10 to-yellow-500/[0.03]",
    quote: "text-yellow-400/70",
    badge: "bg-yellow-500/15 text-yellow-200 border-yellow-500/30",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "from-purple-500/10 to-purple-500/[0.03]",
    quote: "text-purple-400/70",
    badge: "bg-purple-500/15 text-purple-200 border-purple-500/30",
  },
} as const;

export default function Home() {
  return (
    <main className="bg-page">
      <StickyNav />
      <Hero />
      <Pitch />
      <Stats />
      <Pain />
      <CustomerStories />
      <Objections />
      <Features />
      <Fit />
      <HowItWorks />
      <Testimonials />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}

/* ───────────────── Sticky Nav ───────────────── */

function StickyNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#08090f]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <CtaButton className="text-sm" pulse>
          בדקו התאמה תוך 2 דקות
        </CtaButton>
        <Logo />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-400/50 shadow-[0_0_18px_rgba(34,211,238,0.35)]">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-cyan-300" aria-hidden>
          <path
            d="M9.5 14.5 14.5 9.5M8 12a4 4 0 0 1 4-4h2a4 4 0 0 1 0 8h-2M16 12a4 4 0 0 1-4 4h-2a4 4 0 0 1 0-8h2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-lg font-extrabold tracking-tight text-glow-soft">
        Link<span className="text-cyan-300">Boost</span>
      </span>
    </div>
  );
}

/* ───────────────── Hero ───────────────── */

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[760px] items-center overflow-hidden pb-16 pt-28 md:min-h-[860px] md:pt-36 lg:min-h-[920px]"
    >
      <Image
        src="/hero-banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover opacity-55"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#08090f]/40 via-[#08090f]/55 to-[#08090f]" />
      <div className="blob blob-cyan-strong absolute right-1/4 top-1/3 h-[500px] w-[500px]" />
      <div className="blob blob-cyan absolute bottom-0 left-1/4 h-[400px] w-[400px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex max-w-[95%] items-center gap-2.5 rounded-full border border-cyan-400/40 bg-cyan-400/5 px-5 py-2.5 text-sm font-extrabold leading-snug text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.2)] md:text-base">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
            </span>
            מתאים במיוחד לסוכנויות קידום ומקדמי אתרים עם 10+ לקוחות
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-[1.05] text-white md:text-6xl lg:text-[80px]">
            לא נמאס לכם לרדוף
            <br />
            <span className="text-cyan-300 text-glow-cyan">אחרי קישורים כל חודש?</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── CTA1 / Pitch ───────────────── */

function Pitch() {
  return (
    <section className="relative px-4 py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl">
          תנו לנו לנהל עבורכם את כל בניית הקישורים.
        </p>
        <p className="mx-auto mt-2 max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl">
          ואתם תתמקדו בקידום ובסקייל של הלקוחות שלכם.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          קישורים איכותיים, תהליך מסודר, דוחות שקופים. בלי כאב ראש.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <CtaButton pulse className="text-lg md:text-xl">
            בדקו התאמה תוך 2 דקות
          </CtaButton>
          <p className="text-sm text-slate-400">
            ללא התחייבות. מותאם לסוכנויות SEO ופרילנסרים.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Stats ───────────────── */

function Stats() {
  return (
    <section className="relative px-4 pb-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-3">
        {stats.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            className="card-surface flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition-colors hover:border-cyan-400/30"
          >
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cyan-400/25 bg-cyan-400/10">
              <Icon className="h-4 w-4 text-cyan-300" />
            </div>
            <div className="flex min-w-0 flex-col items-start">
              <div
                dir="ltr"
                className="text-2xl font-extrabold leading-none text-cyan-300"
              >
                {value}
              </div>
              <div className="mt-1 text-base leading-tight text-white/85">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── Pain ───────────────── */

function Pain() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="blob blob-red absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-3xl space-y-8 text-center">
        <h2 className="text-3xl font-extrabold text-white text-glow-soft md:text-5xl">
          מזדהים?
        </h2>

        <div className="space-y-6">
          <PainBlock title="כל תחילת חודש">
            מחפשים אתרים, מתמקחים על מחירים, בודקים מבצעים ועוד ועוד ועוד.
            <br />
            אין מה לעשות, שוב צריך להשיג קישורים חדשים לכל הלקוחות.
          </PainBlock>
          <PainBlock title="במהלך החודש">
            נזכרים בקישורים. דואגים קצת.
            <br />
            הכול "בטיפול"?
          </PainBlock>
          <PainBlock title="כל סוף חודש">
            כל הקישורים מוכנים? תיכף דו"חות סוף חודש.
          </PainBlock>
        </div>
      </div>
    </section>
  );
}

function PainBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xl font-extrabold text-cyan-200 md:text-2xl">{title}</p>
      <p className="mt-2 text-base leading-relaxed text-slate-300 md:text-lg">
        {children}
      </p>
    </div>
  );
}

/* ───────────────── Customer Stories ───────────────── */

function CustomerStories() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="blob blob-cyan absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="eyebrow">סיפור לקוח</span>
          <h2 className="mt-4 text-3xl font-extrabold text-white text-glow-soft md:text-5xl">
            תנו לנו לספר לכם על הלקוחות שלנו
          </h2>
        </div>

        <div className="space-y-6">
          {stories.map((s) => (
            <article
              key={s.title}
              className="card-surface lift rounded-2xl border border-white/10 p-6 md:p-10"
            >
              <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 text-lg font-extrabold text-cyan-200">{s.intro}</p>
              <p className="mt-3 text-base leading-relaxed text-slate-300">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Objections (3 tinted cards + red warning) ───────────────── */

function Objections() {
  return (
    <section id="objection" className="relative overflow-hidden bg-[#08090f] px-4 py-16">
      <div className="blob blob-cyan absolute right-10 top-10 h-72 w-72" />
      <div className="blob blob-cyan absolute bottom-20 left-20 h-96 w-96" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-extrabold text-white md:text-4xl">
            אתם לא אמורים לבנות קישורים בעצמכם
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-400 md:text-base">
            בהנחה שאתם מקדמים מספר רב של אתרים.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {objections.map(({ title, sub, reason, icon: Icon, tone }) => {
            const t = objectionTones[tone];
            return (
              <div
                key={title}
                className={`group lift relative overflow-hidden rounded-2xl border bg-gradient-to-br ${t.bg} ${t.border}`}
              >
                <div className="relative flex flex-col items-center p-6 text-center md:p-7">
                  <div
                    className={`mb-4 grid h-12 w-12 place-items-center rounded-2xl border bg-gradient-to-br shadow-lg ${t.iconWrap}`}
                  >
                    <Icon className={`h-6 w-6 ${t.iconColor}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold leading-tight text-white md:text-xl">
                    {title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-300">{sub}</p>
                  <div className="w-full border-t border-white/10 pt-3">
                    <p className={`text-xs font-extrabold ${t.reason}`}>{reason}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <div className="red-pulse relative w-full max-w-3xl overflow-hidden rounded-2xl border-2 border-red-500/60 bg-gradient-to-br from-red-500/25 to-red-500/[0.08] p-8 md:p-10">
            <div className="blob blob-red absolute -right-2 -top-2 h-32 w-32" />
            <div className="blob blob-red absolute -bottom-2 -left-2 h-32 w-32" />
            <div className="relative flex items-center justify-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-red-500/40 bg-red-500/25 md:h-14 md:w-14">
                <IconLink2 className="h-7 w-7 text-red-400 md:h-8 md:w-8" />
              </div>
              <h3 className="text-center text-2xl font-extrabold leading-tight text-red-300 text-glow-red md:text-4xl">
                אז למה אתם עדיין בונים קישורים בעצמכם?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Features / Benefits ───────────────── */

function Features() {
  return (
    <section id="benefits" className="relative px-4 py-20">
      <div className="divider-soft absolute inset-x-0 top-0" />
      <div className="blob blob-cyan absolute left-10 top-40 h-72 w-72" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="eyebrow">למה מקדמים בוחרים בנו</span>
          <h2 className="mt-4 text-2xl font-extrabold text-white md:text-4xl">
            הפתרון לבניית קישורים בסקייל
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
            תפסיקו לבזבז זמן על ספקים ומעקבים, ותתמקדו בלהגדיל את העסק ולהביא
            עוד לקוחות. כשאנחנו לצידכם, אין גבול לכמות הלקוחות שתוכלו לקדם.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, body, icon: Icon }) => (
            <div
              key={title}
              className="card-surface lift group relative overflow-hidden rounded-xl border border-white/10 p-5 transition-all hover:border-cyan-400/40 hover:shadow-[0_8px_32px_rgba(34,211,238,0.12)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative mb-3 flex items-start justify-between gap-3">
                <h3 className="flex-1 text-base font-extrabold leading-snug text-white">
                  {title}
                </h3>
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 transition-colors group-hover:bg-cyan-400/20">
                  <Icon className="h-4 w-4 text-cyan-300" />
                </div>
              </div>
              <p className="relative text-sm leading-relaxed text-slate-300">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <CtaButton pulse>בדקו התאמה תוך 2 דקות</CtaButton>
          <p className="text-xs text-slate-400">
            ללא התחייבות. מותאם לסוכנויות SEO ופרילנסרים.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Fit Check ───────────────── */

function Fit() {
  return (
    <section id="fit" className="relative overflow-hidden px-4 py-20">
      <div className="blob blob-cyan absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="eyebrow">האם זה מתאים לכם?</span>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
            השירות שלנו לא מתאים לכולם,
            <br />
            <span className="text-cyan-300 text-glow-cyan">ואנחנו גאים בזה</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 md:text-base">
            אנחנו לא מנסים לעבוד עם כולם. בדקו אם אנחנו מתאימים זה לזה.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/30 bg-cyan-400/15">
                <IconCheck className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-xl font-extrabold text-cyan-200 md:text-2xl">
                מתאים לכם אם
              </h3>
            </div>
            <ul className="space-y-3">
              {goodFit.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-base text-slate-200"
                >
                  <IconCheck className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-red-500/30 bg-red-500/15">
                <IconX className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-xl font-extrabold text-red-300 md:text-2xl">
                לא מתאים לכם אם
              </h3>
            </div>
            <ul className="space-y-3">
              {badFit.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-base text-slate-200"
                >
                  <IconX className="mt-1 h-4 w-4 shrink-0 text-red-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="mb-6 text-lg font-extrabold text-cyan-200 md:text-2xl">
            אם זיהיתם את עצמכם ברשימת המתאימים, כדאי לנו מאוד לדבר.
          </p>
          <CtaButton pulse>בדקו אם אנחנו מתאימים</CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── How It Works ───────────────── */

function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden px-4 py-20">
      <div className="blob blob-cyan absolute right-1/4 top-20 h-96 w-96" />
      <div className="blob blob-cyan absolute bottom-20 left-1/4 h-80 w-80" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="eyebrow">איך זה עובד</span>
          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-5xl">
            3 צעדים פשוטים לחופש מלא מקישורים
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
            תהליך מסודר, שקוף ומדיד. מבדיקה ראשונית ועד דוח חודשי.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map(({ num, title, body, icon: Icon }) => (
            <div
              key={num}
              className="card-surface lift group relative overflow-hidden rounded-2xl border border-cyan-400/20 p-7 transition-all hover:border-cyan-400/50 md:p-8"
            >
              <span
                dir="ltr"
                className="pointer-events-none absolute left-4 top-3 select-none text-6xl font-extrabold leading-none text-cyan-300/10 transition-colors group-hover:text-cyan-300/20 md:text-7xl"
              >
                {num}
              </span>

              <div className="relative mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/15 shadow-lg shadow-cyan-500/10">
                <Icon className="h-7 w-7 text-cyan-300" />
              </div>

              <h3 className="relative mb-3 text-xl font-extrabold leading-tight text-white md:text-2xl">
                {title}
              </h3>
              <p className="relative text-sm leading-relaxed text-slate-300 md:text-base">
                {body}
              </p>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Testimonials ───────────────── */

function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#08090f] px-4 py-16">
      <div className="blob blob-cyan absolute right-10 top-20 h-96 w-96" />
      <div className="blob blob-cyan absolute bottom-10 left-20 h-80 w-80" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="eyebrow">סיפורי הצלחה</span>
          <h2 className="mt-4 text-2xl font-extrabold text-white md:text-4xl">
            מקדמי אתרים שעברו אלינו, וכבר לא בונים קישורים בעצמם
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-400 md:text-base">
            סוכנויות ואנשי SEO שכבר הפסיקו לבנות קישורים בעצמם, ומתרכזים בצמיחה.
          </p>
        </div>

        <div className="mb-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => {
            const c = testimonialTones[t.tone];
            return (
              <figure
                key={t.name}
                className={`relative rounded-2xl border bg-gradient-to-br ${c.bg} ${c.border} p-6 md:p-7`}
              >
                <IconQuote
                  className={`absolute right-5 top-5 h-7 w-7 ${c.quote}`}
                  aria-hidden
                />
                <h3 className="mb-3 pt-6 pl-12 text-lg font-extrabold leading-tight text-white md:text-xl">
                  {t.title}
                </h3>
                <blockquote className="mb-5 text-sm leading-relaxed text-slate-200">
                  &quot;{t.quote}&quot;
                </blockquote>
                <span
                  className={`mb-5 inline-block rounded-md border px-3 py-1.5 text-xs font-extrabold ${c.badge}`}
                >
                  {t.badge}
                </span>
                <div className="h-px bg-white/10" />
                <figcaption className="mt-4 text-right">
                  <div className="text-sm font-extrabold text-white">{t.name}</div>
                  <div className="mt-0.5 text-xs text-slate-400">{t.role}</div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7 text-center md:p-10">
          <h3 className="mb-2 text-2xl font-extrabold text-white md:text-4xl">
            רוצים גם להפסיק להתעסק עם קישורים?
          </h3>
          <p className="mx-auto mb-5 max-w-2xl text-sm text-slate-400 md:text-base">
            בדקו אם זה מתאים לכם תוך 2 דקות, ללא התחייבות.
          </p>
          <CtaButton>בואו נראה מה מתאים לכם</CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Final CTA ───────────────── */

function FinalCta() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="divider-soft absolute inset-x-0 -mt-20 h-px" />
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/25 shadow-[0_0_60px_rgba(34,211,238,0.12)]">
          <Image
            src="/cta-banner.png"
            alt=""
            width={1600}
            height={900}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#08090f]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08090f]/30 via-[#08090f]/25 to-[#08090f]/55" />
          <div className="blob blob-cyan-strong absolute -top-20 left-1/2 h-36 w-72 -translate-x-1/2" />

          <div className="relative z-10 mx-auto max-w-3xl p-8 text-center md:p-12">
            <span className="eyebrow mb-3">מיועד למקדמי אתרים</span>
            <h2 className="mb-3 mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">
              תפסיקו לנהל ספקים.
              <br />
              <span className="text-cyan-300 text-glow-cyan">תתחילו לגדול.</span>
            </h2>
            <p className="mx-auto mb-7 max-w-lg text-sm leading-relaxed text-slate-300 md:text-base">
              ענו על 6 שאלות קצרות ונבין יחד איפה אתם נמצאים ואיך אנחנו יכולים
              לקחת מכם את כאב הראש הזה.
            </p>
            <div className="flex flex-col items-center gap-2">
              <CtaButton pulse>בדקו עכשיו, 2 דקות</CtaButton>
              <p className="text-xs text-slate-400">
                ללא התחייבות. מותאם לסוכנויות SEO ופרילנסרים.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Footer ───────────────── */

function SiteFooter() {
  return (
    <footer className="border-t border-white/5 px-4 py-8 text-center">
      <p className="text-sm text-slate-500">© 2026 LinkBoost. כל הזכויות שמורות.</p>
    </footer>
  );
}

/* ───────────────── Icons ───────────────── */

type IconProps = { className?: string };

function IconLink({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M9.5 14.5 14.5 9.5M8 12a4 4 0 0 1 4-4h2a4 4 0 0 1 0 8h-2M16 12a4 4 0 0 1-4 4h-2a4 4 0 0 1 0-8h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconLink2({ className }: IconProps) {
  return <IconLink className={className} />;
}
function IconGlobe({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
function IconUsers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconUsersGroup({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M7 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20a5 5 0 0 1 10 0M12 20a5 5 0 0 1 10 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconAward({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.7" />
      <path d="m8 14-1 8 5-3 5 3-1-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconDatabase({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-2.5 9.5 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function IconScale({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M4 7h12m4 0h0m-9 0v13M3 7l4 8h6L9 7M21 7l-4 8m4-8h-4m4 8H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconHat({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M3 10h18M5 10c0-4 3-7 7-7s7 3 7 7m-4 8h2a2 2 0 0 0 2-2v-3H5v3a2 2 0 0 0 2 2h2m6 0H9m6 0v3H9v-3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconTarget({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
function IconChart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M4 19V5m0 14h16M8 16v-5m4 5V9m4 7v-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconX({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="m6 6 8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
function IconReceipt({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6m-6 4h6m-6 4h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconPen({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="m4 20 4-1L20 7l-3-3L5 16l-1 4Zm11-13 3 3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconSearch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IconChat({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconRocket({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M4 20s2-7 9-13c4-3 7-3 7-3s0 3-3 7c-6 7-13 9-13 9Zm3-3 3 3M14 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconQuote({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M9 7H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2v3l4-3v-7a3 3 0 0 0-2-3Zm10 0h-4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2v3l4-3v-7a3 3 0 0 0-2-3Z" />
    </svg>
  );
}
