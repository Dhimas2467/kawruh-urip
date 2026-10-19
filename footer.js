
fetch("footer.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("Gagal memuat footer.html");
    }
    return response.text();
  })
  .then(html => {
    document.getElementById("footer-container").innerHTML = html;
  })
  .catch(error => {
    console.error("Footer tidak dapat dimuat:", error);
  });
