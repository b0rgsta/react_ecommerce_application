import {useState} from 'react';
import styles from './Carousel.module.scss';
import {Link} from 'react-router-dom';


const Carousel = ({slides}) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  //prevents carousel from crashing if slides does not return an array
  if (!Array.isArray(slides) || slides.length <= 0) {
    return <></>;
  }

  return (

    <section className={styles.slider}>
      <p className={styles.leftArrow} onClick={nextSlide}>{'<'}</p>
      <p className={styles.rightArrow} onClick={prevSlide}>{'>'}</p>
      {slides.map((slide, index) => {
        return (
          //displays only the image which has index matching currentSlide by adjusting the image opacity
          <div className={index === currentSlide ? styles.slideActive : styles.slide} key={index}>

            {index === currentSlide && (
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