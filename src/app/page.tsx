import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";

const stats = [
  { value: "20,000+", label: "קישורים שנבנו על ידינו" },
  { value: "80+", label: "מקדמים וסוכנויות שהעבירו אלינו את ניהול הקישורים" },
  { value: "1,000+", label: "אתרים שהתקדמו מעולה בעזרת הקישורים שלנו" },
  { value: "100%", label: "שקט נפשי וחופש מקישורים ללקוחות שלנו" },
  { value: "10+", label: "שנות ניסיון בבניית קישורים ללקוחות" },
  { value: "3,000+", label: "אתרים שנוכל להוציא לכם קישורים מהם" },
] as const;

const stories = [
  {
    title: "תנו לנו לספר לכם על ליאור",
    intro: "ליאור הגיע אלינו מאוד סקפטי ואפילו חשדן וחסר סבלנות.",
    body: 'הוא הגיע אלינו אחרי שניסה לא מעט לבנות קישורים בעצמו וגם אחרי שניסה כמה חברות בניית קישורים מוכרות בשוק. בסופו של דבר, כמו שהוא אמר, איך שהוא לא סובב את זה, יצא לו להתעסק המון עם בניית הקישורים. אם זה בלעשות בעצמו, או אם זה ב"לבדוק" את מי שעשה לו. ולצערו, הוא התאכזב לא מעט.',
  },
  {
    title: "או על אוריאל",
    intro: 'אוריאל עשה הכול לבד, הרגיש שהוא פשוט "טובע" בעבודה השוטפת.',
    body: 'של הקידום, כשחלק מרכזי ממנה היתה עבודת הקישורים. אוריאל ממש רצה "להוריד מעצמו" את העבודה הסיזיפית של הקישורים. כיום, לא מעט שנים אחרי אותה שיחה, אוריאל עדיין לקוח שלנו ונכון מאוד, מאז הוא לא מתעסק כלל עם בניית הקישורים.',
  },
  {
    title: "או על בן",
    intro: "בן הגיע אלינו כשרצה להוריד מעצמו וגם מהעובדים שלו את עבודת הקישורים.",
    body: "כיום, כבר שנה בערך, הכול רץ חלק. אנחנו מול העובדים של בן. בן בקושי בתמונה בכלל, והכול מתנהל בצורה אוטומטית.",
  },
] as const;

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
    body: "שיטות בטוחות לטווח ארוך בהתאם להנחיות גוגל, בלי סיכונים לאתרי הלקוחות שלכם.",
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
    title: "בדיקת התאמה קצרה",
    body: "כל אחד מהכפתורים בעמוד הזה מוביל לשאלון קצרצר. נכיר אתכם קצת, ונבין אם ואיך אנחנו יכולים לעזור.",
  },
  {
    title: "שיחה קצרה",
    body: "בשיחה יקרו שני דברים. אנחנו נשמע אתכם ונבין מכם מה הכי חשוב לכם. וכמובן, נסביר על שירותי בניית הקישורים שלנו.",
  },
  {
    title: "מתניעים",
    body: "מתחילים עבודה. כבר מהרגע הראשון תרגישו בהבדל. הכול קורה במקצועיות, במהירות. ואיזה כיף, אתם לא צריכים להתעסק יותר עם קישורים.",
  },
] as const;

