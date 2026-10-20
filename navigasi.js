/* Memuat menu navigasi */
fetch("navigasi.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("Gagal memuat navigasi.html");
    }
    return response.text();
  })
  .then(html => {
    const nav = document.getElementById("navigasi-container");
    if (nav) {
      nav.innerHTML = html;
    }
  })
  .catch(error => console.error("Gagal memuat navigasi:", error));


/* Tombol berbagi otomatis */
(function () {
  function buatTombolBerbagi() {
    if (document.querySelector(".tombol-share")) return;

    const url = window.location.href;
    const judul = document.title;
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(judul + " " + url);

    const share = document.createElement("div");
    share.className = "tombol-share";
    share.setAttribute("aria-label", "Bagikan halaman");

    share.innerHTML = `
      <a href="https://www.facebook.com/sharer/sharer.php?u=${u}"
         target="_blank" rel="noopener noreferrer"
         aria-label="Facebook">
        <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook">
      </a>

      <a href="https://twitter.com/intent/tweet?text=${t}"
         target="_blank" rel="noopener noreferrer"
         aria-label="X">
        <img src="https://cdn.simpleicons.org/x/000000" alt="X">
      </a>

      <button type="button" class="share-instagram"
         aria-label="Instagram">
        <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram">
      </button>

      <a href="https://api.whatsapp.com/send?text=${t}"
         target="_blank" rel="noopener noreferrer"
         aria-label="WhatsApp">
        <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp">
      </a>

      <a href="https://t.me/share/url?url=${u}&text=${encodeURIComponent(judul)}"
         target="_blank" rel="noopener noreferrer"
         aria-label="Telegram">
        <img src="https://cdn.simpleicons.org/telegram/26A5E4" alt="Telegram">
      </a>
    `;

    /* Gaya tombol berbagi */
    const style = document.createElement("style");
    style.textContent = `
      
.tombol-share {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
  margin: 0 auto;
  padding: 0 12px 2px;
  text-align: center;
  box-sizing: border-box;
}


      .tombol-share a,
      .tombol-share button {
        display: inline-flex;
        flex: 0 0 34px;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
      }

      .tombol-share img {
        display: block;
        width: 30px;
        height: 30px;
        object-fit: contain;
      }

      .tombol-share button:focus-visible,
      .tombol-share a:focus-visible {
        outline: 2px solid #c49a52;
        outline-offset: 4px;
        border-radius: 4px;
      }

      @media (max-width: 360px) {
        .tombol-share {
          gap: 12px;
        }
      }
    `;
    document.head.appendChild(style);

    /* Fungsi berbagi Instagram */
    share.querySelector(".share-instagram")
      .addEventListener("click", async function () {
        if (navigator.share) {
          try {
            await navigator.share({
              title: judul,
              url: url
            });
          } catch (error) {
            /* Pengguna membatalkan atau berbagi gagal */
          }
        } else {
          window.open(
            "https://www.instagram.com/",
            "_blank",
            "noopener,noreferrer"
          );
        }
      });

    /* Tempatkan tombol berbagi sebelum footer */
    const footer = document.getElementById("footer-container");

    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(share, footer);
    } else {
      document.body.appendChild(share);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buatTombolBerbagi);
  } else {
    buatTombolBerbagi();
  }
})();
