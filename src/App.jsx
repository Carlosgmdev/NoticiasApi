import { Container, Grid, List, Typography } from '@mui/material'
import Formulario from './components/Formulario'
import { NoticiasProvider } from './context/NoticiasPovider'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component='h1' variant='h3'>
            Buscador De Noticias
          </Typography>
        </header>
        <Grid
          container
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid item md={6} xs={12}>
            <Formulario />
          </Grid>
        </Grid>
        <ListadoNoticias/>
      </Container>
    </NoticiasProvider>
  )
}

export default App
