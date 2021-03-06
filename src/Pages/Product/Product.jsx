import ProductPhotos from '../../components/ProductPhotos';
import ProductInfo from '../../components/ProductInfo';
import ProductDescription from '../../components/ProductDescription';
import {useHistory, useParams} from 'react-router-dom';
import {useContext} from 'react';
import {ProductContext} from '../../App';
import styles from './Product.module.scss';

const Product = () => {
  //used to direct go back button
  let history = useHistory();
  //creates variable containing id from url
  const {id} = useParams();

  //storing products from productcontext in a local variable
  const {products} = useContext(ProductContext);

  //finds product by id used to render selected product on productPage
  const product = products.find((item) => {
    return item.id === id;
  });

  //created variable
  const {setFavourite} = useContext(ProductContext);

  return (
    <div>
      { //if products not yet loaded from server, show ...Loading message
        product ?
          <div className={styles.container}>
            <button className={styles.GoBack} onClick={() => {history.push('/');}}>Go Back</button>
            <div className={styles.ProductDiv}>
              <ProductPhotos
                image={product.image}
                favourite={product.favourite ?? false}
                onFavouriteButtonClicked={() => setFavourite(id, !product.favourite)}/>
              <ProductInfo name={product.name} variations={product.variations}/>
            </div>
            <ProductDescription description={product.description}/>

          </div>
          :
          <h1>Loading...</h1>
      }

    </div>
  );
};
export default Product;