const btnCardapio = document.getElementById(`btn-cardapio`);
const btnAdd = document.getElementById(`btn-adicionar`);
const btnFinalizar = document.getElementById(`btn-finalizar`);
const btnLimpar = document.getElementById(`btn-limpar`);
const status = document.getElementById(`status`);

let itens = 0;
btnCardapio.addEventListener(`click`, function () {
    status.textContent = `Cardápio: X-Burguer, Batata Frita, Refri.`;
});

btnAdd.addEventListener(`click`, function () {
    itens = itens + 1;
    status.textContent = `Itens no pedido:` + itens;
});

btnLimpar.addEventListener(`click`, function () {
    itens = 0;
    status.textContent = `Itens removidos. `;
});