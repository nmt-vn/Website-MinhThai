// === Hiệu ứng gõ chữ (Typing Effect) ===
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typing-text");
  const phrases = [
    "Sinh viên Công nghệ thông tin",
    "Trường Đại học Giao thông Vận tải TP.HCM"
  ];
  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  let speed = 100;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.substring(0, letterIndex);

    textElement.textContent = currentText;

    if (!isDeleting && letterIndex < currentPhrase.length) {
      letterIndex++;
      speed = 100; // tốc độ gõ
    } else if (isDeleting && letterIndex > 0) {
      letterIndex--;
      speed = 50; // tốc độ xóa
    } else if (!isDeleting && letterIndex === currentPhrase.length) {
      isDeleting = true;
      speed = 1500; // dừng lại 1 chút trước khi xóa
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 500; // dừng lại trước khi gõ dòng kế
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect(); // Bắt đầu hiệu ứng
});

// === Cuộn đến phần được chọn trong Navbar ===
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

// === Nút "Xem thêm" cuộn xuống ===
function scrollDown() {
  window.scrollBy({
    top: window.innerHeight * 0.5, // cuộn nửa màn hình mỗi lần
    behavior: "smooth"
  });
}
// === Chuyển đổi giữa hai tab kỹ năng ===
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".skills-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-target");

      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
});
