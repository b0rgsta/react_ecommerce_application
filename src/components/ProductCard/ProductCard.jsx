import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import styles from "./ProductCard.module.scss"
const ProductCard = ({product}) => {

  return (
    <Card sx={{minWidth: 275}}>
      <Typography className={styles.ProductTitle} variant={'h6'}>{product.name}</Typography>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant={'h6'}><span className={styles.From}>from</span> ${product.variations[0].price}</Typography>
        <p className={styles.descript}>{product.description.slice(0, 90)}...</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;