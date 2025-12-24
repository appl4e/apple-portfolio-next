# MASTER PROJECT CONTEXT & BLUEPRINT

> **DO NOT DELETE OR MOVE THIS FILE.**
> This file acts as the "DNA" of the project. It contains the Source of Truth for content, design, and architecture.
> If you are an AI Agent (Claude, ChatGPT, Gemin, etc.) or a platform (Bolt, v0), READ THIS FIRST.

---

## SECTION 1: SYSTEM PROMPT (THE "PRIMER")

**Copy and paste this block when starting a new session with any AI:**

```text
You are an expert Full Stack Developer and UI/UX Designer acting as the lead architect for "Redlime Solutions LTD." an American Software Development Company based in Dhaka, Bangladesh.

**Current State:**
- We are building a Multi-Page Application using **Next.js (App Router)**.
- Styling: **Tailwind CSS** (Strict usage).
- Animation: **Framer Motion**.
- Vibe: "Light Tech," "Coding Wizard," "Nerdy but Premium."

**CRITICAL RULES:**
1. **Source of Truth:** ALWAYS check `MASTER_PROJECT_CONTEXT.md` for content. DO NOT invent job titles or project descriptions. Use the JSON data provided in Section 3.
2. **Design Language:**
   - Background: Light gradients (Slate-50 to Sky-50).
   - Card Style: Glassmorphism (White/70 opacity, backdrop-blur, thin borders).
   - Typography: Clean Sans (Geist/Inter) + Monospace headers (JetBrains/Fira) for the "Code" aesthetic.
   - Interactive: Smooth, floaty, glowing elements.
3. **No Placeholders:** If you need an image, ask for the user's asset or use a specific descriptive placeholder URL (e.g., placehold.co). Do not use "Lorem Ipsum" for bio/experience; use the real data.
```

---

## SECTION 2: DESIGN SYSTEM (THE "SOUL")

### 2.1 Core Aesthetic: "The Light Code Wizard"

- **Theme:** Light Mode (Strict). No dark mode toggles yet.
- **Concept:** A clean, futuristic lab. Think "Apple Store meets a Server Room". Bright, airy, but technical.
- **Colors:**
  - **Background:** `bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50`
  - **Surface (Glass):** `bg-white/70 backdrop-blur-lg border border-white/20 shadow-xl`
  - **Primary Accent:** `text-indigo-600` (for strong calls to action)
  - **Secondary Accent:** `text-sky-500` (for glowing effects)
  - **Text:** `text-slate-800` (Headings), `text-slate-600` (Body)
  - **Code Elements:** `bg-slate-900` (for code snippets/terminals) with `text-green-400` or `text-sky-300`.

### 2.2 Typography

- **Body & UI:** `Inter` or `Geist Sans` (Clean, legible).
- **Headings & Accents:** `JetBrains Mono` or `Fira Code`.
  - _Usage:_ Use monospace for the H1 Name, "Software Engineer" subtitles, and tags. This drives the "Nerdy/Codeish" look.

### 2.3 Animation Guidelines (Framer Motion)

- **Page Load:** Staggered fade-up for elements (`y: 20, opacity: 0` -> `y: 0, opacity: 1`).
- **Hover:**
  - Cards should lightly `scale(1.02)`.
  - Borders should "glow" (transition `border-color` from `white/20` to `sky-400/50`).
- **Hero Background:** Floating geometric shapes (circles/squares) with high blur (`blur-3xl`) moving slowly in the background.

---

## SECTION 3: CONTENT DATABASE (JSON SOURCE)

> **STATUS:** � DATA EXTRACTED
> _The content below was scraped from `localhost:8005` on 2024-12-18._

