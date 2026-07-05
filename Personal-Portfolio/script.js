const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
 
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
 
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
 
  // Highlight nav link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop){
        current = section.getAttribute('id');
      }
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`){
        link.classList.add('active');
      }
    });
  });