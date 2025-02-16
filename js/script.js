document.addEventListener("DOMContentLoaded", function () {
    const twitchCarousel = new bootstrap.Carousel(document.getElementById("twitchCarousel"), {
        interval: 5000, // Tempo de troca (5 segundos)
        pause: "hover", // Pausa ao passar o mouse
        wrap: true // Loop infinito
    });
});