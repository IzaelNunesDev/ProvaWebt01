    import React, { useEffect, useState } from "react";

    const QuestaoA = () => {
    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.2 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
    ];

    //Passando vetor via props para questaoB
    return (
        <>
        <QuestaoB alunos={alunos} /> 
        </>
        
    );
    };

    function QuestaoB({ alunos }) {
    const [vetor, setVetor] = useState([]);
    //Effect "recebe" vetor, mapeia cada elemento do vetor e retorna media dividia por 2 num novo vetor
    useEffect(() => {
        const novoVetor = alunos.map((elemento) => {
            return { nome: elemento.nome, media: (elemento.notas.ap1 + elemento.notas.ap2) / 2 };
            });
            setVetor(novoVetor);
            }, []);

    //MAIN
    return (
        //Nesse map verifica se a media do aluno é maior que 6, se for é renderizado um elemento span 
        <>
        
        {vetor.map((elemento, key) => {
            return elemento.media > 6 ? (
            <span key={key}>
                media: {elemento.nome}
                <br />
            </span>
            ) : null;
        })}
        </>
    );
    }
    export default QuestaoA;
