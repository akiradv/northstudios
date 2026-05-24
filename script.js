// =============================================
// NORTH STUDIOS – SCRIPT UNIFICADO (v3)
// Mantém posição da tagline ao trocar idioma
// =============================================

// ========== EFEITO DE DIGITAÇÃO COM RODÍZIO ==========
const tagline = document.getElementById('tagline');
if (tagline) {
    const isOrange = document.querySelector('.orange-hero') !== null;
    const artistKey = isOrange ? 'orangeTaglines' : 'soltryxTaglines';

    let phrases = [];
    let phraseIndex = parseInt(localStorage.getItem('phraseIndex') || '0');
    let charIndex = 0;
    let isDeleting = false;
    let timer = null;

    // Remove o índice salvo após usá-lo
    localStorage.removeItem('phraseIndex');

    function getPhrases() {
        const lang = localStorage.getItem('i18n_lang') || 'pt-br';
        const translations = window.I18N_TRANSLATIONS;
        if (translations && translations[lang] && translations[lang][artistKey]) {
            return translations[lang][artistKey];
        }
        return isOrange ?
            ["Novos sentimentos sonoros.", "Bossa nova e jazz introspectivo."] :
            ["Explorando novos universos sonoros.", "Música eletrônica além do comum."];
    }

    function typeEffect() {
        const current = phrases[phraseIndex];
        if (!isDeleting) {
            tagline.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                isDeleting = true;
                timer = setTimeout(typeEffect, 3000);
                return;
            }
        } else {
            tagline.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                timer = setTimeout(typeEffect, 500);
                return;
            }
        }
        timer = setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    phrases = getPhrases();
    typeEffect();

    // Salva o índice antes de recarregar a página (troca de idioma)
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('phraseIndex', phraseIndex);
    });
}

// ========== NAVBAR COM SCROLL ==========
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 100);
    const backToTop = document.getElementById('backToTop');
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 600);
});

// ========== BOTÃO VOLTAR AO TOPO ==========
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ========== ANIMAÇÃO DE SCROLL ==========
const animatedElements = document.querySelectorAll('.animate-on-scroll');
if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.2 });
    animatedElements.forEach(el => observer.observe(el));
}

// ========== EFEITO TILT ==========
document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        const rx = ((y - rect.height / 2) / (rect.height / 2)) * -8;
        const ry = ((x - rect.width / 2) / (rect.width / 2)) * 8;
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)');
    card.addEventListener('touchstart', () => card.style.transform = 'none');
});

// ========== MENU MOBILE ==========
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));
}