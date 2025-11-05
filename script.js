const menuIcon = document.querySelector('#menu-icons');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const menuIcon = document.getElementById('menu-icons');
const navLinks = document.querySelector('.nav-links');

// فتح وغلق المينيو + تغيير الأيقونة
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // إذا انفتحت القائمة → خلي X
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } 
    // إذا انغلقت القائمة → رجّع Bars
    else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

// إغلاق عند الضغط على أي رابط + رجوع الأيقونة
document.querySelector('.nav-links').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

 function visitGithub() {
    window.open("https://github.com/gbrw", "_blank");
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Ghaith_Alrawi_CV.pdf';
    link.download = 'Ghaith Alrawi CV.pdf';
    link.click();

}

document.getElementById("submit-btn").addEventListener("click", function(){
    const name = document.getElementById("name-input").value.trim();
    const message = document.getElementById("message-input").value.trim();

    if(name === "" || message === ""){
        alert("Please fill both your name and message!");
        return;
    }

    const subject = `Message from ${name}`;
    const body = encodeURIComponent(message);

    window.location.href = `mailto:gaithalrawi99@gmail.com?subject=${subject}&body=${body}`;
});








