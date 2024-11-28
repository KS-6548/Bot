import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import box from '../../assets/box.png'
import { useGSAP } from "@gsap/react";
import avatar from '../../assets/avatar.png'
import circle from '../../assets/circle.png'
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import { FaPaperPlane } from "react-icons/fa"
import { Col, Container, Row } from 'react-bootstrap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import './Banner.css'


gsap.registerPlugin(useGSAP, TextPlugin, RoughEase, MotionPathPlugin);

function Banner({ isDark }) {

    const myvar = useRef()
    
    useEffect(() => {
        const words = ["Web_Developer", "Web_Design", "Web_Fullstack"]
        let masterTl = gsap.timeline({ repeat: -1, repeatRefresh:1 })

        words.forEach(word => {
            let t1 = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.2 })
            t1.to(myvar.current, { duration: 1, text: word })
            masterTl.add(t1)
        })

    }, [])


    return (
        <>
            <section className='banner' id='home'> 
                <Container >
                    <Row className='align-items-center'>
                        <Col xs={12} md={5} xl={6} className='text'>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi I'm Karthik Sundaram`}<span className='wrap' ref={myvar}>Web_</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus minima, mollitia impedit nisi harum quas. Tenetur hic, corporis aliquid itaque ipsam quia alias fuga sunt magni perferendis pariatur numquam nobis!</p>
                        </Col>
                        <Col xs={12} md={7} xl={6}>
                            <div className="banner-ami ">
                                <div className="box">
                                    <img className='avatar' src={avatar} alt="" />
                                </div>
                                <img className='circle' src={circle} alt="" />
                                <img className='box2' src={box} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner