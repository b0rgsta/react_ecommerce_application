import {useEffect, useState} from 'react';
import {db} from '../../services/firestore';
import ProductCard from '../../components/ProductCard';
import {Grid} from '@mui/material';
import styles from './Home.module.scss'

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = async () => {
      const productsColRef = db.collection('products');
      //returns all docs(entries) from products collection
      const data = await productsColRef.get();
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getProducts();
  }, []);

  return (
    <>
      <Grid container xs={{width: '100vw'}}  spacing={2} justify="space-between" alignItems="center">
        {products.map((item) => {
          console.log(item);
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={styles.productGridItem}>
              <ProductCard md="4" key={item.id} product={item}/>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default Home;