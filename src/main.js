import "./style.css";

const _phone = "6285880811301";
const _msgs = {
  schedule: encodeURIComponent(
    "Halo SuperClass! Saya ingin mengetahui *Info Schedule & Free Trial*. Boleh saya mendapatkan informasi lebih lanjut? ",
  ),
  partner: encodeURIComponent(
    "Halo SuperClass! Saya tertarik dengan program *Partnership & Corporate Class*. Bisa dihubungi untuk diskusi lebih lanjut?",
  ),
};
const _waUrl = (type) => `https://wa.me/${_phone}?text=${_msgs[type]}`;

function icon(name, cls = "w-5 h-5") {
  const base = `xmlns="http://www.w3.org/2000/svg" class="${cls}" viewBox="0 0 24 24"`;
  const stroke = `fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
  const icons = {
    trophy: `<svg ${base} ${stroke}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
    users: `<svg ${base} ${stroke}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    dumbbell: `<svg ${base} ${stroke}><path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"/></svg>`,
    calendar: `<svg ${base} ${stroke}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
    mappin: `<svg ${base} ${stroke}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    star: `<svg ${base} fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    clock: `<svg ${base} ${stroke}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    phone: `<svg ${base} ${stroke}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.31A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.5z"/></svg>`,
    whatsapp: `<svg ${base} fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.122 1.528 5.856L0 24l6.304-1.503A11.963 11.963 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.844 0-3.572-.492-5.062-1.35L3.5 21.5l.872-3.321A10 10 0 112 12c0 5.514 4.486 10 10 10z"/></svg>`,
    handshake: `<svg ${base} ${stroke}><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-1"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
    instagram: `<svg ${base} ${stroke}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
    tiktok: `<svg ${base} fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.05a8.16 8.16 0 0 0 4.77 1.52V7.12a4.85 4.85 0 0 1-1-.43z"/></svg>`,
    chevronright: `<svg ${base} ${stroke}><path d="m9 18 6-6-6-6"/></svg>`,
    check: `<svg ${base} ${stroke} stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
    menu: `<svg ${base} ${stroke}><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
    xmark: `<svg ${base} ${stroke}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    shield: `<svg ${base} ${stroke}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    flame: `<svg ${base} ${stroke}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    baby: `<svg ${base} ${stroke}><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>`,
  };
  return icons[name] ?? "";
}

document.querySelector("#app").innerHTML = buildHTML();
initApp();

function buildHTML() {
  return `
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <div class="flex items-center gap-3">
            <div class="w-12 h-10 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
              <img src="/images/logo.jpg" alt="SuperClass Logo" class="rounded-lg">
            </div>
            <div>
              <span class="font-black orange-text text-xl tracking-wide" style="font-family:'Bebas Neue',cursive;letter-spacing:3px;">SUPER</span>
              <span class="font-black text-yellow-400 text-xl tracking-wide" style="font-family:'Bebas Neue',cursive;letter-spacing:3px;">CLASS</span>
            </div>
          </div>

          <div class="hidden md:flex items-center gap-8">
            <a href="#home" class="nav-link orange-text hover:text-yellow-400 font-semibold text-sm uppercase tracking-widest transition-colors duration-200">Home</a>
            <a href="#service" class="nav-link orange-text hover:text-yellow-400 font-semibold text-sm uppercase tracking-widest transition-colors duration-200">Service</a>
            <a href="#about" class="nav-link orange-text hover:text-yellow-400 font-semibold text-sm uppercase tracking-widest transition-colors duration-200">About</a>
          </div>

          <button id="menu-toggle" class="md:hidden orange-text p-2 rounded-lg hover:bg-white/10 transition-colors">
            <span id="icon-open">${icon("menu", "w-6 h-6")}</span>
            <span id="icon-close" class="hidden">${icon("xmark", "w-6 h-6")}</span>
          </button>
        </div>

        <div id="mobile-menu" class="md:hidden">
          <div class="bg-gray-900/95 backdrop-blur-sm rounded-2xl mx-2 mb-4 p-4 flex flex-col gap-3 border border-yellow-400/20">
            <a href="#home" class="mobile-nav-link orange-text hover:text-yellow-400 font-semibold text-sm uppercase tracking-widest transition-colors py-2 border-b border-white/10">Home</a>
            <a href="#service" class="mobile-nav-link orange-text hover:text-yellow-400 font-semibold text-sm uppercase tracking-widest transition-colors py-2 border-b border-white/10">Service</a>
            <a href="#about" class="mobile-nav-link orange-text hover:text-yellow-400 font-semibold text-sm uppercase tracking-widest transition-colors py-2">About</a>
          </div>
        </div>
      </div>
    </nav>

    <section id="home" class="relative min-h-screen flex items-center hero-gradient hero-pattern overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div class="absolute right-0 top-0 bottom-0 w-1/2 opacity-5">
          <div class="absolute inset-0" style="background:repeating-linear-gradient(45deg,rgba(212,160,23,0.3) 0px,rgba(212,160,23,0.3) 1px,transparent 1px,transparent 40px);"></div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">

          <div class="text-white">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 mb-6 fade-up" style="transition-delay:0.1s">
              <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span class="text-yellow-400 text-xs font-bold uppercase tracking-widest">Martial Arts & Fitness Jakarta</span>
            </div>

            <h1 class="section-title text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6 fade-up" style="transition-delay:0.2s">
              <span class="gold-text">LATIH</span><br>
              <span class="gold-text">TUBUH.</span><br>
              <span class="orange-text">KUATKAN</span><br>
              <span class="orange-text">MENTAL.</span>
            </h1>

            <p class="text-black text-base sm:text-lg leading-relaxed mb-8 max-w-lg fade-up" style="transition-delay:0.3s">
              SuperClass hadir untuk membentuk karakter, kekuatan, dan kepercayaan diri — dari anak-anak hingga dewasa. Dojo terbaik dengan instruktur bersertifikat untuk Karate, Muay Thai, Personal Training, dan Fitness.
            </p>

            <div class="flex flex-wrap gap-2 mb-8 fade-up" style="transition-delay:0.35s">
              <span class="badge badge-reguler">reguler</span>
              <span class="badge badge-privat">privat</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 fade-up" style="transition-delay:0.4s">
              <a href="#service" class="btn-outline px-8 py-4 rounded-xl text-base text-center">Lihat Program</a>
            </div>

            <div class="grid grid-cols-3 gap-4 mt-10 fade-up" style="transition-delay:0.5s">
              <div class="text-center">
                <div class="section-title text-3xl gold-text">200+</div>
                <div class="text-gray-400 text-xs uppercase tracking-wider">Member Aktif</div>
              </div>
              <div class="text-center border-x border-white/10">
                <div class="section-title text-3xl gold-text">2</div>
                <div class="text-gray-400 text-xs uppercase tracking-wider">Cabang</div>
              </div>
              <div class="text-center">
                <div class="section-title text-3xl gold-text">3+</div>
                <div class="text-gray-400 text-xs uppercase tracking-wider">Tahun Berdiri</div>
              </div>
            </div>
          </div>

          <div class="relative hidden lg:flex justify-center items-center fade-up" style="transition-delay:0.3s">
            <div class="relative" style="width:340px;">

              <div class="absolute -inset-6 rounded-3xl blur-3xl"
                   style="background:radial-gradient(ellipse at center,rgba(251,146,60,0.18) 0%,rgba(234,179,8,0.10) 50%,transparent 80%);"></div>

              <div class="relative rounded-3xl overflow-hidden border-2 border-yellow-400/40 shadow-2xl"
                   style="aspect-ratio:3/4;">
                <!-- Replace src with your actual hero photo path -->
                <img
                  src="/images/hero.jpg"
                  alt="SuperClass Martial Arts Training"
                  class="w-full h-full object-cover object-top"
                  onerror="this.style.display='none';document.getElementById('hero-fallback').style.display='flex';"
                >

                <div id="hero-fallback"
                     class="absolute inset-0 flex-col items-center justify-center text-center p-8"
                     style="display:none;background:linear-gradient(155deg,#111 0%,#2d1500 60%,#1a0d00 100%);">
                  <div class="text-yellow-400 mb-4">${icon("shield", "w-24 h-24")}</div>
                  <div class="section-title text-4xl text-white leading-none">SUPER</div>
                  <div class="section-title text-4xl gold-text leading-none mb-3">CLASS</div>
                  <p class="text-gray-500 text-sm">Martial Arts & Fitness</p>
                </div>

                <div class="absolute inset-0"
                     style="background:linear-gradient(to top,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.15) 45%,transparent 70%);"></div>

                <div class="absolute bottom-0 left-0 right-0 p-5">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span class="text-green-400 text-xs font-bold uppercase tracking-widest">Kelas Tersedia</span>
                  </div>
                  <div class="flex gap-2 mt-3">
                    <span class="badge badge-reguler text-xs">reguler</span>
                    <span class="badge badge-privat text-xs">privat</span>
                  </div>
                </div>
              </div>


              <div class="absolute -left-5 bottom-28 bg-gray-900/90 backdrop-blur-sm border border-orange-400/30 rounded-2xl px-4 py-3 shadow-xl">
                <div class="flex items-center gap-1.5 mb-0.5">
                  <span class="text-orange-400">${icon("trophy", "w-4 h-4")}</span>
                  <span class="text-orange-400 font-black text-xs">Certified</span>
                </div>
                <p class="text-gray-400 text-xs">Instruktur</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 fade-up">
          <div class="section-divider mx-auto mb-4"></div>
          <h2 class="section-title text-4xl sm:text-5xl text-gray-900">KENAPA <span class="gold-text">SUPERCLASS?</span></h2>
          <p class="text-gray-500 mt-4 max-w-2xl mx-auto">Lebih dari sekadar tempat latihan — kami adalah komunitas yang membangun karakter dan kesehatan hidup.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${[
            {
              iconName: "trophy",
              title: "Instruktur Bersertifikat",
              desc: "Sensei dan pelatih berpengalaman dengan sertifikasi nasional & internasional.",
            },
            {
              iconName: "users",
              title: "Untuk Semua Usia",
              desc: "Program khusus reguler, privat dengan kurikulum yang disesuaikan.",
            },
            {
              iconName: "dumbbell",
              title: "Fasilitas Lengkap",
              desc: "Dojo, ring Muay Thai, gym equipment modern dalam satu lokasi.",
            },
            {
              iconName: "calendar",
              title: "Jadwal Fleksibel",
              desc: "Kelas pagi, siang, dan malam. Pilih waktu yang paling cocok untukmu.",
            },
          ]
            .map(
              (item) => `
            <div class="stat-card p-6 rounded-2xl text-center fade-up">
              <div class="flex justify-center mb-4">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400/20 to-yellow-400/20 border border-yellow-400/20 flex items-center justify-center text-orange-500">
                  ${icon(item.iconName, "w-7 h-7")}
                </div>
              </div>
              <h3 class="font-bold text-gray-900 mb-2" style="font-family:'Oswald',sans-serif;letter-spacing:1px;">${item.title}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">${item.desc}</p>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="service" class="py-20 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 fade-up">
          <div class="section-divider mx-auto mb-4"></div>
          <h2 class="section-title text-4xl sm:text-5xl text-white">PROGRAM <span class="gold-text">LATIHAN</span></h2>
          <p class="text-gray-400 mt-4 max-w-2xl mx-auto">Temukan program yang tepat untuk kamu. Dari beladiri hingga fitness, semua tersedia di SuperClass.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${[
            {
              iconName: "shield",
              title: "Karate",
              desc: "Super Class Karate berfokus pada pengembangan karakter, kemampuan fisik motorik, serta keterampilan teknik seorang Karateka secara bertahap dan berkelanjutan. Program pelatihan kami menggunakan pendekatan LTAD (Long Term Athlete Development) yang dirancang untuk membangun fondasi atlet sejak usia dini hingga tahap pengkhususan kemampuan. Melalui program ini, peserta akan menjalani proses pembinaan mulai dari pengembangan motorik dasar, latihan fundamental, hingga penguatan teknik dan spesialisasi karate. Kami menyediakan dua pilihan layanan latihan: kelas reguler dan kelas privat, yang dapat disesuaikan dengan kebutuhan peserta. Kelas dibagi ke dalam tiga kategori usia:",
              tags: ["reguler", "privat"],
              features: [
                "Super Start (3–5 tahun)",
                "Super Active (13+ tahun)",
                "Super Active (13+ tahun)",
              ],
              place: "Kelas karate Super Class saat ini tersedia di The Forum dan Mall Omotesando.",
              highlight: "Most Popular",
              schedule: `
              <div class="mt-3 text-sm text-gray-600">
                <div class="font-bold text-gray-800 mb-1">Dojo 1: The Forum, Bintaro</div>
                <ul class="space-y-1 mb-2">
                  <li>Selasa (Super Fun & Super Start) : 17:00 – 18:00</li>
                  <li>Jumat (Super Fun & Super Start) : 17:00 – 18:00</li>
                  <li>Minggu (Super Fun) : 09:00 – 10:00</li>
                  <li>Minggu (Super Start) : 10:00 – 11:00</li>
                  <li>Minggu (Super Start) : 11:00 – 12:00</li>
                </ul>

                <div class="font-bold text-gray-800 mb-1">Dojo 2: Mall Omotesando, Bintaro</div>
                <ul class="space-y-1">
                  <li>Selasa (Super Fun) : 17:00 – 18:00</li>
                  <li>Selasa (Super Active) : 17:00 – 19:00</li>
                  <li>Sabtu (Super Fun) : 10:00 – 11:00</li>
                  <li>Sabtu (Super Active) : 10:00 – 11:00</li>
                </ul>
              </div>
            `,
          },
            {
              iconName: "flame",
              title: "Boxing",
              desc: "Latihan Boxing secara privat dengan fokus pada teknik, kekuatan, dan ketahanan tubuh. Program dirancang untuk meningkatkan performa sekaligus membentuk tubuh yang lebih kuat dan atletis. Dengan program LTAD (Long Term Athlete Development) membantu untuk mendukung atlet berkembang sesuai dengan usianya. Kategori usia dibagi tiga sebagaimana Karate:",
              tags: ["privat"],
              features: [
                "Super Start (3–5 tahun)",
                "Super Fun (6–12 tahun)",
                "Super Active (13+ tahun)",
              ],
              place: "Kelas Boxing hanya tersedia secara privat, tidak dibentuk secara reguler.",
              highlight: null,
            },
            {
              iconName: "flame",
              title: "Muay Thai",
              desc: "Latihan Muaythai intensif dengan pendekatan profesional untuk meningkatkan power, stamina, dan skill bertarung. Cocok untuk konsumer yang ingin lebih fokus dan maksimal. Program Muaythai lebih fokus pada teknik dan self defense secara langsung. Lebih dominan untuk consumer usia 13+ tahun.",
              tags: [null],
              features: [
                "Super Active (13+ tahun)",
              ],
              place: null,
              highlight: null,
            },
            {
              iconName: "baby",
              title: "Kids Fitness",
              desc: "Program fitness khusus anak untuk meningkatkan motorik, koordinasi, dan kebiasaan aktif sejak dini. Dikemas dengan metode yang profesional, menyenangkan, dan sesuai dengan perkembangan anak. Mengedepankan metode LTAD (Long Term Athlete Development) dalam setiap sesi latihan. Usia dibagi dua, yakni:",
              tags: ["privat"],
              features: [
                "Super Start (3-5 tahun)",
                "Super Fun (6-12 tahun)",
              ],
              place: null,
              highlight: "Recommended",
            },
            {
              iconName: "dumbbell",
              title: "Young Adult Fitness",
              desc: "Program latihan untuk remaja dan dewasa yang ingin membangun bentuk tubuh ideal, kekuatan, dan kebugaran. Latihan disesuaikan dengan target masing-masing, mulai dari fat loss hingga muscle building. Untuk program fitness, fokus pada lima aspek kebugaran, yakni:",
              tags: ["privat"],
              features: [
                "Komposisi Tubuh (Body Composition)",
                "Kardiovaskular/Otot Jantung & Paru-paru (Cardiovaskular)",
                "Kekutatan Otot (Muscular Strength)",
                "Ketahanan Otot (Muscular Endurance)",
                "Fleksibilitas (Flexibility)",
              ],
              highlight: null,
              tambahan: "Kelima kebugaran jasmani ini adalah dasar dari tanda manusia disebut sehat. Latihan kebugaran/fitness membantu mengoptimalkan kelima komponen tersebut, sebelum fokus pada salah satu cabor tertentu. Usia untuk Young Adult Fitness, yakni:",
              tambahanfitur: "Super Active (13+ tahun)"
            },
            {
              iconName: "dumbbell",
              title: "Senior Fitness",
              desc: "Program latihan khusus usia dewasa lanjut dengan fokus pada kesehatan, fleksibilitas, dan keseimbangan tubuh. Dirancang aman, terkontrol, dan membantu menjaga kualitas hidup tetap optimal. Dalam program Senior Fitness, kategori usia yakni:",
              tags: ["privat"],
              features: [
                "Super Senior (50+ tahun)",
              ],
              highlight: null,
            },
            {
              iconName: "users",
              title: "reguler Special Class",
              desc: "Program kebugaran untuk perusahaan guna meningkatkan kesehatan, produktivitas, dan performa tim. Tersedia dalam bentuk sesi training, maupun program rutin untuk karyawan. Program Corporate Class yakni kerjasama antara pihak Super Class dengan suatu perusahaan tertentu dalam meningkatkan kebugaran dari karyawan dan staff terkait. Pihak Super Class akan mengirimkan Trainer profesional kepada perusahaan terkait permintaan mereka terhadap program yang kami miliki. Misalnya, perusahaan meminta service fitness/kebugaran, Karate, Boxing, Muaythai, dan Pound Fit (khusus Corporate Class).",
              tags: ["reguler"],
              features: [""],
              highlight: null,
            },
          ]
            .map(
              (s) => `
            <div class="service-card relative rounded-2xl p-6 fade-up flex flex-col">
              ${s.highlight ? `<div class="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">${s.highlight}</div>` : ""}
              <div class="mb-4">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-yellow-400/20 border border-yellow-400/20 flex items-center justify-center text-orange-400">
                  ${icon(s.iconName, "w-7 h-7")}
                </div>
              </div>
              <h3 class="font-black text-gray-900 text-lg mb-2" style="font-family:'Oswald',sans-serif;letter-spacing:1px;">${s.title}</h3>
              <div class="flex flex-wrap gap-1 mb-3">
                ${s.tags.map((t) => `<span class="badge badge-${t} text-xs">${t === "reguler" ? "reguler" : t === "privat" ? "privat" : "privat"}</span>`).join("")}
              </div>
              <p class="text-gray-500 text-sm leading-relaxed mb-4">${s.desc}</p>
              <ul class="space-y-1">
                ${(s.features || [])
                  .filter((f) => f) 
                  .map(
                    (f) => `
                    <li class="flex items-center gap-2 text-sm text-gray-600">
                      <span class="w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white flex-shrink-0">
                        ${icon("check", "w-3 h-3")}
                      </span>
                      ${f}
                    </li>`,
                  )
                  .join("")}
              </ul>
              <br>
              ${s.place ? `<div class="text-gray-500 text-sm leading-relaxed mb-4 font-bold">${s.place}</div>` : ""}
              ${s.schedule ? s.schedule : ""}
              ${s.tambahan ? `<div class="text-gray-500 text-sm leading-relaxed mb-4 font-bold">${s.tambahan}</div>` : ""}
              <ul class="space-y-1">
                ${s.tambahanfitur
                  ? `
                  <li class="flex items-center gap-2 text-sm text-gray-600">
                    <span class="w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white flex-shrink-0">
                      ${icon("check", "w-3 h-3")}
                    </span>
                    ${s.tambahanfitur}
                  </li>`
                  : ""}
              </ul>
              <br>
              <button onclick="openWA('schedule')" 
                class="mt-auto w-full btn-gold py-3 rounded-xl text-sm">
                Daftar Sekarang
              </button>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="about" class="py-20 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 fade-up">
          <div class="section-divider mx-auto mb-4"></div>
          <h2 class="section-title text-4xl sm:text-5xl text-white">ABOUT <span class="gold-text">US</span></h2>
          <p class="text-gray-400 mt-4 max-w-2xl mx-auto">Super Class adalah agensi Martial Arts & Fitness Training yang menghadirkan pelatihan
              profesional untuk semua usia. Kami menyediakan program latihan Karate, Boxing, Taekwondo,
              serta Personal Fitness Training dengan metode yang terstruktur, aman, dan menyenangkan. Mulai
              dari anak-anak hingga dewasa, Super Class membantu setiap individu membangun kekuatan,
              disiplin, kepercayaan diri, dan gaya hidup sehat. Layanan kami tersedia dalam kelas reguler,
              corporate fitness, personal training, termasuk home service langsung ke rumah Anda.</p>
          <br>
          <br>

          <p class="text-gray-400 mt-4 max-w-2xl mx-auto">Ada pertanyaan, ingin free trial, atau diskusi kerjasama? Pilih topik dan kami siap membantu!</p>

        </div>

        <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          <div class="wa-card p-6 fade-up cursor-pointer" onclick="openWA('schedule')">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400">
                ${icon("whatsapp", "w-7 h-7")}
              </div>
              <div>
                <div class="font-bold text-gray-900" style="font-family:'Oswald',sans-serif;letter-spacing:1px;">INFO SCHEDULE</div>
                <div class="text-xs text-gray-400">& Free Trial</div>
              </div>
            </div>
            <p class="text-gray-500 text-sm mb-4">Tanyakan jadwal kelas, info free trial, dan biaya pendaftaran langsung ke admin kami.</p>
            <div class="flex items-center gap-2 text-green-600 font-semibold text-sm">
              <span>Chat WhatsApp</span>${icon("chevronright", "w-4 h-4")}
            </div>
          </div>

          <div class="wa-card p-6 fade-up cursor-pointer" onclick="openWA('partner')">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-500">
                ${icon("handshake", "w-7 h-7")}
              </div>
              <div>
                <div class="font-bold text-gray-900" style="font-family:'Oswald',sans-serif;letter-spacing:1px;">PARTNERSHIP</div>
                <div class="text-xs text-gray-400">& Corporate Class</div>
              </div>
            </div>
            <p class="text-gray-500 text-sm mb-4">Diskusi kerjasama, kelas korporat, atau program khusus untuk perusahaan dan komunitas.</p>
            <div class="flex items-center gap-2 text-yellow-600 font-semibold text-sm">
              <span>Chat WhatsApp</span>${icon("chevronright", "w-4 h-4")}
            </div>
          </div>
        </div>

        <!-- Locations -->
        <div class="fade-up">
          <h3 class="section-title text-3xl text-white text-center mb-8">LOKASI <span class="gold-text">KAMI</span></h3>
          <div class="flex justify-center gap-4 mb-8">
            <button id="tab-1" class="loc-tab active px-6 py-3 rounded-xl font-semibold text-sm border border-yellow-400/40 text-white flex items-center gap-2" onclick="switchLocation(1)">
              ${icon("mappin", "w-4 h-4")} The Forum, Bintaro
            </button>
            <button id="tab-2" class="loc-tab px-6 py-3 rounded-xl font-semibold text-sm border border-yellow-400/40 text-gray-400 flex items-center gap-2" onclick="switchLocation(2)">
              ${icon("mappin", "w-4 h-4")} Omotesando Mall, Bintaro
            </button>
          </div>

          <div id="loc-1" class="grid lg:grid-cols-2 gap-6">
            <div class="bg-white/5 rounded-2xl p-6 border border-yellow-400/20">
              <h4 class="font-black text-white text-lg mb-3" style="font-family:'Oswald',sans-serif;">SUPER CLASS — The Forum Bintaro</h4>
              <div class="space-y-3 text-gray-400 text-sm">
                <div class="flex items-start gap-3">
                  <span class="text-yellow-400 mt-0.5 flex-shrink-0">${icon("mappin", "w-4 h-4")}</span>
                  <span>THE FORUM, Dekat SPBU VIVO, Jl. Taman Bintaro Barat, RT.14/RW.8, Bintaro, Kec. Pesanggrahan, Jakarta Selatan 12330</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-yellow-400 flex-shrink-0">${icon("star", "w-4 h-4")}</span>
                  <span>Rating <strong class="text-yellow-400">5.0</strong> dari 36+ ulasan Google</span>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-yellow-400 mt-0.5 flex-shrink-0">${icon("clock", "w-4 h-4")}</span>
                  <div>
                    <p>Senin–Rabu & Sabtu: 09:00–18:00</p>
                    <p>Minggu: 08:00–18:00</p>
                    <p class="text-red-400">Kamis–Jumat: Tutup</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-yellow-400 flex-shrink-0">${icon("phone", "w-4 h-4")}</span>
                  <span>+62 858-8081-1301</span>
                </div>
              </div>
              <button onclick="openWA('schedule')" class="mt-5 btn-gold px-6 py-3 rounded-xl text-sm w-full">Hubungi Cabang Ini</button>
            </div>
            <div class="map-wrapper h-80">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.001!2d106.7548!3d-6.2694811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbd319ccfd59%3A0x450167371e3f404f!2sSUPER%20CLASS%20-%20Martial%20Arts%20%26%20Fitness!5e0!3m2!1sid!2sid!4v1"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div id="loc-2" class="hidden grid lg:grid-cols-2 gap-6">
            <div class="bg-white/5 rounded-2xl p-6 border border-yellow-400/20">
              <h4 class="font-black text-white text-lg mb-3" style="font-family:'Oswald',sans-serif;">SUPER CLASS — Omotesando Mall Bintaro</h4>
              <div class="space-y-3 text-gray-400 text-sm">
                <div class="flex items-start gap-3">
                  <span class="text-yellow-400 mt-0.5 flex-shrink-0">${icon("mappin", "w-4 h-4")}</span>
                  <span>Omotesando Mall, Jl. Jombang Raya, Bintaro, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15414</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-yellow-400 flex-shrink-0">${icon("star", "w-4 h-4")}</span>
                  <span>Rating <strong class="text-yellow-400">4.6</strong> — Mall Strategis di Bintaro</span>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-yellow-400 mt-0.5 flex-shrink-0">${icon("clock", "w-4 h-4")}</span>
                  <div>
                    <p>Senin–Minggu: Sesuai jam operasional mall</p>
                    <p>Mall: 10:00–21:00</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-yellow-400 flex-shrink-0">${icon("phone", "w-4 h-4")}</span>
                  <span>Hubungi via WhatsApp untuk info lebih lanjut</span>
                </div>
              </div>
              <button onclick="openWA('schedule')" class="mt-5 btn-gold px-6 py-3 rounded-xl text-sm w-full">Hubungi Cabang Ini</button>
            </div>
            <div class="map-wrapper h-80">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.70341739999999!3d-6.281331400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb88454e45bd%3A0x60c0384241516989!2sOmotesando!5e0!3m2!1sid!2sid!4v1"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-gray-950 text-gray-400 py-12 border-t border-yellow-400/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div class="lg:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center overflow-hidden">
                <img src="/images/logo.jpg" alt="SuperClass Logo" class="rounded-lg">
              </div>
              <div>
                <span class="font-black orange-text text-xl" style="font-family:'Bebas Neue',cursive;letter-spacing:3px;">SUPER</span>
                <span class="font-black text-yellow-400 text-xl" style="font-family:'Bebas Neue',cursive;letter-spacing:3px;">CLASS</span>
              </div>
            </div>
            <p class="text-sm leading-relaxed max-w-xs">Tempat latihan bela diri dan fitness terbaik untuk seluruh keluarga — dari anak-anak hingga lansia.</p>

            <!-- Social Links -->
            <div class="flex gap-3 mt-4">
              <a href="https://www.instagram.com/superclass_official?igsh=djI0aDlxd3gzNm12"
                 target="_blank" rel="noopener noreferrer"
                 title="Instagram @superclass_official"
                 class="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/40 flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-pink-400">
                ${icon("instagram", "w-4 h-4")}
              </a>
              <a href="https://www.tiktok.com/@superclass_official?_r=1&_t=ZS-94larDDk0P2"
                 target="_blank" rel="noopener noreferrer"
                 title="TikTok @superclass_official"
                 class="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-white">
                ${icon("tiktok", "w-4 h-4")}
              </a>
              <button onclick="openWA('schedule')"
                 title="WhatsApp"
                 class="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-400/20 border border-white/10 hover:border-green-400/40 flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-green-400">
                ${icon("whatsapp", "w-4 h-4")}
              </button>
            </div>
          </div>

          <div>
            <h5 class="text-white font-bold mb-4 uppercase tracking-widest text-xs" style="font-family:'Oswald',sans-serif;">Program</h5>
            <ul class="space-y-2 text-sm">
              <li><a href="#service" class="hover:text-yellow-400 transition-colors">Karate</a></li>
              <li><a href="#service" class="hover:text-yellow-400 transition-colors">Muay Thai</a></li>
              <li><a href="#service" class="hover:text-yellow-400 transition-colors">Personal Trainer</a></li>
              <li><a href="#service" class="hover:text-yellow-400 transition-colors">Dojo Rental</a></li>
              <li><a href="#service" class="hover:text-yellow-400 transition-colors">Fitness / Gym</a></li>
            </ul>
          </div>

          <div>
            <h5 class="text-white font-bold mb-4 uppercase tracking-widest text-xs" style="font-family:'Oswald',sans-serif;">Lokasi</h5>
            <ul class="space-y-3 text-sm mb-6">
              <li class="flex items-start gap-2">
                <span class="text-yellow-400 mt-0.5 flex-shrink-0">${icon("mappin", "w-3.5 h-3.5")}</span>
                <span>The Forum, Bintaro, Jakarta Selatan</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-yellow-400 mt-0.5 flex-shrink-0">${icon("mappin", "w-3.5 h-3.5")}</span>
                <span>Omotesando Mall, Bintaro, Tangerang Selatan</span>
              </li>
            </ul>
            <h5 class="text-white font-bold mb-3 uppercase tracking-widest text-xs" style="font-family:'Oswald',sans-serif;">Ikuti Kami</h5>
            <div class="flex flex-col gap-2">
              <a href="https://www.instagram.com/superclass_official?igsh=djI0aDlxd3gzNm12"
                 target="_blank" rel="noopener noreferrer"
                 class="flex items-center gap-2 text-xs text-gray-400 hover:text-pink-400 transition-colors">
                ${icon("instagram", "w-3.5 h-3.5")} @superclass_official
              </a>
              <a href="https://www.tiktok.com/@superclass_official?_r=1&_t=ZS-94larDDk0P2"
                 target="_blank" rel="noopener noreferrer"
                 class="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors">
                ${icon("tiktok", "w-3.5 h-3.5")} @superclass_official
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>© 2025 SuperClass Martial Arts & Fitness. All rights reserved.</span>
          <span class="text-yellow-400/60">Latih Tubuh. Kuatkan Mental.</span>
        </div>
      </div>
    </footer>

    <button onclick="openWA('schedule')"
      class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 pulse-wa"
      title="Chat WhatsApp">
      ${icon("whatsapp", "w-7 h-7")}
    </button>
  `;
}

function initApp() {
  window.openWA = (type) =>
    window.open(_waUrl(type), "_blank", "noopener,noreferrer");

  window.switchLocation = (num) => {
    document.getElementById("loc-1").classList.toggle("hidden", num !== 1);
    document.getElementById("loc-2").classList.toggle("hidden", num !== 2);
    ["tab-1", "tab-2"].forEach((id, i) => {
      const tab = document.getElementById(id);
      const active = i + 1 === num;
      tab.classList.toggle("active", active);
      tab.classList.toggle("text-gray-400", !active);
      tab.classList.toggle("text-white", active);
    });
  };

  // Navbar scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () =>
    navbar.classList.toggle("scrolled", window.scrollY > 50),
  );

  // Mobile menu
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");
  menuToggle.addEventListener("click", () => {
    const open = mobileMenu.classList.contains("open");
    mobileMenu.classList.toggle("open", !open);
    iconOpen.classList.toggle("hidden", !open);
    iconClose.classList.toggle("hidden", open);
  });
  document.querySelectorAll(".mobile-nav-link").forEach((link) =>
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }),
  );

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", (e) => {
      const t = document.querySelector(a.getAttribute("href"));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }),
  );

  // Fade-up observer
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), 100);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
  document.querySelectorAll(".grid .fade-up").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  });
}
