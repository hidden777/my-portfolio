import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import './index.scss'
import noteKeeper from "../../assets/images/Note-Keeper.png";
import Loader from "react-loaders";
import AnimatedLetters from '../AnimatedLetters';
import Restaurant from '../../assets/images/restaurant.png';
import Portfolio from '../../assets/images/Portfolio.png';

function Projects() {
    const [letterClass, setLetterClass] = useState('text-animate'); 
    useEffect(() => {
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000);
    },[]);
    return (
    <>
    <div className="container project-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['M','y',' ','P','r','o','j','e','c','t','s']} indx={10} />
                </h1>
                <p>
                    Here are few of my projects that I've worked on recently....
                </p>
            </div>
            <div className="wrapper">
                <ProjectCard 
                    img={noteKeeper} 
                    title="Note Keeper"
                    description="A website that helps you keep note of your important stuffs!"
                    isBlog="https://hidden777-note-keeper-app.netlify.app/"
                    ghLink="https://github.com/hidden777/Note-Keeper-App"
                />

                <ProjectCard 
                    img={Restaurant}
                    title="Paradise Green Restaurant"
                    description="Used React to make an interface for a restaurant app. Used styled components as the main styling option. Also used Routes to make a multipage website."
                    isBlog="https://paradise-green-restaurant.netlify.app/"
                    ghLink="https://github.com/hidden777/Paradise-Green-Restaurant"
                />
                <ProjectCard 
                    img={Portfolio}
                    title="My Portfolio"
                    description="This is a Portfolio site, which sums up my skills, projects and other details."
                    isBlog="https://hidden777-my-portfolio.netlify.app/"
                    ghLink="https://github.com/hidden777/my-portfolio"
                />
            </div>
    </div>
    <Loader type='pacman' />
    </>
  );
}

export default Projects;