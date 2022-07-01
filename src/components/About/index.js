import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000);
    },[]);
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['A','b','o','u','t',' ','m','e']}
                        indx={10}
                    />
                </h1>
                <p>I'm very ambitious front-end developer looking for a role in
                    established IT company with the opportunity to work with the latest
                    technologies in hope of getting to learn something new with greater 
                    work experience.</p>
                <p>I'm very focussed, naturally curious, determined and perpetually working on
                    improving my set of skills and trying something new everytime.</p>
                <p>If I need to define myself in one sentence that would be a family
                    person, a melophile, fiction enthusiast, and a tech-obsessed.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="black" />
                    </div>
                </div>
            </div>
        </div> 
        <Loader type='pacman' />
        </>
    )
}

export default About;