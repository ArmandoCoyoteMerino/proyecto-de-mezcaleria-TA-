import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export default function productCard({ product, onDelete }) {
  return (
    <Card sx={{ maxWidth: 200, m: 3, display: 'block'}}>
      <CardMedia
        component="img"
        height="250"
        image={product.image}
        alt={product.description}
        sx={{
          p: '2px',
          objectFit: 'cover',
          width: '100%',
          height: '2'
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.description}
        </Typography>
        <Grid container>
            <Grid item xs={8}>
            <Typography  variant="h6">
               $ {product.price}
            </Typography>
            </Grid>
            <Grid item xs={10}>
                {product.stock > 0 && (
                <Chip label="Disponible" color="success" />
                )}
                {product.stock <= 0 && (
                <Chip label="Agotado" color="warning" />
                )}
            </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }} >
        <IconButton onClick={() => { onDelete(product.id); }} color="error" component="span">
        <DeleteForeverIcon />
        </IconButton>

        <IconButton color="primary" LinkComponent={Link} 
        to={{pathname: `/productos/editar/`, state: {product}}}>
        <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