const testimonials = [
  {
    title: "עבודה הרבה יותר טובה מעובד InHouse",
    quote:
      "עבודה נהדרת בכל חודש, הלינקים איכותיים ועוזרים לי להראות התקדמות בדוחות שלנו. עבודה הרבה יותר טובה מעובד InHouse מכיוון שהוא מוכן מבחינת תשתית ונותן מענה לכל הצרכים, מומלץ מאוד.",
    highlight: "הלינקים איכותיים ועוזרים לי להראות התקדמות בדוחות שלנו",
    name: "דרור אבטליון",
    role: "אוקס פרסום, CEO and Founder",
    tone: "purple" as const,
  },
  {
    title: "המחיר הוגן, השירות איכותי, עמידה בזמנים ואני ממליץ בחום",
    quote:
      "אני מזמין מזה מספר שנים קישורים איכותיים מאופיר שהתגלה כאיש מקצוע מעולה, מבין SEO ואת החשיבות הרלוונטיות והמדדים לבחינת איכות האתרים המפנים. אופיר והצוות שלו בונים עבור משרדינו קישורים איכותיים המשמשים כמחזקי SEO לצד קישורים המפנים תנועה שלבסוף גם הופכת להמרות. המחיר הוגן, השירות איכותי, עמידה בזמנים ואני ממליץ בחום.",
    highlight: "המחיר הוגן, השירות איכותי, עמידה בזמנים",
    name: "ליאור פארקר לוי",
    role: "CEO and Founder, ROI Vision",
    tone: "teal" as const,
  },
  {
    title: "השירות מעולה, נותן הרגשה של שותפות ואכפתיות. מומלץ ביותר",
    quote:
      "מקצוען אמיתי, מומחה בקידום אורגני ונותן פתרונות טובים שמותאמים לצרכינו. ולא פחות מזה, השירות מעולה, נותן הרגשה של שותפות ואכפתיות. מומלץ ביותר.",
    highlight: "השירות מעולה, נותן הרגשה של שותפות ואכפתיות",
    name: "Rami Moscovich",
    role: "CEO and Founder, AS-IS",
    tone: "amber" as const,
  },
  {
    title: "דוח קישורים מגיע כמו שעון בדיוק בזמן לפני הוצאת דוחות ללקוחות",
    quote:
      "אחרי מספר רב של ניסיונות לא מוצלחים למצוא פתרון לבניית קישורים עבור הלקוחות שלי הגעתי דרך לקוח משותף לאופיר שהראה שדברים יכולים להתנהל בצורה מקצועית ושירותית מאוד, ולא פחות חשוב, תהליך ההזמנה מתבצע באופן מסודר ומאוד ברור מה מקבלים בסוף החודש. דוח קישורים מגיע כמו שעון בדיוק בזמן לפני הוצאת דוחות ללקוחות. שירות מומלץ מאוד.",
    highlight: "דוח קישורים מגיע כמו שעון בדיוק בזמן לפני הוצאת דוחות ללקוחות",
    name: "אסף שמעוני",
    role: "Managing Director, ALT DIGITAL MARKETING LTD",
    tone: "blue" as const,
  },
] as const;

const toneRing: Record<(typeof testimonials)[number]["tone"], string> = {
  purple: "ring-glow-purple",
  teal: "ring-glow-teal",
  amber: "ring-glow-amber",
  blue: "ring-glow-blue",
};
const toneHud: Record<(typeof testimonials)[number]["tone"], string> = {
  purple: "hud hud-purple",
  teal: "hud hud-teal",
  amber: "hud hud-amber",
  blue: "hud hud-blue",
};
const toneQuote: Record<(typeof testimonials)[number]["tone"], string> = {
  purple: "text-purple-300",
  teal: "text-teal-300",
  amber: "text-amber-300",
  blue: "text-sky-300",
};
const toneTitle: Record<(typeof testimonials)[number]["tone"], string> = {
  purple: "text-purple-200",
  teal: "text-teal-200",
  amber: "text-amber-200",
  blue: "text-sky-200",
};

