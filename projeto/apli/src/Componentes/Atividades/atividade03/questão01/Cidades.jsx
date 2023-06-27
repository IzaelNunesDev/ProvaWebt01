import { useEffect, useState } from "react"

const Votacidades = ()=>{
    const [fortaleza,setFortaleza] = useState(0)
    const [quixada,setQuixada] = useState(0)    
    const [sobral,setSobral] = useState(0)    
    const [mais,setMais] = useState("")
    const [menos,setMenos] = useState("")

    useEffect(
        ()=>{
            let cidades = [fortaleza,quixada,sobral]
            let nomes = ["fortaleza","quixada","sobral"]
            let maior = cidades[0]
            let menos = cidades[0]
            //verifica qual a maior e menor cidade
            for(let i=0; i<cidades.length;i++){
                if(cidades[i]> maior) maior = cidades[i]
                if(cidades[i]< menos) menos = cidades[i]
            }
            //
            setMais("")
            setMenos("")
            for(let i=0; i<cidades.length;i++){
                if(cidades[i]=== maior) setMais((anterior)=>anterior+" "+nomes[i])
                if(cidades[i]=== menos) setMenos((anterior)=>anterior+" "+nomes[i])
            }
        }
        ,
        [fortaleza,quixada,sobral]
    )

    return(
        <>
            <h1>Vota cidades</h1>
            <h3>Fortaleza: {fortaleza}</h3>
            <h3>Sobral: {sobral}</h3>
            <h3>quixada: {quixada}</h3>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <button onClick={
                                ()=> setFortaleza((anterior)=>anterior+1)
                            }>
                                Fortaleza
                            </button>
                            <button onClick={
                                ()=> setSobral((prev)=>prev+1)
                            }>
                                Sobral
                            </button>
                            <button onClick={
                                ()=> setQuixada((valoranterior)=>valoranterior+1)
                            }>
                                Quixada
                            </button>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>Mais votada: {mais}</h2>
            <h2>Menos votada: {menos}</h2>
        </> 
    )
}
export default Votacidades
