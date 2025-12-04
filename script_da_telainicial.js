/* ===== ANIMAR ELEMENTOS AO ROLAR ===== */

// Seleciona todos os elementos que devem aparecer animando
const elements = document.querySelectorAll(".card, .card-grande");

// Opções da animação
const options = {
    threshold: 0.2,       // 20% visível já ativa
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, options);

// Ativa animação para cada card
elements.forEach(el => observer.observe(el));



/* ===== HEADER FIXO COM TRANSIÇÃO ===== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



/* ===== HOVER SUAVE NAS IMAGENS ===== */

const cards = document.querySelectorAll(".card, .card-grande");

cards.forEach(card => {
    card.addEventListener("mousemove", () => {
        card.classList.add("hovering");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("hovering");
    });
});
document.getElementById("ganhePontosCard").addEventListener("click", () => {
    // Redireciona para outra página
    window.location.href = "recompensas.html";
});


