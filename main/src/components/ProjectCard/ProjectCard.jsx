import React from 'react'
import './ProjectCard.scss'

function ProjectCard({title, body, imageUrl}) {
    return (
        <div className="card">
            <div className="imageContainer">
                <img src={imageUrl} alt="project-screenshot"/>
            </div>
            <div className="cardContent">
                <div className="cardTitle">
                    <h3>{title}</h3>
                </div>
                <div className="cardBody">
                <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
