const Temperatura =() =>{

    function celsiusParaFahrenheit(celsius){
        const fanhreit = (9*celsius + 160)/5
        return fanhreit
    }
    function FahrenheitParaCelsius(fanhreit){
        const celsius = (9*celsius + 160)/5
        return celsius
    } 
    const Kelvin = (kelvin) =>{
        const celsius = kelvin - 273
        const fahrenheit = (kelvin-273)*9/5 + 32
        return {celsius,fahrenheit}
    }
    const c = 30
    const f = 67
    const k = 0
    const {celsius,fahrenheit} = Kelvin(k)
    return(
       
        <>
            <h1>A Temperatura {c} Celsius em Fahrenheit é: {celsiusParaFahrenheit(c)}</h1>
            <h1>A Temperathra {f} Fahrenheit em Celsius é:{celsiusParaFahrenheit(f)} </h1>
            <h1>A Temperatura {k} Kelvi em Celsius é :{celsius}</h1>
            <h1>A Temperatura {k} Kelvi em Celsius é :{fahrenheit}</h1>
        </>
    )
}
export default Temperatura