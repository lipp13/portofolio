import heroImage from "../assets/me.jpeg";
import cv from "/public/cv/CV_PORTOFOLIO_Alif_Alfathar.pdf";
import project1Thumbnail from "../assets/images/coffee.png";
import project2Thumbnail from "../assets/images/farmasi.png";
import project3Thumbnail from "../assets/images/report.png";
import project4Thumbnail from "../assets/images/library.png";
import project5Thumbnail from "../assets/images/EduTrack.png";
import project6Thumbnail from "../assets/images/e-commerce.png";

export const portfolioData = {
  personal: {
    name: "Alif Alfathar",
    roles: ["Full Stack Developer", "Backend Engineer", "Problem Solver"],
    tagline:
      "Building digital products with clean code and meaningful experiences.",
    email: "alifalfathar13@gmail.com",
    location: "Indonesia",
    profileImage: heroImage,
    cvUrl: cv,
  },

  social: {
    github: "https://github.com/lipp13",
    linkedin: "https://www.linkedin.com/in/alif-alfathar-183402407/",
    instagram: "https://www.instagram.com/alfthrr13/",
    email: "mailto:alifalfathar13@gmail.com",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ],

  about: {
    intro:
      "Saya adalah developer yang passionate dalam membangun solusi digital yang efisien, scalable, dan user-friendly. Dengan latar belakang full stack, saya menikmati proses mengubah ide menjadi produk nyata.",
    passion:
      "Passion saya dimulai saat pertama kali menulis baris kode sederhana. Sejak itu, teknologi menjadi cara saya mengekspresikan kreativitas dan menyelesaikan masalah nyata. Saya percaya bahwa kode yang baik bukan hanya berfungsi, tapi juga mudah dipelihara.",
    currentFocus:
      "Saat ini fokus mendalami arsitektur backend, system design, dan best practices dalam pengembangan aplikasi web modern.",
    careerGoal:
      "Berkontribusi pada produk teknologi yang berdampak positif, bekerja dengan tim yang solid, dan terus berkembang sebagai software engineer.",
    stats: [
      { label: "Projects", value: "15+" },
      { label: "Years Coding", value: "3+" },
      { label: "Technologies", value: "20+" },
    ],
  },

  skills: {
    categories: [
      {
        name: "Frontend",
        items: [
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
          { name: "JavaScript", icon: "javascript" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
        ],
      },
      {
        name: "Backend",
        items: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "Laravel", icon: "laravel" },
          { name: "PHP", icon: "php" },
        ],
      },
      {
        name: "Database",
        items: [
          { name: "MySQL", icon: "mysql" },
          { name: "PostgreSQL", icon: "postgresql" },
        ],
      },
      {
        name: "Tools",
        items: [
          { name: "Git", icon: "git" },
          { name: "Docker", icon: "docker" },
          { name: "Figma", icon: "figma" },
        ],
      },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Coffe-shop-website",
      description:
        "Website coffe-shop yang menjual berbagai jenis kopi dan minuman lainnya.",
      thumbnail: project1Thumbnail,
      techStack: ["HTML", "CSS", "JS"],
      category: "Web App",
      status: "Completed",
      liveUrl: "https://coffe-shop-platfrom.netlify.app/",
      githubUrl: "https://github.com/lipp13/coffee-shop-website.git",
    },
    {
      id: 2,
      title: "farmasi-management-system",
      description:
        "Web application untuk manajemen farmasi dengan fitur inventaris, pemesanan, dan laporan.",
      thumbnail: project2Thumbnail,
      techStack: ["Node.js", "Express.js", "MongoDB", "Docker"],
      category: "Web App",
      status: "Completed",
      liveUrl: null,
      githubUrl: "https://github.com/lipp13/farmasi-management-system",
    },
    {
      id: 3,
      title: "report-sistem-masyarakat",
      description:
        "Web application untuk melaporkan masalah masyarakat dengan fitur pelacakan status laporan dan notifikasi.",
      thumbnail: project3Thumbnail,
      techStack: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
      category: "Web App",
      status: "Completed",
      liveUrl: "https://report-sistem-masyarakat-xmc5.vercel.app/",
      githubUrl: "https://github.com/lipp13/report-sistem-masyarakat",
    },
    {
      id: 4,
      title: "digital-library-app",
      description:
        "Web application untuk mengelola perpustakaan digital dengan fitur peminjaman buku, katalog, dan rekomendasi bacaan.",
      thumbnail: project4Thumbnail,
      techStack: ["React", "Next.js", "Tailwind CSS"],
      category: "Web App",
      status: "Completed",
      githubUrl: "https://github.com/lipp13/perpustakaan-digital-beta",
    },
    {
      id: 5,
      title: "EduTrack Management System",
      description:
        "UI/UX design untuk sistem manajemen pendidikan yang mencakup fitur pelacakan kemajuan siswa, manajemen kurikulum, dan analisis data.",
      thumbnail: project5Thumbnail,
      techStack: ["Figma"],
      category: "UI/UX Design",
      status: "Completed",
      liveUrl:
        "https://www.figma.com/design/zLxYAJ1yN0i78TiRQIz1eF/Untitled?node-id=0-1&t=DFjGCNZCebYCDisf-1",
    },
    {
      id: 6,
      title: "E-Commerce Platform",
      description:
        "UI/UX design untuk platform e-commerce yang mencakup fitur katalog produk, keranjang belanja, dan proses checkout.",
      thumbnail: project6Thumbnail,
      techStack: ["Figma"],
      category: "UI/UX Design",
      status: "Completed",
    },
  ],

  projectFilters: ["All", "Web App", "UI/UX Design"],

  experience: [
    {
      id: 1,
      company: "Coffee-Shop-Website",
      position: "Basic Web Developer",
      duration: "Des 2024 — Jan 2025",
      description:
        "Membuat Website dan Aplikasi Web untuk berbagai project pribadi, termasuk pengembangan fitur, optimisasi performa, dan deployment ke cloud.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      company: "Digital-Library-School",
      position: "Full Stack Developer",
      duration: "Jun 2025 - Nov 2025",
      description:
        "Membuat Aplikasi Web digital library school, termasuk fitur CRUD, autentikasi pengguna, dan integrasi database.",
      technologies: ["Next.js", "React & React-DOM", "MySQL", "Tailwind CSS"],
    },
    {
      id: 3,
      company: "Report-Sistem-Masyarakat",
      position: "Full Stack Developer",
      duration: "2026 - Present",
      description:
        "Membuat Aplikasi Web untuk laporan masyarakat, termasuk fitur pelaporan, pelacakan status, dan notifikasi.",
      technologies: [
        "React",
        "Vite",
        "Leaflet",
        "MySQL",
        "Axios",
        "React Hook Form & Zod",
      ],
    },
  ],

  achievements: [
    {
      id: 1,
      title: "Pengembangan Aplikasi Web E-Commerce",
      type: "Certificate",
      issuer: "SMK Taruna Bhakti",
      date: "2025",
      description:
        "Berhasil menyelesaikan Uji Kompetensi Digital SMK Taruna Bhakti yang menguji kemampuan dalam membangun aplikasi web E-Commerce, implementasi fitur, serta penerapan praktik pengembangan perangkat lunak.",
      url: null,
    },
    {
      id: 2,
      title: "Pengembangan Aplikasi Multi-Platform",
      type: "Certificate",
      issuer: "SMK Taruna Bhakti",
      date: "2026",
      description:
        "Berhasil menyelesaikan pelatihan Pengembangan Aplikasi Multi-Platform yang membahas analisis kebutuhan, pengembangan aplikasi berbasis web dan mobile, integrasi database, serta penerapan praktik terbaik dalam pengembangan perangkat lunak modern.",
      url: null,
    },
    {
      id: 3,
      title: "Project Management",
      type: "Certificate",
      issuer: "Dicoding Indonesia ",
      date: "2026",
      description:
        "Menyelesaikan kelas Project Management dari Dicoding Indonesia dengan materi perencanaan proyek, penyusunan timeline, manajemen risiko, kolaborasi tim, serta implementasi Agile dalam pengembangan software.",
      url: "https://www.dicoding.com/certificates/JMZVO7OROXN9",
    },
  ],

  contact: {
    cta: "Let's build something amazing together.",
    subtitle:
      "Punya ide project atau ingin berkolaborasi? Kirim pesan dan saya akan merespons secepatnya.",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} liftech. All rights reserved.`,
  },
};

export default portfolioData;
