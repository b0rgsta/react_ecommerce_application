import {Card, CardContent, CardMedia, Typography} from '@mui/material';

const ProductCard = ({product}) => {

  return (
    <Card sx={{minWidth: 275}}>
      <Typography variant={'h6'}>{product.name}</Typography>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant={'h6'}>from ${product.variations[0].price}</Typography>
        <p>{product.description.slice(0, 90)}...</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;