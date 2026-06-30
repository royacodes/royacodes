import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import portfolio5 from "../assets/portfolio5.png";
import portfolio8 from "../assets/portfolio8.png";

import artcl1 from "../assets/articles/artcl1.jpg";
import artcl2 from "../assets/articles/artcl2.png";
import artcl3 from "../assets/articles/artcl3.png";
import artcl4 from "../assets/articles/artcl4.png";
import artcl5 from "../assets/articles/artcl5.png";
import artcl6 from "../assets/articles/artcl6.png";
import artcl7 from "../assets/articles/artcl7.png";


import articleDesignSystemsEn from "../content/writings/articles/artcl1.en.md?raw";
import articleDesignSystemsFa from "../content/writings/articles/artcl1.fa.md?raw";
import articleStateOfFrontendEn from "../content/writings/articles/artcl2.en.md?raw";
import articleStateOfFrontendFa from "../content/writings/articles/artcl2.fa.md?raw";
import articlePerformanceCaseStudyEn from "../content/writings/articles/artcl3.en.md?raw";
import articlePerformanceCaseStudyFa from "../content/writings/articles/artcl3.fa.md?raw";
import articleOptimizationChangedTheGameEn from "../content/writings/articles/artcl4.en.md?raw";
import articleOptimizationChangedTheGameFa from "../content/writings/articles/artcl4.fa.md?raw";
import articleInternetOutageSurvivalEn from "../content/writings/articles/artcl5.en.md?raw";
import articleInternetOutageSurvivalFa from "../content/writings/articles/artcl5.fa.md?raw";
import articleGitNexusVibeCodingEn from "../content/writings/articles/artcl6.en.md?raw";
import articleGitNexusVibeCodingFa from "../content/writings/articles/artcl6.fa.md?raw";

import tutorialTailwindDesignSystemEn from "../content/writings/tutorials/tailwind-design-system.en.md?raw";
import tutorialTailwindDesignSystemFa from "../content/writings/tutorials/tailwind-design-system.fa.md?raw";
import tutorialFramerMotionMasteryEn from "../content/writings/tutorials/framer-motion-mastery.en.md?raw";
import tutorialFramerMotionMasteryFa from "../content/writings/tutorials/framer-motion-mastery.fa.md?raw";
import tutorialReactCICDDeployEn from "../content/writings/tutorials/react-cicd-deploy.en.md?raw";
import tutorialReactCICDDeployFa from "../content/writings/tutorials/react-cicd-deploy.fa.md?raw";

// ─────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: { en: "Home", fa: "خانه" }, href: "#" },
  { label: { en: "Work", fa: "نمونه\u200cکارها" }, href: "#work" },
  { label: { en: "Services", fa: "خدمات" }, href: "#services" },
  { label: { en: "Writings", fa: "نوشته\u200cها" }, href: "#writings" },
  { label: { en: "About", fa: "درباره" }, href: "#about" },
];

