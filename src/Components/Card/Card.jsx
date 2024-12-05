import React from 'react'
import { FaHtml5 } from 'react-icons/fa'
import '../Card/Card.css'

function Card({ slice }) {
    return (
        <>
            {
                slice.map((project) => {
                    return (
                        <div className="col-12 col-md-12 col-lg-3 d-flex justify-content-center" key={project.id}>
                            <a href={project.github} className="card shadow project-card mb-3 rounded rounded-5" style={{ width: "19rem" }}>
                                <img src={project.Img} className="card-img-top img-card rounded-top-5" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.desc}</p>
                                    <p className="card-text tag">
                                        <small>
                                            {project.tag.map((tag) => (
                                                <i className={tag}></i>
                                            ))}
                                        </small>
                                    </p>
                                </div>
                            </a>
                        </div>
                    )

                })
            }
        </>

    )
}

export default Card