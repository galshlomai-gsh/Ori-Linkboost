import Image from "next/image";
import type { ReactNode } from "react";

const stats = [
  { value: "+20,000", label: "קישורים שנבנו על ידינו" },
  { value: "+80", label: "מקדמים וסוכנויות שהעבירו לנו את ניהול הקישורים" },
  { value: "+1,000", label: "אתרים שהתקדמו מעולה בעזרת הקישורים שלנו" },
  { value: "100%", label: "שקט נפשי וחופש מקישורים ללקוחות שלנו" },
  { value: "10+", label: "שנות ניסיון בבניית קישורים ללקוחות" },
  { value: "+3,000", label: "אתרים שנוכל להוציא לכם קישורים מהם" },
] as const;

const stories = [
  {
    name: "ליאור",
    intro: "ליאור הגיע אלינו מאוד סקפטי ואפילו חשדן וחסר סבלנות",
    body: 'הוא הגיע אלינו אחרי שניסה לא מעט לבנות קישורים בעצמו וגם אחרי שניסה כמה חברות בניית קישורים מוכרות בשוק. בסופו של דבר, כמו שהוא אמר, איך שהוא לא סובב את זה, יצא לו להתעסק המון עם בניית הקישורים. אם זה בלעשות בעצמו, או אם זה ב"לבדוק" את מי שעשה לו. ולצערו, הוא התאכזב לא מעט.',
  },
  {
    name: "אוריאל",
    intro: 'אוריאל עשה הכול לבד, הרגיש שהוא פשוט "טובע" בעבודה השוטפת',
    body: 'של הקידום, כשחלק מרכזי ממנה היתה עבודת הקישורים. אוריאל ממש רצה "להוריד מעצמו" את העבודה הסיזיפית של הקישורים. כיום, לא מעט שנים אחרי אותה שיחה, אוריאל עדיין לקוח שלנו ונכון מאוד, מאז הוא לא מתעסק כלל עם בניית הקישורים.',
  },
  {
    name: "בן",
    intro: "בן הגיע אלינו כשרצה להוריד מעצמו וגם מהעובדים שלו את עבודת הקישורים",
    body: "כיום, כבר שנה בערך, הכול רץ חלק. אנחנו מול העובדים של בן. בן בקושי בתמונה בכלל, והכול מתנהל בצורה אוטומטית.",
  },
] as const;

const features = [
  {
    title: "קישורים איכותיים בלבד",
    body: "מאמרים באתרים אמיתיים, DA גבוה, ללא PBN – כל קישור עובר בדיקה קפדנית",
    icon: IconShield,
  },
  {
    title: "חוסך לך שעות עבודה",
    body: "לא צריך ספקים, לא צריך מעקבים – אנחנו מנהלים הכל מא' עד ת'",
    icon: IconClock,
  },
  {
    title: "סקייל בלי מגבלות",
    body: "מתאים למקדמים עם מספר אתרים ולקוחות – נגדל איתך בלי צווארי בקבוק",
    icon: IconScale,
  },
  {
    title: "White Hat בלבד",
    body: "שיטות בטוחות לטווח ארוך בהתאם להנחיות גוגל – בלי סיכונים לאתרי הלקוחות שלך",
    icon: IconHat,
  },
  {
    title: "התאמה אישית לכל לקוח",
    body: "כל אתר מקבל אסטרטגיית קישורים שונה לפי נישה, DA יעד ותחרותיות",
    icon: IconTarget,
  },
  {
    title: "דוחות מסודרים ושקופים",
    body: "אתה תמיד יודע מה קורה – דוח חודשי עם כל הקישורים, מטריקות ומעמד",
    icon: IconChart,
  },
] as const;

const goodFit = [
  "ממש לא רוצים כבר להתעסק בבניית קישורים",
  "מבינים ששירות איכותי עולה קצת יותר – ושווה כל שקל",
  "מעריכים תהליך מסודר, דוחות שקופים וצוות איכותי שאפשר לסמוך עליו",
  "רוצים להתפנות להגדיל את העסק שלכם, במקום להתעסק בקישורים",
] as const;

const badFit = [
  "קונים קישורים לפי המבצעים שיש כרגע",
  'מצפים לקישורים "איכותיים" ב-50 ש"ח',
  "מעדיפים לחסוך כמה שיותר מאשר לקבל שירות איכותי ויציב לאורך זמן",
  "אוהבים לעבור בין ספקים ולקנות מכולם",
] as const;

