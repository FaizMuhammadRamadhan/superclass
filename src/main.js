import "./style.css";

const _k = [56, 50, 56, 56, 48, 56, 49, 49, 51, 48, 49];
const _p = () => "62" + _k.map((c) => String.fromCharCode(c)).join("");

// Pre-formatted WA messages
const _msgs = {
  schedule: encodeURIComponent(
    "Halo SuperClass! 👋 Saya ingin mengetahui *Info Schedule & Free Trial*. Boleh saya mendapatkan informasi lebih lanjut? ",
  ),
  partner: encodeURIComponent(
    "Halo SuperClass! 👋 Saya tertarik dengan program *Partnership & Corporate Class*. Bisa dihubungi untuk diskusi lebih lanjut? 🤝",
  ),
};

const _waUrl = (type) => `https://wa.me/${_p()}?text=${_msgs[type]}`;

document.querySelector("#app").innerHTML = buildHTML();

initApp();

function buildHTML() {
  return `
    <!-- NAVBAR -->
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <!-- Logo -->
          <div class="flex items-center gap-3">
            <div class="w-12 h-10 rounded-xl flex items-center justify-center overflow-hiddenshadow-lg">
                <img src="public/images/logo.jpg" alt="" class="rounded-lg">                         
            </div>
            <div>
              <span class="font-black orange-text text-xl tracking-wide" style="font-family:'Bebas Neue',cursive;letter-spacing:3px;">SUPER</span>
              <span class="font-black text-yellow-400 text-xl tracking-wide" style="font-family:'Bebas Neue',cursive;letter-spacing:3px;">CLASS</span>
            </div>
          </div>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-8">
            <a href="#home" class="nav-link text-black hover:text-yellow-400 font-semibold text-sm uppercase tracking-widest transition-colors duration-200">Home</a>
            <a href="#service" class="nav-link text-black hover:text-yellow-400 font-semibold text-sm uppercase tracking-widest transition-colors duration-200">Service</a>
            <a href="#about" class="nav-link text-black hover:text-yellow-400 font-semibold text-sm uppercase tracking-widest transition-colors duration-200">About</a>
          </div>

          <!-- Mobile Hamburger -->
          <button id="menu-toggle" class="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
            <svg id="icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            <svg id="icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden">
          <div class="bg-gray-900/95 backdrop-blur-sm rounded-2xl mx-2 mb-4 p-4 flex flex-col gap-3 border border-yellow-400/20">
            <a href="#home" class="mobile-nav-link text-gray-300 hover:text-yellow-400 font-semibold text-sm uppercase tracking-widest transition-colors py-2 border-b border-white/10">Home</a>
            <a href="#service" class="mobile-nav-link text-gray-300 hover:text-yellow-400 font-semibold text-sm uppercase tracking-widest transition-colors py-2 border-b border-white/10">Service</a>
            <a href="#about" class="mobile-nav-link text-gray-300 hover:text-yellow-400 font-semibold text-sm uppercase tracking-widest transition-colors py-2">About</a>
            <button onclick="openWA('schedule')" class="btn-gold w-full py-3 rounded-xl text-sm mt-1">Free Trial Sekarang</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- ===== HERO SECTION ===== -->
    <section id="home" class="relative min-h-screen flex items-center hero-gradient hero-pattern overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <!-- Martial arts silhouette pattern -->
        <div class="absolute right-0 top-0 bottom-0 w-1/2 opacity-5">
          <div class="absolute inset-0" style="background: repeating-linear-gradient(45deg, rgba(212,160,23,0.3) 0px, rgba(212,160,23,0.3) 1px, transparent 1px, transparent 40px);"></div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
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

            <!-- Age Badges -->
            <div class="flex flex-wrap gap-2 mb-8 fade-up" style="transition-delay:0.35s">
              <span class="badge badge-kids">Kids</span>
              <span class="badge badge-adult">Adult</span>
              <span class="badge badge-senior">Senior</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 fade-up" style="transition-delay:0.4s">
              <a href="#service" class="btn-outline px-8 py-4 rounded-xl text-base text-center">
                Lihat Program
              </a>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-3 gap-4 mt-10 fade-up" style="transition-delay:0.5s">
              <div class="text-center">
                <div class="section-title text-3xl gold-text">500+</div>
                <div class="text-gray-400 text-xs uppercase tracking-wider">Member Aktif</div>
              </div>
              <div class="text-center border-x border-white/10">
                <div class="section-title text-3xl gold-text">3+</div>
                <div class="text-gray-400 text-xs uppercase tracking-wider">Cabang</div>
              </div>
              <div class="text-center">
                <div class="section-title text-3xl gold-text">10+</div>
                <div class="text-gray-400 text-xs uppercase tracking-wider">Tahun Berdiri</div>
              </div>
            </div>
          </div>

          <!-- Right - Visual Card Stack -->
          <div class="relative hidden lg:flex justify-center items-center">
            <div class="relative w-80 h-96">
              <!-- Main card -->
              <div class="absolute inset-0 rounded-3xl overflow-hidden border-2 border-yellow-400/30 shadow-2xl bg-gradient-to-br from-orange-900/40 to-yellow-900/20">
                <div class="absolute inset-0 flex flex-col justify-end p-8">
                  <div class="section-title text-4xl text-white mb-2">SUPER<br><span class="gold-text">CLASS</span></div>
                  <p class="text-gray-300 text-sm">Martial Arts & Fitness</p>
                  <div class="mt-4 flex gap-2">
                    <span class="badge badge-kids text-xs">Kids</span>
                    <span class="badge badge-adult text-xs">Adult</span>
                    <span class="badge badge-senior text-xs">Senior</span>
                  </div>
                </div>
                <!-- Decorative martial arts shapes -->
                <div class="absolute top-6 right-6 w-20 h-20 rounded-full border-2 border-yellow-400/20 flex items-center justify-center">
                  <span class="text-5xl"></span>
                </div>
                <div class="absolute top-32 left-6 w-12 h-12 rounded-full border border-orange-400/30 flex items-center justify-center">
                  <span class="text-2xl"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span class="text-xs uppercase tracking-widest">Scroll</span>
        <div class="w-0.5 h-8 bg-gradient-to-b from-yellow-400 to-transparent animate-pulse"></div>
      </div>
    </section>

    <!-- ===== WHY US SECTION ===== -->
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
              icon: "🏆",
              title: "Instruktur Bersertifikat",
              desc: "Sensei dan pelatih berpengalaman dengan sertifikasi nasional & internasional.",
            },
            {
              icon: "🧒",
              title: "Untuk Semua Usia",
              desc: "Program khusus kids, adult, dan senior dengan kurikulum yang disesuaikan.",
            },
            {
              icon: "🏋️",
              title: "Fasilitas Lengkap",
              desc: "Dojo, ring Muay Thai, gym equipment modern dalam satu lokasi.",
            },
            {
              icon: "📅",
              title: "Jadwal Fleksibel",
              desc: "Kelas pagi, siang, dan malam. Pilih waktu yang paling cocok untukmu.",
            },
          ]
            .map(
              (item) => `
            <div class="stat-card p-6 rounded-2xl text-center fade-up">
              <div class="text-4xl mb-4">${item.icon}</div>
              <h3 class="font-bold text-gray-900 mb-2" style="font-family:'Oswald',sans-serif;letter-spacing:1px;">${item.title}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">${item.desc}</p>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- ===== SERVICE SECTION ===== -->
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
              icon: "🥋",
              title: "Karate Class",
              desc: "Latihan karate terstruktur dengan metode Shotokan. Membangun disiplin, koordinasi, dan kekuatan sejak dini.",
              tags: ["kids", "adult", "senior"],
              features: [
                "Teknik dasar & lanjutan",
                "Ujian kenaikan sabuk",
                "Turnamen & kompetisi",
                "Pemanasan & pendinginan",
              ],
              highlight: "Most Popular",
            },
            {
              icon: "🥊",
              title: "Muay Thai",
              desc: "Seni bela diri dari Thailand yang melatih kekuatan fisik, kelincahan, dan ketahanan mental secara menyeluruh.",
              tags: ["adult"],
              features: [
                "Teknik striking 8 senjata",
                "Sparring & padwork",
                "Conditioning training",
                "Self-defense skills",
              ],
              highlight: null,
            },
            {
              icon: "💪",
              title: "Personal Trainer",
              desc: "Latihan 1-on-1 dengan personal trainer bersertifikat. Program custom sesuai target dan kondisi tubuh kamu.",
              tags: ["kids", "adult", "senior"],
              features: [
                "Program latihan personal",
                "Nutrition guidance",
                "Progress tracking",
                "Jadwal fleksibel",
              ],
              highlight: "Recommended",
            },
            {
              icon: "🏟️",
              title: "Dojo Rental",
              desc: "Sewa dojo untuk latihan mandiri, event, atau kompetisi. Fasilitas lengkap dengan lantai matras berkualitas.",
              tags: ["adult"],
              features: [
                "Matras standar kompetisi",
                "Cermin & mirror wall",
                "Locker room",
                "Kapasitas hingga 30 orang",
              ],
              highlight: null,
            },
            {
              icon: "🏋️",
              title: "Fitness / Gym",
              desc: "Area fitness modern dengan peralatan lengkap untuk cardio dan strength training. Tersedia bagi semua member.",
              tags: ["adult", "senior"],
              features: [
                "Treadmill & cardio area",
                "Free weights & barbells",
                "Resistance machines",
                "Akses bebas jam operasional",
              ],
              highlight: null,
            },
            {
              icon: "👶",
              title: "Kids Special Class",
              desc: "Program khusus anak usia 3–12 tahun yang fokus pada motorik, koordinasi, keseimbangan, dan kepercayaan diri.",
              tags: ["kids"],
              features: [
                "Fun-based learning",
                "Gross motor development",
                "Karakter & disiplin",
                "Sertifikat kelulusan",
              ],
              highlight: "For Kids",
            },
          ]
            .map(
              (s) => `
            <div class="service-card rounded-2xl p-6 fade-up">
              ${s.highlight ? `<div class="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">${s.highlight}</div>` : ""}
              <div class="service-icon mb-4">${s.icon}</div>
              <h3 class="font-black text-gray-900 text-lg mb-2" style="font-family:'Oswald',sans-serif;letter-spacing:1px;">${s.title}</h3>
              <div class="flex flex-wrap gap-1 mb-3">
                ${s.tags.map((t) => `<span class="badge badge-${t} text-xs">${t === "kids" ? "👦 Kids" : t === "adult" ? "🧑 Adult" : "👴 Senior"}</span>`).join("")}
              </div>
              <p class="text-gray-500 text-sm leading-relaxed mb-4">${s.desc}</p>
              <ul class="space-y-1">
                ${s.features.map((f) => `<li class="flex items-center gap-2 text-sm text-gray-600"><span class="w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>${f}</li>`).join("")}
              </ul>
              <button onclick="openWA('schedule')" class="mt-5 w-full btn-gold py-3 rounded-xl text-sm">Daftar Sekarang</button>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    

    <!-- ===== ABOUT / CONTACT SECTION ===== -->
    <section id="about" class="py-20 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 fade-up">
          <div class="section-divider mx-auto mb-4"></div>
          <h2 class="section-title text-4xl sm:text-5xl text-white">HUBUNGI <span class="gold-text">KAMI</span></h2>
          <p class="text-gray-400 mt-4 max-w-2xl mx-auto">Ada pertanyaan, ingin free trial, atau diskusi kerjasama? Pilih topik dan kami siap membantu!</p>
        </div>

        <!-- WA Cards -->
        <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          <div class="wa-card p-6 fade-up" onclick="openWA('schedule')">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <svg class="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.122 1.528 5.856L0 24l6.304-1.503A11.963 11.963 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.844 0-3.572-.492-5.062-1.35L3.5 21.5l.872-3.321A10 10 0 112 12c0 5.514 4.486 10 10 10z"/></svg>
              </div>
              <div>
                <div class="font-bold text-gray-900" style="font-family:'Oswald',sans-serif;letter-spacing:1px;">INFO SCHEDULE</div>
                <div class="text-xs text-gray-400">& Free Trial</div>
              </div>
            </div>
            <p class="text-gray-500 text-sm mb-4">Tanyakan jadwal kelas, info free trial, dan biaya pendaftaran langsung ke admin kami.</p>
            <div class="flex items-center gap-2 text-green-600 font-semibold text-sm">
              <span>Chat WhatsApp</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </div>

          <div class="wa-card p-6 fade-up" onclick="openWA('partner')">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                <span class="text-2xl">🤝</span>
              </div>
              <div>
                <div class="font-bold text-gray-900" style="font-family:'Oswald',sans-serif;letter-spacing:1px;">PARTNERSHIP</div>
                <div class="text-xs text-gray-400">& Corporate Class</div>
              </div>
            </div>
            <p class="text-gray-500 text-sm mb-4">Diskusi kerjasama, kelas korporat, atau program khusus untuk perusahaan dan komunitas.</p>
            <div class="flex items-center gap-2 text-yellow-600 font-semibold text-sm">
              <span>Chat WhatsApp</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </div>
        </div>

        <!-- Locations -->
        <div class="fade-up">
          <h3 class="section-title text-3xl text-white text-center mb-8">LOKASI <span class="gold-text">KAMI</span></h3>

          <!-- Location Tabs -->
          <div class="flex justify-center gap-4 mb-8">
            <button id="tab-1" class="loc-tab active px-6 py-3 rounded-xl font-semibold text-sm border border-yellow-400/40 text-white" onclick="switchLocation(1)">
              📍 The Forum, Bintaro
            </button>
            <button id="tab-2" class="loc-tab px-6 py-3 rounded-xl font-semibold text-sm border border-yellow-400/40 text-gray-400" onclick="switchLocation(2)">
              📍 Omotesando Mall, Bintaro
            </button>
          </div>

          <!-- Location Info + Map -->
          <div id="loc-1" class="grid lg:grid-cols-2 gap-6">
            <div class="bg-white/5 rounded-2xl p-6 border border-yellow-400/20">
              <h4 class="font-black text-white text-lg mb-3" style="font-family:'Oswald',sans-serif;">SUPER CLASS — The Forum Bintaro</h4>
              <div class="space-y-3 text-gray-400 text-sm">
                <div class="flex items-start gap-3">
                  <span class="text-yellow-400 mt-0.5">📍</span>
                  <span>THE FORUM, Dekat SPBU VIVO, Jl. Taman Bintaro Barat, RT.14/RW.8, Bintaro, Kec. Pesanggrahan, Jakarta Selatan 12330</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-yellow-400">⭐</span>
                  <span>Rating <strong class="text-yellow-400">5.0</strong> dari 36+ ulasan Google</span>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-yellow-400 mt-0.5">🕐</span>
                  <div>
                    <p>Senin–Rabu & Sabtu: 09:00–18:00</p>
                    <p>Minggu: 08:00–18:00</p>
                    <p class="text-red-400">Kamis–Jumat: Tutup</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-yellow-400">📞</span>
                  <span>+62 858-8081-1301</span>
                </div>
              </div>
              <button onclick="openWA('schedule')" class="mt-5 btn-gold px-6 py-3 rounded-xl text-sm w-full">Hubungi Cabang Ini</button>
            </div>
            <div class="map-wrapper h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.001!2d106.7548!3d-6.2694811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbd319ccfd59%3A0x450167371e3f404f!2sSUPER%20CLASS%20-%20Martial%20Arts%20%26%20Fitness!5e0!3m2!1sid!2sid!4v1"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" title="SuperClass The Forum Bintaro">
              </iframe>
            </div>
          </div>

          <div id="loc-2" class="hidden grid lg:grid-cols-2 gap-6">
            <div class="bg-white/5 rounded-2xl p-6 border border-yellow-400/20">
              <h4 class="font-black text-white text-lg mb-3" style="font-family:'Oswald',sans-serif;">SUPER CLASS — Omotesando Mall Bintaro</h4>
              <div class="space-y-3 text-gray-400 text-sm">
                <div class="flex items-start gap-3">
                  <span class="text-yellow-400 mt-0.5">📍</span>
                  <span>Omotesando Mall, Jl. Jombang Raya, Bintaro, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15414</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-yellow-400">⭐</span>
                  <span>Rating <strong class="text-yellow-400">4.6</strong> — Mall Strategis di Bintaro</span>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-yellow-400 mt-0.5">🕐</span>
                  <div>
                    <p>Senin–Minggu: Sesuai jam operasional mall</p>
                    <p>Mall: 10:00–21:00</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-yellow-400">📞</span>
                  <span>Hubungi via WhatsApp untuk info lebih lanjut</span>
                </div>
              </div>
              <button onclick="openWA('schedule')" class="mt-5 btn-gold px-6 py-3 rounded-xl text-sm w-full">Hubungi Cabang Ini</button>
            </div>
            <div class="map-wrapper h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.70341739999999!3d-6.281331400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb88454e45bd%3A0x60c0384241516989!2sOmotesando!5e0!3m2!1sid!2sid!4v1"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" title="Omotesando Mall Bintaro">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer class="bg-gray-950 text-gray-400 py-12 border-t border-yellow-400/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div class="lg:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                <img src="public/images/logo.jpg" alt="" class="rounded-lg">           
              </div>
              <div>
                <span class="font-black orange-text text-xl" style="font-family:'Bebas Neue',cursive;letter-spacing:3px;">SUPER</span>
                <span class="font-black text-yellow-400 text-xl" style="font-family:'Bebas Neue',cursive;letter-spacing:3px;">CLASS</span>
              </div>
            </div>
            <p class="text-sm leading-relaxed max-w-xs">Tempat latihan bela diri dan fitness terbaik untuk seluruh keluarga — dari anak-anak hingga lansia.</p>
            <div class="flex gap-3 mt-4">
              <a href="#" class="w-9 h-9 rounded-lg bg-white/5 hover:bg-yellow-400/20 border border-white/10 flex items-center justify-center transition-colors text-sm">📸</a>
              <a href="#" class="w-9 h-9 rounded-lg bg-white/5 hover:bg-yellow-400/20 border border-white/10 flex items-center justify-center transition-colors text-sm">▶️</a>
              <a onclick="openWA('schedule')" href="#" class="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-400/20 border border-white/10 flex items-center justify-center transition-colors text-sm">💬</a>
            </div>
          </div>
          <div>
            <h5 class="text-white font-bold mb-4 uppercase tracking-widest text-xs" style="font-family:'Oswald',sans-serif;">Program</h5>
            <ul class="space-y-2 text-sm">
              <li><a href="#service" class="hover:text-yellow-400 transition-colors">Karate Class</a></li>
              <li><a href="#service" class="hover:text-yellow-400 transition-colors">Muay Thai</a></li>
              <li><a href="#service" class="hover:text-yellow-400 transition-colors">Personal Trainer</a></li>
              <li><a href="#service" class="hover:text-yellow-400 transition-colors">Dojo Rental</a></li>
              <li><a href="#service" class="hover:text-yellow-400 transition-colors">Fitness / Gym</a></li>
            </ul>
          </div>
          <div>
            <h5 class="text-white font-bold mb-4 uppercase tracking-widest text-xs" style="font-family:'Oswald',sans-serif;">Lokasi</h5>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2"><span>📍</span><span>The Forum, Bintaro, Jakarta Selatan</span></li>
              <li class="flex items-start gap-2"><span>📍</span><span>Omotesando Mall, Bintaro, Tangerang Selatan</span></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>© 2025 SuperClass Martial Arts & Fitness. All rights reserved.</span>
          <span class="text-yellow-400/60">Latih Tubuh. Kuatkan Mental. </span>
        </div>
      </div>
    </footer>

    <!-- Floating WA Button -->
    <button onclick="openWA('schedule')"
      class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 pulse-wa"
      title="Chat WhatsApp">
      <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.122 1.528 5.856L0 24l6.304-1.503A11.963 11.963 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.844 0-3.572-.492-5.062-1.35L3.5 21.5l.872-3.321A10 10 0 112 12c0 5.514 4.486 10 10 10z"/></svg>
    </button>
  `;
}

// ===== INIT ALL APP LOGIC =====
function initApp() {
  // Expose openWA globally (called from HTML onclick)
  window.openWA = (type) => {
    window.open(_waUrl(type), "_blank", "noopener,noreferrer");
  };

  // Location tab switcher
  window.switchLocation = (num) => {
    document.getElementById("loc-1").classList.toggle("hidden", num !== 1);
    document.getElementById("loc-2").classList.toggle("hidden", num !== 2);
    document.getElementById("tab-1").classList.toggle("active", num === 1);
    document.getElementById("tab-2").classList.toggle("active", num === 2);
    const inactiveTab =
      num === 1
        ? document.getElementById("tab-2")
        : document.getElementById("tab-1");
    inactiveTab.classList.add("text-gray-400");
    inactiveTab.classList.remove("text-white");
    const activeTab = document.getElementById(`tab-${num}`);
    activeTab.classList.remove("text-gray-400");
    activeTab.classList.add("text-white");
  };

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");
    mobileMenu.classList.toggle("open", !isOpen);
    iconOpen.classList.toggle("hidden", !isOpen);
    iconClose.classList.toggle("hidden", isOpen);
  });

  // Close mobile menu on link click
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Scroll animations with IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

  // Staggered fade-up within grids
  document.querySelectorAll(".grid .fade-up").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  });
}
