function mudarIdioma(idioma) {

    if (idioma === "pt") {

        document.getElementById("titulo").textContent =
            "Teste de intensificador de fake news";

        document.getElementById("introducao").innerHTML =
            'Olá investigador(a), seu trabalho de hoje é ler notícias e decidir se elas são <i class="verde">VERDADEIRAS</i> ou <i class="vermelho">FALSAS</i>.';

        document.getElementById("informacao").textContent =
            "para fins academicos começaremos pelo teste em portugues e depois sera a parte em ingles, sigua a instrução abaixo!";

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
            "For academic purposes, we will begin with the test in Portuguese, followed by the English section. Please follow the instructions below!";

        document.getElementById("instrucao").textContent =
            "Please click the button below.";

       if (idioma === "en") {
    document.getElementById("botaoTeste").textContent = "START TEST";

    document.getElementById("botaoTeste").href = "teste-pt1.html";
}
    }
}
function responder(resposta) {
    const correta = document.body.dataset.resposta;
    const idioma = document.documentElement.lang;
    const resultado = document.getElementById("resultado");

    function responder(resposta) {

    const correta = document.body.dataset.resposta;
    const idioma = document.documentElement.lang;
    const resultado = document.getElementById("resultado");

    // Cria uma identificação única para cada página
    const pagina = window.location.pathname;
    const respondido = "respondido_" + pagina;

    // Impede responder duas vezes na MESMA questão
    if (sessionStorage.getItem(respondido) === "true") {
        return;
    }

    sessionStorage.setItem(respondido, "true");

    if (resposta === correta) {

        if (idioma === "en") {
            resultado.textContent = "✅ Correct! You got it right.";
        } else {
            resultado.textContent = "✅ Farmo cara!!!.";
        }

        resultado.style.color = "green";

        if (idioma === "pt-br") {
            let pontosPT = Number(localStorage.getItem("pontosPT")) || 0;
            pontosPT++;
            localStorage.setItem("pontosPT", pontosPT);
        }

        if (idioma === "en") {
            let pontosEN = Number(localStorage.getItem("pontosEN")) || 0;
            pontosEN++;
            localStorage.setItem("pontosEN", pontosEN);
        }

    } else {

        if (idioma === "en") {
            resultado.textContent = "❌ Incorrect!";
        } else {
            resultado.textContent = "❌ Muito ruim ta precisando estudar em!";
        }

        resultado.style.color = "red";
    }
}
}