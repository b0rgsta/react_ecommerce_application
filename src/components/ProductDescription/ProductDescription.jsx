import styles from './ProductDescription.module.scss';

const ProductDescription = ({description}) => {
  return (
    <div>
      <p className={styles.Description}>{description}</p>
    </div>
  );
};
export default ProductDescription;