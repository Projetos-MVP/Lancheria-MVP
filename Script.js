const btnCardapio = document.getElementById(`btn-cardapio`);
const btnAdd = document.getElementById(`btn-adicionar`);
const btnLimpar = document.getElementById(`btn-limpar`);
const formCardapio = document.getElementById(`form-cardapio`);
const inputNome = document.getElementById(`item-nome`);
const inputPreco = document.getElementById(`item-preco`);
const listaCardapio = document.getElementById(`lista-cardapio`);
const statusMensagem = document.getElementById(`status`);
const formRemover = document.getElementById(`Cardapio-remover`);
const inputIdRemover = document.getElementById(`id-remover`);
const inputIdItem = document.getElementById(`id-item`);
const formAtualizar = document.getElementById(`Cardapio-atualizar`);
const inputIdAtualizar = document.getElementById(`id-atualizar`);
const inputNomeAtualizar = document.getElementById(`nome-atualizar`);
const inputPrecoAtualizar = document.getElementById(`preco-atualizar`);


let itens = 0;
let cardapio = [];


//Função para atualizar a exibição do cardápio

function atualizarCardapio() {
    if (cardapio.length === 0) {
        listaCardapio.innerHTML = `<li>Nenhum item cadastrado.</li>`;
        return;
    }

    listaCardapio.innerHTML = cardapio
        .map(function (item) {
            return `<li>${item.nome} - R$ ${item.preco.toFixed(2).replace(`.`, `,`)}</li>`;
        })
        .join(``);
}


//Adicionar item ao cardápio

formCardapio.addEventListener(`submit`, function (event) {
    event.preventDefault();

    const nome = inputNome.value.trim();
    const preco = Number(inputPreco.value);
    const id = Number(inputIdItem.value);

    if (!nome || Number.isNaN(preco)) {
        statusMensagem.textContent = `Preencha o nome e o preço do item.`;
        return;
    }
    cardapio.push({ nome: nome, preco: preco, id: id });
    atualizarCardapio();
    statusMensagem.textContent = `Item adicionado ao cardápio: ${nome}`;
    formCardapio.reset();
    inputNome.focus();
});


//Remover item do cardápio


formRemover.addEventListener(`submit`, function (event) {
    event.preventDefault();
    const idRemover = Number(inputIdRemover.value);
    const itemIndex = cardapio.findIndex(item => item.id === idRemover);
    if (itemIndex !== -1) {
        cardapio.splice(itemIndex, 1);
        atualizarCardapio();
        statusMensagem.textContent = `Item removido do cardápio: ${idRemover}`;
    } else {
        statusMensagem.textContent = `Item não encontrado no cardápio.`;
    }
});

//Atualizar item cardapio

formAtualizar.addEventListener("submit", function (event) {
    event.preventDefault();
    const idAtualizar = Number(inputIdAtualizar.value);
    const nomeAtualizado = inputNomeAtualizar.value.trim();
    const precoAtualizado = Number(inputPrecoAtualizar.value);

    const itemIndex = cardapio.findIndex(item => item.id === idAtualizar);
    if (itemIndex !== -1) {
        cardapio[itemIndex].nome = nomeAtualizado || cardapio[itemIndex].nome;
        cardapio[itemIndex].preco = !Number.isNaN(precoAtualizado) ? precoAtualizado : cardapio[itemIndex].preco;
        atualizarCardapio();
        statusMensagem.textContent = `Item atualizado no cardápio: ${idAtualizar}`;
    }
});

//Funcoes antigas

btnCardapio.addEventListener(`click`, function () {
    atualizarCardapio();
    statusMensagem.textContent = `Cardápio atualizado.`;
});

btnAdd.addEventListener(`click`, function () {
    itens = itens + 1;
    statusMensagem.textContent = `Itens no pedido:` + itens;
});

btnLimpar.addEventListener(`click`, function () {
    itens = 0;
    statusMensagem.textContent = `Itens removidos. `;
});





