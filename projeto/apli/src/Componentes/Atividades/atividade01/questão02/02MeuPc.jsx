const PlacaMae =({nome,preco})=>{
    return(
        <>
            <h1>Placa: {nome}</h1>
            <h1>Preço: {preco}</h1>
        </>
    )
}
const PlacaVideo =({nome,preco})=>{
    return(
        <>
            <h1>PlacaVideo: {nome}</h1>
            <h1>Preço: {preco}</h1>
        </>
    )
}
const Memoria =({nome,preco})=>{
    return(
        <>
            <h1>Memoria: {nome}</h1>
            <h1>Preço: {preco}</h1>
        </>
    )   
}

export {PlacaMae, PlacaVideo, Memoria}