import {Link} from 'react-router-dom';
import '../style/navbar.css';
function Navbar(){
    return(
        <nav>
        {/* <h1 className='bucklu'>Bucklu</h1> */}
        <ul className='nav'>
        <li><Link to="/" className='page-items'>Home</Link></li>
        <li><Link to="/About" className='page-items'>About us</Link></li>
        </ul>
        </nav>
    )
}
export default Navbar;