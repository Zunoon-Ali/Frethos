const scrollBtn = document.getElementById("scrollTopBtn");

// Show/hide button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.remove("hidden");
        scrollBtn.classList.add("opacity-100");
    } else {
        scrollBtn.classList.add("hidden");
        scrollBtn.classList.remove("opacity-100");
    }
});

// Scroll to top on click with smooth behavior
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

 document.getElementById("scrollToContact").addEventListener("click", () => {
    document.getElementById("contactForm").scrollIntoView({
      behavior: "smooth",
    });
  });