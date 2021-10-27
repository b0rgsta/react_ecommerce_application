import {useState} from 'react';
import styles from './Carousel.module.scss';

export const CarouselData = [
  {
    image: 'https://cdnb.artstation.com/p/assets/images/images/018/403/087/large/robert-michalski-nowenowekostki.jpg?1568305558&dl=1'
  },
  {
    image: 'https://virtuoart.com/public/uploads/preview/a180b664e124d84ddf27d3e644b32bd6-61861588152203nbjpmd9cwn.jpg'
  },
  {
    image: 'https://wallpaperaccess.com/full/1550638.jpg'
  },
  {
    image: 'https://image.freepik.com/free-vector/abstract-realistic-technology-particle-background_52683-33064.jpg'
  },
  {
    image: 'https://i.pinimg.com/originals/ba/ab/d8/baabd8cb41d9cb0f7322223214646235.jpg'
  },
  {
    image: 'https://cdn5.vectorstock.com/i/1000x1000/91/44/flowing-particle-waves-vector-18949144.jpg'
  }
];

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
      {CarouselData.map((slide, index) => {
        return (
          <div className={index === current ? styles.slideActive : styles.slide} key={index}>
            {index === current && (
              <img src={slide.image} className={styles.image} alt="product image"/>
              )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;