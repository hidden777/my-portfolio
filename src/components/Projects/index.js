import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import './index.scss'
import noteKeeper from "../../assets/images/Note-Keeper.png";
import Loader from "react-loaders";
import AnimatedLetters from '../AnimatedLetters';
import Hubfest from '../../assets/images/hardware-hubfest.png';
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
                    img={Hubfest}
                    title="Havells Hardware Hubfest"
                    description="Worked with a few collabortors in a society project for the event called 'Havells Hardware Hubfest.'"
                    isBlog="https://hubfest.ecelldtu.in/"
                    ghLink="https://github.com/theanuraaag/Hardware-HubFest"
                />
                <ProjectCard 
                    img={Portfolio}
                    title="My Portfolio"
                    description="This is a Portfolio site, which sums up my skills, projects and other details."
                    isBlog="localhost:3000"
                    ghLink=""
                />
            </div>
    </div>
    <Loader type='pacman' />
    </>
  );
}

export default Projects;