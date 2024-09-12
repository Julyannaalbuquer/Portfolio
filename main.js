// Função do menu hambúrguer
const hamburger = document.getElementById("hamburger");
const navbarList = document.getElementById("navbar-list");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
    navbarList.classList.toggle("open");
    if (navbarList.classList.contains("open")) {
        closeBtn.style.display = "block";
    } else {
        closeBtn.style.display = "none";
    }
});

// Fecha o menu ao clicar no botão de fechar
closeBtn.addEventListener("click", () => {
    navbarList.classList.remove("open");
    closeBtn.style.display = "none"; // Esconde o botão de fechar quando o menu fecha
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", function(event) {
    const isClickInside = navbarList.contains(event.target) || hamburger.contains(event.target) || closeBtn.contains(event.target);

    if (!isClickInside) {
        navbarList.classList.remove("open");
        closeBtn.style.display = "none"; 
    }
});

// Função baixar currículo em PDF
document.getElementById('btn-curriculo').addEventListener('click', function() {
    const pdfUrl = './assets/Profile.pdf';

    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'Currículo.pdf';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
