import '../styles/fonts.css'
import '../styles/reset.css'
import '../styles/globals.css'
import Top from '../src/component/Top/Top'
import Bottom from '../src/component/Footer/Bottom'
import Skip from '../src/component/Skip/Skip'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'


function MyApp({ Component, pageProps, movies, dramas}) {
  return (
    <>
      <Head>
        <title>MEET PLAY SHARE, 메가박스</title>
      </Head>
      <Skip/>
      <Top movies={movies}/>
      <Component {...pageProps} movies={movies} dramas={dramas} />
      <Bottom/>
    </>
  )
}
MyApp.getInitialProps = async(context)=>{
  const moviesRes = await (await fetch(`https://megabox-clone-git-main-kimkw1007.vercel.app/api/movies/`)).json();
  const movies = moviesRes.results;
  const dramasRes = await (await fetch(`https://megabox-clone-git-main-kimkw1007.vercel.app/api/dramas/`)).json();
  const dramas = dramasRes.results;
  return {
    movies,
    dramas
  };
}

export default MyApp