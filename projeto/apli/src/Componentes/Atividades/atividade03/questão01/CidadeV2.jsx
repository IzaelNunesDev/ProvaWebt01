import { useState } from "react";

const Votacidades = () => {
  const [cidades, setCidades] = useState([
    { nome: "Fortaleza", votos: 0 },
    { nome: "Quixadá", votos: 0 },
    { nome: "Sobral", votos: 0 },
    { nome: "Iguatu", votos: 0 },
  ]);

  const [flag, setFlag] = useState(false);
  const votarNaCidade = (nome) => {
    const index = cidades.findIndex((cidade) => cidade.nome === nome);
    cidades[index].votos = cidades[index].votos + 1;

    setFlag((prev)=>!prev)
  };

  return (
    <>
      <h1>Vota cidades</h1>
      <h3>
        {cidades[0].nome}:{cidades[0].votos}
      </h3>
      <h3>
        {cidades[1].nome}:{cidades[1].votos}{" "}
      </h3>
      <h3>
        {cidades[2].nome}:{cidades[2].votos}
      </h3>

      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={()=>votarNaCidade("Fortaleza")}>Fortaleza</button>
              <button onClick={()=>votarNaCidade("Sobral")}>Sobral</button>
              <button onClick={()=>votarNaCidade("Quixadá")}>Quixada</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Votacidades;
