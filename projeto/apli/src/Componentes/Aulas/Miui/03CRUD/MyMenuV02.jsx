import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { useState } from "react"
import { Link } from "react-router-dom"
const MyMenu = () => {

    const [anchorElAluno, setanchorElAluno] = useState(null)
    const handleOpenAnchorElAluno = (event) => {
        setanchorElAluno(event.currentTarget)
    }
    const handleCloseAnchorElAluno = () => {
        setanchorElAluno(null)
    }

    function dropAlunoMenu() {
        return (
            <Box>
                <Button
                    sx={{
                        color: "white",
                        my: 2
                    }}
                    onClick={handleOpenAnchorElAluno}
                >
                    Alunos
                </Button>
                <Menu
                    anchorEl={anchorElAluno}
                    open={Boolean(anchorElAluno)}
                    onClose={handleCloseAnchorElAluno}
                >
                    <MenuItem
                        onClick={handleCloseAnchorElAluno}
                        component={Link}
                        to={"cadastrarAluno"}
                    >
                        <Typography>Cadastrar</Typography>
                    </MenuItem>
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to={"listarAluno"}
                    >
                        <Typography>Listar</Typography>
                    </MenuItem>
                    <MenuItem onClick={
                        () => {
                            handleCloseAnchorElAluno();
                        }
                    }
                        component={Link}
                        to={"listarAprovados"}
                    >
                        Listar Aprovados
                    </MenuItem>
                </Menu>
            </Box>
        )
    }


    const [anchorElProfessor, setanchorElProfessor] = useState(null)
    const handleOpenAnchorElProfessor = (event) => {
        setanchorElProfessor(event.currentTarget)
    }
    const handleCloseAnchorElProfessor = () => {
        setanchorElProfessor(null)
    }
    function dropProfMenu() {
        return (
            <Box>
                <Button
                    sx={{
                        color: "white",
                        my: 2
                    }}
                    onClick={handleOpenAnchorElProfessor}
                >
                    Professores
                </Button>
                <Menu
                    anchorEl={anchorElProfessor}
                    open={Boolean(anchorElProfessor)}
                    onClose={handleCloseAnchorElProfessor}
                >
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to={"cadastrarProfessor"}
                    >
                        <Typography>Cadastrar</Typography>
                    </MenuItem>
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to={"listarProfessor"}
                    >
                        <Typography>Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color: "white",
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            fontWeight: 800
                        }}
                    >
                        CRUDV2
                    </Typography>
                    <Box sx={{ ml: 3, width: "100%", display: "flex", justifyContent: "flex-end" }}>
                        {dropProfMenu()}
                        {dropAlunoMenu()}
                        <Button>
                            Sobre
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenu