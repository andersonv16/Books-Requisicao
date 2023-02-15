const btnFilter = document.querySelectorAll(".btn")
btnFilter.forEach(btn => btn.addEventListener('click', 
filtrarLivros))


function filtrarLivros(){
    const elementoBtn = document.querySelector(`#${this.id}`)
    console.log(elementoBtn)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirLivros(livrosFiltrados);
}