// ─────────────────────────────────────────────
// UI Copy (Section headings, labels)
// ─────────────────────────────────────────────
export const SECTIONS = {
  header: {
    cta: { en: "Start a Project", fa: "شروع پروژه" },
    toggleAriaLabel: { en: "Toggle language", fa: "تغییر زبان" },
    menuAriaLabel: { en: "Toggle menu", fa: "باز و بسته کردن منو" },
    mobileToggle: { en: "English", fa: "فارسی" },
  },
  hero: {
    scroll: { en: "Scroll", fa: "اسکرول" },
    portraitAlt: { en: "Portrait", fa: "تصویر" },
  },
  services: {
    kicker: { en: "What I Do", fa: "چه کار می\u200cکنم" },
    title: { en: "Services & Expertise", fa: "خدمات و تخصص\u200cها" },
    description: {
      en: "End-to-end digital solutions tailored to your goals. From concept to launch, I've got you covered.",
      fa: "راهکارهای دیجیتال از صفر تا صد، متناسب با هدف شما. از ایده تا انتشار کنار شما هستم.",
    },
  },
  portfolio: {
    kicker: { en: "Portfolio", fa: "نمونه\u200cکار" },
    title: { en: "Selected Work", fa: "منتخب پروژه\u200cها" },
    description: {
      en: "A curated selection of projects that showcase my approach to design and development.",
      fa: "مجموعه\u200cای از پروژه\u200cها که رویکرد من به طراحی و توسعه را نشان می\u200cدهند.",
    },
    viewProject: { en: "View Project", fa: "مشاهده پروژه" },
  },
  knowledge: {
    kicker: { en: "Knowledge Hub", fa: "مرکز دانش" },
    title: { en: "Writings & Tutorials", fa: "نوشته\u200cها و آموزش\u200cها" },
    description: {
      en: "Sharing insights from the trenches — articles on design, development, and everything in between.",
      fa: "تجربه\u200cهایی از دل پروژه\u200cها — نوشته\u200cهایی درباره طراحی، توسعه و هرچیز بین این\u200cها.",
    },
    tabs: {
      articles: { en: "Articles", fa: "مقاله\u200cها" },
      tutorials: { en: "Tutorials", fa: "آموزش\u200cها" },
    },
  },
  playground: {
    kicker: { en: "The Lab", fa: "آزمایشگاه" },
    title: { en: "Playground", fa: "پلی\u200cگراند" },
    description: {
      en: "Experimental side projects, code snippets, and creative explorations. Things I build for fun.",
      fa: "پروژه\u200cهای آزمایشی، اسنیپت\u200cها و تجربه\u200cهای خلاقانه — چیزهایی که برای سرگرمی می\u200cسازم.",
    },
  },
  resources: {
    kicker: { en: "Free Resources", fa: "منابع رایگان" },
    title: { en: "Freebies & Downloads", fa: "رایگان\u200cها و دانلودها" },
    description: {
      en: "Useful resources I've created to help fellow developers and designers level up their craft.",
      fa: "منابعی که ساخته\u200cام تا به توسعه\u200cدهنده\u200cها و طراح\u200cها برای رشد مهارت\u200cها کمک کند.",
    },
    downloadFree: { en: "Download Free", fa: "دانلود رایگان" },
  },
  about: {
    techStackTitle: { en: "Tech Stack", fa: "فناوری\u200cها" },
  },
  testimonials: {
    kicker: { en: "Testimonials", fa: "نظرات" },
    title: { en: "What Clients Say", fa: "مشتری\u200cها چه می\u200cگویند" },
    description: {
      en: "Don't just take my word for it — here's what people I've worked with have to say.",
      fa: "فقط به حرف من اکتفا نکنید — این\u200cها نظر کسانی است که با هم کار کرده\u200cایم.",
    },
  },
  writingDetail: {
    notFoundKicker: { en: "Not found", fa: "یافت نشد" },
    notFoundTitle: { en: "Writing not found", fa: "نوشته پیدا نشد" },
    notFoundDescription: {
      en: "The link may be outdated, or the post was moved.",
      fa: "ممکن است لینک قدیمی باشد یا نوشته جابه\u200cجا شده باشد.",
    },
    backToWritings: { en: "Back to Writings", fa: "بازگشت به نوشته\u200cها" },
    back: { en: "Back", fa: "بازگشت" },
    emptyContentPlaceholder: {
      en: "(Add full content in src/content/writings/... as Markdown)",
      fa: "(محتوای کامل را به صورت Markdown در src/content/writings/... اضافه کنید)",
    },
  },
  footer: {
    ctaKicker: { en: "Let's Work Together", fa: "با هم همکاری کنیم" },
    ctaTitle: {
      en: "Have a project in mind?",
      fa: "پروژه\u200cای در ذهن دارید؟",
    },
    ctaDescription: {
      en: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      fa: "همیشه مشتاق صحبت درباره پروژه\u200cهای جدید، ایده\u200cهای خلاقانه و فرصت\u200cهای همکاری هستم.",
    },
    startConversation: { en: "Start a Conversation", fa: "شروع گفتگو" },
    downloadCv: { en: "Download CV", fa: "دانلود رزومه" },
    brandDescription: {
      en: "Designing and building digital products that people love.",
      fa: "طراحی و ساخت محصولات دیجیتالی که کاربران دوست دارند.",
    },
    linksTitle: { en: "Links", fa: "لینک\u200cها" },
    connectTitle: { en: "Connect", fa: "ارتباط" },
    newsletterTitle: { en: "Newsletter", fa: "خبرنامه" },
    newsletterDescription: {
      en: "Get updates on new articles and resources.",
      fa: "از نوشته\u200cها و منابع جدید باخبر شوید.",
    },
    newsletterPlaceholder: { en: "you@email.com", fa: "you@email.com" },
    subscribeAriaLabel: { en: "Subscribe", fa: "عضویت" },
    newsletterThanks: {
      en: "Thanks for subscribing!",
      fa: "ممنون از عضویت شما!",
    },
    copyright: {
      en: "All rights reserved.",
      fa: "تمام حقوق محفوظ است.",
    },
    builtWith: { en: "Built with", fa: "ساخته\u200cشده با" },
  },
};

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────
export const HERO = {
  greeting: { en: "Hi, I'm", fa: "سلام، من" },
  name: "Roya",
  headline: {
    en: "Turning Ideas into\nDigital Reality",
    fa: "تبدیل ایده\u200cها به\nواقعیت دیجیتال",
  },
  subtext: {
    en: "I design and build scalable, high-performance web and mobile applications with a focus on clean architecture, usability, and long-term maintainability. Let’s create reliable digital products that truly scale.",
    fa: "اپلیکیشن\u200cهای وب و موبایل مقیاس\u200cپذیر و پرفورمنس\u200cبالا را با تمرکز روی معماری تمیز، کاربردپذیری و نگه\u200cداری بلندمدت طراحی و پیاده\u200cسازی می\u200cکنم. بیایید محصولاتی قابل اعتماد بسازیم که واقعاً مقیاس بگیرند.",
  },
  cta: { en: "Start a Project", fa: "شروع پروژه" },
  ctaSecondary: { en: "View My Work", fa: "مشاهده نمونه\u200cکارها" },
  stats: [
    {
      value: "50+",
      label: {
        en: "Projects Delivered",
        fa: "پروژه\u200cهای تحویل\u200cداده\u200cشده",
      },
    },
    { value: "30+", label: { en: "Happy Clients", fa: "مشتری\u200cهای راضی" } },
    { value: "10+", label: { en: "Years Experience", fa: "سال تجربه" } },
    { value: "99%", label: { en: "Client Satisfaction", fa: "رضایت مشتری" } },
  ],
};

