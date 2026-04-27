// =============================================
// PRÉ‑LOADER
// =============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 1500);
});

// =============================================
// PARTÍCULAS COM PARALLAX
// =============================================
const particlesContainer = document.getElementById('particles');
const particleCount = 30;
for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 15 + 10 + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particlesContainer.appendChild(particle);
}
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.querySelectorAll('.particle').forEach(p => {
        const moveX = (x - 0.5) * 20;
        const moveY = (y - 0.5) * 20;
        p.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// =============================================
// EFEITO DE DIGITAÇÃO
// =============================================
const tagline = document.getElementById('tagline');
const phrases = [
    'Explorando novos universos sonoros.',
    'Música eletrônica além do comum.',
    'Sons que transcendem o espaço.',
    'North Studios • Independente'
];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
function typeEffect() {
    const current = phrases[phraseIndex];
    if (!isDeleting) {
        tagline.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        tagline.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// =============================================
// NAVEGAÇÃO COM SCROLL
// =============================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 100);
    document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 600);
});

// =============================================
// BOTÃO VOLTAR AO TOPO
// =============================================
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =============================================
// INTERSECTION OBSERVER (ANIMAÇÕES DE SCROLL)
// =============================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// =============================================
// EFEITO TILT NOS CARDS (3D com o mouse)
// =============================================
document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
    // Remove tilt no mobile
    card.addEventListener('touchstart', () => {
        card.style.transform = 'none';
    });
});

// =============================================
// MENU MOBILE
// =============================================
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
mobileBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});