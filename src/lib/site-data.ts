// Single source for site content. Replace placeholder values (wrapped in [ ]) and
// temporary stock photos here once the institute supplies real material.
import hero from "@/assets/photos/hero.jpg";
import classroom from "@/assets/photos/classroom.jpg";
import campus from "@/assets/photos/campus.jpg";
import language from "@/assets/photos/language.jpg";
import lesson from "@/assets/photos/lesson.jpg";
import study from "@/assets/photos/study.jpg";
import business from "@/assets/photos/business.jpg";
import galleryOne from "@/assets/photos/gallery-one.jpg";
import galleryTwo from "@/assets/photos/gallery-two.jpg";
import galleryThree from "@/assets/photos/gallery-three.jpg";

/** Temporary stock photos. Swap each import above for a real photo later. */
export const photos = {
  hero,
  classroom,
  campus,
  language,
  lesson,
  study,
  business,
  galleryOne,
  galleryTwo,
  galleryThree,
};

export const siteName = "The Howard's Council";
export const phone = "+919997756675";
export const phoneLabel = "099977 56675";
export const address = {
  line1: "618, Shiv Mandir Lane, Begum Bagh",
  line2: "Meerut, Uttar Pradesh 250001",
};
export const mapsQuery = "The Howard's Council, 618 Shiv Mandir Lane, Begum Bagh, Meerut 250001";
export const whatsapp = (message: string) =>
  `https://wa.me/919997756675?text=${encodeURIComponent(message)}`;

/** Facts supplied by the institute. */
export const trust = [
  { value: "23", label: "Years in Meerut" },
  { value: "4.6★", label: "Google rating" },
  { value: "388", label: "Google reviews" },
  { value: "IDP", label: "Certified Training Partner" },
];

type Faq = { q: string; a: string };
type TestInfo = { format: string; sections: string[]; speaking: string; focus: string[] };
export type Course = {
  slug: string;
  name: string;
  category: "Test preparation" | "Languages & skills";
  tagline: string;
  image: string;
  overview: string;
  audience: string;
  covered: string[];
  approach: string;
  outcomes: string[];
  test?: TestInfo;
  faqs: Faq[];
};

const testWorkflow = [
  "Initial assessment of your current level",
  "Section-by-section skill building",
  "Timed practice under test conditions",
  "Feedback and targeted revision",
];
const languageWorkflow = [
  "Level check and goal setting",
  "Foundations: sounds, vocabulary, structure",
  "Guided speaking and listening practice",
  "Regular review and progress checks",
];
export const workflowFor = (c: Course) => (c.test ? testWorkflow : languageWorkflow);

