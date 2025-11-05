document.addEventListener('DOMContentLoaded', () => {
  // === الهامبرغر والمينيو ===
  const menuIcon = document.querySelector('#menu-icons');
  const navLinks = document.querySelector('.nav-links');

  if (menuIcon && navLinks) {
    // فتح/غلق
    menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // إغلاق عند الضغط على أي رابط داخل القائمة
    navLinks.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        navLinks.classList.remove('active');
      }
    });

  // === دوالّك كما هي ===
  window.visitGithub = function visitGithub() {
    window.open("https://github.com/gbrw", "_blank");
  };

  window.downloadCV = function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Ghaith_Alrawi_CV.pdf';
    link.download = 'Ghaith Alrawi CV.pdf';
    link.click();
  };

  // === إرسال الإيميل (نفس منطقك، مع حذر بسيط لو العناصر مو موجودة) ===
  const submitBtn = document.getElementById("submit-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", function(){
      const nameEl = document.getElementById("name-input");
      const msgEl  = document.getElementById("message-input");
      const name = (nameEl?.value || "").trim();
      const message = (msgEl?.value || "").trim();

      if(name === "" || message === ""){
        alert("Please fill both your name and message!");
        return;
      }

      const subject = `Message from ${name}`;
      const body = encodeURIComponent(message);
      window.location.href = `mailto:gaithalrawi99@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
