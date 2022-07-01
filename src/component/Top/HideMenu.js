import Link from "next/link";
import { useState } from "react";
import { siteMap } from "../../data/topData";
import styles from './HideMenu.module.css';

export default function HideMenu({movies, isSiteMap,isSearchOn,isMyMega}) {

  const vote_average = movies.sort(function(a, b){return a.vote_average < b.vote_average ? 1 : a.vote_average>b.vote_average ? -1 : 0}).slice(0,5);
  const release_date = movies.sort(function(a, b){return a.release_date < b.release_date ? 1 : a.release_date>b.release_date ? -1 : 0}).slice(0,5);

  const [rankBar, setRankBar] = useState(["최신작 순","관객 평점순"])
  const [popActive, setPopActive] = useState(true)
  const [aveActive, setAveActive] = useState(false)

  const isActive = (e, idx)=>{
    e.preventDefault();
    if(idx === 0){
      setPopActive(true);
      setAveActive(false);
    }else{
      setPopActive(false);
      setAveActive(true);
    }
  }

  const [imgActive, setImgActive] = useState(0)

  if(isSiteMap){
    return(
      <div className={styles.site_map}>
        <div className={styles.container}>
          <h3>SITEMAP</h3>
          <ul>
            {siteMap.map(ele=>(
              <li key={ele.tit}>
                <p>{ele.tit}</p>
                {ele.item.map(obj=>(
                  <div key={obj}>
                    <Link href="#">
                      <a title={obj}>{obj}</a>
                    </Link>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  else if(isSearchOn){
    return (
      <div className={styles.search_box}>
        <div className={styles.container}>
          <div className={styles.rank_tab}>
            <ul>
              {rankBar.map((ele,idx)=>(
                <li key={ele} className={`${popActive && idx === 0 ? styles.tab_active : ""} ${aveActive && idx === 1 ? styles.tab_active : ""}`}>
                  <Link href="#">
                    <a title={ele} onClick={(e)=>{isActive(e, idx)}}>{ele}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.movie}>
            <div className={styles.item_box}>
              <div className={styles.item_img_box}>
                {popActive ? release_date.map((ele,idx)=>(
                   imgActive === idx ? <img src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} alt={ele.title} key={ele.title} />: null
                )) : 
                aveActive ? vote_average.map((ele,idx)=>(
                  imgActive === idx ? <img src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} alt={ele.title} key={ele.title} /> : null
               )) :
               null}
              </div>
              <div className={styles.item_tit_box}>
                <ul>
                  {popActive ? release_date.map((ele,idx)=>(
                    <li key={ele.title}>
                      <em>{idx+1}</em>
                      <Link href="#">
                        <a title={`${ele.title} 상세보기`} onMouseEnter={()=>{setImgActive(idx)}} onClick={(e)=>{e.preventDefault();}}>{ele.title}</a>
                      </Link>
                    </li>
                  )) : 
                  aveActive ? vote_average.map((ele,idx)=>(
                    <li key={ele.title}>
                      <em>{idx+1}</em>
                      <Link href="#">
                        <a title={`${ele.title} 상세보기`} onMouseEnter={()=>{setImgActive(idx)}} onClick={(e)=>{e.preventDefault();}}>{ele.title}</a>
                      </Link>
                    </li>
                  )) : 
                  null}
                </ul>
              </div>
            </div>
            <form>
              <div className={styles.in_search}>
                <input type="text" placeholder="영화를 검색하세요" />
                <button type="submit" onClick={(e)=>{e.preventDefault()}}>검색</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  else if(isMyMega){
    return( 
      <div className={styles.my_mega}>
        <div className={styles.my_mega_txt}>
          <p>로그인 하시면 나의 메가박스를 만날 수 있어요.</p>
          <p>영화를 사랑하는 당신을 위한 꼭 맞는 혜택까지 확인해 보세요!</p>
        </div>
        <div className={styles.login_box}>
          <Link href="#">
            <a title="로그인">로그인</a>
          </Link>
        </div>
        <div className={styles.signup_box}>
          <Link href="#">
            <a title="혹시 아직 회원이 아니신가요?">혹시 아직 회원이 아니신가요?</a>
          </Link>
        </div>
      </div>
    )
  }
  else{
    return null
  }
}
