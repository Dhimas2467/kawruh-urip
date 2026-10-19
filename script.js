/* =====================================
   TOMBOL BACK TO TOP
   KAWRUH URIP
===================================== */

document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("backToTop");

  // Berhenti jika tombol tidak ditemukan
  if (!backToTop) {
    console.warn('Elemen dengan id "backToTop" tidak ditemukan.');
    return;
  }

  // Menampilkan tombol saat halaman digulir
  function updateBackToTop() {
    if (window.scrollY > 260) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  // Memantau gerakan gulir halaman
  window.addEventListener("scroll", updateBackToTop, {
    passive: true
  });

  // Kembali ke bagian atas saat tombol ditekan
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Memeriksa posisi halaman saat pertama kali dibuka
  updateBackToTop();
});
