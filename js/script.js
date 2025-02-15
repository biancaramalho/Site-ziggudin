document.addEventListener("DOMContentLoaded", function () {
    // Botão "Assista Agora!"
    document.querySelector(".btn-danger").addEventListener("click", function () {
        alert("Redirecionando para a Twitch...");
    });

    // Ativar carrossel do Bootstrap automaticamente
    let clipCarousel = new bootstrap.Carousel(document.getElementById("clipCarousel"), {
        interval: 3000
    });
});