// ─────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    icon: "Palette",
    title: { en: "UI/UX Design", fa: "طراحی UI/UX" },
    description: {
      en: "Crafting intuitive, beautiful interfaces that delight users and drive engagement. From wireframes to high-fidelity prototypes.",
      fa: "طراحی رابط\u200cهای کاربری زیبا و شهودی که تجربه\u200cی کاربر را بهتر می\u200cکنند. از وایرفریم تا پروتوتایپ\u200cهای دقیق.",
    },
    price: { en: "From $2,500", fa: "از ۲٬۵۰۰ دلار" },
    features: {
      en: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      fa: ["تحقیق کاربر", "وایرفریم", "پروتوتایپ", "Design System"],
    },
  },
  {
    id: 2,
    icon: "Code2",
    title: { en: "Frontend Development", fa: "توسعه فرانت\u200cاند" },
    description: {
      en: "Building fast, responsive, and accessible web applications with modern frameworks like React, Next.js, and Vue.",
      fa: "پیاده\u200cسازی اپلیکیشن\u200cهای وب سریع، ریسپانسیو و دسترس\u200cپذیر با فریم\u200cورک\u200cهای مدرن مثل React و Next.js.",
    },
    price: { en: "From $3,000", fa: "از ۳٬۰۰۰ دلار" },
    features: {
      en: [
        "React / Next.js",
        "Performance Optimization",
        "Responsive Design",
        "API Integration",
      ],
      fa: [
        "React / Next.js",
        "بهینه\u200cسازی عملکرد",
        "طراحی ریسپانسیو",
        "یکپارچه\u200cسازی API",
      ],
    },
  },
  {
    id: 3,
    icon: "Smartphone",
    title: { en: "Mobile Development", fa: "توسعه موبایل" },
    description: {
      en: "Creating cross-platform mobile applications that feel native on every device using React Native and Flutter.",
      fa: "ساخت اپلیکیشن\u200cهای کراس\u200cپلتفرم با تجربه\u200cی نزدیک به native روی همه دستگاه\u200cها با Flutter و React Native.",
    },
    price: { en: "From $5,000", fa: "از ۵٬۰۰۰ دلار" },
    features: {
      en: [
        "React Native",
        "iOS & Android",
        "App Store Launch",
        "Push Notifications",
      ],
      fa: ["React Native", "iOS و Android", "انتشار در استور", "نوتیفیکیشن"],
    },
  },
  {
    id: 4,
    icon: "MessageSquare",
    title: { en: "Consultation", fa: "مشاوره" },
    description: {
      en: "Strategic advice on technology choices, architecture decisions, and digital transformation for your business.",
      fa: "راهنمایی استراتژیک برای انتخاب تکنولوژی، تصمیم\u200cهای معماری و تحول دیجیتال کسب\u200cوکار شما.",
    },
    price: { en: "From $150/hr", fa: "از ۱۵۰ دلار/ساعت" },
    features: {
      en: ["Tech Strategy", "Code Review", "Architecture", "Team Mentoring"],
      fa: ["استراتژی فنی", "بازبینی کد", "معماری", "منتورینگ تیم"],
    },
  },
];

// ─────────────────────────────────────────────
// Portfolio / Work
// ─────────────────────────────────────────────
export const PORTFOLIO_FILTERS = [
  { value: "All", label: { en: "All", fa: "همه" } },
  { value: "Enterprise", label: { en: "Enterprise", fa: "سازمانی" } },
  { value: "FinTech", label: { en: "FinTech", fa: "فین\u200cتک" } },
  { value: "IoT", label: { en: "IoT", fa: "اینترنت اشیا" } },
  { value: "Ecommerce", label: { en: "Ecommerce", fa: "تجارت الکترونیک" } },
  { value: "Security", label: { en: "Security", fa: "امنیت" } },
  { value: "Personal", label: { en: "Personal", fa: "شخصی" } },
];

