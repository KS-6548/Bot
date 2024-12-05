import React, { useEffect, useState } from 'react'
import About from './About/About'
import Skill from './Skill/Skill'
import Project from './Project/Project'
import Banner from '../Components/Banner/Banner'
import Footer from './Footer/Footer'
import Contact from './Contact/Contact'
import Loading from '../Components/Loading/Loading'
import Navbars from '../Components/Navbar/Navbars'
import { gsap } from "gsap";
import {ReactLenis, useLenis} from 'lenis/react'
import { useGSAP } from "@gsap/react";

function Home() {
  const [isDark, setIsDark] = useState(false)

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  useGSAP(() => {
    let t1 = gsap.timeline({});

    t1.to(".Home", {
      display: "none"
    })
    t1.to(".navbar", {
      y: -70,
    }).to(".banner-ami", {
      scale: 0
    }).to(".text", {
      opacity: 0
    })

    t1.fromTo(".svg-img",
      {
        opacity: 1,

      }, {
      duration: 0.3,
      opacity: 0,
    })
      .to("#bars", { duration: 0.3, opacity: 1 }, "-=0.2")
      .to("#bar1", { duration: 0.3, width: 0 }, "-=0.1")
      .to("#bar2", { duration: 0.3, width: 0 }, "-=0.1")
      .to("#bar3", { duration: 0.3, width: 0 }, "-=0.1")
      .to("#bar4", { duration: 0.3, width: 0 }, "-=0.1")
      .to("#bar5", { duration: 0.3, width: 0 }, "-=0.1")
      .to(".loader-page", {
        scale: 0.8,
        display: "none",

      })
      .to(".Home", {

        display: "block",
      })


    t1.to(".navbar",
      { y: 0 })
      .to(".text", {
        opacity: 1,
        ease: "power1.in"
      })
      .to(".banner-ami", {
        scale: 1,
        ease: "bounce.inOut"
      })
  })

  return (
    <>
    <ReactLenis root>
      <Loading />
      <section className='Home'>
        <Navbars isDark={isDark} setIsDark={setIsDark} />
        <Banner isDark={isDark} />
        <Skill />
        <Project />
        <About isDark={isDark} />
        <Contact />
        <Footer isDark={isDark} />
      </section>
    </ReactLenis>
    </>
  )
}

export default Home