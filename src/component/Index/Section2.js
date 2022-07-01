import styles from "./Section2.module.css"
import Link from "next/link";
import { Autoplay, Navigation, Pagination,Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slideImg, bannerImg, icons } from "../../data/section2Date";
import { useState,useEffect,useRef } from "react";



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import "swiper/css/autoplay";


export default function Section2() {
  const [isPause , setIsPause ] = useState(false);
  const [ isTouch , setIsTouch] = useState(null);
  //  true 가 멈춤입니다.
  const swiperRef = useRef();
  // useSwiper 가 버그있어서 useRef 로 설정합니다.
  const pauseClick = ()=>{
    setIsPause(!isPause);
  }
  useEffect(()=>{
    if(isPause === true){
      swiperRef.current.autoplay.stop();
    }else if(isPause === false){
      swiperRef.current.autoplay.start();
    }
  },[isPause])





  return (
    <section id={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>혜택</h2>
          <div className={styles.view_more_btn_box}>
            <Link href="#">
              <a title="혜택 더보기" className={styles.view_more_btn}><span className="blind">혜택 더보기</span></a>
            </Link>
          </div>
        </div>
        <div className={styles.slide_wrap} >
          <Swiper
            onSwiper={(swiper)=>
              // Swiper 가 작동 하면 할 일
              // 이게 ref={swiperRef} 대신 입니다.
              {
                swiperRef.current = swiper;
                setIsTouch(swiper)
              }
            }
            modules={[Autoplay,Navigation, EffectFade, Pagination, A11y , Scrollbar]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            pagination={{
              type: "fraction",
            }}
            scrollbar={{
              hide: false,
            }}
            effect={"fade"}
            autoplay={{
              delay:4000,
              disableOnInteraction:true
            }}
            onTouchMove={(swiper)=>{
              setIsPause(true);
              isTouch.autoplay.stop()
            }}
          >
            {slideImg.map((ele)=>(
              <SwiperSlide className={styles.slide} key={ele.imgAlt}>
                <div className={`${styles.slide_txtImg_box} slide_txtImg_box`}>
                  <Link href="#">
                    <a title='할인쿠폰 받기'>
                      <img src={`./img/${ele.txtImg}`} alt={ele.imgAlt} />
                    </a>
                  </Link>
                </div>
                <div className={`${styles.slide_coverImg_box} slide_coverImg_box`}>
                  <Link href="#">
                    <a title='할인쿠폰 받기'>
                      <img src={`./img/${ele.coverImg}`} alt={ele.imgAlt} />
                    </a>
                  </Link>
                </div>
            </SwiperSlide>
            ))}
            <button onClick={pauseClick} className={`${styles.play_btn} ${isPause ? styles.pause : ""}`}></button>
          </Swiper>
        </div>
        <div className={styles.banner_box}>
          {bannerImg.map((ele,idx)=>(
            <div className={`${idx === 0 ? styles.bannerLong : styles.bannerShort} ${styles.bannerItem}`} key={ele.imgSrc} >
              <Link href="#">
                <a title={ele.linkTitle}>
                  <img src={`./img/${ele.imgSrc}`} alt={ele.imgAlt} />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.menu_link}>
          <ul>
            {icons.map((ele)=>(
              <li key={ele.imgAlt}>
                <Link href="#">
                  <a title={`${ele.imgAlt} 페이지로 이동`}>
                    <div>
                      <img src={`./img/${ele.imgSrc}`} alt={ele.imgAlt} />
                    </div>
                    <span>{ele.imgAlt}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
