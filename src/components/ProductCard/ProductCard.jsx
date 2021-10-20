import {Button, Card, CardActions, CardContent, Typography} from '@mui/material';

const ProductCard = () => {
  return (
    <Card sx={{maxWidth: 275}}>
      <CardContent>
        <Typography variant={'h6'}>Like me pls</Typography>
        <p>These yummy lollies are...</p>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
};

export default ProductCard;