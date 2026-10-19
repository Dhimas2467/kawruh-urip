const backToTop = document.getElementById("backToTop");
function updateBackToTop() {
  backToTop.classList.toggle("visible", window.scrollY > 260);
}
window.addEventListener("scroll", updateBackToTop, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
updateBackToTop();
