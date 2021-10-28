import {useState} from 'react';
import styles from './Carousel.module.scss';
import {Link} from 'react-router-dom';


const Carousel = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (

  <section className={styles.slider}>
      <p className={styles.leftArrow} onClick={nextSlide}>{'<'}</p>
      <p className={styles.rightArrow} onClick={prevSlide}>{'>'}</p>
      {slides.map((slide, index) => {
        return (
          <div className={index === current ? styles.slideActive : styles.slide} key={index}>
            {index === current && (
              <Link className={styles.Link} to={'/product/' + slide.id}>
              <img src={slide.image} className={styles.image} alt="product image"/>
              </Link>
              )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;