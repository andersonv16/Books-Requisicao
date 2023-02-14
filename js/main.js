let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'


async function getBuscarLivros(){
    const res = await fetch(endpointAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivros(livrosComDesconto)
    console.table(livros);
}
