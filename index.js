// ========================
// Scroll Reveal Animation
// ========================
const reveals = document.querySelectorAll(".reveal");

function scrollReveal() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 70;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("show");
    } else {
      reveals[i].classList.remove("show");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
scrollReveal(); // Jalankan saat halaman pertama kali dimuat

// ========================
// Smooth Scroll Navbar
// ========================
document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // cegah behaviour default
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }

    // Hapus hash dari URL
    history.replaceState(null, null, ' ');
  });
});
