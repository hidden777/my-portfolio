import './index.scss';
import homeLogo from '../../../assets/images/home-logo.svg';

const Logo = () => {
    return (
        <div className='logo-container'>
            <img className='solid-logo-home' src={homeLogo} alt="logo" />
        </div>
    )
}

export default Logo;