export const courses: Course[] = [
  {
    slug: "ielts",
    name: "IELTS",
    category: "Test preparation",
    tagline: "Academic and General Training preparation.",
    image: photos.study,
    overview:
      "IELTS (International English Language Testing System) measures English across four skills. We prepare learners for both the Academic and General Training versions with structured lessons, timed practice and feedback on writing and speaking.",
    audience:
      "Students applying to universities that ask for IELTS, and applicants who need General Training for work or migration purposes.",
    covered: [
      "Listening: question types and note-taking",
      "Reading: skimming, scanning and time control",
      "Writing Task 1 and Task 2 structure",
      "Speaking: fluency, vocabulary and pronunciation",
      "Full-length timed practice tests",
    ],
    approach:
      "Each skill is taught separately first, then combined in timed practice. Writing and speaking work is reviewed so you know exactly what to improve before test day.",
    outcomes: [
      "Clear understanding of every section and task type",
      "A time plan for reading and writing",
      "More confident, organised speaking answers",
      "A realistic view of your current level",
    ],
    test: {
      format: "Paper or computer-based; speaking is a face-to-face conversation with an examiner.",
      sections: ["Listening", "Reading", "Writing", "Speaking"],
      speaking: "Live interview with an examiner",
      focus: ["Task response in writing", "Natural, extended speaking", "Reading speed"],
    },
    faqs: [
      { q: "Academic or General Training: which do I need?", a: "It depends on why you are taking the test. Universities usually ask for Academic; many work and migration routes ask for General Training. Always check the requirement of the institution or authority you are applying to, and talk to us if you are unsure." },
      { q: "Do you help with booking the official test?", a: "Contact us and we will explain how the booking process works." },
    ],
  },
  {
    slug: "pte",
    name: "PTE",
    category: "Test preparation",
    tagline: "Preparation for the computer-based PTE Academic.",
    image: photos.lesson,
    overview:
      "PTE Academic is a computer-based English test in which speaking and writing are completed on screen. Preparation focuses on the task formats, timing and clear, fluent delivery into a microphone.",
    audience: "Learners who prefer a fully computer-based test and whose target institution accepts PTE.",
    covered: [
      "Speaking: read aloud, repeat sentence, describe image",
      "Writing: summarise text and essay",
      "Reading: fill in the blanks and re-order paragraphs",
      "Listening: summarise spoken text and dictation",
      "Computer-based practice tests",
    ],
    approach:
      "We work through each task type with strategies for timing and delivery, then practise on screen so the real test format feels familiar.",
    outcomes: [
      "Familiarity with every PTE task type",
      "Steady pace and clear pronunciation",
      "Templates and strategies used with judgement",
      "Comfort with the on-screen format",
    ],
    test: {
      format: "Fully computer-based at a test centre.",
      sections: ["Speaking & Writing", "Reading", "Listening"],
      speaking: "Recorded into a microphone",
      focus: ["Fluency and pronunciation", "Time management", "Integrated tasks"],
    },
    faqs: [
      { q: "Is PTE easier than IELTS?", a: "Neither test is easier for everyone. Some learners prefer PTE's computer format; others prefer speaking to a person in IELTS. We can help you compare them based on your strengths." },
    ],
  },
  {
    slug: "toefl",
    name: "TOEFL",
    category: "Test preparation",
    tagline: "Academic English for the TOEFL iBT.",
    image: photos.campus,
    overview:
      "The TOEFL iBT assesses academic English through reading, listening, speaking and writing, including integrated tasks that combine skills. Preparation builds academic vocabulary, note-taking and structured responses.",
    audience: "Students applying to universities and programmes that accept or prefer TOEFL.",
    covered: [
      "Academic reading passages",
      "Lecture listening and note-taking",
      "Integrated and independent speaking",
      "Integrated and academic writing",
      "Timed practice sets",
    ],
    approach:
      "Lessons centre on academic material and the integrated task style, with timed practice and review of spoken and written responses.",
    outcomes: [
      "Confident note-taking from lectures and readings",
      "Well-organised spoken responses",
      "Stronger academic vocabulary",
      "Familiarity with the test format",
    ],
    test: {
      format: "Computer-based, at a test centre or at home where available.",
      sections: ["Reading", "Listening", "Speaking", "Writing"],
      speaking: "Recorded into a microphone",
      focus: ["Integrated tasks", "Academic vocabulary", "Note-taking"],
    },
    faqs: [
      { q: "Which universities accept TOEFL?", a: "Acceptance varies by institution and programme. Check the official requirements of each university you apply to." },
    ],
  },
  {
    slug: "celpip",
    name: "CELPIP",
    category: "Test preparation",
    tagline: "Everyday English for the CELPIP General test.",
    image: photos.hero,
    overview:
      "CELPIP General is a computer-based test of everyday English used mainly for Canadian immigration and citizenship applications. Preparation focuses on practical communication in each test component.",
    audience: "Applicants whose Canadian application accepts or requires CELPIP General.",
    covered: [
      "Listening to everyday conversations",
      "Reading correspondence and diagrams",
      "Writing emails and survey responses",
      "Speaking prompts on everyday situations",
      "Timed practice tests",
    ],
    approach:
      "We practise each component with realistic everyday scenarios and review your writing and recorded speaking responses.",
    outcomes: [
      "Familiarity with all four components",
      "Clear, practical written replies",
      "Organised spoken responses under time limits",
      "A plan for test day",
    ],
    test: {
      format: "Computer-based, completed in one sitting.",
      sections: ["Listening", "Reading", "Writing", "Speaking"],
      speaking: "Recorded on the computer",
      focus: ["Everyday vocabulary", "Practical writing", "Timed speaking"],
    },
    faqs: [
      { q: "Is CELPIP accepted outside Canada?", a: "CELPIP is designed mainly for Canadian purposes. Check the requirements of the authority you are applying to." },
    ],
  },
  {
    slug: "spoken-english",
    name: "Spoken English",
    category: "Languages & skills",
    tagline: "Speak clearly and confidently every day.",
    image: photos.language,
    overview:
      "A practical speaking course for learners who understand some English but hesitate to use it. Classes are built around guided conversation, useful vocabulary and pronunciation.",
    audience: "School and college students, job seekers, homemakers and professionals who want to speak more naturally.",
    covered: ["Conversation practice", "Pronunciation and fluency", "Everyday vocabulary and phrases", "Grammar for speaking", "Listening comprehension"],
    approach:
      "Most class time is spent speaking. New language is introduced in context, practised in pairs and groups, and corrected gently.",
    outcomes: ["Less hesitation when speaking", "Clearer pronunciation", "A wider working vocabulary", "Confidence in daily conversations"],
    faqs: [{ q: "I am a complete beginner. Can I join?", a: "Yes. We check your level first and suggest the right starting point." }],
  },
  {
    slug: "business-english",
    name: "Business English",
    category: "Languages & skills",
    tagline: "Professional English for work and interviews.",
    image: photos.business,
    overview:
      "Focused on the English used at work: meetings, presentations, emails, phone calls and interviews.",
    audience: "Professionals and job seekers who use, or will use, English at work.",
    covered: ["Meetings and discussions", "Presentations", "Emails and workplace writing", "Interview preparation", "Professional telephone English"],
    approach: "Lessons use realistic workplace situations, role plays and writing tasks with feedback.",
    outcomes: ["Clearer, more professional emails", "Confidence in meetings and interviews", "Structured presentations", "Polite, effective phrasing"],
    faqs: [{ q: "Is this suitable for freshers?", a: "Yes. It is useful for anyone preparing for interviews or starting work." }],
  },
  {
    slug: "german",
    name: "German",
    category: "Languages & skills",
    tagline: "Start speaking German from the first class.",
    image: photos.galleryOne,
    overview: "A structured introduction to German covering pronunciation, grammar foundations, vocabulary and everyday conversation.",
    audience: "Beginners learning German for study, work, travel or interest.",
    covered: ["Pronunciation and the alphabet", "Grammar foundations", "Everyday vocabulary", "Listening and reading", "Simple conversations"],
    approach: "Step-by-step lessons with plenty of speaking practice and regular revision.",
    outcomes: ["Introduce yourself and hold simple conversations", "Read and understand short texts", "A solid grammar base", "Readiness for the next level"],
    faqs: [{ q: "Do you prepare for official German exams?", a: "Contact us to discuss your goal and the levels currently offered." }],
  },
  {
    slug: "spanish",
    name: "Spanish",
    category: "Languages & skills",
    tagline: "Practical Spanish for real conversations.",
    image: photos.galleryTwo,
    overview: "Learn Spanish through conversation-focused lessons that build vocabulary, grammar and listening skills.",
    audience: "Beginners and anyone interested in Spanish for travel, study or personal growth.",
    covered: ["Pronunciation and conversation", "Everyday vocabulary", "Grammar foundations", "Listening and reading"],
    approach: "Short explanations followed by lots of guided practice in pairs and groups.",
    outcomes: ["Handle everyday situations", "Understand simple spoken Spanish", "Build sentences confidently", "Readiness for the next level"],
    faqs: [{ q: "Do I need any prior knowledge?", a: "No. Beginner classes start from the basics." }],
  },
  {
    slug: "personality-development",
    name: "Personality Development",
    category: "Languages & skills",
    tagline: "Communication, confidence and presence.",
    image: photos.galleryThree,
    overview: "Develop the way you communicate and present yourself, from public speaking and body language to interviews and group discussions.",
    audience: "Students, job seekers and professionals who want to communicate with more confidence.",
    covered: ["Public speaking", "Body language", "Interview skills", "Group discussion", "Everyday communication"],
    approach: "Practical activities, presentations and role plays with constructive feedback.",
    outcomes: ["Confidence speaking in front of others", "Stronger interview performance", "Better self-presentation", "Clearer communication"],
    faqs: [{ q: "Is this only for students?", a: "No. It suits anyone who wants to communicate more confidently." }],
  },
];

