// Modern Academic Portfolio Scripts for Arman Forouzesh

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Theme Management (Light / Dark Mode) ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check stored theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  setTheme(currentTheme);
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }
  
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // --- 2. Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // --- 3. Lightbox Image Viewer ---
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  const modalClose = document.getElementById('modal-close');
  
  document.querySelectorAll('.zoomable-img').forEach(img => {
    img.addEventListener('click', () => {
      if (modal && modalImg) {
        modalImg.src = img.src;
        modal.classList.add('active');
      }
    });
  });
  
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // --- 4. Image Error & Empty File Fallback ---
  document.querySelectorAll('.project-media-container img').forEach(img => {
    function handleBrokenImage() {
      const container = img.closest('.project-media-container');
      if (container && !container.querySelector('.image-fallback-placeholder')) {
        img.style.display = 'none';
        const filename = img.getAttribute('src').split('/').pop();
        const placeholder = document.createElement('div');
        placeholder.className = 'image-fallback-placeholder';
        placeholder.innerHTML = `
          <div class="placeholder-icon">🎞️</div>
          <div class="placeholder-title">Visual Media: ${filename}</div>
          <div class="placeholder-hint">The file <code>assets/${filename}</code> in your repository was an empty placeholder (2 bytes). Once you copy your full animated GIF/image file into <code>assets/</code>, it will automatically render here.</div>
        `;
        container.insertBefore(placeholder, container.firstChild);
      }
    }

    img.addEventListener('error', handleBrokenImage);
    // In case the browser loads the 2-byte file as 0x0 image
    if (img.complete && img.naturalWidth === 0) {
      handleBrokenImage();
    }
  });

  // --- 5. Scroll Active Link Highlighting ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navLink) navLink.classList.add('active');
      } else {
        if (navLink) navLink.classList.remove('active');
      }
    });
  });
});

// Copy BibTeX citation helper
function copyBibtex(id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.innerText).then(() => {
    alert('BibTeX citation copied to clipboard!');
  }).catch(() => {
    prompt('Copy citation:', el.innerText);
  });
}
