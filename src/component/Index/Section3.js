import styles from "./Section3.module.css"
import Link from "next/link"; 
import { useState } from "react";

export default function Section3({dramas}) {
  const popularity = dramas.sort(function(a, b){return a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0})
  const [elseDramas, setElseDramas] = useState([
    {imgSrc:popularity[1].poster_path, imgAlt:popularity[1].name},
    {imgSrc:popularity[2].poster_path, imgAlt:popularity[2].name},
    {imgSrc:popularity[3].poster_path, imgAlt:popularity[3].name},
    {imgSrc:popularity[4].poster_path, imgAlt:popularity[4].name},
  ])
  return (
    <section id={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>큐레이션</h2>
          <div className={styles.view_more_btn_box}>
            <Link href="#">
              <a title="큐레이션 더보기">
                큐레이션 더보기<i></i>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.current_item_box}>
            <Link href="#">
              <a title="영화 상세보기" className={styles.currentImg_box}>
                <img src={`https://image.tmdb.org/t/p/w500${popularity[0].poster_path}`} alt={popularity[0].name} />
              </a>
            </Link>
            <div className={styles.detail_box}>
            <button title="상세정보" className={styles.detail_btn}>상세정보</button>
            <button title="영화 예매하기" className={styles.ticketing_btn}>예매</button>
            </div>
          </div>
          <div className={styles.txt_box_another_list}>
              <div className={styles.item_tit}>
                <p>&#91; {popularity[0].origin_country[0] !== 'KR' ? `외국 드라마` : `한국 드라마`} &#93;</p>
                <h3>{popularity[0].name} <span>&#40;{popularity[0].original_name}&#41;</span></h3>
              </div>
              <div className={styles.desc}>
                <span>&#91; 드라마 정보 &#93;</span>
                <p>{String(popularity[0].overview).length > 100 ? `${popularity[0].overview.slice(0,100)}...` : popularity[0].overview}</p>
                <p>첫방일 - {popularity[0].first_air_date}</p>
                <p>평점 - {popularity[0].vote_average}</p>
              </div>
              <ul className={styles.item_list}>
                {elseDramas.map((ele)=>(
                  <li key={ele.imgAlt} className={styles.item}>
                    <Link href="#">
                      <a title="영화 상세보기">
                        <img src={`https://image.tmdb.org/t/p/w500${ele.imgSrc}`} alt={ele.imgAlt} />
                        <p>{String(ele.imgAlt).length > 12 ? `${ele.imgAlt.slice(0,12)}...` : ele.imgAlt}</p>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