export const PROJECTS = [
  {
    id: 1,
    title: { en: "Smart Home Platform", fa: "پلتفرم خانه هوشمند" },
    categories: ["IoT", "Enterprise"],
    tags: ["Flutter", "Dart", "MQTT", "IoT", "PWA"],
    image: portfolio1,
    description: {
      en: "A comprehensive smart home system for monitoring and controlling lighting, climate, appliances, and security. Built with Flutter and integrated with IoT devices via MQTT protocol.",
      fa: "سیستم جامع خانه هوشمند برای پایش و کنترل روشنایی، دما، لوازم و امنیت. ساخته\u200cشده با Flutter و یکپارچه\u200cسازی با دستگاه\u200cهای IoT از طریق MQTT.",
    },
    link: "#",
  },
  {
    id: 2,
    title: { en: "Crypto Gateway", fa: "درگاه پرداخت رمز\u200cارز" },
    categories: ["FinTech", "Enterprise"],
    tags: ["Microservices", "Kafka", "Blockchain", "USDT", "Tron"],
    image: portfolio8,
    description: {
      en: "A USDT payment gateway on the Tron network enabling businesses to accept crypto payments. Designed with a Kafka-centric microservice architecture for scalability and reliability.",
      fa: "درگاه پرداخت USDT روی شبکه Tron برای پذیرش پرداخت\u200cهای رمزارزی. طراحی\u200cشده با معماری میکروسرویس مبتنی بر Kafka برای مقیاس\u200cپذیری و پایداری.",
    },
    link: "#",
  },
  {
    id: 3,
    title: { en: "Ecommerce Solution", fa: "راهکار تجارت الکترونیک" },
    categories: ["Ecommerce"],
    tags: ["Flutter", "Dart", "PWA", "Payment Systems"],
    image: portfolio2,
    description: {
      en: "A multi-vendor and single-vendor ecommerce platform with flexible payment integrations. Developed as Android and PWA applications using Flutter.",
      fa: "پلتفرم فروشگاهی تک\u200cفروشنده و چندفروشنده با اتصال\u200cپذیری منعطف به درگاه\u200cهای پرداخت. توسعه داده\u200cشده برای Android و PWA با Flutter.",
    },
    link: "#",
  },
  {
    id: 4,
    title: { en: "Shast Banking Application", fa: "اپلیکیشن بانکی شَست" },
    categories: ["Enterprise", "FinTech"],
    tags: ["Java", "Android", "FinTech", "Banking"],
    image: portfolio3,
    description: {
      en: "A banking application for account management, money transfers, gift cards, and ticket purchases. Developed for the National Bank of Iran using native Android (Java).",
      fa: "اپلیکیشن بانکی برای مدیریت حساب، انتقال وجه، کارت هدیه و خرید بلیت. توسعه داده\u200cشده برای بانک ملی ایران با Android native (Java).",
    },
    link: "#",
  },
  {
    id: 5,
    title: { en: "AnyPay Mobile POS", fa: "AnyPay (موبایل\u200cپوز)" },
    categories: ["FinTech"],
    tags: ["Swift", "iOS", "MPOS", "Payment SDK"],
    image: portfolio5,
    description: {
      en: "A large-scale iOS application integrated with MPOS devices through a payment SDK, enabling real-time card transactions using debit card track data.",
      fa: "اپلیکیشن iOS در مقیاس بزرگ با اتصال به دستگاه\u200cهای MPOS از طریق Payment SDK برای انجام تراکنش\u200cهای لحظه\u200cای با داده\u200cهای کارت.",
    },
    link: "#",
  },
  {
    id: 6,
    title: { en: "MelliPass Digital Identity", fa: "هویت دیجیتال MelliPass" },
    categories: ["Enterprise", "Security"],
    tags: ["Kotlin", "Android", "Biometrics", "Security"],
    image: portfolio4,
    description: {
      en: "A digital identity authentication system using face recognition and digital signatures. Developed as a secure Android application with Kotlin.",
      fa: "سیستم احراز هویت دیجیتال با تشخیص چهره و امضای دیجیتال. توسعه داده\u200cشده به\u200cعنوان اپلیکیشن امن Android با Kotlin.",
    },
    link: "#",
  },
];

