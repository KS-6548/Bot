import React from 'react'
import { SiSpring } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { SiSpringboot } from "react-icons/si"
import './Skill.css'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Skill() {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:".skill-container",
            start:"top center",
            end:"bottom center",
            markers:true,
            toggleActions: "restart none none reset"
        },
    })
    
    tl.to(".title",{
        y:-40,
        alpha:1
    })
    tl.to(".par",{
        y:-30,
        alpha:1
    })
    tl.to(".front",{
        alpha:1
    })
    tl.to(".frontend",{
        scale:1,
        ease:"power1.in"
    })
    tl.to(".back",{
        alpha:1
    })
    tl.to(".backend",{
        scale:1,
        ease:"power1.in"
    })

    return (
        <>
            <section className='Skill' id='skill'>
                <div className="skill-container container-fliud p-0 m-0">
                    <h2 className='title'>SKILL</h2>
                    <p className='par'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, voluptate.</p>
                    <span className='front'>Frontend</span>
                    <div className="container skill-hover">
                        <div className="card frontend" >
                            <i className="fa-brands fa-html5 icon"></i>
                        </div>
                        <div className="card frontend" >
                            <i className="fa-brands fa-css3 icon"></i>
                        </div>
                        <div className="card frontend" >
                            <i className="fa-brands fa-js icon"></i>
                        </div>
                        <div className="card frontend" >
                            <i className="fa-brands fa-bootstrap icon"></i>
                        </div>
                        <div className="card frontend" >
                            <i className="fa-brands fa-react icon"></i>
                        </div>
                    </div>
                    <span className='back'>Backend</span>
                    <div className="container skill-hover">

                        <div className="card backend" >
                            <i className="fa-brands fa-node icon"></i>
                        </div>
                        <div className="card backend" >
                            <i className="fa-brands fa-java icon"></i>
                        </div>
                        <div className="card backend" >
                            <SiSpring className='icon' />
                        </div>
                        <div className="card backend" >
                            <SiSpringboot className='icon' />
                        </div>
                        <div className="card backend" >
                            <SiMongodb className='icon' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill