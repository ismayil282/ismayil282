// Main site JS: waits for includes to be injected then attaches behaviors
window.addEventListener('includesLoaded', () => {
  // Nav toggle (header is loaded into DOM by partial)
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('#primary-nav');
  if(navToggle && primaryNav){
    navToggle.addEventListener('click', ()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      primaryNav.classList.toggle('open');
    });
  }

  // Close nav when clicking a link (mobile)
  document.addEventListener('click', (e)=>{
    if(e.target.matches('.site-nav a')){
      if(primaryNav && primaryNav.classList.contains('open')) primaryNav.classList.remove('open');
      if(navToggle) navToggle.setAttribute('aria-expanded','false');
    }
  });

  // Fill in year placeholders
  document.querySelectorAll('#year').forEach(el=>el.textContent = new Date().getFullYear());
});
