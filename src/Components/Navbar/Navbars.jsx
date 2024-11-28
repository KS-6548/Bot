import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll/modules'
import { IoSunnySharp } from "react-icons/io5"
import { IoMoon, IoLogoGithub } from "react-icons/io5"
import { Navbar, Nav, Container } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'

function Navbars({ isDark, setIsDark }) {
    const [scrolled, setScrolled] = useState(false)

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    }

    const selectedTheme = localStorage.getItem("selectedTheme")
    if (selectedTheme === "dark") {
        setDarkMode();
        setIsDark(true)
    }

    const toggleTheme = () => {
        if (!isDark) {
            setDarkMode();
            setIsDark(true)
        }
        else {
            setLightMode()
            setIsDark(false)
        }
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])


    return (
        <>
            <Navbar data-aos="fade-down" data-aos-duration="1200" expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container fluid>
                    <Navbar.Brand >
                        {
                            isDark ?
                                <svg className='' width="50" height="50" viewBox="0 0 325 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='s1' d="M162 103V119L225 231H162V249H263L188 126H324V103H162Z" fill="#AA367C" />
                                    <path className='s2' d="M163 275V295H324V269L265 170H324V149H226L300 275H163Z" fill="#AA367C" />
                                    <path className='k-left' d="M1 294V49C15.0348 59.9844 19.8147 68.3308 23 87V294H1Z" fill="#AA367C" />
                                    <path className='k-top' d="M69 194H43V78C31.1265 49.0241 21.531 38.4042 1 26V1C41.5086 20.0916 50.0566 40.5719 64 78V174L105 139C114.074 128.354 115.979 121.326 117 108H139C139.299 126.62 136.316 135.411 127 149L69 194Z" fill="#AA367C" />
                                    <path className='k-right' d="M146 160L90 201L146 244V218L129 201L170 167L156 144L146 160Z" fill="#AA367C" />
                                    <path className='k-bottom' d="M41 210V295H60V231L105 267C114.13 276.395 117.199 282.372 117 295H138C141.476 278.855 138.36 269.882 125 254L67 210H41Z" fill="#AA367C" />
                                </svg>
                                :
                                <svg className='' width="50" height="50" viewBox="0 0 325 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='s1' d="M162 103V119L225 231H162V249H263L188 126H324V103H162Z" fill='#0d6efd' />
                                    <path className='s2' d="M163 275V295H324V269L265 170H324V149H226L300 275H163Z" fill='#0d6efd' />
                                    <path className='k-left' d="M1 294V49C15.0348 59.9844 19.8147 68.3308 23 87V294H1Z" fill='#0d6efd' />
                                    <path className='k-top' d="M69 194H43V78C31.1265 49.0241 21.531 38.4042 1 26V1C41.5086 20.0916 50.0566 40.5719 64 78V174L105 139C114.074 128.354 115.979 121.326 117 108H139C139.299 126.62 136.316 135.411 127 149L69 194Z" fill='#0d6efd' />
                                    <path className='k-right' d="M146 160L90 201L146 244V218L129 201L170 167L156 144L146 160Z" fill='#0d6efd' />
                                    <path className='k-bottom' d="M41 210V295H60V231L105 267C114.13 276.395 117.199 282.372 117 295H138C141.476 278.855 138.36 269.882 125 254L67 210H41Z" fill='#0d6efd' />
                                </svg>

                        }
                    </Navbar.Brand>
                    {isDark ?
                        <Navbar.Toggle className="navbar navbar-dark" aria-controls="offcanvasNavbar-expand" />
                        :
                        <Navbar.Toggle className="navbar navbar-white" aria-controls="offcanvasNavbar-expand" />
                    }
                    <Navbar.Offcanvas
                        id={"offcanvasNavbar-expand"}
                        aria-labelledby={"offcanvasNavbarLabel-expand"}
                        placement="end">
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="mx-auto d-flex justify-content-center align-items-center">
                                <Nav.Link as={Link} to={"home"} spy={true} smooth={true} offset={-80} duration={500} >Home</Nav.Link>
                                <Nav.Link as={Link} to={"skill"} spy={true} smooth={true} offset={-80} duration={500}>Skill</Nav.Link>
                                <Nav.Link as={Link} to={"project"} spy={true} smooth={true} offset={-80} duration={500} >Project</Nav.Link>
                                <Nav.Link as={Link} to={"about"} spy={true} smooth={true} offset={-80} duration={500} >About</Nav.Link>
                                <Nav.Link as={Link} to={"contact"} spy={true} smooth={true} offset={-80} duration={500} >Contact</Nav.Link>
                            </Nav>
                            <Nav className="m-0 p-0 d-flex justify-content-center align-items-center">
                                <div className="navbar-btn me-3">
                                    {isDark ? <a target='blank' href='https://github.com/KS-6548' className='btn fs-2 text-light'><IoLogoGithub /></a>
                                        :
                                        <a target='blank' href='https://github.com/KS-6548' className='btn fs-2 ' ><IoLogoGithub /></a>
                                    }
                                </div>
                                <div className="navbar-btn ">
                                    {isDark ? <button className='btn fs-5 text-primary rounded-pill mt-2' onClick={toggleTheme} defaultChecked={selectedTheme === "dark"}><IoMoon className='icon' /></button>
                                        :
                                        <button className='btn fs-5 rounded-pill mt-2' onClick={toggleTheme} defaultChecked={selectedTheme === "dark"}><IoSunnySharp className='icon' /></button>
                                    }
                                </div>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars