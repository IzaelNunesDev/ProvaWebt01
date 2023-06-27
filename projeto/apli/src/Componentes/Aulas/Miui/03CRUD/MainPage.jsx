import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyMenu from "./MyMenuV02"
import { Container } from "@mui/material"
import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"

import CadastrarAluno from './aluno/CadastrarAluno'
import ListarAluno from './aluno/ListarAluno'
import EditarAluno from './aluno/EditarAluno'
import ListaAprovado from './aluno/ListaAprovado'



const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container
                sx={{ mt: 10 }}
            >
                <Routes>
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor />} />
                    <Route path="listarProfessor" element={<ListarProfessor />} />
                    <Route path='editarProfessor/:id' element={<EditarProfessor />} />
                </Routes>
            </Container>
            <Container sx={{ mt: 8 }}>
                <Routes>
                    <Route path='cadastrarAluno' element={<CadastrarAluno />} />
                    <Route path='listarAluno' element={<ListarAluno />} />
                    <Route path='editarAluno/:id' element={<EditarAluno />} />
                    <Route path='listarAprovados' element={<ListaAprovado/>}/>
                </Routes>

            </Container>
            <Container sx={{ mt: 8 }}>
                <Routes>
                   
                </Routes>
            </Container>
        </BrowserRouter>

    )
}
export default MainPage