const steps = [
  {
    title: "בדיקת התאמה קצרה",
    body: "כל אחד מהכפתורים בעמוד הזה, מוביל לשאלון קצרצר, בו נכיר אתכם קצת, ונבין אם ואיך אנחנו יכולים לעזור.",
  },
  {
    title: "שיחה קצרה",
    body: "בשיחה יקרו שני דברים: אנחנו נשמע אתכם ונבין מכם – מה הכי חשוב לכם. וכמובן, שנסביר על שירותי בניית הקישורים שלנו.",
  },
  {
    title: "מתניעים",
    body: "מתחילים עבודה. כבר מהרגע הראשון, תרגישו בהבדל. הכול קורה במקצועיות, במהירות. ואיזה כיף – אתם לא צריכים להתעסק יותר עם קישורים.",
  },
] as const;

const testimonials = [
  {
    quote:
      "עבודה נהדרת בכל חודש, הלינקים איכותיים ועוזרים לי להראות התקדמות בדוחות שלנו. עבודה הרבה יותר טובה מעובד InHouse מכיוון שהוא מוכן מבחינת תשתית ונותן מענה לכל הצרכים, מומלץ מאוד!",
    highlight: "הלינקים איכותיים ועוזרים לי להראות התקדמות בדוחות שלנו",
    name: "דרור אבטליון",
    role: "אוקס פרסום – CEO and Founder",
    tone: "purple" as const,
  },
  {
    quote:
      "אני מזמין מזה מספר שנים קישורים איכותיים מאופיר שהתגלה כאיש מקצוע מעולה, מבין SEO ואת החשיבות הרלוונטיות והמדדים לבחינת איכות האתרים המפנים. אופיר והצוות שלו בונים עבור משרדינו קישורים איכותיים המשמשים כמחזקי SEO לצד קישורים המפנים תנועה שלבסוף גם הופכת להמרות. המחיר הוגן, השירות איכותי, עמידה בזמנים ואני ממליץ בחום.",
    highlight: "המחיר הוגן, השירות איכותי, עמידה בזמנים",
    name: "ליאור פארקר לוי",
    role: "CEO and Founder – ROI Vision",
    tone: "teal" as const,
  },
  {
    quote:
      "מקצוען אמיתי, מומחה בקידום אורגני ונותן פתרונות טובים שמותאמים לצרכינו. ולא פחות מזה, השירות מעולה, נותן הרגשה של שותפות ואכפתיות. מומלץ ביותר.",
    highlight: "השירות מעולה, נותן הרגשה של שותפות ואכפתיות",
    name: "Rami Moscovich",
    role: "CEO and Founder – AS-IS",
    tone: "amber" as const,
  },
  {
    quote:
      "אחרי מספר רב של ניסיונות לא מוצלחים למצוא פתרון לבניית קישורים עבור הלקוחות שלי הגעתי דרך לקוח משותף לאופיר שהראה שדברים יכולים להתנהל בצורה מקצועית ושירותית מאוד ולא פחות חשוב, תהליך ההזמנה מתבצע באופן מסודר ומאוד ברור מה מקבלים בסוף החודש. דוח קישורים מגיע כמו שעון בדיוק בזמן לפני הוצאת דוחות ללקוחות. שירות מומלץ מאוד!",
    highlight: "דוח קישורים מגיע כמו שעון בדיוק בזמן לפני הוצאת דוחות ללקוחות",
    name: "אסף שמעוני",
    role: "Managing Director – ALT DIGITAL MARKETING LTD",
    tone: "blue" as const,
  },
] as const;

const toneRing: Record<(typeof testimonials)[number]["tone"], string> = {
  purple: "ring-glow-purple",
  teal: "ring-glow-teal",
  amber: "ring-glow-amber",
  blue: "ring-glow-blue",
};

const toneQuote: Record<(typeof testimonials)[number]["tone"], string> = {
  purple: "text-purple-300",
  teal: "text-teal-300",
  amber: "text-amber-300",
  blue: "text-sky-300",
};

