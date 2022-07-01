import Link from "next/link";
import styles from "./Section1.module.css"
import { format } from 'friendly-numbers'
import { useState,useEffect } from "react";
import { icons } from "../../data/bannerData";

export default function Section1({movies}) {
  const vote_average = movies.sort(function(a, b){return a.vote_average < b.vote_average ? 1 : a.vote_average>b.vote_average ? -1 : 0});
  const config = {
    decimals: 2,
    formattedDecimals: 1,
    smallMinimumMeaningfulDigits: 2
  };
  const [isHeart , setIsHeart] = useState([false,false,false,false]);
  const [voteCount , setVoteCount] = useState([
    vote_average[0].vote_count,
    vote_average[1].vote_count,
    vote_average[2].vote_count,
    vote_average[3].vote_count
  ]);
  const [voteAverage , setVoteAverage] = useState([
    vote_average[0].vote_average,
    vote_average[1].vote_average,
    vote_average[2].vote_average,
    vote_average[3].vote_average
  ]);
  const copyHeart = [...isHeart];
  const copyVoteCount = [...voteCount];
  const heartClick = (idx) =>{
    copyHeart.splice(idx, 1 , !isHeart[idx]);
    setIsHeart(copyHeart);
    if(!isHeart[idx]){
      copyVoteCount.splice(idx, 1 , voteCount[idx]+1);
    }else if(isHeart[idx]){
      copyVoteCount.splice(idx, 1 , voteCount[idx]-1);
    }
    setVoteCount(copyVoteCount);
  }

  


  return (
    <section id={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>박스오피스</h3>
        </div>
        <div className={styles.view_more_btn}>
          <Link href="#">
            <a title="더 많은 영화보기">
              더 많은 영화보기<i></i>
            </a>
          </Link>
        </div>
        <div className={styles.banner}>
          <ul>
            {vote_average.slice(0,4).map((ele,idx)=>(
              <li key={ele.title}>
                <Link href="#">
                  <a className={styles.img_box} title="영화 상세보기">
                    <img src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} alt={ele.title} />
                    <div>
                      <p>{String(ele.overview).length > 100 ? `${ele.overview.slice(0,100)}...` : ele.overview}</p>
                      <span>관람 평 <i>{voteAverage[idx]}</i></span>
                    </div>
                  </a>
                </Link>
              <div className={styles.btn_box}>
                <button onClick={()=>{heartClick(idx)}} className={`${styles.heart} ${isHeart[idx] ? styles.onHeart : ""}`} title={`${isHeart[idx] ? '보고싶어 설정 함' : '보고싶어 설정 안함'}`} >{format(voteCount[idx],config)}</button>
                <button title="영화 예매하기">예매</button>
              </div>
            </li>
            ))}
          </ul>
        </div>
        <div className={styles.aside_box}>
          <ul>
            <li>
              <div className={styles.inner_box}>
                <input type="text" placeholder="영화명을 입력해 주세요" />
                <button>
                  <img src="./img/ico-search-white.png" alt="검색" />
                </button>
              </div>
            </li>
            {icons.map(ele=>(
              <li key={ele.title}><Link href="#"><a title={ele.title}><img src={`/img/${ele.imgSrc}`} alt={ele.title} />{ele.title}</a></Link></li>
            ))}
          </ul>
        </div>
        <div className={styles.mouse_motion}>
            <em></em>
        </div>
      </div>
      <style jsx>{`
        section::before{
          background: linear-gradient(to right, #161616 , transparent  , #161616), url(https://image.tmdb.org/t/p/w500${vote_average[0].poster_path})  ;
        }
      `}</style>
    </section>
  )
}
