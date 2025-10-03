// Smooth Scroll Effect
document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // default jump hatayega
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    // Scroll with smooth behavior
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
