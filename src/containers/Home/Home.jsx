import {useContext} from 'react';
import ProductCard from '../../components/ProductCard';
import {Grid} from '@mui/material';
import styles from './Home.module.scss';
import {Link} from 'react-router-dom';
import {ProductContext} from '../../App';

const Home = () => {

  const {products} = useContext(ProductContext);

  return (
    <>
      <Grid container xs={{width: '100vw'}} spacing={2} justify="space-between" alignItems="center">
        {products.map((item) => {
          console.log(item);
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={styles.productGridItem}>
              <Link className={styles.Link} to={'/product/' + item.id}>
                <ProductCard md="4" key={item.id} product={item}/>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default Home;