// Sayfa yüklendiğinde konsola havalı bir Linux mesajı yazdıralım
document.addEventListener("DOMContentLoaded", () => {
    console.log("🐧 ZuruPrograms OS Web Terminal v1.0 Başlatıldı.");
    console.log("🛡️ Lisans: GNU GPL v3.0");
});

// İndirme butonuna tıklandığında çalışacak kod
const downloadBtn = document.getElementById("download-btn");

downloadBtn.addEventListener("click", (event) => {
    // Şimdilik link boş olduğu için sayfa yenilenmesin diye engelliyoruz
    if (downloadBtn.getAttribute("href") === "#") {
        event.preventDefault();
        alert("Zuru Calculator APK çok yakında burada yayında olacak! Takipte kalın. 🚀");
    }
});

// Başlığa tıklandığında terminal yeşili parlaması tetiklensin
const mainTitle = document.getElementById("main-title");
mainTitle.addEventListener("click", () => {
    mainTitle.style.textShadow = "0 0 25px #00ff66";
    setTimeout(() => {
        mainTitle.style.textShadow = "0 0 10px rgba(0, 255, 102, 0.3)";
    }, 1000);
});
