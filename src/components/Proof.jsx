
import logo3 from '../assets/globalbank.png';
import './Proof.css';

function Proof() {
  return (
    <div className='proof'>
        <div className='join'>
        <p>Join 4000+ companies already growing</p>
        </div>
        <div className='companies'>
            <div className='logo'>
            <img src={logo3} alt="global"></img>
                <h3>Boltshift</h3>
            </div>
            <div className='logo'>
            <img src={logo3} alt="global"></img>
                <h3>LightBox</h3>
            </div>
            <div className='logo'>
            <img src={logo3} alt="global"></img>
                <h3>FeatherDev</h3>
            </div>
            <div className='logo'><img src={logo3} alt="global"></img>
                <h3>Spherulr</h3>
            </div>
            <div className='logo'>
            <img src={logo3} alt="global"></img>
                <h3>GlobalBank</h3>
            </div>
            <div className='logo'>
                <img src={logo3} alt="global"></img>
                <h3>Nytezsche</h3>
            </div>
        </div>
     
    </div>
  )
}

export default Proof