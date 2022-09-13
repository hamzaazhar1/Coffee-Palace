import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="Navbar">
            <h1>Coffee Palace</h1>
            <ul>

                <li><Link to="/">Home</Link></li>
                <li><Link to="/Aboutus">About Us</Link></li>
                <li><Link to="/Services">Services</Link></li>
                
            </ul>
            
        </div>
     );
}
 
export default Navbar;
