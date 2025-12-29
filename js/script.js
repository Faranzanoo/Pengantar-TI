/* Start Load Materi Data */
let materi = [];

fetch('data/materi.json')
  .then(response => response.json())
  .then(data => {
    materi = data;
    loadMateri(0);
  })
  .catch(error => {
    console.error('Error loading materi:', error);
    document.getElementById("materi").innerHTML = `
      <h2>Error</h2>
      <p>Gagal memuat materi. Pastikan file data/materi.json tersedia.</p>
    `;
  });
/* End Load Materi Data */


/* Start Load Theme Preference */
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    document.querySelector('.theme-toggle').textContent = '☀️';
  }
  
  // Initialize copy protection after DOM loaded
  initCopyProtection();
  
  // Initialize developer mode toggle
  initDeveloperMode();
});
/* End Load Theme Preference */


/* Start Load Materi Function */
function loadMateri(index) {
  if (materi.length === 0) {
    document.getElementById("materi").innerHTML = `
      <h2>Loading...</h2>
      <p>Memuat materi...</p>
    `;
    return;
  }

  document.getElementById("materi").innerHTML = `
    <h2>${materi[index].title}</h2>
    ${materi[index].content}
  `;

  document.querySelectorAll(".sidebar li")
    .forEach(li => li.classList.remove("active"));

  document.querySelectorAll(".sidebar li")[index]
    .classList.add("active");
}
/* End Load Materi Function */


/* Start Toggle Sidebar */
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const burgerIcon = document.querySelector(".burger-icon");

  sidebar.classList.toggle("collapsed");

  if (sidebar.classList.contains("collapsed")) {
    burgerIcon.textContent = "☰";
  } else {
    burgerIcon.textContent = "✕";
  }
}
/* End Toggle Sidebar */


/* Start Toggle Theme */
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  document.querySelector(".theme-toggle").textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
/* End Toggle Theme */


/* Start Copy Protection */
let protectionEnabled = true; // Global flag for protection status

function initCopyProtection() {
  // Add watermark overlay to prevent clean screenshots
  addWatermarkOverlay();
  
  // KLIK KANAN DIIZINKAN untuk inspect element (keperluan evaluasi dosen)
  // Tidak ada blocking pada contextmenu

  // Disable Ctrl+C, Ctrl+A, Ctrl+X, Ctrl+U, F12, Ctrl+Shift+I
  document.addEventListener('keydown', function(e) {
    if (!protectionEnabled) return; // Skip if protection disabled
    
    // INSPECT ELEMENT & DEV TOOLS - TIDAK DIBLOKIR untuk keperluan evaluasi dosen
    // F12, Ctrl+Shift+I, Ctrl+Shift+J tetap bisa dipakai
    
    // Ctrl+U (View Source) - Tetap diblokir
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      showCopyAlert();
      return false;
    }
    
    // Ctrl+C (Copy)
    if (e.ctrlKey && e.keyCode === 67) {
      e.preventDefault();
      showCopyAlert();
      return false;
    }
    
    // Ctrl+X (Cut)
    if (e.ctrlKey && e.keyCode === 88) {
      e.preventDefault();
      showCopyAlert();
      return false;
    }
    
    // Ctrl+A (Select All)
    if (e.ctrlKey && e.keyCode === 65) {
      e.preventDefault();
      showCopyAlert();
      return false;
    }
  });

  // Disable copy event
  document.addEventListener('copy', function(e) {
    if (protectionEnabled) {
      e.preventDefault();
      showCopyAlert();
      return false;
    }
  });

  // Disable cut event
  document.addEventListener('cut', function(e) {
    if (protectionEnabled) {
      e.preventDefault();
      showCopyAlert();
      return false;
    }
  });

  // Disable text selection with CSS
  updateTextSelection();

  // Disable drag and drop
  document.addEventListener('dragstart', function(e) {
    if (protectionEnabled) {
      e.preventDefault();
      return false;
    }
  });
}

// Update text selection based on protection status
function updateTextSelection() {
  if (protectionEnabled) {
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
  } else {
    document.body.style.userSelect = 'auto';
    document.body.style.webkitUserSelect = 'auto';
    document.body.style.mozUserSelect = 'auto';
    document.body.style.msUserSelect = 'auto';
  }
}