export const commonCourseFaqs: Faq[] = [
  { q: "Can I attend a free demo class?", a: "Yes. Contact us on WhatsApp or by phone to book a free demo class." },
  { q: "What are the batch timings?", a: "Batch timings change through the year. See the Batches page or contact us for current options." },
  { q: "How do I find out the fees?", a: "Please contact us for the current fee for this course." },
];

/** Comparison of major English tests. General descriptions only. */
export const testComparison = [
  { name: "IELTS", slug: "ielts", format: "Paper or computer", speaking: "Face-to-face with an examiner", skills: "Listening, Reading, Writing, Speaking", suits: "Learners who prefer speaking to a person", reason: "Widely requested for study, work and migration" },
  { name: "PTE", slug: "pte", format: "Fully computer-based", speaking: "Recorded into a microphone", skills: "Speaking & Writing, Reading, Listening", suits: "Learners comfortable with a computer format", reason: "Accepted by many institutions; fully on screen" },
  { name: "TOEFL", slug: "toefl", format: "Computer-based", speaking: "Recorded into a microphone", skills: "Reading, Listening, Speaking, Writing", suits: "Learners aiming at academic programmes", reason: "Academic focus with integrated tasks" },
  { name: "CELPIP", slug: "celpip", format: "Computer-based", speaking: "Recorded on the computer", skills: "Listening, Reading, Writing, Speaking", suits: "Applicants with Canadian goals", reason: "Designed mainly for Canadian applications" },
];

