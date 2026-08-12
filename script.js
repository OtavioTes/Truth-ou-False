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
function responder(resposta) {

    const correta = document.body.dataset.resposta;
    const resultado = document.getElementById("resultado");

    const ingles = document.documentElement.lang === "en";

    if (resposta === correta) {

        if (ingles) {
            resultado.textContent = "✅ Correct! You got it right.";
        } else {
            resultado.textContent = "✅ Correto! fez o minimo.";
        }

        resultado.style.color = "green";

    } else {

        if (ingles) {
            resultado.textContent = "❌ Incorrect! Try to pay more attention.";
        } else {
            resultado.textContent = "❌ Incorreto! mds minha vó acerto pensando que era bingo meu";
        }

        resultado.style.color = "red";
    }
}