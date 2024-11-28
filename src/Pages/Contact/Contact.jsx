import React, { useState } from 'react'
import contactImg from "../../assets/contact-img.svg"
import { Container, Row, Col } from "react-bootstrap";
import './Contact.css'

function Contact() {
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
  return (
    <>
        <section className="contact">
            <Container>
                <Row className='align-item-center'>
                    <Col md={6}>
                        <img  src={contactImg} alt="contact" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form action="">
                            <Row>
                                <Col sm={6}>
                                    <input type="text" className='form-control' placeholder='First Name' value={firstname} onChange={(e)=>{setFirstName(e.target.value)}} />
                                </Col>
                                <Col sm={6}>
                                    <input type="text" className='form-control' placeholder='Last Name' value={lastname} onChange={(e)=>{setLastName(e.target.value)}} />
                                </Col>
                                <Col sm={12}>
                                    <input type="email" className='form-control' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                </Col>
                                <Col sm={12}>
                                    <input type="tel" className='form-control' placeholder='Phone No' value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
                                </Col>
                                <Col sm={12}>
                                    <button className='btn' type='submit'><span>Submit</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
                
            </Container>
        </section>
        
    </>
  )
}

export default Contact