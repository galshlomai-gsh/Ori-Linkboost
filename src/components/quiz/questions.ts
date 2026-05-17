export type Classification = "diy" | "managed";

export type QuestionOption = {
  label: string;
  value?: string;
  classification?: Classification;
};

export type Question = {
  id: string;
  title: string;
  subtitle?: string;
  type: "buttons" | "multiple";
  options: QuestionOption[];
  isFinal?: boolean;
};

export const questions: Question[] = [
  {
    id: "role",
    title: "מי אתם?",
    subtitle: "כדי שנדע איך לדבר איתכם נכון.",
    type: "buttons",
    options: [
      { label: "סוכנות / משרד SEO" },
      { label: "מקדמים עצמאיים" },
      { label: "מנהלי שיווק בארגון" },
      { label: "אחר" },
    ],
  },
  {
    id: "clients",
    title: "כמה לקוחות אתם מקדמים היום?",
    type: "buttons",
    options: [
      { label: "פחות מ-5" },
      { label: "5 עד 15" },
      { label: "15 עד 50" },
      { label: "50 ויותר" },
    ],
  },
  {
    id: "links",
    title: "כמה קישורים אתם בונים בחודש לכל הלקוחות יחד?",
    type: "buttons",
    options: [
      { label: "פחות מ-10" },
      { label: "10 עד 30" },
      { label: "30 עד 100" },
      { label: "מעל 100" },
    ],
  },
  {
    id: "how",
    title: "איך אתם משיגים קישורים כיום?",
    type: "buttons",
    options: [
      { label: "בונים לבד" },
      { label: "קונים מספקים מזדמנים" },
      { label: "עובדים עם חברת קישורים" },
      { label: "כרגע לא בונים בכלל" },
    ],
  },
  {
    id: "pain",
    title: "מה הכי מציק לכם בתהליך?",
    subtitle: "אפשר לסמן יותר מאחד.",
    type: "multiple",
    options: [
      { label: "הזמן שזה לוקח" },
      { label: "איכות הקישורים" },
      { label: "המחיר" },
      { label: "חוסר יציבות מספק לספק" },
      { label: "דוחות לא ברורים" },
    ],
  },
  {
    id: "goal",
    title: "איך תרצו להתקדם?",
    subtitle: "התשובה הזו עוזרת לנו להבין איזה מסלול נכון לכם.",
    type: "buttons",
    isFinal: true,
    options: [
      {
        label: "להעביר לכם את כל ניהול הקישורים",
        classification: "managed",
      },
      {
        label: "לקבל ייעוץ ולשמוע איך זה עובד אצלכם",
        classification: "managed",
      },
      {
        label: "אנחנו ממשיכים לבד — אבל נשמח לקבל מדריך",
        classification: "diy",
      },
    ],
  },
];
