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
    featuresIntro: "Designed with teachers and examiners for Nigerian primary and secondary schools — and built to international standards.",
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
    newsHeading: "News & events",
    newsIntro: "What is happening at Precious PS Academy.",
    news: [
      { date: "New term", title: "Registration is open for JSS 1 – SSS 3", body: "Create your student account, get your access code from the school and start learning on any phone." },
      { date: "Mock season", title: "BECE, WAEC, NECO and JAMB mock CBT papers", body: "Sit full timed practice papers under real examination conditions and see your result instantly." },
      { date: "Study Centre", title: "New guided lessons added every week", body: "Lessons, classwork and assignments for every class, organised by term and topic." },
    ],
    announcements: {
      enabled: true,
      secondsPerItem: 6,
      items: [
        { tag: "New", text: "Registration is open for JSS 1 to SSS 3. Create your student account and start learning today.", linkLabel: "Register", link: "/register" },
        { tag: "Parents", text: "Parents and guardians can now follow their children's lessons and results.", linkLabel: "Create a parent account", link: "/register/parent" },
        { tag: "Premium", text: "International practice in the style of IELTS, TOEFL, SAT and checkpoint tests for Premium students.", linkLabel: "", link: "" },
        { tag: "Learn", text: "Picture Dictionary, idioms, phrasal verbs and learning games are now in Study Materials.", linkLabel: "Sign in", link: "/login" },
      ],
    },
    carousel: {
      enabled: true,
      secondsPerSlide: 6,
      slides: [
        { title: "JAMB questions, subject by subject", text: "Sit 50 JAMB (UTME) questions in each subject under exam conditions and see your score at once.", linkLabel: "Start practising", link: "/login?next=/student/jamb" },
        { title: "Lessons for every class, JSS 1 to SSS 3", text: "Study the scheme of work topic by topic, then test yourself with auto-marked classwork.", linkLabel: "See the subjects", link: "/subjects" },
        { title: "New here?", text: "Create your student account, activate your access code and begin today.", linkLabel: "Register", link: "/register" },
      ],
    },
    founder: {
      enabled: false,
      eyebrow: "From the Proprietor",
      heading: "Building brighter minds for a greater tomorrow",
      name: "",
      role: "Proprietor, Precious PS Academy",
      message: "Write a short welcome from the proprietor or principal here. Add a portrait in Admin → Homepage & content → Homepage → Founder → Photo Asset Id (upload the picture in Branding first).",
      highlights: [],
      photoAssetId: "",
      ctaLabel: "About us",
      ctaLink: "/about",
    },
    appearance: { darkGlowStyle: true, animations: true },
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
      { heading: "Built on the JSS curriculum", body: "Mathematics, English, Basic Science, Basic Technology, Social Studies, Civic Education and more — organised by class and topic from JSS 1 to JSS 3." },
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
      { heading: "1. Register", body: "Create your student account with your class (JSS 1 to SSS 3) and, for SS students, your department. A school can also register a whole class at once. Choose a strong password — at least 10 characters with letters, numbers and a symbol." },
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
      { q: "Do parents need an access code?", a: "Yes. The parent portal opens with a parent access code from the school. It is different from a student access code, and one code belongs to one parent account. Parents who registered before codes were introduced have a free period, shown on their Parent access page." },
      { q: "My code was entered on the wrong account. What can I do?", a: "Contact the Super Admin with both Student IDs. The school can move a running code to the right student; the remaining days move with it." },
      { q: "I think my result is wrong. Can I appeal?", a: "Yes. Open the result and choose 'Appeal this result' within 7 days of its release. Say which questions you mean and why. The examination office replies on the same page." },
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
  "primary-school": {
    title: "Primary School (Basic 1 to 6)",
    eyebrow: "For younger learners",
    intro: "Lessons, classwork and tests written for Basic 1 to Basic 6 pupils, with pictures and diagrams, short notes and plenty of practice.",
    sections: [
      { heading: "Every subject, every term", body: "Mathematics, English Studies, Basic Science and Technology, Social and Citizenship Studies, Physical and Health Education, Religious Studies, History, Cultural and Creative Arts, French, Arabic, Yoruba, Igbo and Hausa, with Digital Literacy and Pre-vocational Studies from Basic 4. Each class has twelve topics, four for each term." },
      { heading: "Simple notes, then practice", body: "Each topic has a short lesson note, worked examples and questions with an explanation for every answer, so a pupil learns from each mistake." },
      { heading: "Ready for Common Entrance", body: "Basic 5 and Basic 6 pupils practise timed tests on a computer or phone, the way entrance examinations are now written." },
      { heading: "Parents can follow along", body: "A parent or guardian can link to a child's account and see lessons completed, test results and a study timetable." },
    ],
    highlights: ["Basic 1 to Basic 6", "Pictures and diagrams", "Works on a phone", "Common Entrance practice"],
    cta: { label: "Register a pupil", href: "/register" },
  } satisfies PageBlock,
  "for-parents": {
    title: "For parents and guardians",
    eyebrow: "Follow your child's learning",
    intro: "The parent portal shows you what your child is studying, how they are scoring and where they need help, without asking them for their password.",
    sections: [
      { heading: "1. Create a parent account", body: "Register as a parent or guardian with your own e-mail and password. A parent account is separate from a student account." },
      { heading: "2. Enter your parent access code", body: "The parent portal opens with a parent access code from the school. One code belongs to one parent account. A student access code does not work on a parent account." },
      { heading: "3. Link your child", body: "Send a link request with your child's Student ID. Your child sees the request after signing in and accepts it. Nothing about a student is shown until the link is confirmed." },
      { heading: "What you can see", body: "Lessons completed, test and examination results the school has released, the date your child last signed in, and whether their access is active. You can also set a study timetable and reminders for your child." },
      { heading: "Learning for parents", body: "Short articles on parenting, child development and study support, parent quizzes and a moderated parent community." },
    ],
    highlights: ["Separate, private parent account", "Your child must accept the link", "Results and study progress", "Study timetable"],
    cta: { label: "Create a parent account", href: "/register/parent" },
  } satisfies PageBlock,
  "get-access": {
    title: "How to get an access code",
    eyebrow: "Access codes",
    intro: "Need an Access Code? To get an access code, reach the Super Admin to get your code (08169267383).",
    sections: [
      { heading: "What a code opens", body: "A student access code opens computer-based tests, the Study Centre, practice, assignments and performance reports for the number of days on the code. A parent access code opens the parent portal." },
      { heading: "When the days start", body: "Your access period starts at the moment you enter the code on your own account, not on the day the code was created. Your dashboard shows the exact end date and a countdown." },
      { heading: "One code, one account", body: "A code is tied to the account that activates it and cannot be used again on another account. Do not share your code before you have used it." },
      { heading: "If something goes wrong", body: "If a code is refused, check that you typed it exactly as given, including the dashes. If it was entered on the wrong account, the school can move it to the right one. Contact the Super Admin with your name and Student ID." },
      { heading: "When your access ends", body: "You can still sign in and see your past results. To continue with tests and lessons, get a new code and enter it on your dashboard." },
    ],
    highlights: ["Students: enter the code on your dashboard", "Parents: enter the code on the Parent access page", "Keep your code private"],
    cta: { label: "Sign in to enter a code", href: "/login" },
  } satisfies PageBlock,
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
    whatsapp: "2348169267383",
    whatsappLabel: "Chat with us",
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
      { label: "For Parents", href: "/for-parents" },
      { label: "Get an Access Code", href: "/get-access" },
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
      { label: "For Parents", href: "/for-parents" },
      { label: "Get an Access Code", href: "/get-access" },
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
export const PAGE_KEYS = ["about", "subjects", "cbt-practice", "mock-exams", "bece-preparation", "jamb-preparation", "waec-preparation", "neco-preparation", "study-centre", "how-it-works", "primary-school", "for-parents", "get-access"] as const;
