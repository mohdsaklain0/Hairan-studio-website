export const SITE = {
  name: "Hairan Studio",
  tagline: "AI-Powered Creative Agency",
  email: "hello@hairanstudio.com",
  phone: "+91-8433065158",
  address: "Q 412, Sector 40, Gurugram, Haryana 122102",
  whatsapp: "https://wa.me/918433065158",
  url: "https://hairanstudio.com",
};

export const SOCIALS = [
  { name: "YouTube", url: "https://youtube.com/@hairanstudio" },
  { name: "Instagram", url: "https://www.instagram.com/hairanstudio/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/112523326/" },
  { name: "X", url: "https://x.com/HairanStudio" },
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Hairan-Studio/61577476337799/",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "10x", label: "Faster Delivery" },
  { value: "70%", label: "Lower Production Cost" },
  { value: "4+", label: "Brands Served" },
];

export const SERVICES = [
  {
    title: "AI Brand Films",
    description:
      "Cinematic short films crafted entirely with AI for product launches, brand stories, and campaigns",
    icon: "Film",
  },
  {
    title: "AI Ad Creatives",
    description:
      "High-performing visual ads for Meta, Google, and YouTube built with AI at scale",
    icon: "Megaphone",
  },
  {
    title: "AI Product Shoots",
    description:
      "Studio-quality product imagery without a physical studio, powered by AI generation",
    icon: "Camera",
  },
  {
    title: "AI Social Media Content",
    description:
      "Scroll-stopping Instagram, LinkedIn, and YouTube content delivered weekly",
    icon: "Share2",
  },
  {
    title: "AI Video Commercials",
    description:
      "15-60 second TVC-grade commercials produced with AI tools end-to-end",
    icon: "Clapperboard",
  },
  {
    title: "AI CGI & 3D Content",
    description:
      "Photorealistic 3D renders and CGI-style visuals for social and advertising",
    icon: "Box",
  },
  {
    title: "AI Storyboarding",
    description:
      "Detailed visual storyboards for campaigns and brand films before production begins",
    icon: "LayoutPanelTop",
  },
  {
    title: "AI Multilingual Adaptation",
    description:
      "One campaign adapted into multiple languages and regions using AI dubbing",
    icon: "Globe",
  },
];

export const PROJECTS = [
  {
    client: "BKT Tyres",
    description:
      "Founder's Day brand film celebrating legacy and innovation through AI-powered cinematic storytelling",
    media: { type: "video" as const, src: "/images/portfolio/bkt-preview.mp4" },
    image: "/images/portfolio/bkt-poster.jpg",
  },
  {
    client: "Artize by Jaquar",
    description:
      "Luxury bathroom fittings brought to life with AI-generated premium lifestyle visuals",
    media: {
      type: "video" as const,
      src: "/images/portfolio/artize-preview.mp4",
    },
    image: "/images/portfolio/artize-poster.jpg",
  },
  {
    client: "The Sleep Company",
    description:
      "Festival and seasonal campaigns with photorealistic AI product imagery",
    media: {
      type: "image" as const,
      src: "/images/portfolio/tsc-1.png",
    },
    image: "/images/portfolio/tsc-1.png",
  },
  {
    client: "Kartik Seeds",
    description:
      "Animated 3D commercial showcasing agricultural products with vibrant AI-generated visuals",
    media: {
      type: "video" as const,
      src: "/images/portfolio/kartik-preview.mp4",
    },
    image: "/images/portfolio/kartik-poster.jpg",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Brief",
    description: "You share your vision, goals, and brand guidelines",
  },
  {
    step: "02",
    title: "Concept",
    description: "We craft AI-powered creative concepts and storyboards",
  },
  {
    step: "03",
    title: "Production",
    description: "Our AI pipeline produces high-quality content at speed",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Polished, ready-to-publish assets delivered on time",
  },
];

export const TEAM = [
  // Temporarily hidden — uncomment to restore
  // {
  //   name: "Mohd Sibtain",
  //   role: "Co-Founder & CEO",
  //   bio: "Leads vision, strategy, and creative direction",
  //   image: "/images/team/mohd-sibtain.png",
  // },
  // {
  //   name: "Rishabh Agarwal",
  //   role: "Co-Founder & COO",
  //   bio: "Heads operations, delivery, and client success",
  //   image: "/images/team/rishabh-agarwal.png",
  // },
  {
    name: "Mohd Saklain",
    role: "Co-Founder & CTO",
    bio: "Runs AI production, tech, and digital infrastructure",
    image: "/images/team/mohd-saklain.png",
  },
];

export const BUDGET_OPTIONS = [
  "Under ₹50K",
  "₹50K - ₹1L",
  "₹1L - ₹5L",
  "₹5L+",
];
