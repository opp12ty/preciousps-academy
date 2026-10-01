/**
 * Default public-site content. Every block here is editable by the Super Admin
 * (Admin → Homepage / Content) and versioned; these values are only the
 * starting point (§64, Rule 20).
 */

export interface PageBlock {
  title: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body: string }[];
  highlights: string[];
  cta: { label: string; href: string };
}

export const CONTENT_DEFAULTS = {
  home: {
    heroEyebrow: "JSS 1 – SSS 3 · CBT · STUDY CENTRE",
    heroHeading: "Precious PS Academy",
    tagline: "Building Brighter Minds for a Greater Tomorrow",
    positioning: "Smart Assessment. Secure Examination. Better Learning.",
    heroDescription:
      "A complete learning and computer-based testing platform for JSS 1–SSS 3 students — guided lessons, auto-marked classwork, realistic mock CBT and focused BECE, JAMB, WAEC and NECO preparation, all in one secure place.",
    ctaRegister: "Student Registration",
    ctaLogin: "Student Login",
    ctaCbt: "Access CBT",
    trust: ["Server-timed, secure CBT", "Instant, accurate results", "Works on any phone"],
    stats: [
      { value: "6", label: "Classes: JSS 1–JSS 3 and SSS 1–SSS 3" },
      { value: "30", label: "Subjects across junior and senior secondary" },
      { value: "24/7", label: "Independent study access" },
      { value: "100%", label: "Server-side marking" },
    ],
    featuresHeading: "Everything a serious student needs",
    featuresIntro: "Designed with teachers and examiners for Nigerian secondary schools — and built to international standards.",
    features: [
      { icon: "BookOpen", title: "Precious PS Study Centre", body: "Structured lessons by department, class, term and topic with examples, videos and progress tracking." },
      { icon: "MonitorCheck", title: "Realistic CBT", body: "A professional exam interface with a server-controlled timer, question palette, flagging and auto-submit." },
      { icon: "Target", title: "BECE · JAMB · WAEC · NECO prep", body: "Randomised mock papers from an approved, original question bank — no two students get the same paper." },
      { icon: "ClipboardCheck", title: "Classwork & assignments", body: "Objective assessments marked instantly, with explanations and targeted revision when you fall short." },
      { icon: "LineChart", title: "Performance analytics", body: "See strengths, weak topics, trends and accuracy by subject so you know exactly what to practise next." },
      { icon: "ShieldCheck", title: "Secure & fair", body: "Encrypted accounts, one-student access codes, activity logs and tamper-resistant results." },
    ],
    journeyHeading: "Your path to exam confidence",
    announcement: { enabled: false, text: "", link: "" },
    whyEyebrow: "Why Precious PS",
    journey: [
      { icon: "UserPlus", title: "Register", body: "Create your student account in minutes." },
      { icon: "KeyRound", title: "Activate your code", body: "Access starts when you activate your code. Get one from the school's Super Admin." },
      { icon: "BookOpen", title: "Study & practise", body: "Lessons, classwork and assignments at your pace." },
      { icon: "MonitorCheck", title: "Sit CBT & improve", body: "Mock exams, instant results and analytics." },
    ],
    levelsHeading: "One academy, every stage from JSS 1 to SSS 3",
    levelsIntro: "Students see exactly the subjects, lessons and examinations for their own class.",
    levels: [
      { title: "Junior Secondary", range: "JSS 1 – JSS 3", body: "Basic Education curriculum with BECE preparation: Mathematics, English, Basic Science, Basic Technology, Social Studies, Civic Education and more.", href: "/subjects" },
      { title: "Senior Secondary", range: "SSS 1 – SSS 3", body: "Science, Commercial and Arts departments with WAEC, NECO and JAMB preparation and full mock CBT examinations.", href: "/subjects" },
    ],
    principal: {
      enabled: true,
      heading: "A message from the Principal",
      name: "The Principal",
      title: "Precious PS Academy",
      message: "At Precious PS Academy we are building brighter minds for a greater tomorrow. This platform lets every student study independently, practise under real examination conditions and see their progress clearly. We invite every student and parent to make full use of it.",
    },
    prepLabel: "Preparation",
    prepCards: [
      { href: "/bece-preparation", title: "BECE (JSS 3)", body: "Basic Education Certificate Examination practice and mock papers for JSS 3." },
      { href: "/jamb-preparation", title: "JAMB (UTME)", body: "CBT-first practice for the Unified Tertiary Matriculation Examination." },
      { href: "/waec-preparation", title: "WAEC (WASSCE)", body: "Topic mastery and objective-paper practice for the WASSCE." },
      { href: "/neco-preparation", title: "NECO (SSCE)", body: "Guided revision and full mock papers for the NECO SSCE." },
    ],
    networkNote: "Built for Nigerian networks: small downloads, continuous autosave and safe recovery if your connection drops mid-exam.",
    faqHeading: "Questions, answered",
    faqIntro: "Everything students and parents ask most often.",
    closingHeading: "Ready to start practising?",
    closingBody: "Create your student account, activate your access code and begin today.",
  },
  about: {
    title: "About Precious PS Academy",
    eyebrow: "Who we are",
    intro:
      "Precious PS Academy is the digital learning and assessment platform of Precious PS Academy — built to help every student learn independently, practise deliberately and perform confidently in examinations.",
    sections: [
      {
        heading: "Our mission",
        body: "To give every secondary school student access to high-quality lessons, fair assessment and honest feedback — anywhere, on any device.",
      },
      {
        heading: "What makes us different",
        body: "Our examination engine is server-controlled: timing, question selection and marking all happen securely on our servers, so results are accurate and trustworthy. Our Study Centre follows a guided path — lesson, classwork, assessment, mastery — so students always know what to do next.",
      },
      {
        heading: "Original, approved content",
        body: "We use original, teacher-authored and properly licensed questions. Every question is reviewed and approved by an academic administrator before it can appear in an examination.",
      },
    ],
    highlights: ["Built for JSS 1–JSS 3 and SSS 1–SSS 3", "Science, Commercial and Arts departments in SS", "Designed for low-bandwidth mobile use"],
    cta: { label: "Create your account", href: "/register" },
  } satisfies PageBlock,
  subjects: {
    title: "Subjects",
    eyebrow: "Curriculum",
    intro: "Junior Secondary (JSS 1–JSS 3) follows the Basic Education curriculum; Senior Secondary (SSS 1–SSS 3) is organised into Science, Commercial and Arts. Every student sees exactly the subjects for their class.",
    sections: [],
    highlights: [],
    cta: { label: "Start learning", href: "/register" },
  } satisfies PageBlock,
  "cbt-practice": {
    title: "CBT Practice",
    eyebrow: "Practise like it's the real thing",
    intro: "Build speed and accuracy with timed practice in an interface that mirrors real computer-based tests.",
    sections: [
      { heading: "Real exam conditions", body: "A sticky timer, numbered question palette, answer flagging and a review screen before you submit — on phone, tablet or laptop." },
      { heading: "Every paper is different", body: "Questions and options are randomised from an approved bank, so practice builds understanding, not memorisation." },
      { heading: "Learn from every attempt", body: "See your score, grade and the correct answers with explanations as soon as results are released." },
    ],
    highlights: ["Server-controlled timer", "Autosave on every answer", "Resumes safely after network loss"],
    cta: { label: "Access CBT", href: "/login?next=/student/exams" },
  } satisfies PageBlock,
  "mock-exams": {
    title: "Mock Examinations",
    eyebrow: "Full-length rehearsals",
    intro: "Sit complete, timed mock papers set by the examination office and see where you stand before the real exam.",
    sections: [
      { heading: "Scheduled and on-demand", body: "Mock exams can open and close at set times, just like school examinations, or be available for independent practice." },
      { heading: "Detailed performance report", body: "Your result slip shows score, percentage, grade, correct, incorrect and unanswered questions, plus time used." },
    ],
    highlights: ["Printable result slips", "Grade A–F reporting", "Topic-by-topic breakdown"],
    cta: { label: "View mock exams", href: "/login?next=/student/mock" },
  } satisfies PageBlock,
  "bece-preparation": {
    title: "BECE Preparation (JSS 3)",
    eyebrow: "Basic Education Certificate Examination",
    intro: "Get JSS 3 students ready for the BECE with guided lessons, practice questions and full BECE-style mock papers.",
    sections: [
      { heading: "Built on the JSS curriculum", body: "Mathematics, English, Basic Science, Basic Technology, Social Studies, Civic Education and more — organised by class and topic from JSS1 to JSS3." },
      { heading: "Mock papers under exam conditions", body: "Timed BECE-style mocks drawn at random from an approved, original question bank, marked instantly with explanations." },
      { heading: "A strong start for SSS 1", body: "Mastery-based lessons close gaps early, so students move into Science, Commercial or Arts with confidence." },
    ],
    highlights: ["JSS 1–JSS 3 coverage", "BECE-style mock papers", "Progress tracking for parents and teachers"],
    cta: { label: "Start BECE practice", href: "/register" },
  } satisfies PageBlock,
  "jamb-preparation": {
    title: "JAMB (UTME) Preparation",
    eyebrow: "Unified Tertiary Matriculation Examination",
    intro: "Prepare for the UTME with timed CBT practice across Use of English, Mathematics and your chosen subjects.",
    sections: [
      { heading: "CBT-first preparation", body: "The UTME is computer-based. Our interface trains you to manage time, navigate questions and review efficiently." },
      { heading: "Syllabus-aligned practice", body: "Original questions organised by topic so you can target weak areas before exam day." },
    ],
    highlights: ["Timed subject combinations", "Topic analytics", "Explanations for every answer"],
    cta: { label: "Start JAMB practice", href: "/register" },
  } satisfies PageBlock,
  "waec-preparation": {
    title: "WAEC (WASSCE) Preparation",
    eyebrow: "West African Senior School Certificate Examination",
    intro: "Strengthen your objective-paper performance with structured revision and realistic practice for the WASSCE.",
    sections: [
      { heading: "Topic-by-topic mastery", body: "Work through the curriculum in the Study Centre, then test yourself with classwork and mock papers." },
      { heading: "Know your grade", body: "Results use a clear grading scale so you can track your progress towards credit passes." },
    ],
    highlights: ["SSS 1–SSS 3 coverage", "Science, Commercial and Arts", "Progress tracking"],
    cta: { label: "Start WAEC practice", href: "/register" },
  } satisfies PageBlock,
  "neco-preparation": {
    title: "NECO (SSCE) Preparation",
    eyebrow: "National Examinations Council",
    intro: "Prepare for the NECO SSCE with guided lessons, practice questions and full mock examinations.",
    sections: [
      { heading: "Consistent practice", body: "Short daily practice sessions and assignments keep your knowledge fresh across every subject." },
      { heading: "Focused revision", body: "Analytics highlight your weakest topics and recommend what to practise next." },
    ],
    highlights: ["Daily practice", "Weak-topic recommendations", "Mock examinations"],
    cta: { label: "Start NECO practice", href: "/register" },
  } satisfies PageBlock,
  "study-centre": {
    title: "Precious PS Study Centre",
    eyebrow: "Learn independently",
    intro: "Every active access code unlocks the complete Study Centre — study at your own pace, any time, without waiting for a teacher to be online.",
    sections: [
      { heading: "A guided learning path", body: "Lesson → study material → classwork → objective assessment → next lesson. Reach the mastery score to move on; if not, retry with targeted revision." },
      { heading: "Rich materials", body: "Notes with worked examples, clear mathematics, videos, audio, documents and curated external resources." },
      { heading: "See your progress", body: "Track completed lessons, classwork scores and topic mastery across every subject." },
    ],
    highlights: ["Department → Class → Term → Subject → Topic", "Auto-marked classwork", "Mastery-based progression"],
    cta: { label: "Open the Study Centre", href: "/login?next=/student/study" },
  } satisfies PageBlock,
  "how-it-works": {
    title: "How it works",
    eyebrow: "Four simple steps",
    intro: "Getting started with Precious PS Academy takes only a few minutes.",
    sections: [
      { heading: "1. Register", body: "Create your student account with your class (JSS 1–SSS 3) and, for SS students, your department. Choose a strong password — at least 10 characters with letters, numbers and a symbol." },
      { heading: "2. Get your access code", body: "Need an Access Code? To get an access code, reach the Super Admin to get your code (08169267383)." },
      { heading: "3. Activate", body: "Enter your code on your dashboard. Your access period starts the moment you activate it, not before." },
      { heading: "4. Learn, practise, test, improve", body: "Study lessons, complete classwork, sit mock CBT examinations and track your improvement." },
    ],
    highlights: [],
    cta: { label: "Register now", href: "/register" },
  } satisfies PageBlock,
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "How do I get an access code?", a: "Need an Access Code? To get an access code, reach the Super Admin to get your code (08169267383)." },
      { q: "When does my access start?", a: "Your access period begins the moment you first activate your code — not when the code was created. Your dashboard shows the exact expiry date and a live countdown." },
      { q: "Can I share my access code?", a: "No. Each code becomes linked to one student account when it is activated and cannot be used on another account." },
      { q: "What happens if my network drops during an exam?", a: "Your answers are saved continuously. Reconnect and reopen the exam — you continue where you stopped. The timer is kept by our server, so it keeps running while you are away." },
      { q: "Will I get the same questions as my classmates?", a: "Usually not. Questions and options are randomly selected and ordered from an approved bank for each student." },
      { q: "Can I use my phone?", a: "Yes. The platform is designed mobile-first and works on Android phones, iPhones, tablets and computers, even on slower connections." },
      { q: "What happens when my access expires?", a: "You can no longer start exams or open protected Study Centre content, but your past results remain available. Contact the Super Admin for a new code." },
      { q: "I forgot my password. What should I do?", a: "Use 'Forgot password' on the login page. If you still cannot sign in, contact the Super Admin — for your security, administrators can reset your password but can never see it." },
    ],
  },
  contact: {
    title: "Contact us",
    intro: "We're here to help students, parents and schools.",
    phone: "08169267383",
    email: "",
    address: "Precious PS Academy, Nigeria",
    hours: "Monday – Friday, 8:00am – 5:00pm (WAT)",
    accessNote: "Need an Access Code? To get an access code, reach the Super Admin to get your code (08169267383).",
  },
  privacy: {
    title: "Privacy Policy",
    updated: "2026-09-30",
    body: `Precious PS Academy ("we") is operated for Precious PS Academy. This policy explains what we collect and how we protect it.

## What we collect
- Account details you provide at registration: name, email, phone number, student ID, class, department, school, state and country, and optionally date of birth and gender.
- Learning and assessment records: lessons opened, classwork and assignment submissions, examination attempts, answers, scores and results.
- Security records: sign-in times, IP address, device/browser type, and security events such as failed sign-ins.

## How we use it
- To provide lessons, examinations, results and progress analytics.
- To protect accounts and examinations (for example, detecting suspicious activity).
- To send notifications you have not switched off, such as results and access reminders.

## What we never do
- We never store your password in readable form — only a secure one-way hash. Nobody, including administrators, can see your password.
- We do not sell your data or show your information to other students.

## Who can see your data
Authorised school administrators can see your account information, results and learning progress for academic and support purposes. All administrative actions are logged.

## Retention
Results and academic records are retained to keep historical results auditable. You may request correction of inaccurate information, or ask about deletion where the law permits, by contacting the school.

## Contact
Questions about privacy? Contact Precious PS Academy on 08169267383.`,
  },
  terms: {
    title: "Terms and Conditions",
    updated: "2026-09-30",
    body: `By creating an account on Precious PS Academy you agree to these terms.

## Your account
- Provide accurate information and keep your password private.
- Access codes are personal: once activated, a code belongs to your account and must not be shared or resold.

## Examinations and conduct
- Examinations must be taken by the account holder without unauthorised help.
- The platform records browser activity such as leaving the exam window. Attempts may be reviewed and, where malpractice is confirmed, voided by the examination office.
- Timing and marking are determined by our servers and are final, subject to review by the school.

## Content
- Lessons, questions and materials are provided for personal study and may not be copied or redistributed.
- We use original, teacher-authored or properly licensed content.

## Access periods
- Your access begins when you first activate a code and lasts for the period assigned to it. The school may extend, suspend or end access with a recorded reason.

## Changes
We may update these terms. Continued use means you accept the updated terms.`,
  },
  footer: {
    about: "The digital learning and assessment platform of Precious PS Academy.",
    learnTitle: "Learn",
    prepareTitle: "Prepare",
    contactTitle: "Contact",
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms and Conditions", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
    backendLabel: "Backend access",
  },
  navigation: {
    primary: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Subjects", href: "/subjects" },
      { label: "Study Centre", href: "/study-centre" },
      { label: "CBT Practice", href: "/cbt-practice" },
      { label: "Mock Exams", href: "/mock-exams" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    prepare: [
      { label: "BECE Preparation", href: "/bece-preparation" },
      { label: "JAMB Preparation", href: "/jamb-preparation" },
      { label: "WAEC Preparation", href: "/waec-preparation" },
      { label: "NECO Preparation", href: "/neco-preparation" },
    ],
    footerLearn: [
      { label: "Study Centre", href: "/study-centre" },
      { label: "Subjects", href: "/subjects" },
      { label: "CBT Practice", href: "/cbt-practice" },
      { label: "Mock Exams", href: "/mock-exams" },
    ],
    footerPrepare: [
      { label: "BECE Preparation", href: "/bece-preparation" },
      { label: "JAMB Preparation", href: "/jamb-preparation" },
      { label: "WAEC Preparation", href: "/waec-preparation" },
      { label: "NECO Preparation", href: "/neco-preparation" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "FAQ", href: "/faq" },
    ],
    loginLabel: "Student Login",
    registerLabel: "Student Registration",
  },
} as const;

export type ContentKey = keyof typeof CONTENT_DEFAULTS;
export const PAGE_KEYS = ["about", "subjects", "cbt-practice", "mock-exams", "bece-preparation", "jamb-preparation", "waec-preparation", "neco-preparation", "study-centre", "how-it-works"] as const;
