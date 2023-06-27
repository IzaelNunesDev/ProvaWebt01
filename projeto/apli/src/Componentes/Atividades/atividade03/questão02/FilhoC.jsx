const FilhoC = ({meuVetor,enviarMedia}) =>{
    const calcularMediaElemento = ()=>{
        let media = 0;
        for(let i = 0;i<meuVetor.length;i++) media += meuVetor[i]
        enviarMedia(media/meuVetor.length)

    }
    return(
        <>
            <h1>Componente C</h1>
            <button onClick={calcularMediaElemento}>
                Media Elementos
            </button>
        </>
    )
}
export default FilhoC