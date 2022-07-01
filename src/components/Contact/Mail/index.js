import './index.scss';
import MailLogo from '../../../assets/images/mail-sent-animate.svg';

const Mail = () =>{
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={MailLogo} alt="logo" />
        </div>
    )
}

export default Mail;