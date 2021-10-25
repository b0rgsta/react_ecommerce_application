import styles from "./PageNotFound.module.scss"
import { useLocation} from 'react-router-dom';

const PageNotFound = () => {

  let location = useLocation()

  return (
    <div className={styles.PnfPage}>
      <h3>404 - Sorry, the page {location.pathname} does not exist.</h3>
    </div>
  )
}

export default PageNotFound