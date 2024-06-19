import { NavLink } from 'react-router-dom';
import './navbar.scss'
import { GrSearch, GrUserSettings, GrChatOption, GrNotification } from "react-icons/gr";
import Input from '../input/Input';

const Navbar = () => {

  return (
    <div className='navbar'>
      <NavLink to="/" className='logo'>
        <img src="/logopbts.jpg" alt="logo" />
        <span>Bug Tracker</span>
      </NavLink>
      <div className='icons'>
        <Input />
        <div className='icon-container'>
          <GrSearch className='icon'/>
        </div>

        <div className='message-icon icon-container'>
          <GrChatOption className='icon'/>
          <span className='count'>2</span>
        </div>

        <div className='notification-icon icon-container'>
          <GrNotification className='icon'/>
          <span className='count'>20</span>
        </div>

        <div className='user-icon'>
          <img src="/avatar.jpg" alt="user pic"/>
          <span>Robby</span>
        </div>

        <div className='icon-container'>
          <GrUserSettings className='icon'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar