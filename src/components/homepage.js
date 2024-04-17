import mascot2 from '../assets/chocdrink-mascot.png';
import browntypo  from '../assets/brown typo.png';
import '../style/homepage.css';
import pkg1 from '../assets/pkg1.png';
import sk1 from '../assets/6.svg';
import sk2 from '../assets/15.svg';

import bg from '../assets/chocbg1.gif';
function Homepage(){
    return(
        <div className='container'>
        <div className="landing-page">
           
            <div className='mascot-container'> 
            <img className="mascot2" src={mascot2} alt="chocdrink-mascot"></img>
            <img src={bg} className='bg' alt='bg'/>
            <div className='brown-typo'>
                <img className='brown-typo-text1' src={browntypo} alt='brown-text'></img>
                <div className='jaggery-text'>
                    <h1 className='j1'>Hot</h1> 
                    <h1 className='j2'>Chocolate</h1>
                    <h1 className='j3'> with</h1>
                    <h1 className='j4'> Jaggery</h1></div>
            </div>
            <div className='pkg'>
                <img src={pkg1}  className='pkg1' alt='package' />
            </div>
            </div>
        </div>
        <div className='content'>
        
            <div className='block1'>
                <h1>MIX</h1>
                <h2>•--•</h2>

            </div>
            <div className='block2'>
                <h1> SIP</h1>
                <h2>•--•--•</h2>


            </div>
            <div className='block3'>
                <h1>FLY</h1>
                <h2>•--•--•--•</h2>

            </div>

        </div>
        <footer>
            <div className='scribble1'>
                <img src={sk1} className='sk1' alt='scribbles'/>
            </div>
            <div className='share'>
            <h3>Write to us about the first time you tasted BROWN ♡</h3>
            <br/>
            <a href='mailto:@bucklu@brown.com'><h2>bucklu@brown.com</h2></a>
            </div>
            <div className='scribble2'>
                <img src={sk2} className='sk2' alt="scribbles"/>
            </div>
        </footer>
        </div>
    )
}

export default Homepage;
