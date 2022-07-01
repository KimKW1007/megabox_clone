import Link from 'next/link';
import { useState, useEffect } from 'react';
import { gnbIconsBL, gnbIconsWH, close_icon } from '../../data/topData';
import styles from './TopMenu.module.css';
import { siteMap } from "../../data/topData";
import HideMenu from './HideMenu';

export default function TopMenu({movies,topMenu , isThema}) {
  const [thema , setThema] = useState(gnbIconsWH);

  useEffect(()=>{
    if(isThema === 'black'){
      setThema(gnbIconsWH);
    }else if(isThema === 'white'){
      setThema(gnbIconsBL);
    }
  },[thema])

  const [isSiteMap, setIsSiteMap] = useState(false)
  const [isSearchOn, setIsSearchOn] = useState(false)
  const [isMyMega, setIsMyMega] = useState(false)
  
  const onSiteMap = () => {
    setIsSiteMap(!isSiteMap)
    setIsSearchOn(false)
    setIsMyMega(false)
  }
  const onSearchBox =()=>{
    setIsSearchOn(!isSearchOn)
    setIsSiteMap(false)
    setIsMyMega(false)  
  }
  const onMyMega =()=>{
    setIsMyMega(!isMyMega)
    setIsSearchOn(false)
    setIsSiteMap(false)
  }
  



  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.side_btn}>
          {thema.slice(0,2).map((ele,idx)=>(
            <div key={ele.title}>
              <button title={ele.title} onClick={idx === 0 ? onSiteMap : idx === 1 ? onSearchBox : null}>
                <img src={`./img/${isSiteMap ? idx === 0 ? close_icon : ele.imgSrc : isSearchOn ? idx === 1 ? close_icon : ele.imgSrc : ele.imgSrc}`} alt={ele.title} />
                <span className='blind'>{ele.title}</span>
              </button>
            </div>
          ))}
        </div>
        {<HideMenu movies={movies} isSiteMap={isSiteMap} isSearchOn={isSearchOn} isMyMega={isMyMega} />}
       <nav>
         <ul>
           {topMenu.slice(0,3).map((ele,idx)=>(
             <li key={ele.gnb}>
               <Link href="#">
                <a title={ele.gnb}>
                  {ele.gnb}
                </a>
               </Link>
               <div className={`${styles.snb} snb${idx+1} snb`}>
                 <div className={styles.sub_container}>
                   <ul>
                    {ele.snb.map(obj=>(
                        <li key={obj}>
                          <Link href="#">
                            <a title={obj}>{obj}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                 </div>
               </div>
             </li>
           ))}
         </ul>
         <ul>
           {topMenu.slice(3).map((ele,idx)=>(
             <li key={ele.gnb}>
               <Link href="#">
                <a title={ele.gnb}>
                  {ele.gnb}
                </a>
               </Link>
               <div className={`${styles.snb} snb${idx+4} snb`}>
                 <div className={styles.sub_container}>
                    <ul>
                      {ele.snb && ele.snb.map(obj=>(
                          <li  key={obj}>
                            <Link href="#">
                              <a title={obj}>{obj}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                 </div>
               </div>
             </li>
           ))}
         </ul>
       </nav>
       <div className={styles.side_btn}>
          {thema.slice(2).map((ele, idx)=>(
            <div key={ele.title}>
              {idx == 0 ? 
              <Link  href="#">
                <a title={ele.title}>
                  <img src={`./img/${ele.imgSrc}`} alt={ele.title} />
                  <span className='blind'>{ele.title}</span>
                </a>
              </Link>
            :
              <button title={ele.title} onClick={onMyMega}>
                <img src={`./img/${isMyMega ? close_icon : ele.imgSrc}`} alt={ele.title} />
                <span className='blind'>{ele.title}</span>
              </button>
            }
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .snb1 ul{
          padding-left: 120px;
        }
        .snb2 ul{
          padding-left: 185px;
        }
        .snb3 ul{
          padding-left: 310px;
        }
        .snb4 ul{
          padding-left: 530px;
        }
        .snb5{
          transform: scale(0);
        }
        .snb6 ul{
          padding-left: 740px;
        }
      `}</style>
    </div>
  )
}
