import {useContext} from 'react';
import ProductCard from '../../components/ProductCard';
import {Grid} from '@mui/material';
import styles from './Home.module.scss';
import {Link} from 'react-router-dom';
import {ProductContext} from '../../App';
import Carousel from '../../components/Carousel';

const Home = () => {

  const products = useContext(ProductContext);

  const featured = products.filter((item) => {
    return item.variations.slice(-1).pop().price > 22.99

  })

  return (
    <>
      <h2 className={styles.BestBuys}>Today's Best Buys</h2>
      <Carousel slides={ featured }/>

      <Grid container sx={{width: '100vw', pb: 60}} spacing={2} justify="space-between" alignItems="center">
        {products.map((item) => {
          console.log(item);
          return (

          <Grid key={item.id} item sm={6} md={4} lg={3} xl={2} className={styles.productGridItem}>
              <Link className={styles.Link} to={'/product/' + item.id}>
                <ProductCard md="4" product={item}/>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default Home;