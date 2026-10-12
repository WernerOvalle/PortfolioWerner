// First job (Claro, February 2019): the start of the "N+ years" shown on the site.
export const CAREER_START = new Date(2019, 1);

const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;
export const yearsOfExperience = (now = new Date()) =>
  Math.floor((now - CAREER_START) / YEAR_MS);

export const certificateCategories = [
  {
    category: "🎓 Education & Research",
    color: "#d4af37",
    items: [
      {
        title: "Master's Degree in Computer Science — Electronic Banking",
        image: "/images/master-degree-informatics-banking.webp",
        visit: "https://drive.google.com/file/d/1W-PBAGia13hxmFtzqwJ00AzH3OOGYjOF/view",
        featured: true,
        id: 2,
      },
      {
        title: "Bachelor's Degree in Systems Engineering",
        image: "/images/bachelor-degree-systems-engineering.webp",
        visit: "https://drive.google.com/file/d/1JpxYRTsGJfDIUs7y6kJBDPwm4p5NC2Bn/view",
        featured: true,
        id: 0,
      },
      {
        title: "Master's Thesis — Electronic Banking",
        description: "Thesis completed for the Master's Degree in Computer Science with an emphasis on Electronic Banking & Communications.",
        image: "/images/master-thesis-informatics-banking.webp",
        visit: "https://drive.google.com/file/d/1-wR6KmFYW7q6SCI7qMMnvIbNhSWhtqri/view",
        id: 19,
      },
      {
        title: "Bachelor's Thesis — Systems Engineering",
        description: "Thesis completed for the Bachelor's Degree in Information Systems Engineering & Computer Science.",
        image: "/images/bachelor-thesis-systems-engineering.webp",
        visit: "https://drive.google.com/file/d/1_UHBSDxC54dHOFzt0aghxkL4SpeJGyJh/view",
        id: 20,
      },
      {
        title: "Bachelor's Diploma — Systems Engineering",
        image: "/images/bachelor-diploma-systems-engineering.webp",
        visit: "https://drive.google.com/file/d/1TxxB7a42UPRb4Z2fx7TcAyMrnFgCvP6Y/view",
        id: 1,
      },
      {
        title: "EF SET English Certificate — 59/100 B2 Upper Intermediate",
        image: "/images/efset-english-certificate.webp",
        visit: "https://cert.efset.org/en/gSKS8F",
        id: 16,
      },
    ],
  },
  {
    category: "🤖 AI & Automation",
    color: "#a855f7",
    items: [
      {
        title: "Claude Code in Action",
        image: "/images/claude-code-action-certificate.webp",
        visit: "https://verify.skilljar.com/c/zzivhd7k6hgy",
        featured: true,
        id: 6,
      },
      {
        title: "Introduction to Agent Skills",
        image: "/images/introduction-agent-skills-certificate.webp",
        visit: "https://verify.skilljar.com/c/c524fjzst4ki",
        featured: true,
        id: 18,
      },
    ],
  },
  {
    category: "☁️ Cloud & DevOps",
    color: "#0078d4",
    items: [
      {
        title: "Azure Developer Course — Udemy",
        image: "/images/udemy-az204-certificate.webp",
        visit: "https://www.udemy.com/certificate/UC-1b880a76-4fc7-48ad-86ad-e720ab9520ff/",
        description: "Azure app development: compute (App Service, Functions, containers), data (Cosmos DB, Blob Storage, Redis), security (Entra ID, Key Vault), messaging (Service Bus, Event Grid, Event Hubs), monitoring (Application Insights) and API Management. Complemented with the AZ-204 Exam Guide (2nd ed., Packt 2024) by Paul Ivey & Alex Ivanov, with strong results on official mock exams.",
        id: 17,
      },
      {
        title: "Professional DevOps Course",
        image: "/images/devops-professional-course-certificate.webp",
        visit: "https://platzi.com/p/werner-ovalle/curso/1431-devops/diploma/detalle/",
        id: 11,
      },
      {
        title: "Getting Started with Google Kubernetes Engine",
        image: "/images/kubernetes-course.webp",
        visit: "https://coursera.org/share/1daa46b324cc27189a69978c14c6e65d",
        id: 3,
      },
      {
        title: "Jenkins Fundamentals",
        image: "/images/jenkins-basic-course-certificate.webp",
        visit: "https://platzi.com/p/werner-ovalle/curso/1436-jenkins-basico/diploma/detalle/",
        id: 10,
      },
    ],
  },
  {
    category: "🌐 Web Development & Architecture",
    color: "#10b981",
    items: [
      {
        title: "Software Architecture: Domain-Driven Design",
        image: "/images/linkedin-ddd-software-architecture-certificate.webp",
        visit: "https://www.linkedin.com/learning/certificates/c35e782b117f7e386f8d4f5368d14c8952745ec7612feb1869dd352ff321e4a1",
        featured: true,
        id: 21,
      },
      {
        title: "Advanced .NET",
        image: "/images/linkedin-dotnet-advanced-certificate.webp",
        visit: "https://www.linkedin.com/learning/certificates/54548f4b36b0dd6fdafac21c3a082b01bc5329d32bba73bf10ea30f9d64f342f",
        featured: true,
        id: 22,
      },
      {
        title: "Next.js Course",
        image: "/images/nextjs-course-certificate.webp",
        visit: "https://platzi.com/p/werner-ovalle/curso/1991-next/diploma/detalle/",
        id: 12,
      },
      {
        title: "Next.js Authentication",
        image: "/images/nextjs-authentication-certificate.webp",
        visit: "https://platzi.com/p/werner-ovalle/curso/2428-course/diploma/detalle/",
        id: 13,
      },
      {
        title: "TypeScript Fundamentals",
        image: "/images/typescript-fundamentals-certificate.webp",
        visit: "https://platzi.com/p/werner-ovalle/curso/1869-typescript-2020/diploma/detalle/",
        id: 14,
      },
      {
        title: "React & Node.js Developer",
        image: "/images/react-nodejs-developer-certificate.webp",
        visit: "https://drive.google.com/file/d/1qbW2fvXiLMQlrcRZu-bjpmVf8MyeFaXX/view?usp=sharing",
        id: 8,
      },
      {
        title: "Building Apps with React & ASP.NET Core",
        image: "/images/react-aspnet-core-certificate.webp",
        visit: "https://www.udemy.com/certificate/UC-a8156d0d-8cdd-4a6e-8548-8efd35f2544a/",
        id: 9,
      },
      {
        title: "Building REST APIs with .NET Core",
        image: "/images/dotnet-core-api-certificate.webp",
        visit: "https://ed.team/@wernerovalle59a/curso/api-punto-net",
        id: 7,
      },
      {
        title: "Unit Testing React with Jest",
        image: "/images/jest-unit-testing-certificate.webp",
        visit: "https://platzi.com/p/werner-ovalle/curso/1788-course/diploma/detalle/",
        id: 15,
      },
      {
        title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
        image: "/images/bootstrap-course.webp",
        visit: "https://coursera.org/share/450f0cd06a293548edbbf468deb6695e",
        id: 5,
      },
    ],
  },
];

