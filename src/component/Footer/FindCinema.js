import Link from 'next/link'
import { findCinema } from '../../data/bottomData'
import styles from './FindCinema.module.css'

export default function FindCinema({setIsFineCinema}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.contianer}>
        <div className={styles.title}>
          <h2>메가박스 극장 찾기</h2>
        </div>
        <div className={styles.table}>
          <ul className={styles.item_list}>
            {findCinema.map(ele=>(
              <li key={ele.loca} className={styles.item}>
                <div className={styles.loca}>{ele.loca}</div>
                <div className={styles.cont_box}>
                  {ele.cont.map(obj=>(
                    <Link href="#">
                      <a title={obj} className={styles.cont}>
                        {obj}
                      </a>
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.close_btn_box}>
          <button title='닫기' onClick={()=>{setIsFineCinema(false)}}>닫기</button>
        </div>
      </div>
    </div>
  )
}