```json
{
	"profile": {
		"name": "Apple Mahmood",
		"title": "Senior Frontend Engineer & Architect",
		"tagline": "Building the Future of Web with AI & Modern Tech",
		"bio": "I am a Senior Frontend Engineer & Architect with 10+ years of experience. Currently leading a talented team at RL Technologies, I specialize in building high-performance SPAs with React, Next.js, and scaling frontend architecture. My focus is on leveraging AI and modern tools to deliver exceptional, reliable web solutions."
	},
	"contact": {
		"email": "appl4e@gmail.com",
		"phone": "+8801678116782",
		"address": "House#11/1, Road#8, Nobodoy Housing Society, Mohammadpur, Dhaka",
		"resume_url": "https://www.applemahmood.com/wp-content/uploads/2024/08/Apple-Mahmood-Resume.pdf",
		"socials": [
			{ "platform": "LinkedIn", "url": "https://www.linkedin.com/in/apple-mahmood-95480332/" },
			{ "platform": "GitHub", "url": "https://github.com/appl4e" },
			{ "platform": "Stack Overflow", "url": "https://wordpress.stackexchange.com/users/87564/apple" },
			{ "platform": "WordPress", "url": "https://profiles.wordpress.org/appl4e" },
			{ "platform": "Twitter", "url": "https://twitter.com/thecoderweb" }
		]
	},
	"experience": [
		{
			"role": "Frontend Engineer",
			"company": "RL Technologies LTD.",
			"year": "2022 - Present",
			"description": "Leading frontend development for flagship projects (DocMedilink, Align Wellness) with React and Angular. Optimized architecture for a 25% improvement in efficiency and achieved 95% API alignment with business requirements. Mentored 3 junior developers, boosting team productivity by 20%, and maintained a 90% on-time sprint delivery rate. (URLs: https://bit.ly/alignwell, https://bit.ly/docmedilink)"
		},
		{
			"role": "Senior Web Developer",
			"company": "RL Technologies LTD.",
			"year": "2015 - 2022",
			"description": "Managed development for Quartolab & Living Fit Nation, ensuring pixel-perfect responsive apps that improved UX consistency by 25%. For TotemBI and RideCentric, achieved a 30% performance boost through optimization. Specialized in converting wireframes to clean, scalable code. (URL: https://bit.ly/quartolab)"
		},
		{
			"role": "Instructor, Advanced WordPress Developer",
			"company": "SoftTech-IT Institute",
			"year": "2014 - 2015",
			"description": "Taught foundational web development (HTML, CSS, PHP, WordPress). Guided students through the full lifecycle: from PSD-to-HTML conversion and W3C validation to live server deployment and bug fixing."
		},
		{
			"role": "Jr. IP Engineer, NOC",
			"company": "1Asia Alliance Communication LTD.",
			"year": "2013 - 2014",
			"description": "Troubleshot IP and Transmission related problems using NMS, OTDR. Monitored Nationwide Network and coordinated with upstream IPLC Links."
		},
		{
			"role": "Trainee Engineer, O&M (Electrical)",
			"company": "Wärtsilä Bangladesh Ltd",
			"year": "2012 - 2013",
			"description": "Operated & maintained power plant production. Operated plant within acceptable loading limits & under plant dispatch directives."
		}
	],
	"education": [
		{
			"degree": "BSC in Electrical and Electronic Engineering",
			"institution": "United International University, Dhaka",
			"year": "2011",
			"result": "CGPA 3.58",
			"note": "Major in Communication. Thesis on Performance Enhancement of Solar PV system."
		},
		{
			"degree": "Higher Secondary Certificate (H.S.C)",
			"institution": "Dhaka City Collage, Dhaka",
			"year": "2006",
			"result": "CGPA 4.50"
		},
		{
			"degree": "Secondary School Certificate (S.S.C)",
			"institution": "Dhanmondi Government Boys’ High School, Dhaka",
			"year": "2004",
			"result": "CGPA 4.69"
		}
	],
	"certifications": [
		{ "title": "PHP, MySQL and Laravel", "institution": "SoftTech-IT Institute", "year": "2016" },
		{ "title": "Advanced WordPress Development", "institution": "SoftTech-IT Institute", "year": "2013" },
		{ "title": "CCNA", "institution": "United International University", "year": "2013" }
	],
	"testimonials": [
		{ "name": "Debora Jeldika", "role": "Client", "text": "I've used him over and over again. He has resolved my issues. He is very good." },
		{
			"name": "Mister Energy",
			"role": "Fund Manager",
			"text": "Skilled, professional, easy to communicate with and had a great understanding of what was desired. Excellent work!"
		},
		{
			"name": "L.D",
			"role": "Professional Singer",
			"text": "Great service and good work. Coderweb has fixed some unusual errors that we have not been able to figure out. If I ever have any more issues he will be the first I come to for help. Thank you!"
		}
	],
	"skill_metrics": [
		{ "name": "HTML5", "percent": 98 },
		{ "name": "CSS3", "percent": 96 },
		{ "name": "Angular", "percent": 95 },
		{ "name": "WordPress", "percent": 95 },
		{ "name": "React", "percent": 85 },
		{ "name": "jQuery", "percent": 85 },
		{ "name": "PHP", "percent": 75 },
		{ "name": "Laravel", "percent": 70 }
	],
	"services": [
		{
			"title": "Frontend Development",
			"icon": "fa-html5",
			"description": "Building immersive, high-performance web applications using modern frameworks like React, Angular, and Vue.js. I specialize in integrating robust RESTful and GraphQL APIs to craft seamless user experiences, responsive interfaces, and scalable component architectures."
		},
		{
			"title": "WordPress Development",
			"icon": "fa-wordpress",
			"description": "Extending beyond flexible blogs to robust CMS solutions. I build custom themes, plugins, and dynamic sites using Elementor and modern page builders, ensuring your site is secure, fast, and easy to manage."
		},
		{
			"title": "PHP & Backend Solutions",
			"icon": "fa-code",
			"description": "Developing secure, interactive backends using modern PHP and Laravel. I create efficient RESTful & GraphQL APIs to power your frontend, ensuring seamless data flow and logical business operations with minimal maintenance."
		},
		{
			"title": "E-commerce Development",
			"icon": "fa-shopping-cart",
			"description": "Creating dynamic online stores that convert. From WooCommerce heavy-lifting to custom e-commerce experiences, I ensure secure transactions, smooth inventory management, and a 'wow' factor for your customers."
		},
		{
			"title": "AI-Augmented Development",
			"icon": "fa-robot",
			"description": "Leveraging the power of AI (LLMs, Agents) to accelerate development workflows, code generation, and intelligent feature integration, ensuring you get cutting-edge solutions faster."
		}
	],
	"fun_facts": [
		{ "label": "SHOTS CAPTURED", "value": "24000", "icon": "icon-instagram-1" },
		{ "label": "PROJECTS COMPLETED", "value": "150", "icon": "icon-jabber" },
		{ "label": "SATISFIED CUSTOMERS", "value": "199", "icon": "icon-child" },
		{ "label": "CYCLED", "value": "15600 KM", "icon": "icon-bicycle" }
	],
	"process": [
		{ "step": "IDEA", "icon": "icon-lamp" },
		{ "step": "CONCEPT", "icon": "fa-puzzle-piece" },
		{ "step": "DESIGN", "icon": "icon-brush" },
		{ "step": "DEVELOP", "icon": "fa-code" },
		{ "step": "TEST", "icon": "fa-bug" },
		{ "step": "LAUNCH", "icon": "fa-rocket" }
	],
	"platforms": [
		{ "name": "Fiverr", "url": "https://www.fiverr.com/coderweb", "image": "http://www.applemahmood.com/wp-content/uploads/2017/05/fiverr.png" },
		{ "name": "FiveSquid", "url": "https://www.fivesquid.com/freelancer/coderweb", "image": "http://www.applemahmood.com/wp-content/uploads/2017/05/fivesquid.png" },
		{ "name": "Freelancer", "url": "https://www.freelancer.com/u/Appl1e", "image": "http://www.applemahmood.com/wp-content/uploads/2017/05/freelancer.png" },
		{ "name": "Upwork", "url": "https://www.upwork.com/o/profiles/users/_~01ad718ba5eee6b4f2/", "image": "http://www.applemahmood.com/wp-content/uploads/2017/05/upwork-logo.png" }
	],
	"projects": [
		{
			"title": "DocMedilink",
			"description": "Healthcare collaboration platform connecting doctors and patients. Features video calling, SMS gateway chat, and doctor scheduling. Built with React, TypeScript, and Mantine.",
			"tags": ["React", "TypeScript", "Mantine", "RestApi"]
		},
		{
			"title": "Align Wellness",
			"description": "Corporate healthcare event management platform functioning as a portal for Companies, Employees, Vendors, and Brokers. Features complex event organization tools.",
			"tags": ["Angular", "Ng Bootstrap", "GraphQL", "Socket.io"]
		},
		{
			"title": "Quartolab",
			"description": "Knowledge crowdsourcing and employee engagement platform. Features include file management, task management, forums, and analytics.",
			"tags": ["Frontend", "Web Application", "Collaboration"]
		},
		{
			"title": "Living Fit Corporate Wellness",
			"description": "COVID-19 testing management system for US School Districts. Handled frontend development for testing and reporting interfaces.",
			"tags": ["Angular", "Frontend", "Healthcare"]
		},
		{
			"title": "Adolphus Tower",
			"description": "Showcase website for a downtown Dallas building. Features an interactive SVG building model and Google Maps integration for POIs.",
			"tags": ["Frontend", "SVG", "Interactive", "Google Maps"]
		},
		{
			"title": "Vineyard at Florence",
			"description": "Website template for a luxury vineyard resort. Implemented with SCSS and Bootstrap 5.",
			"tags": ["HTML", "SCSS", "Bootstrap 5", "jQuery"]
		},
		{
			"title": "Redlime Solutions",
			"description": "Corporate website for a software development company. Built with a focus on clean professional design.",
			"tags": ["HTML", "SCSS", "Bootstrap 5"]
		},
		{
			"title": "Priyopustok",
			"description": "Online bookshop with unique e-commerce functionalities.",
			"tags": ["WordPress", "WooCommerce", "Woodmart"]
		},
		{
			"title": "Desha",
			"description": "Online store dedicated to women entrepreneurs.",
			"tags": ["WordPress", "WooCommerce", "Woodmart"]
		},
		{
			"title": "Nobodesh",
			"description": "Online news portal built with high-performance theme customization.",
			"tags": ["WordPress", "Avada"]
		}
	],
	"top_skills": ["Next.js", "React", "Angular", "TypeScript", "AI Integration", "WordPress", "Laravel", "Tailwind CSS"],
	"soft_skills": ["Team Player", "Organized", "Fast Learner", "Motivated", "Time-savvy"],
	"tech_stack": {
		"languages": ["JavaScript", "TypeScript", "PHP", "HTML5", "CSS3", "SCSS", "SQL"],
		"frameworks": ["Next.js", "React", "Angular", "Vue.js", "Laravel", "jQuery", "Astro"],
		"cms_specialties": ["WordPress", "WordPress Theme Development", "WordPress Plugin Development", "WooCommerce"],
		"ui_libraries": ["Tailwind CSS", "ReUI", "Shadcn/UI", "Mantine UI", "Ant Design", "Bootstrap 5", "React Bootstrap", "Ng Bootstrap", "Base UI"],
		"state_management_forms": ["TanStack Query", "React Hook Form", "Yup", "Zod", "Jotai", "React Router DOM"],
		"visuals_charts": ["Framer Motion", "AOS", "Apex Charts", "Swiper", "Owl Carousel", "Revolution Slider"],
		"backend_data": ["Prisma", "MySQL", "REST API", "GraphQL", "Firebase"],
		"tools": ["Git", "Vite", "Agora SDK", "NPM/Yarn"]
	}
}
```

