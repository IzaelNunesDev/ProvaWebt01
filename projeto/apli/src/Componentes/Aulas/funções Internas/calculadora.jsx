    const Calculadora = ({n1,n2}) => {
    const somar =(x,y)=>x+y
    const subtrair =(x,y)=>x-y
    const dividir =(x,y)=>x/y
    const multiplicar =(x,y)=>x*y

    return(
        <>
            <h1>Soma é: {somar(2,2)}</h1>
            <h1>Subtração é: {subtrair(2,2)}</h1>
            <h1>dividir é: {dividir(2,2)}</h1>
            <h1>Multiplicação é: {multiplicar(2,2)}</h1>
        </>
    )
}

export default Calculadora