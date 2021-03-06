import styles from './ProductPhotos.module.scss';
import heart from '../../assets/images/heart-active.png';

//props to grab the product image, favourite status, and function to update favourite status.
const ProductPhotos = ({image, favourite, onFavouriteButtonClicked}) => {

  return (
    <div>
      <img className={styles.favouriteOutline} src={heart}/>
      <img onClick={() => onFavouriteButtonClicked()}
           className={favourite ? styles.Favourite : styles.notFavourite}
           src={heart}/>
      <img className={styles.lolliesImg} src={image} alt="Lollies image"/>
    </div>
  );
};

export default ProductPhotos;