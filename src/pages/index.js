import React from 'react';
// import Head from 'next/head'
// import Image from 'next/image

import imageHeader from '/src/img/exampleImageHeader.jpg';
import imgCard from '/src/img/carImg.jpg';

import { HeroHeader } from "/src/templates/HeroHeader";
import { TrendingCarrusel } from "/src/templates/TrendingCarrusel";
import { SearchGridCard } from "/src/templates/SearchGridCard";
import { RightBarModal } from "/src/templates/RightBarModal";

export default function Home() {

  return (
    <div className="w-full h-full bg-white dark:bg-darkModeColor  dark:text-white">
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <HeroHeader 
        h1_title={'MovieApp'}
        imageHeader={imageHeader}
      />

      <main className="relative z-30 pt-5 pb-5 bg-white dark:bg-version2 flex flex-col items-center">

        <div className="w-[95%]">
          <TrendingCarrusel />
        </div>

        <div id='SearchGridCard' className="w-[95%] mt-5">
          <SearchGridCard />
        </div>
        
        <RightBarModal />
        
        <button className="primaryButton w-24">Hola</button>
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}
