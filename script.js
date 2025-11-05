const menuIcon = document.querySelector('#menu-icons');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
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
