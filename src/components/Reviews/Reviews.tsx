import { useState, useRef, useEffect } from "react";
import "./Reviews.scss";
import paginationArrow from "../../assets/icons/arrow-left-right.png";
import ReviewListItem from "./ReviewListItem/ReviewListItem";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/swiper-bundle.css";

function Reviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isClickNavigation, setIsClickNavigation] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = () => {
    if (currentPage > 1) {
      setIsClickNavigation(true);
      setCurrentPage((prevPage) => prevPage - 1);
      swiperRef.current?.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (currentPage < 3) {
      setIsClickNavigation(true);
      setCurrentPage((prevPage) => prevPage + 1);
      swiperRef.current?.swiper.slideNext();
    }
  };

  const handleSlideChangeTransitionEnd = () => {
    if (!isClickNavigation) {
      const currentIndex = swiperRef.current?.swiper.realIndex || 0;
      if (currentIndex > prevIndex) {
        setCurrentPage((prevPage) => prevPage + 1);
      } else if (currentIndex < prevIndex) {
        setCurrentPage((prevPage) => prevPage - 1);
      }
      setPrevIndex(currentIndex);
    }
    setIsClickNavigation(false);
  };

  useEffect(() => {
    setPrevIndex(swiperRef.current?.swiper.realIndex || 0);
  }, []);

  return (
    <section className="reviews">
      <div className="reviews-header">
        <div className="overall">
          <h3>
            Відгуки про товар <span>(11)</span>
          </h3>
        </div>
        <div className="pagination">
          <div className="current-page">
            <p>{currentPage.toString().padStart(2, "0")} / 03</p>
          </div>
          <div className="pagination-arrows">
            <img onClick={handlePrev} src={paginationArrow} alt="arrow left" />
            <img onClick={handleNext} src={paginationArrow} alt="arrow right" />
          </div>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        loop={false}
        spaceBetween={30}
        onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
      >
        <SwiperSlide>
          <ReviewListItem newReview={true} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewListItem newReview={false} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewListItem newReview={false} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewListItem newReview={false} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewListItem newReview={false} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewListItem newReview={false} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Reviews;
