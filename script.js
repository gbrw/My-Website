const menuIcon = document.querySelector('#menu-icons');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

 function visitGithub() {
    window.open("https://github.com/gbrw", "_blank");
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Ghaith_Alrawi_CV.pdf';
    link.download = 'Ghaith Alrawi CV.pdf';
    link.click();
}