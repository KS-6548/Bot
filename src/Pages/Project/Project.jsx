import React, { useState } from 'react'
import Card from '../../Components/Card/Card'
import { Container, Row, Col } from "react-bootstrap";
import { projects } from '../../Utilities/Project'
import '../Project/Project.css'

function Project() {
  const [noOfElement, setNoOfElement] = useState(4)

  const Loadmore = ()=>{
    setNoOfElement(noOfElement + noOfElement)
  }

  const slice = projects.slice(0,noOfElement)
  return (
    <>
      <section className="project" id='project'>
        <Container>
          <h2>Project</h2>
          <Row className='g-5'>
            <Card slice={slice}/>
          </Row>
          <div className="container text-center pt-3">
            <button className='btn see' onClick={()=>{Loadmore()}}>see more</button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Project