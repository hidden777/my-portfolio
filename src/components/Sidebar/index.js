import './index.scss';
import myLogo from '../../assets/images/my-logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
    <div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={myLogo} alt='logo' />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="grey" />
        </NavLink>
        <NavLink exact="true" className="about-link" activeclassname="active" to="/about">
            <FontAwesomeIcon icon={faUser} color="grey" />
        </NavLink>
        <NavLink exact="true" className="projects-link" activeclassname="active" to="/projects">
            <FontAwesomeIcon icon={faLaptopCode} color="grey" />
        </NavLink>
        <NavLink exact="true" className="contact-link" activeclassname="active" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="grey" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abhinav-sinha-889085204/">
                <FontAwesomeIcon icon={faLinkedin} color="grey" />
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_hid_7/">
                <FontAwesomeIcon icon={faInstagram} color="grey" />
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/hidden777">
                <FontAwesomeIcon icon={faGithub} color="grey" />
            </a>
        </li>
        
    </ul>
    </div>
    )
};

export default Sidebar;