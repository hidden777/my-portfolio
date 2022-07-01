import './index.scss';
import Letter from '../../assets/images/a-letter.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray=['b','h','i','n','a','v'];
    const jobArray=['W','e','b',' ','D','e','v','e','l','o','p','e','r','.'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, []);
    
    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'</span>
                <span className={`${letterClass} _15`}>m</span>
                <span className={`${letterClass} _16`}>,</span>
                <img src={Letter} alt="A" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} indx={17} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} indx={23} />
                </h1>
                <h2>Frontend Developer | Beginner in Backend</h2>
                <Link to='/contact' className='flat-button'>
                    CONTACT ME
                </Link>
            </div>
            <Logo className="my-logo" />
        </div>
        <Loader type='pacman' />
        </>
    )
};

export default Home;