export const roadmap = [
  ["Assess", "Understand your current level and goals."],
  ["Plan", "Choose the right course and preparation strategy."],
  ["Practise", "Build skills through guided classroom practice."],
  ["Review", "Get feedback and identify weak areas."],
  ["Prepare", "Refine performance with targeted practice."],
  ["Progress", "Track improvement towards your goal."],
] as const;

/** Batch schedule. Replace "To be confirmed" values with real details. */
const TBC = "To be confirmed";
export const batches = courses.map((c) => ({
  course: c.name,
  slug: c.slug,
  type: TBC,
  days: TBC,
  timing: TBC,
  duration: TBC,
  mode: TBC,
  availability: "Enquire",
}));

/** Student results. Every entry is a SAMPLE until replaced with a verified result. */
export const results = [
  { student: "[Add student name]", test: "IELTS", score: "[Add verified score]", date: "[Add date]", note: "[Optional short achievement note]", sample: true },
  { student: "[Add student name]", test: "PTE", score: "[Add verified score]", date: "[Add date]", note: "[Optional short achievement note]", sample: true },
  { student: "[Add student name]", test: "TOEFL", score: "[Add verified score]", date: "[Add date]", note: "[Optional short achievement note]", sample: true },
  { student: "[Add student name]", test: "CELPIP", score: "[Add verified score]", date: "[Add date]", note: "[Optional short achievement note]", sample: true },
];

export const testimonials = [
  { quote: "[Add genuine testimonial]", name: "[Student or parent name]", detail: "[Course]", sample: true },
  { quote: "[Add genuine testimonial]", name: "[Student or parent name]", detail: "[Course]", sample: true },
  { quote: "[Add genuine testimonial]", name: "[Student or parent name]", detail: "[Course]", sample: true },
];

/** Mentor profile. Fill in once the institute provides details. */
export const mentor = {
  name: "[Add mentor name]",
  role: "[Add role, e.g. Founder and lead instructor]",
  photo: null as string | null,
  bio: "[Add mentor biography: background, teaching experience and approach.]",
  qualifications: ["[Add verified qualification]", "[Add verified qualification]"],
};

export type GalleryCategory = "Classroom" | "Teaching" | "Activities" | "Certificates" | "Events" | "Institute";
/** Temporary stock images. Replace src/alt/caption with real photos and set the right category. */
export const gallery: { src: string; alt: string; category: GalleryCategory; caption: string }[] = [
  { src: photos.classroom, alt: "Classroom with learners", category: "Classroom", caption: "[Add caption]" },
  { src: photos.lesson, alt: "Teacher explaining at a whiteboard", category: "Teaching", caption: "[Add caption]" },
  { src: photos.study, alt: "Learner studying with notes", category: "Classroom", caption: "[Add caption]" },
  { src: photos.language, alt: "Group conversation practice", category: "Activities", caption: "[Add caption]" },
  { src: photos.galleryOne, alt: "Books and study material", category: "Institute", caption: "[Add caption]" },
  { src: photos.galleryTwo, alt: "Learners working together", category: "Activities", caption: "[Add caption]" },
  { src: photos.galleryThree, alt: "Presentation practice", category: "Events", caption: "[Add caption]" },
  { src: photos.business, alt: "Professional communication practice", category: "Teaching", caption: "[Add caption]" },
  { src: photos.campus, alt: "Study space", category: "Institute", caption: "[Add caption]" },
];

export const generalFaqs: Faq[] = [
  { q: "Which course should I choose?", a: "It depends on your goal: a test score, everyday speaking, workplace English or a new language. Contact us and we will help you choose after a short conversation about your needs." },
  { q: "How do I know which English test suits me?", a: "Start with the requirement of the university, employer or authority you are applying to. If more than one test is accepted, compare the formats above and talk to us about your strengths." },
  { q: "Are classes online or offline?", a: "Please contact us to confirm the current class modes for your course." },
  { q: "How can I check batch timings?", a: "See the Batches page, or message us on WhatsApp for the latest timings and availability." },
  { q: "How can I enquire about fees?", a: "Call or WhatsApp us and we will share the current fee for your course." },
  { q: "How does the learning process work?", a: "We begin by understanding your level and goal, then plan your course, practise in class, review your work and refine weak areas." },
  { q: "Do you provide practice and feedback?", a: "Yes. Practice and feedback are part of every course. Contact us for details about practice tests for your course." },
  { q: "How can I contact the institute?", a: `Call ${phoneLabel}, message us on WhatsApp, or visit us at ${address.line1}, ${address.line2}.` },
];
