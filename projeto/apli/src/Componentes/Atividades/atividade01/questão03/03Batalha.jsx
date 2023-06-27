function Hero({nome}){
    return(
        <>
            <h1>Eu sou o heroi: {nome}</h1> 
            <img src="https://i.pinimg.com/originals/bb/36/c5/bb36c5ce860b5cc67c3eb98cccf48ecb.jpg" alt="Flash"
            style={{width:"240px"}} />       
        </>
    )
}
function Enemy({nome}){
    return(
        <>
            <h1>Eu sou o inimigo: {nome}</h1>
            <img src="https://i.pinimg.com/originals/04/73/fe/0473feafed849b3dc61d7133783b66e0.jpg" alt="Misterioso"
            style={{width:"240px"}} />
        </>
    )
}
function Arena({nome}){
    return(
        <>  
            <h1>Arena: {nome}</h1>
            <Hero nome = "Baki"/>
            <Enemy nome = "Yujiro" />
        </>
    )
}
const World=(props)=>{
    return(
        <>
            {props.children}
        </>
    )
}
export {Hero, Enemy, Arena, World}