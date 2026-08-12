function mudarIdioma(idioma) {

    if (idioma === "pt") {

        document.getElementById("titulo").textContent =
            "Teste de intensificador de fake news";

        document.getElementById("introducao").innerHTML =
            'Olá investigador(a), seu trabalho de hoje é ler notícias e decidir se elas são <i class="verde">VERDADEIRAS</i> ou <i class="vermelho">FALSAS</i>.';

        document.getElementById("informacao").textContent =
            "Escolhida a língua, vamos para o teste. Teremos 5 testes em cada idioma, ou seja, terminou um pode ir pro outro :]";

        document.getElementById("instrucao").textContent =
            "Clique no botão abaixo fazendo o favor.";

        document.getElementById("botaoTeste").textContent =
            "COMEÇAR TESTE";

        document.getElementById("botaoTeste").href =
            "teste-pt1.html";
    }

    if (idioma === "en") {

        document.getElementById("titulo").textContent =
            "Fake News Detection Test";

        document.getElementById("introducao").innerHTML =
            'Hello investigator! Your job is to read the news and decide whether they are <i class="verde">TRUE</i> or <i class="vermelho">FALSE</i>.';

        document.getElementById("informacao").textContent =
            "Language chosen, let's go to the test. There will be 5 tests in each language, so after finishing one, you can move on to the next one :]";

        document.getElementById("instrucao").textContent =
            "Please click the button below.";

        document.getElementById("botaoTeste").textContent =
            "START TEST";

        document.getElementById("botaoTeste").href =
            "teste-en1.html";
    }
}