import React from 'react'
import { Typography ,Grid} from '@mui/material'
import useNoticias from '../hooks/useNoticias'
import Noticias from './Noticias'

const ListadoNoticias = () => {
    const {noticias}=useNoticias()
    
  return (
    <>
      <Typography textAlign={'center'} marginY={5}
      variant='h3'
      component={'h2'}
      >
        últimas Noticias
        
      </Typography>
      <Grid>

       {noticias.map(noticia=>(

        <Noticias noticia={noticia} key={noticia.url}
        
        />

        ))}
      </Grid>
    
    </>
  )
}

export default ListadoNoticias