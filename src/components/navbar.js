import {Link} from 'react-router-dom';
import insta from '../assets/instagram.png';
import '../style/navbar.css';
function Navbar(){
    return(
        <nav>
        {/* <h1 className='bucklu'>Bucklu</h1> */}
        <ul className='nav'>
        <li><Link to="/" className='page-items'><img className='insta' src={insta} alt='insta'/></Link></li>
        <li><Link to="/About" className='page-items'>About<br/>Brown</Link></li>
        </ul>
        </nav>
    )
}
export default Navbar;