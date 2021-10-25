import ProductPhotos from '../../components/ProductPhotos';
import ProductInfo from '../../components/ProductInfo';
import ProductDescription from '../../components/ProductDescription';
import {useHistory, useParams} from 'react-router-dom';
import {useContext} from 'react';
import {ProductContext} from '../../App';

const Product = () => {

  let history = useHistory();
  let {id} = useParams();

  const products = useContext(ProductContext);

  const product = products.find((item) => {
    return item.id === id
  })


  return (
    <div>
      { //if products not yet loaded from server, show ...Loading message
        product ?
        <>
            <button onClick={() => {history.push('/');}}>Go Back</button>
            <ProductPhotos image={product.image}/>
            <ProductInfo name={product.name} variations={product.variations}/>
            <ProductDescription/>
        </>
          :
        <h1>Loading...</h1>
      }

    </div>
  );
};
export default Product;