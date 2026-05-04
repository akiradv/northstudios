/**
 * i18n.js — Sistema de tradução reutilizável
 * Versão 1.2 — Maio/2026
 * Suporte a data-i18n (texto) e data-i18n-html (HTML preservado)
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'i18n_lang';
  const DEFAULT_LANG = 'pt-br';
  const BANNER_AUTO_HIDE_DAYS = 30;

  // Expõe a função globalmente
  window.changeLanguage = function(lang) {
    setStoredLang(lang);
    location.reload();
  };

  function getBrowserLang() {
    const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (lang.startsWith('pt')) return 'pt-br';
    if (lang.startsWith('en')) return 'en';
    return lang;
  }

  function getStoredLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function setStoredLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function getBannerDismissed() {
    try {
      const ts = localStorage.getItem('i18n_banner_dismissed');
      if (!ts) return false;
      const now = Date.now();
      const then = parseInt(ts, 10);
      return (now - then) / (1000 * 60 * 60 * 24) < BANNER_AUTO_HIDE_DAYS;
    } catch (e) { return false; }
  }

  function setBannerDismissed() {
    try { localStorage.setItem('i18n_banner_dismissed', Date.now().toString()); } catch (e) {}
  }

  function applyTranslations(translations, lang) {
    if (!translations || !translations[lang]) return;
    const dict = translations[lang];

    // data-i18n (texto puro)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', dict[key]);
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // data-i18n-html (preserva HTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    document.documentElement.setAttribute('lang', lang);
  }

  function showBanner(availableLangs, currentLang, browserLang, translations) {
    if (getBannerDismissed() || currentLang === browserLang || !availableLangs.includes(browserLang)) return;

    const langNames = { 'pt-br': 'Português (Brasil)', 'en': 'English', 'es': 'Español', 'fr': 'Français', 'de': 'Deutsch', 'ja': '日本語', 'ko': '한국어', 'zh': '中文' };
    const nativeName = langNames[browserLang] || browserLang;

    document.body.insertAdjacentHTML('beforeend', `
      <div id="i18n-banner" style="position:fixed;bottom:20px;right:20px;z-index:10000;background:#111;color:#fff;border:1px solid #333;border-radius:12px;padding:1rem 1.5rem;box-shadow:0 8px 24px rgba(0,0,0,0.5);font-family:'Segoe UI',sans-serif;max-width:340px;animation:fadeInUp 0.4s ease;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
          <span style="font-weight:600;">🌐 ${nativeName}</span>
          <button id="i18n-banner-close" style="background:none;border:none;color:#aaa;cursor:pointer;font-size:1.2rem;">&times;</button>
        </div>
        <p style="margin:0 0 0.8rem;font-size:0.9rem;color:#ccc;">Este site está disponível em <strong>${nativeName}</strong>. Deseja mudar?</p>
        <div style="display:flex;gap:0.5rem;">
          <button id="i18n-banner-switch" style="background:#fff;color:#000;border:none;padding:0.5rem 1rem;border-radius:6px;cursor:pointer;font-weight:600;">Sim, traduzir</button>
          <button id="i18n-banner-dismiss" style="background:transparent;border:1px solid #555;color:#ccc;padding:0.5rem 1rem;border-radius:6px;cursor:pointer;">Não, obrigado</button>
        </div>
      </div>
      <style>@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}</style>
    `);

    document.getElementById('i18n-banner-switch').addEventListener('click', () => {
      setStoredLang(browserLang);
      document.getElementById('i18n-banner').remove();
      location.reload();
    });
    document.getElementById('i18n-banner-dismiss').addEventListener('click', () => { setBannerDismissed(); document.getElementById('i18n-banner').remove(); });
    document.getElementById('i18n-banner-close').addEventListener('click', () => { setBannerDismissed(); document.getElementById('i18n-banner').remove(); });
  }

  function init() {
    const translations = window.I18N_TRANSLATIONS || {};
    const availableLangs = Object.keys(translations);
    const browserLang = getBrowserLang();
    const storedLang = getStoredLang();
    let currentLang = storedLang || DEFAULT_LANG;
    if (!availableLangs.includes(currentLang)) currentLang = DEFAULT_LANG;
    if (availableLangs.includes(currentLang)) applyTranslations(translations, currentLang);
    if (window.I18N_BANNER !== false && !storedLang) showBanner(availableLangs, currentLang, browserLang, translations);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();