// ─────────────────────────────────────────────
// Knowledge Hub (Blog & Tutorials)
// ─────────────────────────────────────────────
export const ARTICLES = [
  {
  id: 7,
  slug: "http-query-method",
  title: {
    en: "HTTP QUERY (RFC 10008): A Better Way to Design Read-Only API Queries",
    fa: "متد HTTP QUERY (RFC 10008): گامی به‌سوی طراحی بهتر APIها",
  },
  category: "Article",
  readTime: "5 min",
  date: "Jun 30, 2026",
  excerpt: {
    en: "The IETF has officially standardized the HTTP QUERY method in RFC 10008. Learn why this new safe HTTP method fills the gap between GET and POST and how it improves API semantics and developer experience.",
    fa: "IETF با انتشار RFC 10008 متد HTTP QUERY را به‌صورت رسمی استاندارد کرده است. در این مقاله بررسی می‌کنیم که چرا این متد فاصله میان GET و POST را پر می‌کند و چگونه طراحی APIها را شفاف‌تر و استانداردتر می‌سازد.",
  },
  tags: [
    "HTTP",
    "REST API",
    "RFC10008",
    "Backend",
    "API Design",
  ],
  image: artcl6,
  content: {
    en: articleHttpQueryEn,
    fa: articleHttpQueryFa,
  },
},
  {
    id: 6,
    slug: "gitnexus-beyond-vibe-coding",
    title: {
      en: "Beyond Vibe Coding: How GitNexus Prevents AI from Breaking Your Codebase",
      fa: "فراتر از Vibe Coding: چگونه GitNexus از فروپاشی کدهای شما توسط هوش مصنوعی جلوگیری می‌کند؟",
    },
    category: "Article",
    readTime: "6 min",
    date: "Feb 28, 2026",
    excerpt: {
      en: "Most AI coding tools are hyper-focused on the active file and miss 47 other functions that depend on it. GitNexus builds a knowledge graph of your entire codebase so your AI never codes in the dark again.",
      fa: "اکثر ابزارهای هوش مصنوعی فقط روی فایل فعلی تمرکز می‌کنند و ۴۷ تابع دیگر وابسته به آن را نادیده می‌گیرند. GitNexus یک گراف دانش از کل کدبیس شما می‌سازد تا هوش مصنوعی دیگر هرگز در تاریکی کد نزند.",
    },
    tags: ["AI", "Developer Tools", "MCP"],
    image: artcl6,
    content: {
      en: articleGitNexusVibeCodingEn,
      fa: articleGitNexusVibeCodingFa,
    },
  },
  {
    id: 5,
    slug: "internet-outage-survival-guide",
    title: {
      en: "A Survival Guide for Developers During Internet Outages",
      fa: "راهنمای جامع بقا در شرایط قطعی اینترنت برای برنامه‌نویسان",
    },
    category: "Article",
    readTime: "10 min",
    date: "Feb 23, 2026",
    excerpt: {
      en: "Mirrors, offline caches, and local registries — everything Flutter, React, Android, and iOS developers need to keep building when the internet goes dark.",
      fa: "میرورها، کش آفلاین و رجیستری محلی — همه آنچه برنامه‌نویسان Flutter، React، Android و iOS برای ادامه کار در زمان قطعی اینترنت نیاز دارند.",
    },
    tags: ["Flutter", "Android", "iOS", "React", "Offline"],
    image: artcl5,
    content: {
      en: articleInternetOutageSurvivalEn,
      fa: articleInternetOutageSurvivalFa,
    },
  },
  {
    id: 4,
    slug: "optimization-changed-the-game",
    title: {
      en: "When Optimization Changes the Rules of the Game",
      fa: "وقتی بهینه‌سازی قواعد بازی را تغییر می‌دهد",
    },
    category: "Article",
    readTime: "6 min",
    date: "Feb 18, 2026",
    excerpt: {
      en: "How rewriting OpenClaw in Go created PicoClaw and delivered dramatic gains in startup speed, memory usage, and edge-device accessibility.",
      fa: "چطور بازنویسی OpenClaw با Go به ساخت PicoClaw منجر شد و جهش چشمگیری در سرعت اجرا، مصرف حافظه و دسترس‌پذیری روی دستگاه‌های Edge ایجاد کرد.",
    },
    tags: ["Optimization", "Edge AI", "Go"],
    image: artcl4,
    content: {
      en: articleOptimizationChangedTheGameEn,
      fa: articleOptimizationChangedTheGameFa,
    },
  },
  {
    id: 3,
    slug: "performance-case-study",
    title: {
      en: "Building for Performance: A Case Study",
      fa: "ساخت برای Performance: یک مطالعه‌ی موردی",
    },
    category: "Case Study",
    readTime: "15 min",
    date: "Nov 8, 2025",
    excerpt: {
      en: "How we reduced a client's load time by 60% through strategic optimization.",
      fa: "چطور با بهینه‌سازی‌های هدفمند زمان لود یک محصول را ۶۰٪ کاهش دادیم.",
    },
    tags: ["Performance", "Case Study"],
    image: artcl3,
    content: {
      en: articlePerformanceCaseStudyEn,
      fa: articlePerformanceCaseStudyFa,
    },
  },
  {
    id: 2,
    slug: "state-of-frontend-2026",
    title: {
      en: "The State of Frontend in 2026",
      fa: "وضعیت Frontend در سال ۲۰۲۶",
    },
    category: "Article",
    readTime: "12 min",
    date: "Dec 20, 2025",
    excerpt: {
      en: "A comprehensive overview of the frameworks, tools, and trends defining modern frontend development.",
      fa: "مروری جامع بر فریم‌ورک‌ها، ابزارها و ترندهایی که توسعه‌ی فرانت‌اند مدرن را شکل می‌دهند.",
    },
    tags: ["Frontend", "Trends"],
    image: artcl2,
    content: {
      en: articleStateOfFrontendEn,
      fa: articleStateOfFrontendFa,
    },
  },
  {
    id: 1,
    slug: "design-systems-scalable-ui",
    title: {
      en: "Claude Opus 4.6 Is Not What You Think",
      fa: "کلاد اوپوس ۴.۶ آن چیزی نیست که فکر می‌کنید",
    },
    category: "Article",
    readTime: "8 min",
    date: "Jan 15, 2026",
    excerpt: {
      en: "Claude Opus 4.6 is a monster, but not for the reasons you think. While Anthropic builds the ultimate 'execution engine' for deep work, OpenAI is constructing the management layer. Here is the new reality of your AI toolchain.",
      fa: "کلاد در حال تبدیل شدن به موتور اجرایی شماست و OpenAI لایه مدیریتی را می‌سازد. بررسی تغییرات کلیدی در Claude Opus 4.6 و GPT-5.3 که نحوه کار واقعی را تغییر می‌دهند.",
    },
    tags: ["Design", "Systems"],
    image: artcl1,
    content: {
      en: articleDesignSystemsEn,
      fa: articleDesignSystemsFa,
    },
  },
];

