function mudarIdioma(idioma) {

    if (idioma === "pt") {
        document.getElementById("titulo").textContent =
            "Teste de intensificador de fake news";

        document.getElementById("introducao").innerHTML =
            'Olá investigador(a), seu trabalho de hoje é ler notícias e decidir se elas são <i class="verde">VERDADEIRAS</i> ou <i class="vermelho">FALSAS</i>.';

        document.getElementById("verdadeiro").textContent =
            "VERDADEIRO";

        document.getElementById("falso").textContent =
            "FALSO";
    }

    if (idioma === "en") {
        document.getElementById("titulo").textContent =
            "Fake News Detection Test";

        document.getElementById("introducao").innerHTML =
            'Hello investigator! Your job is to read the news and decide whether they are <i class="verde">TRUE</i> or <i class="vermelho">FALSE</i>.';

        document.getElementById("verdadeiro").textContent =
            "TRUE";

        document.getElementById("falso").textContent =
            "FALSE";
    }
}