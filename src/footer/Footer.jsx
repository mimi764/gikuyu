import './Footer.css';
import { NavLink } from "react-router-dom";
import LogoutButton from './Logout';

const Footer = () => {

  return (
    <footer className="footer">
        
        <div className="div2">
     <NavLink to="/about" >
            <p>
          THIMO
            </p>
          </NavLink>
   </div>
  

   <div className="logout-btn">
  © <span > {new Date().getFullYear()} gerera</span> 
  <a href="https://chat.whatsapp.com/JmUBjjzRG0H1h74Zxa7jT5">WhatsApp</a>
 <LogoutButton/>
</div>

</footer>
   
  )
}

export default Footer
