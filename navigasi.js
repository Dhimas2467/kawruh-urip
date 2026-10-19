fetch("navigasi.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("Gagal memuat navigasi.html");
    }
    return response.text();
  })
  .then(html => {
    const wadah = document.getElementById("navigasi-container");

    if (!wadah) return;

    wadah.innerHTML = html;

    // Tandai halaman yang sedang dibuka
    const halaman = (
      window.location.pathname.split("/").pop() || "index.html"
    ).toLowerCase();

    wadah.querySelectorAll(".menu-utama a").forEach(link => {
      const tujuan = new URL(link.href, window.location.href);
      const namaTujuan = tujuan.pathname.split("/").pop().toLowerCase();

      if (namaTujuan === halaman && !link.classList.contains("tombol-beranda")) {
        link.classList.add("terpilih");
        link.setAttribute("aria-current", "page");
      } else if (
        namaTujuan === "index.html" &&
        halaman === "index.html" &&
        link.classList.contains("tombol-beranda")
      ) {
        link.classList.add("terpilih");
        link.setAttribute("aria-current", "page");
      }
    });
  })
  .catch(error => {
    console.error("Navigasi tidak dapat dimuat:", error);
  });
