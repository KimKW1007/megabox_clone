import styles from "./Section4.module.css"
import Link from "next/link"; 
import { useState } from "react";
import { images,icons } from "../../data/section4Data";

export default function Section4() {
  const newDate = new Date()
  const year = newDate.getFullYear()
  const month = String(newDate.getMonth()+1).padStart(2,"0")
  const date = String(newDate.getDate()).padStart(2,"0")
  const toDay = `${year}.${month}.${date} `
  return (
    <section id={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>메가박스 안내</h2>
        </div>
        <ul className={styles.list_item}>
          {images.map(ele=>(
            <li key={ele.imgAlt}>
              <Link href="#">
                <a title={`${ele.imgAlt} 페이지로 이동`} style={{backgroundImage :` url(./img/${ele.imgSrc})`}}>
                  <span className="blind">{ele.imgAlt}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.notice}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.notice_tit}>
              <p>메가박스</p>
            </div>
            <div className={styles.desc}>
              <Link href="#">
                <a title="공지사항 상세보기">
                  <span>&#91;공지&#93;</span>메가박스 개인정보 처리 방침 변경 안내
                </a>
              </Link>
              <span>{toDay}</span>
            </div>
            <div className={styles.detail_box}>
              <Link href="#">
                <a title="전체공지 더보기">더보기</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <ul className={styles.item_list}>
          {icons.map((ele,idx)=>(
            <li key={ele.imgAlt}>
              <Link href="#">
                <a title={`${ele.imgAlt} 페이지로 이동`}>
                  <img src={`./img/${ele.imgSrc}`} alt={ele.imgAlt} />
                  <span>{ele.imgAlt}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
