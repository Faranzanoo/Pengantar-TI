/* Start Load Materi Data */
// Catatan: data/materi.json adalah konten milik sendiri dan dimasukkan sebagai HTML.
// Jangan memuat JSON dari sumber yang tidak dipercaya.
let materi = [];

fetch('data/materi.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    materi = data;
    loadMateri(0);
  })
  .catch(error => {
    console.error('Error loading materi:', error);
    document.getElementById("materi").innerHTML = `
      <h2>Error</h2>
      <p>Gagal memuat materi. Pastikan file data/materi.json tersedia dan halaman dibuka lewat web server (bukan langsung dari file://).</p>
    `;
  });
/* End Load Materi Data */


/* Start Theme Storage */
// localStorage bisa tidak tersedia (mode privat / izin browser), jadi dibungkus try/catch
function getSavedTheme() {
  try {
    return localStorage.getItem('theme');
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    /* abaikan: tema tetap berlaku selama halaman terbuka */
  }
}
/* End Theme Storage */


/* Start Load Materi Function */
function loadMateri(index) {
  const container = document.getElementById("materi");

  if (materi.length === 0) {
    container.innerHTML = `
      <h2>Loading...</h2>
      <p>Memuat materi...</p>
    `;
    return;
  }

  const item = materi[index];
  if (!item) {
    container.innerHTML = `
      <h2>Materi tidak ditemukan</h2>
      <p>Pilih pertemuan lain dari daftar di samping.</p>
    `;
    return;
  }

  container.innerHTML = `
    <h2>${item.title}</h2>
    ${item.content}
  `;

  document.querySelectorAll(".sidebar li").forEach((li, i) => {
    const aktif = i === index;
    li.classList.toggle("active", aktif);
    if (aktif) {
      li.setAttribute("aria-current", "page");
    } else {
      li.removeAttribute("aria-current");
    }
  });
}
/* End Load Materi Function */


/* Start Toggle Sidebar */
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const burger = document.getElementById("burger");
  const burgerIcon = document.querySelector(".burger-icon");

  sidebar.classList.toggle("collapsed");
  const collapsed = sidebar.classList.contains("collapsed");

  burgerIcon.textContent = collapsed ? "☰" : "✕";
  burger.setAttribute("aria-expanded", String(!collapsed));
}
/* End Toggle Sidebar */


/* Start Toggle Theme */
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  document.querySelector(".theme-toggle").textContent = isDark ? "☀️" : "🌙";
  saveTheme(isDark ? 'dark' : 'light');
}
/* End Toggle Theme */


/* Start Init */
function init() {
  // Terapkan tema yang tersimpan
  if (getSavedTheme() === 'dark') {
    document.body.classList.add('dark');
    document.querySelector('.theme-toggle').textContent = '☀️';
  }

  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("burger").addEventListener("click", toggleSidebar);

  // Daftar pertemuan: bisa diklik dan bisa dioperasikan lewat keyboard (Enter / Spasi)
  const daftar = document.querySelector(".sidebar ul");

  daftar.addEventListener("click", event => {
    const li = event.target.closest("li");
    if (li) {
      loadMateri(Number(li.dataset.index));
    }
  });

  daftar.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    const li = event.target.closest("li");
    if (li) {
      event.preventDefault();
      loadMateri(Number(li.dataset.index));
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
/* End Init */
