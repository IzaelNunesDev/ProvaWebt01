import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
const MyMenu = () => {
    return(
        <AppBar>
            <Container>
                <Toolbar>
                    <AdbIcon sx={{display:{xs:"none",md:"flex"},mr:1}}/>
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration:"none", 
                            color:"white",
                            fontFamily:"monospace",
                            letterSpacing:".3rem",
                            fontWeight: 800
                        }}
                    >
                        CRUDV1
                    </Typography>
                    <Box sx={{ml:3,width:"100%",display:"flex", justifyContent:"flex-end"}}>
                        <Button
                            sx={{
                                color:"white",
                                my:2
                            }}
                        >
                            Professores
                        </Button>
                        <Button
                            sx={{
                                color:"white",
                                my:2
                            }}
                        >
                            Alunos
                        </Button>
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