// Show alert when someone tries to copy
function showCopyAlert() {
  // Create custom alert
  const alertDiv = document.createElement('div');
  alertDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #ef4444;
      color: white;
      padding: 20px 40px;
      border-radius: 10px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      z-index: 9999;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      animation: slideIn 0.3s ease;
    ">
      ⚠️ Copy-Paste Dinonaktifkan!<br>
      <span style="font-size: 14px; font-weight: normal;">© 2025 Titan Faranzano</span>
    </div>
    <style>
      @keyframes slideIn {
        from { transform: translate(-50%, -60%); opacity: 0; }
        to { transform: translate(-50%, -50%); opacity: 1; }
      }
    </style>
  `;
  
  document.body.appendChild(alertDiv);
  
  // Remove alert after 2 seconds
  setTimeout(() => {
    alertDiv.remove();
  }, 2000);
}

// Console warning
console.log('%c⚠️ PERHATIAN UNTUK DOSEN/EVALUATOR', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%c✅ DevTools & Inspect Element: DIIZINKAN untuk evaluasi', 'color: #10b981; font-size: 14px;');
console.log('%c❌ Copy-Paste Konten: DINONAKTIFKAN untuk proteksi', 'color: #ef4444; font-size: 14px;');
console.log('%c', 'padding: 5px;');
console.log('%c© 2025 Titan Faranzano', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%cKonten ini dilindungi. Copy-paste dinonaktifkan.', 'font-size: 14px;');
console.log('%cPenggunaan tanpa izin dapat ditindak.', 'color: orange; font-size: 14px;');

// Add watermark function
function addWatermarkOverlay() {
  // Create invisible watermark overlay
  const watermark = document.createElement('div');
  watermark.id = 'watermark-protection';
  watermark.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9998;
    opacity: 0.03;
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 100px,
      rgba(239, 68, 68, 0.1) 100px,
      rgba(239, 68, 68, 0.1) 200px
    );
    transition: opacity 0.3s ease;
  `;
  
  // Add text watermarks
  const texts = ['© Titan Faranzano', 'Protected Content', 'Do Not Copy'];
  for (let i = 0; i < 15; i++) {
    const textElement = document.createElement('div');
    textElement.textContent = texts[i % texts.length];
    textElement.style.cssText = `
      position: absolute;
      font-size: 48px;
      font-weight: bold;
      color: rgba(239, 68, 68, 0.05);
      transform: rotate(-45deg);
      white-space: nowrap;
      user-select: none;
      pointer-events: none;
      top: ${Math.random() * 80 + 10}%;
      left: ${Math.random() * 80 + 10}%;
    `;
    watermark.appendChild(textElement);
  }
  
  document.body.appendChild(watermark);
  
  // Detect screenshot attempt (limited detection)
  detectScreenshotAttempt();
}

// Update watermark visibility
function updateWatermark() {
  const watermark = document.getElementById('watermark-protection');
  if (watermark) {
    watermark.style.opacity = protectionEnabled ? '0.03' : '0';
  }
}

// Limited screenshot detection
function detectScreenshotAttempt() {
  // Detect when window loses focus (possible screenshot)
  let screenshotWarning = false;
  
  document.addEventListener('visibilitychange', function() {
    if (document.hidden && !screenshotWarning) {
      screenshotWarning = true;
      console.warn('%c⚠️ SCREENSHOT DETECTED?', 'color: red; font-size: 20px; font-weight: bold;');
      console.log('%cSetiap screenshot akan memiliki watermark tersembunyi', 'font-size: 14px;');
      
      // Reset flag after 3 seconds
      setTimeout(() => {
        screenshotWarning = false;
      }, 3000);
    }
  });
  
  // Detect Print Screen key (Windows - limited)
  document.addEventListener('keyup', function(e) {
    if (e.key === 'PrintScreen') {
      showScreenshotAlert();
    }
  });
  
  // Detect common screenshot shortcuts
  document.addEventListener('keydown', function(e) {
    // Windows: Win+Shift+S (Snipping Tool)
    // Mac: Cmd+Shift+3/4
    if ((e.metaKey || e.key === 'Meta') && e.shiftKey && (e.key === 's' || e.key === '3' || e.key === '4')) {
      showScreenshotAlert();
    }
  });
}

// Show screenshot alert
function showScreenshotAlert() {
  const alertDiv = document.createElement('div');
  alertDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #f59e0b;
      color: white;
      padding: 20px 40px;
      border-radius: 10px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      z-index: 9999;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      animation: slideIn 0.3s ease;
    ">
      📸 Screenshot Terdeteksi!<br>
      <span style="font-size: 14px; font-weight: normal;">Konten memiliki watermark tersembunyi</span><br>
      <span style="font-size: 12px; font-weight: normal;">© 2025 Titan Faranzano</span>
    </div>
    <style>
      @keyframes slideIn {
        from { transform: translate(-50%, -60%); opacity: 0; }
        to { transform: translate(-50%, -50%); opacity: 1; }
      }
    </style>
  `;
  
  document.body.appendChild(alertDiv);
  
  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}

/* Start Developer Mode Toggle */
let keySequence = [];
const secretCode = ['d', 'e', 'v']; // Type "dev" to toggle
let devModeActive = false;

function initDeveloperMode() {
  document.addEventListener('keypress', function(e) {
    keySequence.push(e.key.toLowerCase());
    
    // Keep only last 3 keys
    if (keySequence.length > 3) {
      keySequence.shift();
    }
    
    // Check if matches secret code
    if (keySequence.join('') === secretCode.join('')) {
      toggleDeveloperMode();
      keySequence = []; // Reset
    }
  });
}

function toggleDeveloperMode() {
  devModeActive = !devModeActive;
  protectionEnabled = !devModeActive;
  
  // Update UI elements
  updateTextSelection();
  updateWatermark();
  
  // Show status notification
  const statusDiv = document.createElement('div');
  const bgColor = devModeActive ? '#10b981' : '#ef4444';
  const statusText = devModeActive ? '🔓 Developer Mode ON' : '🔒 Protection Mode ON';
  
  statusDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${bgColor};
      color: white;
      padding: 15px 30px;
      border-radius: 10px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      z-index: 10000;
      font-size: 16px;
      font-weight: bold;
      animation: slideInRight 0.3s ease;
    ">
      ${statusText}
    </div>
    <style>
      @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    </style>
  `;
  
  document.body.appendChild(statusDiv);
  
  // Console log
  console.log(`%c${statusText}`, `color: white; background: ${bgColor}; padding: 10px; font-size: 16px; font-weight: bold;`);
  
  if (devModeActive) {
    console.log('%cYou can now use DevTools, copy-paste, and inspect elements freely!', 'color: #10b981; font-size: 14px;');
    console.log('%cType "dev" again to re-enable protection.', 'color: #6b7280; font-size: 12px;');
  }
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    statusDiv.remove();
  }, 3000);
}
/* End Developer Mode Toggle */
/* End Copy Protection */