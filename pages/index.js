import { useRouter } from 'next/router'
import { useState,useEffect } from 'react';
import Section1 from '../src/component/Index/Section1';
import Section2 from '../src/component/Index/Section2';
import Section3 from '../src/component/Index/Section3';
import Section4 from '../src/component/Index/Section4';

export default function Home({movies,dramas}) {

  return (
    <>
      <Section1 movies={movies} />
      <Section2 />
      <Section3 dramas={dramas}/>
      <Section4/>
    </>
  )
}
/* 
export async function getServerSideProps(context) {
  const moviesRes = await (await fetch(`http://localhost:3000/api/movies/`)).json();
  const movies = moviesRes.results;
  const dramasRes = await (await fetch(`http://localhost:3000/api/dramas/`)).json();
  const dramas = dramasRes.results;
  return {
    props: {
      movies,
      dramas
    },
  };
} */
