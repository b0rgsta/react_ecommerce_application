import pennywise from '../../assets/images/pennywise.png';
import lollipop from '../../assets/images/lollipop.png';
import styles from './TheLooney.module.scss';


const TheLooney = () => {
  return (
    <div className={styles.TheLooney}>
      <img className={styles.pennywise} src={pennywise} alt=""/>
      <img className={styles.lollipop} src={lollipop} alt=""/>
      <img className={styles.lollipop} src={lollipop} alt=""/>
    </div>
  );
};

export default TheLooney;