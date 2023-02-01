
import { Card,CardActions,CardContent,CardMedia,Link,Typography,Grid } from '@mui/material'
const Noticias = ({noticia}) => {
    const {urlToImage,url,title,description,source}=noticia

  return (
    <Card>
        <CardMedia component="img" alt={`Imagen de la noticia ${title}`} image={urlToImage} >

        </CardMedia>
    </Card>
  )
}

export default Noticias