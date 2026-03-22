/* ===== SANIFORT PRE-SCHOOL — MAIN JS v2 ===== */

// ── Sticky Navbar ──
const navbar = document.getElementById('navbar');
const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 60);
window.addEventListener('scroll', onScroll, { passive: true });

// ── Mobile Menu ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  const [s1, s2, s3] = hamburger.querySelectorAll('span');
  s1.style.transform  = open ? 'rotate(45deg) translate(5px, 5.5px)' : '';
  s2.style.opacity    = open ? '0' : '1';
  s3.style.transform  = open ? 'rotate(-45deg) translate(5px, -5.5px)' : '';
});
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => navLinks?.classList.remove('open'))
);

// ── Program Tabs ──
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab)?.classList.add('active');
  });
});

// ── Gallery Filter ──
const galBtns  = document.querySelectorAll('.gal-btn');
const galItems = document.querySelectorAll('.gal-item');
galBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    galBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    galItems.forEach(item => {
      const show = f === 'all' || item.dataset.category === f;
      item.classList.toggle('hidden', !show);
    });
  });
});

// ── Lightbox ──
const lightbox = document.getElementById('lightbox');
const lbBody   = document.getElementById('lbBody');
const lbClose  = document.getElementById('lbClose');
galItems.forEach(item => {
  item.addEventListener('click', () => {
    const thumb = item.querySelector('.gal-thumb');
    if (thumb && lightbox) {
      lbBody.innerHTML = `<div style="width:500px;height:360px;border-radius:22px;overflow:hidden;">${thumb.outerHTML}</div>`;
      lbBody.querySelector('.gal-thumb').style.cssText = 'width:100%;height:100%;font-size:1.2rem;';
      lbBody.querySelector('.gal-thumb span').style.fontSize = '6rem';
      lightbox.classList.add('open');
    }
  });
});
lbClose?.addEventListener('click', () => lightbox.classList.remove('open'));
lightbox?.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox?.classList.remove('open'); });

// ── Admission Form ──
const admForm    = document.getElementById('admissionForm');
const admSuccess = document.getElementById('formSuccess');
admForm?.addEventListener('submit', e => {
  e.preventDefault();
  if (admForm.checkValidity()) {
    admForm.style.display = 'none';
    admSuccess.style.display = 'block';
    admSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else { admForm.reportValidity(); }
});

// ── Inquiry Form ──
const inqForm    = document.getElementById('inquiryForm');
const inqSuccess = document.getElementById('inquirySuccess');
inqForm?.addEventListener('submit', e => {
  e.preventDefault();
  if (inqForm.checkValidity()) {
    inqForm.style.display = 'none';
    inqSuccess.style.display = 'block';
    inqSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else { inqForm.reportValidity(); }
});

// ── Brochure Download ──
document.getElementById('downloadBrochure')?.addEventListener('click', e => {
  e.preventDefault();
  alert('📄 Brochure coming soon!\n\nCall us at 9571148082 or WhatsApp for the brochure.');
});

// ── Scroll Reveal ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Counter Animation ──
function animateCount(el, target, suffix = '+') {
  let val = 0;
  const step = target / 60;
  const tick = () => {
    val = Math.min(val + step, target);
    el.textContent = Math.floor(val) + suffix;
    if (val < target) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach((el, i) => {
        const targets  = [500, 15, 10, 98];
        const suffixes = ['+', '+', '+', '%'];
        animateCount(el, targets[i], suffixes[i]);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stats, [data-stats]').forEach(el => statsObserver.observe(el));

// Also trigger stats bar counters
const statsBar = document.querySelector('[style*="grid-template-columns:repeat(4"]');
if (statsBar) {
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-num').forEach((el, i) => {
          const targets  = [500, 15, 10, 98];
          const suffixes = ['+', '+', '+', '%'];
          animateCount(el, targets[i], suffixes[i]);
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  barObserver.observe(statsBar);
}

// ── Add hover ripple to buttons ──
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    ripple.style.cssText = `
      position:absolute; border-radius:50%; background:rgba(255,255,255,.35);
      width:10px; height:10px; pointer-events:none;
      left:${e.clientX - rect.left - 5}px; top:${e.clientY - rect.top - 5}px;
      animation: ripple-out .6s ease-out forwards;
    `;
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

// Inject ripple keyframe
const s = document.createElement('style');
s.textContent = '@keyframes ripple-out{to{transform:scale(30);opacity:0}}';
document.head.appendChild(s);
