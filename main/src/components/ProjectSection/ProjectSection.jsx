import React from 'react'
import './ProjectSection.scss'
import ProjectCard from '../ProjectCard/ProjectCard'

function ProjectSection() {
    return (
        <section className="projects">
            <div className="projectHeader">Projects.</div>
            <div className="underline"></div>
            <div className="projectContainer">
                <ProjectCard
                imageUrl={`${process.env.PUBLIC_URL}/assets/images/NightOut.png`}
                title={"Night Out"}
                body={"For the undecided couple, group of friends, or family members that don't know what to do on their Night Out. This web-based application lets users search for Breweries and Events by city. Not satifsfied with your results? Simply hit the search button again, as each search is randomized!"}
                />
                <ProjectCard 
                imageUrl={`${process.env.PUBLIC_URL}/assets/images/Resu-Make.png`}
                title={"ResuMake"}
                body={"Want an easy way to create a resume and easily access it on the web? That's where Resu-Make comes in! This application guides you in making a resume and allows for you to download it as a PDF after completion. You don't even have to be logged in to view your resume. Simply type in /resume/youremail@example.com onto the url and you'll be directed to it!"}
                />
                <ProjectCard 
                imageUrl={`${process.env.PUBLIC_URL}/assets/images/EmployeeDirectory.png`}
                title={"Employee Directory"}
                body={"A react application that allows employers/managers to look up their employees. Users can sort their employees by their first/last name in alphabetical order and can even look up a specific employee by typing thier first/last name onto the search bar."}
                />
                <ProjectCard
                imageUrl={`${process.env.PUBLIC_URL}/assets/images/PlainSailing.png`}
                title={"Plain Sailing Apparel"}
                body={"A mock ecommerce website built using React, Redux, and Firebase. Plain Sailing is an online store that makes shopping easy! Here, you'll find a wide selection of apparel, from men's & women's clothing to jackets and hats."}
                />
                </div>
        </section>
    )
}

export default ProjectSection
