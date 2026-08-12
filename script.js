function mudarIdioma(idioma) {

    if (idioma === "pt") {
        document.getElementById("titulo").textContent = "Truth ou False";
        document.getElementById("introducao").textContent =
            "Olá investigador! Seu trabalho é decidir se as notícias são verdadeiras ou falsas.";

        document.getElementById("verdadeiro").textContent = "VERDADEIRO";
        document.getElementById("falso").textContent = "FALSO";
    }

    if (idioma === "en") {
        document.getElementById("titulo").textContent = "Truth or False";
        document.getElementById("introducao").textContent =
            "Hello investigator! Your job is to decide whether the news is true or false.";

        document.getElementById("verdadeiro").textContent = "TRUE";
        document.getElementById("falso").textContent = "FALSE";
    }
}