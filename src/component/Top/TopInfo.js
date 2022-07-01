import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./TopInfo.module.css";


export default function TopInfo({infoList, isThema}) {


  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {infoList.map(ele=>
          (<ul key={ele.title} className={styles.ul}>
              {ele.item.map(item=>(
                <li key={item} className={`${styles.li} ${isThema}`}>
                  <Link href="#">
                    <a className={`${styles.infoA} infoA`} title={item}>{item}</a>
                  </Link>
              </li>
              ))}
            </ul>)
          )}
      </div>
      <style jsx>{`
          li.black:not(:last-child)::after{
            background: rgb(255, 255, 255);
          }
          li.white:not(:last-child)::after{
            background: rgb(0, 0, 0);
          }
        `}</style>
      
    </div>
  )
}
