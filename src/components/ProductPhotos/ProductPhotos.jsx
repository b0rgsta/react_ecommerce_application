import styles from './ProductPhotos.module.scss';

const ProductPhotos = ({image}) => {
  return (
    <div>
      <img className={styles.lollies} src={image} alt=""/>
    </div>
  );
};

export default ProductPhotos;