let listaDeNumerosSorteados = [];
let = numeroMaximo = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 0;

exibirMensagemInicial();

// Função que exibe um texto na tela, levando os valores tag e texto como parâmetros
function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
// Função que exibe uma mensagem inicial na tela, utilizando da função "exibirTextoNaTela()"
function exibirMensagemInicial()
{
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e ' + numeroMaximo);
}

// Função para gerar um número aleatório
function verificarChute() 
{
    let chute = document.querySelector('input').value;
    tentativas++;

    if (chute == numeroAleatorio)
    {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1','Você acertou!');
        exibirTextoNaTela('p','Parabéns, você acertou o número secreto (' + numeroAleatorio + ')  em ' + tentativas + ' ' + palavraTentativa + '!');
        document.getElementById('chute').setAttribute('disabled',true);
        botaoNovoJogo();
    }   
    else 
    {
        exibirTextoNaTela('h1','Tente novamente');
        if (chute > numeroAleatorio)
        {
            exibirTextoNaTela('p','O número secreto é menor que ' + chute);
        } 
        else
        {
            exibirTextoNaTela('p','O número secreto é maior que ' + chute);
        }
        limparCampo();
    }
}
//Gerador de Números
function gerarNumeroAleatorio() 
{
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    if(listaDeNumerosSorteados.length == numeroMaximo) 
    {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }
    else
    {
        listaDeNumerosSorteados.push(numeroEscolhido)
        //console.log (listaDeNumerosSorteados)
        return numeroEscolhido;
    }
      
}
//Facilitador de novas tentativas
function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = ' ';
}

//Botão para reiniciar o jogo
function botaoNovoJogo()
{
    document.getElementById('reiniciar').removeAttribute('disabled');
}

//Função para reiniciar o jogo
function novoJogo()
{
    numeroAleatorio = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 0
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('chute').removeAttribute('disabled');
}