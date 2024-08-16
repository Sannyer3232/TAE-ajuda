function verificarRespostas(assunto) {
    const assuntoInt = parseInt(assunto);
    console.log(assuntoInt);

    const respostasCorretas = {
        1: { questao1: 'a', questao2: 'c', questao3: 'b' },
        2: { questao1: 'c', questao2: 'b', questao3: 'c' },
        3: { questao1: 'b', questao2: 'c', questao3: 'a' },
        4: { questao1: 'a', questao2: 'c', questao3: 'a' },
        5: { questao1: 'c', questao2: 'b', questao3: 'd' },
    };

    const respostas = respostasCorretas[assuntoInt];
    if (!respostas) {
        console.error('Assunto inválido.');
        return;
    }

    let pontuacao = 0;
    for (const pergunta in respostas) {
        const respostaSelecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
        if (respostaSelecionada && respostaSelecionada.value === respostas[pergunta]) {
            pontuacao++;
        }
    }

    const resultado = pontuacao >= 2 ? 'Aprovado' : 'Reprovado';
    alert(`Você acertou ${pontuacao} pergunta(s). Resultado: ${resultado}`);
}
