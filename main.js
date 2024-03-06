const form = document.getElementById('form-atividade');

const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />'
const atividades= [];
const notas = [];
const spanAprovado = '<span class= "resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class= "resultado reprovado">Reprovado</span>';

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal()

})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`o telefone ${inputNotaAtividade.value} já foi inserido`)
    } else{

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += '</tr>;'

    linhas += linha;
    }
    inputNomeAtividade.value = "";
    inputNotaAtividade.value = ""; 
    }

function atualizaTabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas
}


