import styles from "./Header.module.scss"
import cloudArt from "../../../src/assets/images/cloudArt.png"

import TheLooney from '../TheLooney/TheLooney';
const Header = () => {
  return(
    <div className={styles.header}>
      <img className={styles.Image} src={cloudArt} alt=""/>
      <h1 className={styles.Title}>LoONeY LoLLieS</h1>

      <TheLooney />

    </div>

  )
}

export default Header
