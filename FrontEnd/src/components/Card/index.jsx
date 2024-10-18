import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import { Cabin as CabinIcon } from '@mui/icons-material';

export default function CabinCard ({ image, name, description, availableCount, price }) {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: '0.3s',
      '&:hover': {
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      },
    }}>
      <CardMedia
        component="img"
        alt={name}
        height="200"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" color="success.main" fontWeight="bold">
            ${price} / noche
          </Typography>
          <Box display="flex" alignItems="center">
            <CabinIcon color="action" sx={{ mr: 1 }} />
            <Typography variant="subtitle2" color="text.secondary">
              {availableCount} disponibles
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="primary">Reservar</Button>
        <Button size="small" color="inherit">Más detalles</Button>
      </CardActions>
    </Card>
  );
}