export default function Home() {
  return (
    <main className="bg-starfield">
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
    <header className="relative z-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-400/40 px-4 py-1.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/10 sm:inline-flex"
        >
          בדיקת התאמה חינם
        </a>
        <Logo />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-400/40">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-cyan-300"
          aria-hidden
        >
          <path
            d="M9.5 14.5 14.5 9.5M8 12a4 4 0 0 1 4-4h2a4 4 0 0 1 0 8h-2M16 12a4 4 0 0 1-4 4h-2a4 4 0 0 1 0-8h2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight">LinkBoost</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-12 pt-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:pt-16">
        <div className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 ring-glow-cyan">
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
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            מתאים במיוחד לסוכנויות קידום ומקדמי אתרים עם 10+ לקוחות
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            לא נמאס לכם לרדוף
            <br />
            <span className="text-glow-cyan text-cyan-300">
              אחרי קישורים כל חודש?
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            תנו לנו לנהל עבורכם את כל בניית הקישורים – ואתם תתמקדו בלקוחות שלכם
            ובגיוס עוד ועוד לקוחות חדשים.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaButton href="#contact">לבדיקת התאמה חינמית ומהירה</CtaButton>
            <span className="text-sm text-slate-400">
              2 דקות · ללא התחייבות · מותאם לסוכנויות SEO
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
      body: 'מחפשים אתרים, מתמקחים על מחירים, בודקים מבצעים ועוד ועוד ועוד… אין מה לעשות, שוב צריך להשיג קישורים חדשים לכל הלקוחות.',
    },
    {
      title: "במהלך החודש",
      body: 'נזכרים בקישורים. דואגים קצת… הכול "בטיפול"?',
    },
    {
      title: "כל סוף חודש",
      body: 'כל הקישורים מוכנים? תיכף דו"חות סוף חודש…',
    },
  ];

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            מזדהים?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            המעגל המתיש שכל סוכנות SEO מכירה מקרוב.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="card-surface rounded-2xl border border-white/5 p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/30">
                  <IconAlert className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold text-white">{b.title}</h3>
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
        <p className="text-lg font-medium text-cyan-200">
          יש לנו חדשות משמחות בשבילכם – זה לא חייב להיות ככה.
        </p>
        <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          תנו לנו לנהל עבורכם את כל בניית הקישורים
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          ואתם תתמקדו בלקוחות שלכם וגיוס עוד ועוד לקוחות חדשים
        </p>
        <p className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm text-slate-200">
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
        <CtaButton href="#contact" className="mx-auto">
          לבדיקת התאמה חינמית ומהירה
        </CtaButton>
        <p className="mt-3 text-sm text-slate-400">
          2 דקות · ללא התחייבות · מותאם לסוכנויות SEO
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
              className="card-surface rounded-2xl border border-cyan-400/15 p-5 text-center"
            >
              <div
                dir="ltr"
                className="text-3xl font-extrabold text-cyan-300 text-glow-cyan"
              >
                {s.value}
              </div>
              <p className="mt-2 text-xs leading-snug text-slate-300">
                {s.label}
              </p>
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
          <span className="text-sm font-semibold tracking-wider text-cyan-300">
            סיפור לקוח
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            תנו לנו לספר לכם על הלקוחות שלנו
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <article
              key={s.name}
              className="card-surface flex flex-col rounded-2xl border border-white/10 p-6"
            >
              <header className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/30">
                  <IconUser className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-white">
                  על {s.name}
                </h3>
              </header>
              <p className="mb-3 font-medium text-cyan-100">{s.intro}</p>
              <p className="text-sm leading-relaxed text-slate-300">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShouldNotBuild() {
  const items = [
    {
      label: "אתם לא אוספים חשבוניות בעצמכם",
      sub: "יש לכם הנהלת חשבונות",
    },
    {
      label: "אתם לא כותבים את כל התוכן בעצמכם",
      sub: "יש לכם כותבי תוכן / עובדים שעושים זאת",
    },
    {
      label: "אתם לא עושים כל משימה קטנה בעסק",
      sub: "יש לכם צוות",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            אתם לא אמורים לבנות קישורים בעצמכם
          </h2>
          <p className="mt-3 text-slate-400">
            (בהנחה שאתם מקדמים מספר רב של אתרים)
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.label}
              className="card-surface rounded-2xl border border-white/10 p-6"
            >
              <p className="text-lg font-semibold text-white">{it.label}</p>
              <p className="mt-3 text-slate-300">{it.sub}</p>
              <p className="mt-6 text-sm font-medium text-cyan-300">
                כי הזמן שלך שווה יותר
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl ring-glow-red">
          <div className="bg-gradient-to-l from-red-500/20 via-red-500/10 to-transparent px-6 py-8 text-center">
            <p className="text-2xl font-extrabold text-red-200 sm:text-3xl">
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            למה מקדמי אתרים וסוכנויות בוחרים בנו
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-300">
            כי אנחנו נותנים להם שקט תעשייתי וקישורים מעולים, כל חודש מחדש.
            תפסיקו לבזבז זמן על המון ספקים ומבצעים ותתמקדו בלהגדיל את העסק
            ולהביא עוד לקוחות.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, body, icon: Icon }) => (
            <div
              key={title}
              className="card-surface rounded-2xl border border-cyan-400/15 p-6"
            >
              <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/30">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CtaButton href="#contact" className="mx-auto">
            התחל ניתוח SEO חינם · 2 דקות
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            האם השירות שלנו מתאים לכם?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300">
            השירות שלנו לא מתאים לכולם – וזה בסדר גמור. אנחנו לא מנסים לעבוד עם
            כולם. אבל אם יש בינינו התאמה – נוכל לחסוך לכם המון זמן ואנרגיה,
            ובעיקר לתת לכם שקט נפשי וחופש מהעבודה הסיזיפית של בניית הקישורים
            החודשית.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FitCard
            title="אנחנו מאוד מתאימים אם אתם…"
            tone="positive"
            items={goodFit}
          />
          <FitCard
            title="אנחנו פחות מתאימים אם אתם…"
            tone="negative"
            items={badFit}
          />
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-300">
            אם זיהיתם את עצמכם ברשימת ה״מתאים״ – כדאי לנו מאוד לדבר.
          </p>
          <div className="mt-6">
            <CtaButton href="#contact" className="mx-auto">
              בדוק אם אנחנו מתאימים
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
      className={`card-surface rounded-2xl border p-6 ${
        isPositive
          ? "border-emerald-400/30 ring-glow-cyan"
          : "border-red-400/25"
      }`}
    >
      <h3
        className={`mb-5 text-xl font-bold ${
          isPositive ? "text-emerald-200" : "text-red-200"
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
                  ? "bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/40"
                  : "bg-red-400/15 text-red-300 ring-1 ring-red-400/40"
              }`}
            >
              {isPositive ? (
                <IconCheck className="h-3 w-3" />
              ) : (
                <IconX className="h-3 w-3" />
              )}
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
          <span className="text-sm font-semibold tracking-wider text-cyan-300">
            איך זה עובד
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            3 צעדים פשוטים לחופש מלא מקישורים
          </h2>
          <p className="mt-3 text-slate-300">
            תהליך מסודר, שקוף ומדיד – מבדיקה ראשונית ועד דוח חודשי.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="card-surface relative rounded-2xl border border-white/10 p-6"
            >
              <span className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-full bg-cyan-400 text-base font-bold text-slate-900 shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                {i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-slate-300">{s.body}</p>
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
          <span className="text-sm font-semibold tracking-wider text-cyan-300">
            סיפורי הצלחה
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            מקדמי אתרים שעברו אלינו – וכבר לא בונים קישורים בעצמם
          </h2>
          <p className="mt-3 text-slate-300">
            סוכנויות ואנשי SEO שהפסיקו לבנות קישורים בעצמם – ומתרכזים בצמיחה.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className={`card-surface rounded-2xl p-7 ${toneRing[t.tone]}`}
            >
              <span
                className={`mb-4 inline-block text-3xl leading-none ${toneQuote[t.tone]}`}
                aria-hidden
              >
                ❝
              </span>
              <p className={`mb-4 font-semibold ${toneQuote[t.tone]}`}>
                {t.highlight}
              </p>
              <blockquote className="text-slate-200">{t.quote}</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-semibold text-white">{t.name}</div>
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
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 ring-glow-cyan">
          <Image
            src="/cta-banner.png"
            alt=""
            width={1600}
            height={900}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#05070d]/85 via-[#05070d]/55 to-[#05070d]/20" />

          <div className="relative px-6 py-12 text-right sm:px-12 sm:py-16">
            <h2 className="max-w-xl text-3xl font-extrabold text-white sm:text-4xl">
              גם אתם רוצים להפסיק להתעסק עם בניית הקישורים?
            </h2>
            <p className="mt-3 text-slate-200">
              בדקו תוך 2 דקות, ללא התחייבות.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CtaButton href="#contact">בואו נראה מה מתאים לך</CtaButton>
              <span className="text-sm text-slate-300">
                מיועד למקדמי אתרים
              </span>
            </div>

            <div className="mt-10 max-w-xl border-t border-white/10 pt-6">
              <p className="text-lg font-semibold text-white">
                תפסיקו לנהל ספקי קישורים – והתחילו לגדול.
              </p>
              <p className="mt-2 text-sm text-slate-300">
                ענו על כמה שאלות קצרות ונבין יחד איפה אתם כיום ואיך אנחנו
                יכולים לקחת מכם את כאב הראש הזה.
              </p>
              <p className="mt-3 text-sm text-slate-400">
                בדיקה חינמית – 2 דקות · ללא התחייבות · מותאם לסוכנויות SEO
                ופרילנסרים
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <Logo />
        <p className="text-sm text-slate-500">© 2026 LinkBoost. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}

function CtaButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-cyan-400 to-sky-500 px-7 py-3.5 text-base font-bold text-slate-900 shadow-[0_0_24px_rgba(34,211,238,0.45)] transition hover:from-cyan-300 hover:to-sky-400 hover:shadow-[0_0_32px_rgba(34,211,238,0.6)] ${className}`}
    >
      <span>{children}</span>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden
        className="h-4 w-4 -scale-x-100"
      >
        <path
          d="M4 10h12m0 0-4-4m4 4-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function Dot() {
  return <span className="h-1 w-1 rounded-full bg-cyan-300/60" />;
}

/* ---------- icons ---------- */

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
      <path
        d="m5 10 3 3 7-7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconX({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path
        d="m6 6 8 8M14 6l-8 8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconUser({ className }: IconProps) {
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
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
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
      <path
        d="M4 19V5m0 14h16M8 16v-5m4 5V9m4 7v-3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
