'use client'
import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import WooCom from './components/WooCom';
import Capabilities from "./components/Capabilities";
import DesignDev from "./components/DesignDev";
import EmailBan from "./components/EmailBan";
import Pharma from './components/Pharma';
import AfterFX from './components/AfterFX';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import { Lato, Kaushan_Script } from 'next/font/google';



const latoFont = Lato({
  subsets:["latin"],
  weight: "300",
  variable: '--font-lato',
})
const KaushanFont = Kaushan_Script ({
  subsets:["latin"],
  weight: "400",
  variable: '--font-kaushan',
})

export default function Home() {
  return (  
    
    <main className={`${latoFont.variable} ${KaushanFont.variable} bg-white`}>
      <Header />
        
        <section id = "about">
          <About />
        </section>
        <section id = "work">
          <Work />
        </section>
        <section id = "woocom">
          <WooCom />
        </section>
        <section id = "capabilities">
          <Capabilities />
        </section>
        <section id = "designdev">
          <DesignDev />
        </section>
        <section id = "emailban">
          <EmailBan />
        </section>
        <section id = "pharma">
          <Pharma />
        </section>
        <section id = "afterfx">
          <AfterFX />
        </section>
        <section id = "contact">
          <Contact />
        </section> 

        <Footer />

    </main>
  );
}
