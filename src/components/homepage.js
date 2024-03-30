import chocbg1 from '../assets/chocbg1.gif';
import '../style/homepage.css';
import insta from '../assets/instagram.png';
import mascot from '../assets/mascot.png';
function Homepage(){
    return(
        <>
        <div className="landing-page">
            <div className='vertical-text'>
            <h1>B<br/>R<br/>O<br/>W<br/>N</h1></div>
            <div className='video-container'> 
            <img className="bg1" src={chocbg1} autoPlay alt="chocolatebg"></img>
            <h1 className='heading'> Bucklu</h1>
            </div>
        </div>
        <div className='content'>
            
            <div className='block1'>
                <img className='mascot' src={mascot} alt='mascot'/>
            </div>
            <div className='block2'>
            <h3> Hit the instagram <br/> to know more</h3>

            </div>
            <div className='block3'>
            <img className='insta-logo' src={insta} alt="insta"/>

            </div>
            <div className='block4'>
                <h2>Coming Soon!</h2>
            </div>

        </div>
        <footer>
            <h3>Contact Us</h3>
        </footer>
         </>
    )
}

export default Homepage;