export const TUTORIALS = [
  {
    id: 1,
    slug: "tailwind-design-system",
    title: {
      en: "Build a Design System with Tailwind CSS",
      fa: "ساخت Design System با Tailwind CSS",
    },
    category: "Tutorial",
    readTime: "20 min",
    date: "Jan 28, 2026",
    excerpt: {
      en: "Step-by-step guide to creating a reusable design system using Tailwind CSS and React.",
      fa: "راهنمای گام‌به‌گام برای ساخت یک Design System قابل‌استفاده مجدد با Tailwind و React.",
    },
    tags: ["Tailwind", "React"],
    content: {
      en: tutorialTailwindDesignSystemEn,
      fa: tutorialTailwindDesignSystemFa,
    },
  },
  {
    id: 2,
    slug: "framer-motion-mastery",
    title: {
      en: "Mastering Framer Motion Animations",
      fa: "مسلط شدن به انیمیشن‌های Framer Motion",
    },
    category: "Tutorial",
    readTime: "18 min",
    date: "Jan 5, 2026",
    excerpt: {
      en: "Learn how to create stunning micro-interactions and page transitions with Framer Motion.",
      fa: "یاد بگیرید با Framer Motion میکرو-اینترکشن‌ها و ترنزیشن‌های صفحه را حرفه‌ای بسازید.",
    },
    tags: ["Animation", "React"],
    content: {
      en: tutorialFramerMotionMasteryEn,
      fa: tutorialFramerMotionMasteryFa,
    },
  },
  {
    id: 3,
    slug: "react-cicd-deploy",
    title: {
      en: "Deploying React Apps with CI/CD",
      fa: "دیپلوی React با CI/CD",
    },
    category: "Tutorial",
    readTime: "10 min",
    date: "Dec 12, 2025",
    excerpt: {
      en: "Set up automated testing and deployment pipelines for your React applications.",
      fa: "ساخت پایپ‌لاین تست و دیپلوی خودکار برای اپلیکیشن‌های React.",
    },
    tags: ["DevOps", "CI/CD"],
    content: {
      en: tutorialReactCICDDeployEn,
      fa: tutorialReactCICDDeployFa,
    },
  },
];

