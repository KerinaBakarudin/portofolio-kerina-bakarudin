import React, { useState, useEffect } from 'react';
import fotoProfil from './assets/foto_pkm.jpg';
import siasBapenda from './assets/siasbapenda.png';
import lampungExplore from './assets/lampungexplore.png';
import tokoKue from './assets/tokokue.png';
import protextify from './assets/protextify.png';
import basarnas from './assets/basarnas.png';
import healthyblood from './assets/healthyblood.png';
import satgasppkpt from './assets/satgasppkpt.png';
import smartdorm from './assets/smartdorm.png';

// --- ICONS ---
const IconUser = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
    <circle cx="12" cy="7" r="4" />
    <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const IconLight = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M4.93 4.93l2.83 2.83"></path><path d="M16.24 16.24l2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M4.93 19.07l2.83-2.83"></path><path d="M16.24 7.76l2.83-2.83"></path></svg>
);

const IconBolt = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
);

const IconCode = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-sky-600"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const IconArrowDown = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400 animate-bounce"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
);

const IconGraduation = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

const IconMenu = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const IconX = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.061-1.865-3.061-1.867 0-2.154 1.459-2.154 2.964v5.701h-3v-11h2.88v1.503h.042c.4-.759 1.381-1.559 2.839-1.559 3.039 0 3.601 2.001 3.601 4.603v6.453z"/></svg>
);
const IconGithub = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const IconAward = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const IconExternalLink = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const App = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const email = "kerinabakarudin7@gmail.com";

  const menuLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }, 
    { name: 'Certifications', href: '#certifications' },
  ];
  
  const skills = [
    "Web Developer",
    "Android Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Video Editor"
  ];

  const projectsData = {
    "UI/UX Design": [
      {
        name: "Satgas PPKPT Universitas Lampung",
        desc: "Desain aplikasi mobile untuk mendukung pelaporan dan pencegahan kekerasan di lingkungan Universitas Lampung, dengan fokus pada kemudahan akses, keamanan pengguna, dan kenyamanan dalam menyampaikan laporan.",
        image: satgasppkpt,
        link: "https://www.figma.com/proto/1Si8mTC7UgJsX0iPGm6l6O/SATGAS-PPKPT-UNILA?node-id=37-2&p=f&t=zIZyTPQOsRN1mUo0-1&scaling=scale-down&content-scaling=fixed&page-id=5%3A2&starting-point-node-id=37%3A2&show-proto-sidebar=1"
      },
      {
        name: "Presensi Basarnas Lampung",
        desc: "Desain aplikasi presensi digital yang memudahkan pencatatan kehadiran serta pengajuan izin dan cuti pegawai Basarnas, dengan alur yang sederhana dan efisien.",
        image: basarnas,
        link: "https://www.figma.com/proto/Fjv5ZPqdffT4mzqgUJeTts/Presensi-Basarnas?node-id=1970-8674&p=f&t=0jnoph5h7mUDd8PZ-1&scaling=scale-down&content-scaling=fixed&page-id=1899%3A6070&starting-point-node-id=1970%3A8674&show-proto-sidebar=1"
      },
      {
        name: "HealthyBlood",
        desc: "Desain aplikasi donor darah yang menyediakan informasi stok darah, artikel edukasi, serta sistem reward untuk meningkatkan minat dan partisipasi masyarakat dalam donor darah.",
        image: healthyblood,
        link: "https://www.figma.com/proto/ypS38MTIFq1UWRI6vE1led/HealthyBlood?node-id=23-34&p=f&t=pwMpDPAMVgQPw0Wk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=137%3A9&show-proto-sidebar=1"
      },      
      {
        name: "SmartDorm",
        desc: "Desain sistem informasi untuk mengatur jadwal kebersihan dan pelaporan masalah di lingkungan kos, dengan tujuan menciptakan hunian yang lebih tertata dan nyaman.",
        image: smartdorm,
        link: "https://www.figma.com/proto/WALm2NaVJEA6hkLHKNuQE9/SmartDorm?node-id=90-437&p=f&t=UPadF4E1Y96Bo2K2-1&scaling=scale-down&content-scaling=fixed&page-id=90%3A436&starting-point-node-id=90%3A1785"
      },
    ],
    "Web Development": [
      {
        name: "SIAS Bapenda Lampung",
        desc: "SIAS Bapenda Lampung merupakan sistem informasi arsip surat internal yang dirancang untuk mendukung pengelolaan dokumen secara digital di lingkungan Bapenda Provinsi Lampung. Sistem ini memudahkan proses disposisi surat dari sub bagian umum ke berbagai bidang terkait secara lebih cepat, terstruktur, dan efisien.",
        image: siasBapenda,
        link: "https://siasbapenda.free.nf/",
        demo: {
          username: "umum",
          password: "umum5"
        }
      },
      {
        name: "Protextify",
        desc: "Protextify adalah platform virtual class yang dikembangkan dalam program pendanaan PKM Kewirausahaan 2025, dengan fokus pada pencegahan plagiarisme. Platform ini membantu pengguna menghasilkan tulisan yang lebih orisinal melalui fitur pendukung yang mendorong integritas dan kualitas dalam proses penulisan.",
        image: protextify,
        link: "https://protextify-frontend.vercel.app/",
        demo: {
          username: "demo@gmail.com",
          password: "123"
        }
      },
      {
        name: "Toko Kue Ibu Anin",
        desc: "Platform toko kue digital yang memudahkan pelanggan dalam melihat produk, menambahkan ke keranjang, serta melakukan pemesanan secara online. Selain itu, pengguna juga dapat memberikan ulasan untuk meningkatkan kepercayaan dan kualitas layanan.",
        image: tokoKue,
        link: "https://toko-kue.free.nf/",
        demo: {
          username: "totorocute",
          password: "toto"
        }
      },
      {
        name: "Lampung Explore",
        desc: "Website yang menyajikan informasi berbagai destinasi wisata di Lampung. Platform ini dilengkapi dengan fitur pemesanan tiket, serta sistem rating dan ulasan untuk membantu pengguna dalam menentukan pilihan destinasi.",
        image: lampungExplore,
        link: "https://lampung-explore.free.nf/",
        demo: {
          username: "aning",
          password: "aning"
        }
      },
    ],
  };

  const skillGroups = [
    {
      category: "Web Development",
      // Link logo PHP dan React.js diperbarui agar lebih stabil
      skills: [
        { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
        { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
        { name: "PHP", icon: "https://skillicons.dev/icons?i=php" }, 
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "React.js", icon: "https://skillicons.dev/icons?i=react" },
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "Kotlin", icon: "https://skillicons.dev/icons?i=kotlin" },
        { name: "Android Studio", icon: "https://skillicons.dev/icons?i=androidstudio" },
        { name: "Flutter", icon: "https://skillicons.dev/icons?i=flutter" },
        { name: "Dart", icon: "https://skillicons.dev/icons?i=dart" },
      ]
    },
    {
      category: "Design & Creative",
      // PERBAIKAN: Menggunakan link gambar langsung untuk Canva, Corel, CapCut
      skills: [
        { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
        { name: "Canva", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdaQ2XlVIZmlRLCqeJbgCZV9voCw53JozEWg&s" },
        { name: "Corel Draw", icon: "https://images.seeklogo.com/logo-png/37/1/coreldraw-2019-logo-png_seeklogo-377875.png" },
        { name: "CapCut", icon: "https://upload.wikimedia.org/wikipedia/id/3/36/CapCut_logo.png" }, 
      ]
    },
    {
      category: "Cloud & Database",
      skills: [
        { name: "Google Cloud Platform", icon: "https://skillicons.dev/icons?i=gcp" },
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
        { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Email', icon: <IconMail />, href: `mailto:${email}` },
    { name: 'Instagram', icon: <IconInstagram />, href: 'https://instagram.com/kerina_b' },
    { name: 'LinkedIn', icon: <IconLinkedin />, href: 'https://www.linkedin.com/in/kerina-bakarudin-38a407265/' },
    { name: 'GitHub', icon: <IconGithub />, href: 'https://github.com/KerinaBakarudin' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    // Notifikasi "Copied" hilang setelah 2 detik
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % skills.length;
      const fullText = skills[i];

      setText(
        isDeleting 
          ? fullText.substring(0, text.length - 1) 
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Durasi berhenti saat teks lengkap
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="bg-[#f0f9ff] text-slate-800 font-sans scroll-smooth min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-lg border-b border-sky-100 px-6 md:px-8 py-4 flex justify-between items-center">

      {/* LOGO */}
      <div className="font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500 text-lg md:text-xl">
        Kerina's Portfolio
      </div>

      {/* DESKTOP MENU */}
      <div className="flex items-center gap-12">
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-sm font-bold text-slate-500">
          {menuLinks.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-sky-600 transition-colors">
              {item.name}
            </a>
          ))}
        </div>

        {/* DESKTOP BUTTON */}
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-sky-100 hover:shadow-sky-200 transition-all active:scale-95"
        >
          Contact Me
        </a>
        
      </div>

      {/* HAMBURGER (MOBILE) */}
      <button
        className="md:hidden text-slate-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IconX /> : <IconMenu />}
      </button>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-sky-100 flex flex-col items-center py-6 gap-6 md:hidden shadow-lg">
          {menuLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-600 font-medium hover:text-sky-600 transition"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-gradient-to-tr from-sky-50 via-white to-blue-50">
        
        <div className="absolute top-20 -left-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10 flex flex-col items-center pt-10">
          
          {/* Avatar with Glow */}
          {/* <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-32 h-32 bg-white rounded-full mb-8 border-4 border-white shadow-xl overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kerina" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div> */}

          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-100 bg-sky-50/50 backdrop-blur-sm text-sky-700 text-xs font-bold mb-8 shadow-sm">
            <IconLight /> CS Student @ UNILA & Teaching Assistant
          </div> */}
          
          <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-none text-slate-900">
            Halo, saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">Kerina Bakarudin</span>
          </h1>
          
          {/* KONSEP TYPING ANIMATION */}
          <p className="text-slate-500 text-2xl md:text-3xl font-medium mb-10 h-12">
            I'm a <span className="text-sky-600 font-bold border-r-4 border-sky-600 pr-1 animate-pulse">
              {text}
            </span>
          </p>
          
          <p className="text-sm md:text-base text-slate-900 max-w-3xl leading-relaxed mb-12 font-normal">
            Mahasiswa Ilmu Komputer yang berfokus pada pengembangan sistem informasi dan desain pengalaman pengguna.
            Saya juga memiliki keterampilan di bidang desain grafis dan editing video, sehingga mampu menggabungkan aspek teknis dan kreatif dalam setiap karya yang saya buat.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-sky-200 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 active:scale-95">
              My Projects
            </a>
            <a href="#contact" className="bg-white/80 backdrop-blur-md border border-sky-200 text-sky-600 px-8 py-4 rounded-2xl font-bold hover:bg-sky-50 transition-all hover:-translate-y-1 flex items-center gap-2 active:scale-95">
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <IconArrowDown />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center md:items-center mb-12">
            <div className="flex items-center gap-2 text-sky-600 text-xs font-bold uppercase mb-4 tracking-[0.2em]">
              <IconUser /> About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Get to know <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">More About Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-sky-100 mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-[1fr,1.4fr] gap-12 lg:gap-20 items-center">
            
            {/* KOLOM KIRI: FOTO & QUICK INFO */}
            <div className="flex flex-col gap-8 items-center">
              <div className="relative group p-4 bg-white border border-sky-100 shadow-2xl shadow-sky-100/50 rounded-[3rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-blue-100 rounded-[3rem] group-hover:scale-105 transition-transform duration-500"></div>
                <div className="relative w-full aspect-square md:w-72 md:h-72 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-inner">
                  <img 
                    src={fotoProfil}
                    alt="Kerina Bakarudin" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Info Box dengan Alignment Rapi */}
              <div className="w-full max-w-sm bg-sky-50/50 backdrop-blur-sm border border-sky-100 p-7 rounded-[2rem] space-y-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex flex-shrink-0 items-center justify-center bg-white rounded-2xl text-sky-500 shadow-sm border border-sky-100">
                    <IconGraduation />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Pendidikan</p>
                    <p className="text-sm font-bold text-slate-800 leading-tight">Ilmu Komputer, Universitas Lampung (2022-sekarang)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex flex-shrink-0 items-center justify-center bg-white rounded-2xl text-sky-500 shadow-sm border border-sky-100">
                    <span className="text-xl font-black">★</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">IPK</p>
                    <p className="text-xl font-black text-sky-600 leading-tight">3.77 <span className="text-[10px] text-slate-400 font-normal">/ 4.00</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* KOLOM KANAN: DESKRIPSI & CTA */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg text-justify md:text-left">
                <p>
                  Halo! Saya <strong className="text-slate-800">Kerina Bakarudin</strong>, mahasiswa Ilmu Komputer semester akhir di Universitas Lampung yang berfokus pada <span className="text-sky-600 font-bold">pengembangan web, aplikasi mobile,</span> serta <span className="text-sky-600 font-bold">desain UI/UX</span>. Saya memiliki ketertarikan mendalam dalam memahami kebutuhan pengguna untuk menciptakan <span className="text-sky-600 font-bold">solusi digital</span> yang tepat guna dan estetik.
                </p>
                <p>
                  Selain itu, saya juga aktif mengeksplorasi bidang kreatif seperti 
                  <span className="text-sky-600 font-bold"> desain grafis </span> dan 
                  <span className="text-sky-600 font-bold"> editing video</span>, serta berpengalaman dalam berbagai organisasi, volunteer, dan kompetisi yang membentuk kemampuan 
                  <span className="text-sky-600 font-bold"> kerja sama tim</span> dan <span className="text-sky-600 font-bold">manajemen waktu</span> yang baik.
                </p>
              </div>

              {/* Link Buttons dengan Layout Rata */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100 justify-center md:justify-start">
                <a 
                  href="https://drive.google.com/file/d/18c1-D-DMDdWcPukkwr33fDm4ytAu9j-X/view?usp=sharing" 
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm shadow-xl shadow-slate-200 hover:bg-sky-600 transition-all hover:-translate-y-1 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download CV
                </a>
                <a 
                  href="https://www.linkedin.com/in/kerina-bakarudin-38a407265/" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-sm hover:border-sky-300 hover:text-sky-700 hover:bg-sky-50 transition-all hover:-translate-y-1 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.061-1.865-3.061-1.867 0-2.154 1.459-2.154 2.964v5.701h-3v-11h2.88v1.503h.042c.4-.759 1.381-1.559 2.839-1.559 3.039 0 3.601 2.001 3.601 4.603v6.453z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="flex items-center gap-2 text-sky-600 text-xs font-bold uppercase mb-4 tracking-[0.2em]">
              <IconBriefcase /> Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">Work</span>
            </h2>
            <div className="w-20 h-1.5 bg-sky-100 mt-4 rounded-full"></div>

            <p className="pt-3 text-slate-400 text-xsm font-medium">
              Klik card di bawah ini untuk melihat hasil project 👇
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
      {[
        { 
          title: "UI/UX Design", 
          color: "from-sky-100 to-blue-100", 
          icon: "🎨",
          description: "Desain pengalaman pengguna yang intuitif dan mudah digunakan yang dirancang melalui analisis hingga menjadi prototype interaktif.",
          type: "modal" 
        },
        { 
          title: "Web Development", 
          color: "from-blue-100 to-indigo-100", 
          icon: "💻",
          description: "Pengembangan website yang berfokus pada fungsionalitas, performa, serta memberikan pengalaman pengguna yang efisien.",
          type: "modal" 
        },
        { 
          title: "Creative Projects", 
          color: "from-cyan-100 to-sky-100", 
          icon: "🎬",
          type: "link",
          link: "https://www.canva.com/design/DAHFQFiv_to/IlNhR5HZPYO2qHvMvHkxzA/view?utm_content=DAHFQFiv_to&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h69122877b3"
        }
      ].map((item) => (
        item.type === "modal" ? (
          /* TOMBOL UNTUK MODAL (UI/UX & WEB) */
          <button 
            key={item.title} 
            onClick={() => setSelectedCategory(item.title)}
            className="group text-left bg-white border border-sky-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-500 hover:-translate-y-2 outline-none relative overflow-hidden"
          >
            <div className={`h-40 rounded-[2rem] mb-6 bg-gradient-to-br ${item.color} flex items-center justify-center text-5xl group-hover:scale-105 transition duration-500`}>
              {item.icon}
            </div>
            <h3 className="text-2xl font-black mb-2 text-slate-900 group-hover:text-sky-600 transition">
              {item.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              {item.description}
            </p>

            {/* Tombol Indikator "Lihat Detail" */}
            <div className="flex items-center justify-end gap-2 text-sky-600 font-bold text-sm group-hover:gap-3 transition-all mt-auto pt-3 w-full">
              <span>Lihat Hasil</span>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>
        ) : (
          /* LINK LANGSUNG (CREATIVE PROJECTS) */
          <a 
            key={item.title} 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-sky-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
          >
            <div className={`h-40 rounded-[2rem] mb-6 bg-gradient-to-br ${item.color} flex items-center justify-center text-5xl group-hover:scale-105 transition duration-500`}>
              {item.icon}
            </div>
            <h3 className="text-2xl font-black mb-2 text-slate-900 group-hover:text-sky-600 transition">
              {item.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Karya kreatif berupa desain grafis dan video editing untuk menyampaikan pesan secara menarik dan komunikatif.
            </p>

            {/* Tombol Indikator "Lihat Detail" */}
            <div className="flex items-center justify-end gap-2 text-sky-600 font-bold text-sm group-hover:gap-3 transition-all mt-auto pt-3 w-full">
              <span>Lihat Hasil</span>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </a>
            )
          ))}
        </div>

          {/* MODAL DETAIL PROJECT */}
          {selectedCategory && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              {/* Backdrop (Klik luar untuk tutup) */}
              <div 
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                onClick={() => setSelectedCategory(null)}
              ></div>

              {/* Isi Modal */}
              <div className="relative w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
                <div className="p-8 md:p-12">
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="text-3xl font-black text-slate-900">{selectedCategory}</h3>
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className="w-12 h-12 flex items-center justify-center bg-slate-100 text-slate-500 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  {/* List Project di dalam Kategori */}
                  <div className="grid gap-8">
                    {projectsData[selectedCategory]?.map((proj, i) => (
                      <div key={i} className="group flex flex-col md:flex-row gap-8 items-center bg-sky-50/50 p-6 rounded-[2rem] border border-sky-100/50">
                        <div className="w-full md:w-48 h-32 bg-sky-200 rounded-2xl overflow-hidden shadow-inner flex-shrink-0">
                          <div className="w-full h-full flex items-center justify-center text-sky-400 font-bold"><img src={proj.image} /></div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-xl font-bold text-slate-900 mb-2">{proj.name}</h4>
                          <p className="text-slate-500 text-sm mb-3 leading-relaxed">{proj.desc}</p>

                          {/* LOGIKA CONDITIONAL RENDERING */}
                                  {proj.demo && (
                                    <div className="bg-white/60 border border-sky-200 p-3 rounded-xl mb-4">
                                      <p className="text-sky-700 text-[10px] font-black uppercase tracking-wider mb-1">
                                        🔑 Demo Account:
                                      </p>
                                      <p className="text-slate-600 text-xs">
                                        Username: <span className="font-mono font-bold">{proj.demo.username}</span> | 
                                        Password: <span className="font-mono font-bold">{proj.demo.password}</span>
                                      </p>
                                    </div>
                                  )}
                          <a 
                            href={proj.link}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border-2 border-sky-500 text-sky-600 font-bold rounded-xl text-xs hover:bg-sky-600 hover:text-white transition-all shadow-sm"
                          >
                            View Live Demo <IconExternalLink />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-b from-white to-sky-50/50 relative overflow-hidden">
      {/* Dekorasi background halus */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 text-sky-600 text-xs font-bold uppercase mb-4 tracking-[0.2em]">
            <IconCode /> Skills & Tools
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">Tech Stack</span>
          </h2>
          <div className="w-20 h-1.5 bg-sky-100 mt-4 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="bg-white border border-sky-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-500">
              <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-100 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
                  >
                    <img 
                      src={skill.icon}
                      alt={skill.name} 
                      className="w-6 h-6 transition-transform group-hover:scale-110"
                    />
                    <span className="text-sm font-bold text-slate-600">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CERTIFICATIONS */}
    <section id="certifications" className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Header Section */}
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="flex items-center gap-2 text-sky-600 text-xs font-bold uppercase mb-4 tracking-[0.2em]">
              <IconAward /> Licenses & Certifications
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">Credentials</span>
            </h2>
            <div className="w-20 h-1.5 bg-sky-100 mt-4 rounded-full"></div>
          </div>

          {/* Grid Sertifikat */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Cloud Computing Learning Path Graduate", 
                issuer: "Bangkit Academy led by Google, GoTo, Traveloka", 
                date: "2025", 
                link: "https://drive.google.com/file/d/14J3W_ZabMw7s7fEJdYzp9RZOVxuC-6bG/view?usp=drive_link" // Masukkan link kredensial dari dashboard Bangkit/Dicoding
              },
              { 
                title: "Menjadi Google Cloud Engineer", 
                issuer: "Dicoding Indonesia", 
                date: "Nov 2024",
                link: "https://www.dicoding.com/certificates/53XEQ9QJRXRN" 
              },
              { 
                title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud", 
                issuer: "Dicoding Indonesia", 
                date: "Nov 2024",
                link: "https://www.dicoding.com/certificates/KEXLYMLGYZG2" 
              },
              { 
                title: "Belajar Dasar Pemrograman JavaScript", 
                issuer: "Dicoding Indonesia", 
                date: "Nov 2024",
                link: "https://www.dicoding.com/certificates/GRX54JK4VP0M" 
              },
              { 
                title: "Belajar Dasar Structured Query Language (SQL)", 
                issuer: "Dicoding Indonesia", 
                date: "Aug 2024",
                link: "https://www.dicoding.com/certificates/2VX3R7JRNZYQ" 
              },
              { 
                title: "Belajar Dasar Git dengan GitHub", 
                issuer: "Dicoding Indonesia", 
                date: "Dec 2024",
                link: "https://www.dicoding.com/certificates/4EXG7M5MEPRL" 
              },
            ].map((cert, index) => (
              <div 
                key={index} 
                className="group bg-white/70 backdrop-blur-md border border-sky-100 p-8 rounded-[2.5rem] hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Container Flex agar Ikon dan Judul Sejajar */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-sky-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform duration-500">
                      <IconAward />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-sky-600 transition">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Info Issuer dan Date tetap di bawah judul */}
                  <div className="pl-[0rem]"> {/* Padding kiri agar sejajar dengan teks judul */}
                    <p className="text-slate-500 font-semibold text-sm mb-1">{cert.issuer}</p>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider italic">Issued {cert.date}</p>
                  </div>
                </div>

                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sky-600 font-bold text-sm hover:underline"
                >
                  Show Credential <IconExternalLink />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-16 px-6 bg-gradient-to-b from-white to-sky-50/50 border-t border-sky-100">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Compact CTA Box */}
        <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md border border-white p-8 rounded-[2rem] shadow-xl shadow-sky-100/40 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">Connect!</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base mb-6">
            Terbuka untuk peluang kerja sama, kolaborasi, maupun kesempatan karier.
          </p>
          
          <div className="mb-6">
            <p className="text-slate-600 text-xl md:text-base font-medium">
              Send me a message to:
            </p>
            <p className="text-sky-600 font-bold text-sm">
              kerinabakarudin7@gmail.com
            </p>
          </div>
          
          <div className="relative inline-block">
            <button 
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 ${
                copied 
                  ? 'bg-green-500 text-white shadow-green-100' 
                  : 'bg-sky-600 text-white hover:bg-sky-700 shadow-sky-200'
              }`}
            >
              {copied ? (
                <>Email Copied! ✅</>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  Copy my email
                </>
              )}
            </button>
            
            {/* Tooltip Mobile */}
            {copied && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded md:hidden animate-bounce">
                Copied!
              </div>
            )}
        </div>
        </div>


        {/* Social Icons */}
        <div className="flex gap-4 mb-12">
          {socialLinks.map((social) => (
            <a 
              key={social.name} 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white border border-sky-100 rounded-full text-slate-400 hover:text-sky-600 hover:border-sky-300 hover:shadow-md transition-all"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright & Logo */}
        <div className="text-center">
          <div className="font-medium text-sky-600 text-sm tracking-tighter mb-2">
            Developed with love 💗
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
            © 2026 KERINA BAKARUDIN • ALL RIGHTS RESERVED
          </p>
        </div>

      </div>
    </footer>
    </div>
  );
};

export default App;