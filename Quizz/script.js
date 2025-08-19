const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O time precisa de um líder em campo. Qual função você prefere desempenhar?",
        alternativas: [
            {
                texto: "Atacar, balançando as redes e sendo decisivo.",
                afirmacao: "Sua paixão pelo gol e espírito de artilheiro lembram o ídolo Jardel."
            },
            {
                texto: "Comandar o meio-campo com passes e visão de jogo.",
                afirmacao: "Sua inteligência e controle de jogo se comparam ao ídolo Dinho."
            }
        ]
    },
    {
        enunciado: "Em uma final de Libertadores, a partida está empatada e o jogo vai para os pênaltis. O que você faria?",
        alternativas: [
            {
                texto: "Pego a bola e sou o primeiro a bater o pênalti.",
                afirmacao: "Sua coragem e atitude para decidir lembram o ídolo Renato Portaluppi."
            },
            {
                texto: "Observo o adversário para defender o máximo de chutes.",
                afirmacao: "Sua calma e reflexo te tornam um líder como o ídolo Danrlei."
            }
        ]
    },
    {
        enunciado: "O time está em uma fase difícil, com resultados ruins. Como você age?",
        alternativas: [
            {
                texto: "Reúno o grupo para um papo reto e motivacional.",
                afirmacao: "Você é um líder nato e um motivador, como o ídolo Geromel."
            },
            {
                texto: "Trabalho duro nos treinos para dar o exemplo com dedicação.",
                afirmacao: "Sua dedicação e esforço são a chave para a vitória, como o ídolo Luan."
            }
        ]
    },
    {
        enunciado: "Você ganha a Copa do Brasil e um prêmio de craque do campeonato. Qual seu próximo passo?",
        alternativas: [
            {
                texto: "Continua focado para conquistar a Libertadores em seguida.",
                afirmacao: "Sua ambição por mais títulos e glórias é insaciável."
            },
            {
                texto: "Celebra com a torcida em um desfile na Arena, retribuindo o carinho.",
                afirmacao: "Você é carismático e entende a importância da conexão com a torcida."
            }
        ]
    },
    {
        enunciado: "Em uma entrevista, como você se descreveria?",
        alternativas: [
            {
                texto: "Guerreiro, que nunca desiste e luta até o fim.",
                afirmacao: "Seu espírito de luta é inigualável."
            },
            {
                texto: "Técnico, com muita habilidade e visão de jogo.",
                afirmacao: "Sua técnica apurada é sua maior característica."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada no Grêmio foi gloriosa!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();