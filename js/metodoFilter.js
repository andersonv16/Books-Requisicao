const btnFilter = document.querySelectorAll(".btn")
btnFilter.forEach(btn => btn.addEventListener('click', 
filtrarLivros))


function filtrarLivros(){
    const elementoBtn = document.querySelector(`#${this.id}`)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponibilidade() : 
    filtrarCategoria(categoria)
    exibirLivros(livrosFiltrados);
    if(categoria == 'disponivel'){
        const valorTotal = TotalDisponivel(livrosFiltrados)
        exibirValorTela(valorTotal)
    }
}
function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTela(valorTotal){
    elementoPrecoTotal.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`
}
