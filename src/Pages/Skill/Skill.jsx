import React from 'react'
import { SiSpring } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { SiSpringboot } from "react-icons/si"
import skillbg from '../../assets/skill-illus.png'
import './Skill.css'

function Skill() {
    return (
        <>
            <section className='Skill' id='skill'>
                {/* <img className='skill-bg ' src={skillbg} alt="" /> */}
                <div className="container-fliud p-0 m-0">
                    <h2>SKILL</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, voluptate.</p>
                    <span>Frontend</span>
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
                    <span>Backend</span>
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