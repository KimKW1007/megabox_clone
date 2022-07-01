import { f_info, desc, sns } from "../../data/bottomData"
import styles from "./Bottom.module.css"
import Link from "next/link"
import { useState } from "react"
import FindCinema from "./FindCinema";
export default function Bottom() {
  const [isFineCinema , setIsFineCinema] = useState(false);
  const isFineCinemaClick = (e)=>{
    e.preventDefault();
    setIsFineCinema(!isFineCinema)
  }
  return (
    <footer id={styles.footer} name="footer">   
      <div className={styles.container}>
        <div className={styles.f_info1}>
          <ul>
            {f_info.map(ele=>(
              <li key={ele}>
                <Link href="#">
                  <a title={`${ele} 페이지로 이동`}>
                    {ele}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.search_cinema}>
            <Link href="#">
              <a title="극장찾기" onClick={isFineCinemaClick}><i></i>극장찾기</a>
            </Link>
          </div>
        </div>
        {isFineCinema ? <FindCinema setIsFineCinema={setIsFineCinema}/> : null}
        <div className={styles.f_info2}>
          <div className={styles.f_left}>
            <h1 className={styles.f_logo}><img src="./img/f_logo.png" alt="MEGABOX : Life Theater" /></h1>
            <div className={styles.f_address}>
              <p>서울특별시 마포구 월드컵로 240, 지상2층&#40;성산동, 월드컵주경기장&#41; ARS 1544-0070</p>
              <div>
                {desc.map((ele)=>(
                  <p key={ele}>{ele}</p>
                ))}
              </div>
              <p className={styles.copy}>COPYRIGHT &copy; MegaboxJoongAng, Inc. All rights reserved</p>
            </div>
          </div>
          <div className={styles.f_sns}>
            <ul>
              {sns.map(ele=>(
                <li key={ele.imgAlt}>
                  <Link href="#">
                    <a title={`MEGABOX ${ele.imgAlt} 페이지로 이동`}>
                      <img src={`./img/${ele.imgSrc}`} alt={ele.imgAlt} />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> 
    </footer>
  )
}