---

## SECTION 4: PROMPT LIBRARY (FOR v0 / Bolt / Loveable)

**Use these specific prompts to generate coherent UI components in external tools.**

### 🟢 Prompt 1: The Hero Section (v0.dev)

> "Generate a Hero Section for a personal portfolio in Next.js + Tailwind. Theme: Light Mode, Technical, 'Coding Wizard'.
> **Background:** White/Light Gray Gradient.
> **Interaction:** Add floating, blurred colorful orbs in the background (Blue/Purple).
> **Content:** Center alignment.
>
> 1. A Badge that says 'Available for Hire' in a pill shape.
> 2. H1 Headline: '[Insert Name]' in a Monospace Font (JetBrains Mono style). Large, bold.
> 3. H2 Subheadline: 'Full Stack Developer & UI Architect'.
> 4. Two Buttons: 'View Projects' (Glassmorphism, dark text) and 'Contact Me' (Solid Indigo).
>    **Tech:** Use Framer Motion for a staggered entrance animation."

### 🟢 Prompt 2: The Project Card (Bolt.new / v0)

> "Create a 'Project Showcase' card component.
> **Style:** Glassmorphism card (White/70, backdrop blur).
> **Layout:** Image on top (aspect video), Content below.
> **Typography:** Title in Monospace. Description in clean Sans.
> **Tech Details:** A row of badges for technologies used (React, Node, etc.).
> **Hover:** entire card lifts up, and a subtle blue glow appears around the border."

---

## SECTION 5: DEVELOPMENT ROADMAP

- [ ] **Phase 1: Discovery** (Extracting data from old site) 👈 _WE ARE HERE_
- [ ] **Phase 2: Setup** (Initialize Next.js, Tailwind, Framer Motion)
- [ ] **Phase 3: Components** (Build Header, Hero, Footer, Project Cards)
- [ ] **Phase 4: Pages** (Home, About, Projects, Contact)
- [ ] **Phase 5: Polish** (Animations, SEO, Mobile Responsiveness)