export const projectCategories = [
  {
    category: "Client Work",
    color: "#0077b6",
    items: [
      {
        title: "Enterprise CRM Platform",
        description: "CRM for banks and credit cooperatives across Central America, deployed per client on the institution's own servers and tailored to how each one operates. I develop and maintain it end to end, and migrated its legacy modules to modern .NET to improve platform stability.",
        image: "/images/enterprise-crm.webp",
        tags: [".NET", "C#", "Entity Framework", "SQL Server", "RabbitMQ"],
        visitpreview: "",
        visit: "",
        privateNote: "Private — deployed on-premise for each bank",
        badge: "Work",
        id: 14,
      },
      {
        title: "Credilink SV",
        description: "Loan origination portal for a Salvadoran credit cooperative, guiding applicants from a five-minute request to instant pre-approval.",
        image: "/images/credilink-sv.webp",
        tags: [".NET", "ASP.NET Core", "Bootstrap", "jQuery"],
        visitpreview: "",
        visit: "https://credilinksv.com/",
        badge: "Work",
        id: 13,
      },
      {
        title: "FHA Guatemala",
        description: "Public site for the Guatemalan state institution behind insured mortgage loans, guiding citizens through its mortgage services and housing programs. I architected and built it from scratch.",
        image: "/images/fha-guatemala.webp",
        tags: ["Next.js", "Tailwind", "Prisma", "PostgreSQL", "Azure VM"],
        visitpreview: "",
        visit: "https://fha.gob.gt/",
        badge: "Work",
        id: 10,
      },
      {
        title: "Peter Giesemann Arquitecto",
        description: "Website for a Guatemalan architecture studio with over 50 years of practice, presenting its residences, buildings and master plans in a full-bleed editorial layout.",
        image: "/images/peter-giesemann-arquitecto.webp",
        tags: ["Next.js", "Tailwind", "Claude Code", "Cloudflare"],
        visitpreview: "",
        visit: "https://www.petergiesemanns.com/",
        badge: "Freelance",
        id: 12,
      },
      {
        title: "HTD Guatemala",
        description: "Corporate site for HTD Guatemala, showcasing their product range with a responsive layout and a contact portal for enquiries.",
        image: "/images/htd-guatemala.webp",
        tags: ["HTML", "CSS", "Bootstrap", "JS"],
        visitpreview: "",
        visit: "http://www.htdguatemala.com.gt/",
        badge: "Freelance",
        id: 0,
      },
      {
        title: "ATF Consultores",
        description: "Business site for ATF Consultores, presenting their services and giving clients direct access to their contact details.",
        image: "/images/atf-consultores.webp",
        tags: ["ReactJS", "Bootstrap", "NodeJS"],
        visitpreview: "",
        visit: "https://atfconsultoresgt.com/",
        badge: "Freelance",
        id: 5,
      },
    ],
  },
  {
    category: "Side Projects",
    color: "#2d6a4f",
    items: [
      {
        title: "Party Arcade",
        description: "Party games you play in the browser. Impostor: everyone gets a secret word except one player, who has to pretend they know it. Snake: up to 8 players on one big screen, using their phones as controllers.",
        image: "/images/party-arcade.webp",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "PeerJS"],
        visitpreview: "",
        visit: "https://party-arcade-werner.vercel.app/",
        id: 11,
      },
      {
        title: "Hospital Appointment System",
        description: "Prototype of an appointment scheduling system built as a proposal for a private hospital in Guatemala. Live demo with fictional data.",
        image: "/images/hospital-appointment-system.webp",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Azure Static Web Apps"],
        visitpreview: "",
        visit: "https://mango-river-0da4e4410.1.azurestaticapps.net",
        badge: "Prototype",
        id: 9,
      },
    ],
  },
];
export const TimeLineData = [
  { year: 2014, text: "Started my journey in Systems Engineering at university." },
  { year: 2019, text: "Joined Claro as a Business Intelligence Developer and began my Master's degree." },
  { year: 2019, text: "Moved to Banco Industrial as a Software Developer." },
  { year: 2020, text: "Graduated in Systems Engineering and Computer Science." },
  { year: 2021, text: "Graduated with a Master's in Computer Science, focused on Electronic Banking." },
  { year: 2023, text: "Joined FHA Guatemala as a Software Engineer." },
  { year: 2024, text: "Took my career international as a Software Engineer at BDG Panama." },
];
