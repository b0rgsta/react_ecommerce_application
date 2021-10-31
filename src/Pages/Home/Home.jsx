import {useContext} from 'react';
import ProductCard from '../../components/ProductCard';
import {Grid} from '@mui/material';
import styles from './Home.module.scss';
import {ProductContext} from '../../App';
import Carousel from '../../components/Carousel';

const Home = () => {

  const {products} = useContext(ProductContext);

  //selects all products valued at over 22.99
  const featured = products.filter((item) => {
    return item.variations.slice(-1).pop().price > 22.99;

  });

  return (
    <div className={styles.container}>
      <h2 className={styles.BestBuys}>Today's Best Buys</h2>
      <Carousel slides={featured}/>
      <Grid container sx={{width: '100%', pb: 60}} spacing={2} justify="space-between" alignItems="center">
        {products.map((item) => {
          return (
            <Grid item key={item.id} sm={6} md={4} lg={3} className={styles.productGridItem}>
              <ProductCard md="4" product={item}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default Home;