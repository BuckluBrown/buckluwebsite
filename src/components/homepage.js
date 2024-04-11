import mascot2 from '../assets/chocdrink-mascot.png';
import browntypo  from '../assets/brown typo.png';
import '../style/homepage.css';
// import insta from '../assets/instagram.png';
import bg from '../assets/bg.jpg';
function Homepage(){
    return(
        <div className='container'>
        <div className="landing-page">
           
            <div className='mascot-container'> 
            <img className="mascot2" src={mascot2} alt="chocdrink-mascot"></img>
            <img src={bg} className='bg' alt='bg'/>
            <div className='brown-typo'>
                <img className='brown-typo-text1' src={browntypo} alt='brown-text'></img>
                <h1 className='brown-typo-text2'>Hot Chocolate with Jaggery</h1>
            </div>
            </div>
        </div>
        <div className='content'>
        
            <div className='block1'>
                <h1>MIX</h1>
            </div>
            <div className='block2'>
                <h1> SIP</h1>
            </div>
            <div className='block3'>
                <h1>FLY</h1>
            </div>

        </div>
        <footer>
            <h3>Send a special message to your friend!</h3>
        </footer>
        </div>
    )
}

export default Homepage;
