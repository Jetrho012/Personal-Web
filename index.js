const reveals = document.querySelectorAll(".reveal");

function scrollReveal() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 70;
    console.log(elementVisible);
    

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("show");
    } else {
      reveals[i].classList.remove("show");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
scrollReveal(); // trigger di awal saat halaman dimuat

  // Fungsi untuk semua menu yang pakai scroll
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // cegah default behaviour
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

