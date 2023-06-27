import { useEffect, useState } from "react"

const minhaPromessa = new Promise(
    (resolve,reject)=>{
        setTimeout(
            ()=>{
                const vetor =[
                    {key:1,nome:"Sicrano", ira:4.5},
                    {key:2,nome:"Fulano", ira:3.7},
                    {key:3,nome:"Beltrano", ira:8.5}
                ]
                const meuInt = Math.floor((Math.random()*10))+1
                if(meuInt === 1) reject({id:1,msg: "ERRO DE CONEXÃO"})
                else if(meuInt === 2) reject({id:2,msg: "ERRO DE DADOS"})
                else resolve({id:meuInt,msg:"ok",vetor})
            }// função executada apos timeout
            ,  
            3000
        )
    }
)


const Questao01 =()=>{
    const [meusDados, setMeusDados] = useState([])
    useEffect(
        ()=>{
            minhaPromessa
            .then(
                (data)=>{
                    console.log("ID: " + data.id)
                    console.log("Vetor: " + data.vetor)
                    setMeusDados(data.vetor)
                }
            )
            .catch(
                (error)=>{
                    console.log("ID: "+ error.id)
                    console.log("MSG: "+ error.msg)
                }
            )
        }
        ,
        []
    )
    return(
        <>
            <h1>questão01</h1>        
            {
                meusDados.map(
                    (dado,index) => <h3 key={index}>{dado.nome} - {dado.ira}</h3>
                )
            }
        </>
    )
}
export default Questao01