export default function Home() {
  return (
    <main className="bg-cyber">
      <SiteHeader />
      <Hero />
      <PainPoints />
      <SolutionCallout />
      <PrimaryCta />
      <Stats />
      <CustomerStories />
      <ShouldNotBuild />
      <Features />
      <FitCheck />
      <HowItWorks />
      <Testimonials />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-white/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <CtaButton className="hidden text-sm sm:inline-flex">בדיקת התאמה חינמית</CtaButton>
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

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[520px] bg-cyan-500/5" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:pt-20">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-cyan-400/40 ring-glow-cyan">
            <Image
              src="/hero-banner.png"
              alt=""
              width={1200}
              height={520}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 text-right lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3.5 py-1.5 text-xs font-extrabold text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            מתאים במיוחד לסוכנויות קידום ומקדמי אתרים עם 10+ לקוחות
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[64px]">
            לא נמאס לכם לרדוף
            <br />
            <span className="text-cyan-300 text-glow-cyan">אחרי קישורים כל חודש?</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            תנו לנו לנהל עבורכם את כל בניית הקישורים. ואתם תתמקדו בלקוחות שלכם
            ובגיוס עוד ועוד לקוחות חדשים.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaButton pulse>בדקו התאמה תוך 2 דקות</CtaButton>
            <span className="text-sm text-slate-400">
              ללא התחייבות. מותאם לסוכנויות SEO.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  const blocks = [
    {
      title: "כל תחילת חודש",
      body: "מחפשים אתרים, מתמקחים על מחירים, בודקים מבצעים ועוד ועוד ועוד. אין מה לעשות, שוב צריך להשיג קישורים חדשים לכל הלקוחות.",
    },
    {
      title: "במהלך החודש",
      body: 'נזכרים בקישורים. דואגים קצת. הכול "בטיפול"?',
    },
    {
      title: "כל סוף חודש",
      body: 'כל הקישורים מוכנים? תיכף דו"חות סוף חודש.',
    },
  ];

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white text-glow-soft sm:text-4xl">
            מזדהים?
          </h2>
          <div className="neon-rule" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="hud lift card-surface rounded-2xl border border-cyan-400/20 p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/40 shadow-[0_0_18px_rgba(34,211,238,0.3)]">
                  <IconAlert className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-extrabold text-white">{b.title}</h3>
              </div>
              <p className="text-slate-300">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCallout() {
  return (
    <section className="relative pb-4">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-lg font-extrabold text-cyan-200 text-glow-soft">
          יש לנו חדשות משמחות בשבילכם. זה לא חייב להיות ככה.
        </p>
        <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          תנו לנו לנהל עבורכם את כל בניית הקישורים
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          ואתם תתמקדו בלקוחות שלכם ובגיוס עוד ועוד לקוחות חדשים.
        </p>
        <p className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-5 py-2 text-sm text-slate-200 shadow-[0_0_28px_rgba(34,211,238,0.15)]">
          <span>קישורים איכותיים</span>
          <Dot />
          <span>תהליך מסודר</span>
          <Dot />
          <span>דוחות שקופים</span>
          <Dot />
          <span>100% שקט מבניית קישורים</span>
        </p>
      </div>
    </section>
  );
}

function PrimaryCta() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <CtaButton className="mx-auto" pulse>
          בדקו התאמה תוך 2 דקות
        </CtaButton>
        <p className="mt-3 text-sm text-slate-400">
          ללא התחייבות. מותאם לסוכנויות SEO.
        </p>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="hud lift card-surface rounded-2xl border border-cyan-400/25 p-5 text-center"
            >
              <div
                dir="ltr"
                className="text-3xl font-extrabold text-cyan-300 text-glow-cyan"
              >
                {s.value}
              </div>
              <p className="mt-2 text-xs leading-snug text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomerStories() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="eyebrow">סיפור לקוח</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white text-glow-soft sm:text-4xl">
            תנו לנו לספר לכם על הלקוחות שלנו
          </h2>
          <div className="neon-rule" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <article
              key={s.title}
              className="hud lift card-surface flex flex-col rounded-2xl border border-cyan-400/25 p-6"
            >
              <header className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/40 shadow-[0_0_18px_rgba(34,211,238,0.35)]">
                  <IconUser className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-extrabold text-white">{s.title}</h3>
              </header>
              <p className="mb-3 font-extrabold text-cyan-100">{s.intro}</p>
              <p className="text-sm leading-relaxed text-slate-300">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShouldNotBuild() {
  const items = [
    { label: "אתם לא אוספים חשבוניות בעצמכם", sub: "יש לכם הנהלת חשבונות" },
    {
      label: "אתם לא כותבים את כל התוכן בעצמכם",
      sub: "יש לכם כותבי תוכן או עובדים שעושים זאת",
    },
    { label: "אתם לא עושים כל משימה קטנה בעסק", sub: "יש לכם צוות" },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white text-glow-soft sm:text-4xl">
            אתם לא אמורים לבנות קישורים בעצמכם
          </h2>
          <p className="mt-3 text-slate-400">(בהנחה שאתם מקדמים מספר רב של אתרים)</p>
          <div className="neon-rule" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.label}
              className="hud lift card-surface rounded-2xl border border-cyan-400/20 p-6"
            >
              <p className="text-lg font-extrabold text-white">{it.label}</p>
              <p className="mt-3 text-slate-300">{it.sub}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-cyan-300">
                <span className="h-px w-6 bg-cyan-300/60" />
                כי הזמן שלכם שווה יותר
              </p>
            </div>
          ))}
        </div>

        <div className="hud hud-red mt-12 overflow-hidden rounded-2xl ring-glow-red">
          <div className="relative bg-[rgba(239,68,68,0.12)] px-6 py-10 text-center">
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(239,68,68,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
            <p className="relative text-2xl font-extrabold text-red-200 text-glow-red sm:text-3xl">
              אז למה אתם עדיין בונים קישורים בעצמכם?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white text-glow-soft sm:text-4xl">
            למה מקדמי אתרים וסוכנויות בוחרים בנו
          </h2>
          <div className="neon-rule" />
          <p className="mx-auto mt-5 max-w-3xl text-slate-300">
            כי אנחנו נותנים להם שקט תעשייתי וקישורים מעולים, כל חודש מחדש.
            תפסיקו לבזבז זמן על המון ספקים ומבצעים ותתמקדו בלהגדיל את העסק
            ולהביא עוד לקוחות. כשאנחנו לצידכם, אין גבול לכמות הלקוחות שתוכלו לקדם.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, body, icon: Icon }) => (
            <div
              key={title}
              className="hud lift card-surface group rounded-2xl border border-cyan-400/25 p-6"
            >
              <span className="relative mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/50 shadow-[0_0_22px_rgba(34,211,238,0.35)] transition group-hover:shadow-[0_0_32px_rgba(34,211,238,0.6)]">
                <Icon className="h-5 w-5" />
                <span className="pointer-events-none absolute -inset-1 rounded-xl border border-dashed border-cyan-400/30" />
              </span>
              <h3 className="text-lg font-extrabold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CtaButton className="mx-auto" pulse>
            התחילו ניתוח SEO חינם
          </CtaButton>
          <p className="mt-3 text-sm text-slate-400">
            ללא התחייבות. מותאם לסוכנויות SEO ופרילנסרים.
          </p>
        </div>
      </div>
    </section>
  );
}