// ─────────────────────────────────────────────
// Playground (Lab)
// ─────────────────────────────────────────────
export const PLAYGROUND_ITEMS = [
  {
    id: 1,
    title: { en: "Particle System", fa: "سیستم ذرات" },
    description: {
      en: "An interactive WebGL particle system with mouse-following dynamics.",
      fa: "یک سیستم ذرات WebGL تعاملی با حرکت دنبال\u200cکننده ماوس.",
    },
    tags: ["WebGL", "Three.js"],
    emoji: "✨",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 2,
    title: { en: "CSS Art Generator", fa: "ژنراتور CSS Art" },
    description: {
      en: "A tool that generates unique CSS art patterns from random seeds.",
      fa: "ابزاری برای تولید الگوهای هنری CSS با seedهای تصادفی.",
    },
    tags: ["CSS", "Generative"],
    emoji: "🎨",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: { en: "Markdown Note App", fa: "یادداشت\u200cبرداری Markdown" },
    description: {
      en: "A minimal, offline-first markdown editor with live preview.",
      fa: "ادیتور مینیمال Markdown با پشتیبانی آفلاین و پیش\u200cنمایش زنده.",
    },
    tags: ["React", "IndexedDB"],
    emoji: "📝",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    id: 4,
    title: { en: "Sound Visualizer", fa: "ویژوالایزر صدا" },
    description: {
      en: "Real-time audio visualization using the Web Audio API and Canvas.",
      fa: "نمایش بصری صدا به\u200cصورت real-time با Web Audio API و Canvas.",
    },
    tags: ["Web Audio", "Canvas"],
    emoji: "🎵",
    color: "from-orange-500/20 to-yellow-500/20",
  },
];

// ─────────────────────────────────────────────
// Resources (Freebies)
// ─────────────────────────────────────────────
export const RESOURCES = [
  {
    id: 1,
    icon: "FileCheck",
    title: { en: "Frontend Checklist", fa: "چک\u200cلیست فرانت\u200cاند" },
    description: {
      en: "A comprehensive checklist for shipping production-ready frontend projects.",
      fa: "چک\u200cلیست جامع برای آماده\u200cسازی پروژه\u200cهای فرانت\u200cاند برای محیط production.",
    },
    format: "PDF",
    downloadLink: "#",
  },
  {
    id: 2,
    icon: "BookOpen",
    title: {
      en: "React Best Practices eBook",
      fa: "کتابچه بهترین روش\u200cهای React",
    },
    description: {
      en: "50+ pages of patterns, tips, and architecture strategies for React.",
      fa: "بیش از ۵۰ صفحه الگو، نکته و استراتژی\u200cهای معماری برای React.",
    },
    format: "PDF",
    downloadLink: "#",
  },
  {
    id: 3,
    icon: "Layout",
    title: { en: "Component Library Starter", fa: "استارتر کتابخانه کامپوننت" },
    description: {
      en: "A ready-to-use starter template for building your own component library.",
      fa: "قالب آماده برای شروع ساخت کتابخانه کامپوننت اختصاصی شما.",
    },
    format: "ZIP",
    downloadLink: "#",
  },
];

// ─────────────────────────────────────────────
// About
// ─────────────────────────────────────────────
export const ABOUT = {
  title: { en: "About Me", fa: "درباره من" },
  subtitle: { en: "The Story So Far", fa: "داستان تا اینجا" },
  bio: {
    en: [
      "I'm a senior software developer who's passionate about building products that make a difference. With over 10 years of experience, I've worked with startups and enterprises alike to craft digital experiences that are both beautiful and functional.",
      "My journey started with a curiosity for how complex systems work across web and mobile platforms. That curiosity evolved into a career focused on designing and building scalable, high-performance applications using modern technologies like Flutter, React, and Android. I believe in the power of clean code and well-engineered solutions.",
      "Beyond coding, I’m passionate about exploring new technologies, optimizing software architectures, and continuously pushing my technical boundaries. My current interests include artificial intelligence and its applications in software development.",
    ],
    fa: [
      "من یک توسعه\u200cدهنده ارشد نرم\u200cافزار هستم و از ساخت محصولاتی که اثر واقعی دارند لذت می\u200cبرم. با بیش از ۱۰ سال تجربه، هم با استارتاپ\u200cها و هم با سازمان\u200cها کار کرده\u200cام تا تجربه\u200cهای دیجیتال زیبا و کاربردی بسازم.",
      "مسیر من با کنجکاوی درباره نحوه کار سیستم\u200cهای پیچیده در وب و موبایل شروع شد و به تمرکز روی طراحی و ساخت اپلیکیشن\u200cهای مقیاس\u200cپذیر و پرفورمنس\u200cبالا با فناوری\u200cهایی مثل Flutter، React و Android رسید. به قدرت کد تمیز و راهکارهای مهندسی\u200cشده باور دارم.",
      "فراتر از کدنویسی، به کشف تکنولوژی\u200cهای جدید، بهینه\u200cسازی معماری نرم\u200cافزار و رشد مداوم علاقه\u200cمندم. علاقه\u200cهای فعلی من شامل هوش مصنوعی و کاربردهای آن در توسعه نرم\u200cافزار است.",
    ],
  },
  now: {
    title: { en: "What I'm Up To Now", fa: "این روزها مشغولم به" },
    items: [
      {
        emoji: "📖",
        text: {
          en: 'Reading "The-Innovators" by Walter Isaacson',
          fa: "خواندن کتاب «The-Innovators» از Walter Isaacson",
        },
      },
      {
        emoji: "🔨",
        text: {
          en: "Building an Ads platform for startups",
          fa: "ساخت یک پلتفرم تبلیغاتی برای استارتاپ‌ها",
        },
      },
      {
        emoji: "🎓",
        text: {
          en: "Learning Rust and systems programming",
          fa: "یادگیری Rust و برنامه\u200cنویسی سیستمی",
        },
      },
      {
        emoji: "✍️",
        text: {
          en: "Writing a blog series on artificial intelligence",
          fa: "نوشتن مجموعه\u200cای درباره هوش مصنوعی",
        },
      },
    ],
  },
  techStack: [
    "Flutter (Dart)",
    "React",
    "Android (Java/Kotlin)",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "LLMs",
    "Generative AI",
    "Figma",
  ],
};

