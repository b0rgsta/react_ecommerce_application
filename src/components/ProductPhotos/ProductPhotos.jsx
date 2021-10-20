import lollies from "../../assets/images/lollies.jpeg"
import styles from "./ProductPhotos.module.scss"

const ProductPhotos = () => {
  return(
    <div>
      <img className={styles.lollies} src={lollies} alt=""/>
    </div>
  )
}

export default ProductPhotos