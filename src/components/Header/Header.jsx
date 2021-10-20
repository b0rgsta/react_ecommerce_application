import styles from "./Header.module.scss"

import TheLooney from '../TheLooney/TheLooney';
const Header = () => {
  return(
    <div className={styles.header}>
      <h1>LooNeY LoLLieS</h1>

      <TheLooney />

    </div>
  )
}

export default Header
