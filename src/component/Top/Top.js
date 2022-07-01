import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Top.module.css";
import TopInfo from "./TopInfo";
import { info,  menu, siteMap } from "../../data/topData";
import TopMenu from "./TopMenu";



export default function Top({movies}) {
  const [ infoList , setInfoList ] = useState([]);
  const [ topMenu , setTopMenu ] = useState([]);
  const [ isThema, setIsThema ] = useState('black');
  const [logoImg, setLogoImg ] = useState("logo_new2.png");

  useEffect(()=>{
    setInfoList(info);
    setTopMenu(menu);
  },[])
  useEffect(()=>{
    if(isThema === 'black'){
      setLogoImg("logo-white_new2.png");
    }else if(isThema === 'white'){
      setLogoImg("logo_new2.png");
    }
  },[isThema])

  return (
   
    <header id="header" name="header" className={`${styles.wrap} ${isThema}`}>
      <div className={styles.container}>
        <TopInfo infoList={infoList} isThema={isThema}/>
        <div className={styles.logo}>
          <Link href={"/"}>
            <a title="MEGABOX 메인으로 가기">
              <img src={`./img/${logoImg}`} alt="megabox-logo" />
            </a>
          </Link>
        </div>
      </div>
      <TopMenu topMenu={topMenu} isThema={isThema}  movies={movies}/>
      <style jsx global>
        {`
          #header.black{
            background: rgba(0, 0, 0, .3);
            border-bottom: 1px solid rgb(126, 126, 126);
          }
          #header.white{
            background: rgb(255, 255, 255);
            border-bottom: 1px solid rgb(0, 0, 0);
          }
          #header.black .snb{
            background: rgba(0, 0, 0, .3);
            border-top: 1px solid rgb(126, 126, 126);
          }
          #header.white .snb{
            background: rgb(255, 255, 255);
            border-top: 1px solid rgb(0, 0, 0);
          }
          #header.black nav > ul > li:hover > a{border-bottom: 2px solid rgb(255, 255, 255);}
          #header.white nav > ul > li:hover > a{border-bottom: 2px solid rgb(0, 0, 0);}
          #header.black .snb ul li:hover a{  border-bottom: 1px solid rgba(255, 255, 255,1); }
          #header.white .snb ul li:hover a{  border-bottom: 1px solid rgba(0, 0, 0,1); }

          #header.black a{
            color:#fff;
          }
          #header.white a{
            color:#000;
          }
          #header.black a.infoA{
            color:#bbb;
          }
        `}
      </style>
    </header>
  )
}