// ─────────────────────────────────────────────
// Testimonials
// ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Chen",
    role: { en: "CEO, TechFlow", fa: "مدیرعامل، TechFlow" },
    avatar: "SC",
    text: {
      en: "Alex transformed our product vision into a stunning reality. The attention to detail and performance optimization was beyond our expectations.",
      fa: "رویا چشم\u200cانداز محصول ما را به یک خروجی عالی تبدیل کرد. دقت به جزئیات و توجه به performance فراتر از انتظارمان بود.",
    },
  },
  {
    id: 2,
    name: "Marcus Rivera",
    role: { en: "Founder, Bloom Studio", fa: "بنیان\u200cگذار، Bloom Studio" },
    avatar: "MR",
    text: {
      en: "Working with Alex was seamless. They understood our brand immediately and delivered a website that perfectly captures our identity.",
      fa: "همکاری با رویا بسیار روان و حرفه\u200cای بود. برند ما را سریع درک کرد و وب\u200cسایتی تحویل داد که دقیقاً هویت ما را نشان می\u200cدهد.",
    },
  },
  {
    id: 3,
    name: "Emily Watson",
    role: { en: "Product Manager, ScaleUp", fa: "مدیر محصول، ScaleUp" },
    avatar: "EW",
    text: {
      en: "The dashboard Alex built for us handles millions of data points effortlessly. Our team's productivity has increased by 40%.",
      fa: "داشبوردی که رویا برای ما ساخت بدون دردسر میلیون\u200cها داده را مدیریت می\u200cکند. بهره\u200cوری تیم ما ۴۰٪ افزایش پیدا کرد.",
    },
  },
  {
    id: 4,
    name: "David Park",
    role: { en: "CTO, NovaPay", fa: "مدیر فناوری، NovaPay" },
    avatar: "DP",
    text: {
      en: "Exceptional work on our fintech platform. Alex's expertise in both design and development is rare and incredibly valuable.",
      fa: "کار فوق\u200cالعاده\u200cای روی پلتفرم فین\u200cتک ما انجام شد. تسلط رویا همزمان در طراحی و توسعه واقعاً ارزشمند است.",
    },
  },
  {
    id: 5,
    name: "Lisa Johansson",
    role: { en: "Creative Director, Hue Labs", fa: "مدیر خلاقیت، Hue Labs" },
    avatar: "LJ",
    text: {
      en: "The animations and micro-interactions Alex implemented gave our platform a premium feel that our users absolutely love.",
      fa: "انیمیشن\u200cها و micro-interactionهایی که رویا پیاده\u200cسازی کرد حسِ پریمیوم به محصول ما داد؛ کاربران واقعاً دوستش دارند.",
    },
  },
  {
    id: 6,
    name: "Omar Al-Rashid",
    role: { en: "Head of Engineering, Vantage", fa: "سرپرست مهندسی، Vantage" },
    avatar: "OA",
    text: {
      en: "We brought Alex in to consult on our architecture, and the improvements we saw in performance and developer experience were immediate.",
      fa: "رویا برای مشاوره معماری کنار ما بود و بهبودهایی که در performance و تجربه توسعه\u200cدهنده دیدیم بلافاصله محسوس شد.",
    },
  },
];

// ─────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/royacodes", icon: "Github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/roya-raastgar/",
    icon: "Linkedin",
  },
  { label: "Twitter / X", href: "https://x.com/royacodes", icon: "Twitter" },
  { label: "Telegram", href: "https://t.me/RoyaaCodes", icon: "Telegram" },
];

export const FOOTER_LINKS = [
  { label: { en: "Work", fa: "نمونه\u200cکارها" }, href: "#work" },
  { label: { en: "Services", fa: "خدمات" }, href: "#services" },
  { label: { en: "Writings", fa: "نوشته\u200cها" }, href: "#writings" },
  { label: { en: "About", fa: "درباره" }, href: "#about" },
  { label: { en: "Contact", fa: "تماس" }, href: "#contact" },
];