function FitCheck() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white text-glow-soft sm:text-4xl">
            האם השירות שלנו מתאים לכם?
          </h2>
          <div className="neon-rule" />
          <p className="mx-auto mt-5 max-w-3xl text-lg font-extrabold text-cyan-100">
            השירות שלנו לא מתאים לכולם, וזה בסדר גמור.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-slate-300">
            אנחנו לא מנסים לעבוד עם כולם. אבל אם כן יש בינינו התאמה, נוכל לחסוך
            לכם המון זמן ואנרגיה, ובעיקר לתת לכם שקט נפשי וחופש מהעבודה
            הסיזיפית של בניית הקישורים החודשית.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FitCard title="אנחנו מאוד מתאימים אם אתם" tone="positive" items={goodFit} />
          <FitCard title="אנחנו פחות מתאימים אם אתם" tone="negative" items={badFit} />
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-300">
            אם זיהיתם את עצמכם ברשימת המתאימים, כדאי לנו מאוד לדבר.
          </p>
          <div className="mt-6">
            <CtaButton className="mx-auto" pulse>
              בדקו אם אנחנו מתאימים
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function FitCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: readonly string[];
  tone: "positive" | "negative";
}) {
  const isPositive = tone === "positive";
  return (
    <div
      className={`hud card-surface rounded-2xl border p-6 ${
        isPositive
          ? "border-emerald-400/40 ring-glow-emerald hud-emerald"
          : "border-red-400/30 ring-glow-red hud-red"
      }`}
    >
      <h3
        className={`mb-5 text-xl font-extrabold ${
          isPositive ? "text-emerald-200 text-glow-soft" : "text-red-200 text-glow-red"
        }`}
      >
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-slate-200">
            <span
              className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                isPositive
                  ? "bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/50 shadow-[0_0_12px_rgba(52,211,153,0.4)]"
                  : "bg-red-400/15 text-red-300 ring-1 ring-red-400/50 shadow-[0_0_12px_rgba(239,68,68,0.35)]"
              }`}
            >
              {isPositive ? <IconCheck className="h-3 w-3" /> : <IconX className="h-3 w-3" />}
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="eyebrow">איך זה עובד</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white text-glow-soft sm:text-4xl">
            3 צעדים פשוטים לחופש מלא מקישורים
          </h2>
          <div className="neon-rule" />
          <p className="mt-5 text-slate-300">
            תהליך מסודר, שקוף ומדיד. מבדיקה ראשונית ועד דוח חודשי.
          </p>
        </div>

        <ol className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="hud lift card-surface relative rounded-2xl border border-cyan-400/25 p-7 pt-10"
            >
              <span dir="ltr" className="num-tile absolute -top-6 right-6">
                0{i + 1}
              </span>
              <h3 className="text-xl font-extrabold text-white">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-300">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="eyebrow">סיפורי הצלחה</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white text-glow-soft sm:text-4xl">
            מקדמי אתרים שעברו אלינו וכבר לא בונים קישורים בעצמם
          </h2>
          <div className="neon-rule" />
          <p className="mt-5 text-slate-300">
            סוכנויות ואנשי SEO שכבר הפסיקו לבנות קישורים בעצמם ומתרכזים בצמיחה.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className={`card-surface rounded-2xl p-7 ${toneRing[t.tone]} ${toneHud[t.tone]}`}
            >
              <h3 className={`mb-3 text-lg font-extrabold ${toneTitle[t.tone]}`}>
                {t.title}
              </h3>
              <span className={`mb-2 inline-block text-3xl leading-none ${toneQuote[t.tone]}`} aria-hidden>
                ❝
              </span>
              <blockquote className="mb-5 text-slate-200">{t.quote}</blockquote>
              <p className={`mb-5 font-extrabold ${toneQuote[t.tone]}`}>{t.highlight}</p>
              <figcaption className="border-t border-white/10 pt-4 text-sm">
                <div className="font-extrabold text-white">{t.name}</div>
                <div className="text-slate-400">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="hud relative overflow-hidden rounded-3xl border border-cyan-400/40 ring-glow-cyan">
          <Image
            src="/cta-banner.png"
            alt=""
            width={1600}
            height={900}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative px-6 py-12 text-right sm:px-12 sm:py-16">
            <div className="max-w-xl rounded-2xl bg-[#04060c]/70 p-7 backdrop-blur-sm">
              <h2 className="text-3xl font-extrabold text-white text-glow-soft sm:text-4xl">
                גם אתם רוצים להפסיק להתעסק עם בניית הקישורים?
              </h2>
              <p className="mt-3 text-slate-200">בדקו תוך 2 דקות, ללא התחייבות.</p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <CtaButton pulse>בואו נראה מה מתאים לכם</CtaButton>
                <span className="text-sm text-slate-300">מיועד למקדמי אתרים</span>
              </div>

              <div className="mt-10 border-t border-cyan-400/20 pt-6">
                <p className="text-lg font-extrabold text-white">
                  תפסיקו לנהל ספקי קישורים, והתחילו לגדול.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  ענו על כמה שאלות קצרות ונבין יחד איפה אתם כיום ואיך אנחנו
                  יכולים לקחת מכם את כאב הראש הזה.
                </p>
                <p className="mt-3 text-sm text-cyan-200/80">
                  בדיקה חינמית בת 2 דקות. ללא התחייבות. מותאם לסוכנויות SEO ופרילנסרים.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="relative border-t border-cyan-400/15 py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cyan-400/60 shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <Logo />
        <p className="text-sm text-slate-500">© 2026 LinkBoost. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}

function Dot() {
  return <span className="h-1 w-1 rounded-full bg-cyan-300/60" />;
}

type IconProps = { className?: string };

function IconAlert({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
function IconUser({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
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
