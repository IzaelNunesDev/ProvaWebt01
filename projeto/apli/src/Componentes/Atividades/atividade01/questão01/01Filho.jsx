const Filho =({altura,peso})=>{

    const calcimc =(altura,peso)=>peso/(altura * altura)  
    const rederinzarMsg=(imc)=>{
        if(imc<18) return <h3>Abaixo do peso</h3>
        else if(imc>25) return <h3>Acima do peso</h3>
        return <h3>Abaixo do peso</h3>
    }
    const imc = calcimc(altura,peso) 
    return(
        <>
            <h1>Meu imc é: {imc.toFixed(2)}</h1>
            {rederinzarMsg(imc)}
        </>
    )
}
export default Filho