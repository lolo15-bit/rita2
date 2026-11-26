
const perguntas = [
    {
        pergunta: "1. O que é Inteligência Artificial?",
        alternativas: [
            "Uma tecnologia que simula capacidades humanas",
            "Um tipo de computador",
            "Um jogo eletrônico"
        ],
        correta: 0
    },
    {
        pergunta: "2. Como a IA pode ajudar na escola?",
        alternativas: [
            "Fazendo todas as tarefas pelos alunos",
            "Ajudando nas pesquisas e nos estudos",
            "Substituindo os professores"
        ],
        correta: 1
    },
    {
        pergunta: "3. Podemos confiar em tudo que a IA responde?",
        alternativas: [
            "Sim, sempre",
            "Não, devemos verificar as informações",
            "Sim, porque ela nunca erra"
        ],
        correta: 1
    },
    {
        pergunta: "4. Qual é uma atitude responsável ao usar IA?",
        alternativas: [
            "Copiar tudo sem ler",
            "Usar para aprender e desenvolver ideias",
            "Não estudar mais"
        ],
        correta: 1
    },
    {
        pergunta: "5. A IA pode substituir o pensamento humano?",
        alternativas: [
            "Sim, completamente",
            "Não, o pensamento crítico continua importante",
            "Sim, em todas as situações"
        ],
        correta: 1
    }
];

let atual = 0;
let pontos = 0;

function iniciar() {
    atual = 0;
    pontos = 0;

    document.getElementById("inicio").classList.add("escondido");
    document.getElementById("resultado").classList.add("escondido");
    document.getElementById("atividade").classList.remove("escondido");

    mostraPergunta();
}

function mostraPergunta() {
    if (atual < perguntas.length) {

        document.getElementById("numero").textContent =
            "Pergunta " + (atual + 1);

        document.getElementById("pergunta").textContent =
            perguntas[atual].pergunta;

        const alternativas = document.getElementById("alternativas");
        alternativas.innerHTML = "";

        perguntas[atual].alternativas.forEach((opcao, indice) => {
            const botao = document.createElement("button");

            botao.textContent = opcao;
            botao.onclick = () => responder(indice);

            alternativas.appendChild(botao);
        });

    } else {
        mostraResultado();
    }
}

function responder(resposta) {
    if (resposta === perguntas[atual].correta) {
        pontos++;
        document.getElementById("mensagem").textContent =
            "Muito bem! Resposta correta!";
    } else {
        document.getElementById("mensagem").textContent =
            "Que tal refletir mais sobre esse assunto?";
    }

    atual++;

    setTimeout(() => {
        document.getElementById("mensagem").textContent = "";
        mostraPergunta();
    }, 800);
}

function mostraResultado() {
    document.getElementById("atividade").classList.add("escondido");
    document.getElementById("resultado").classList.remove("escondido");

    document.getElementById("pontuacao").textContent =
        "Você acertou " + pontos + " de " + perguntas.length + " perguntas!";

    let comentario = "";

    if (pontos === 5) {
        comentario = "Excelente! Você entende muito sobre IA na escola!";
    } else if (pontos >= 3) {
        comentario = "Muito bem! Continue aprendendo sobre Inteligência Artificial!";
    } else {
        comentario = "Continue estudando! A IA pode ser uma ótima ferramenta de aprendizagem.";
    }

    document.getElementById("comentario").textContent = comentario;
}

function reiniciar() {
    document.getElementById("resultado").classList.add("escondido");
    document.getElementById("inicio").classList.remove("escondido");
}
