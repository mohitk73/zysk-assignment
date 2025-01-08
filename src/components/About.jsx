
import logo1 from '../assets/about.png';
import './About.css';

function About() {
  return (
    <div className='section'>
        <div className='container1'>
            <div className='badge-head'>
                <p>&nbsp;<span>New Feature</span> &nbsp;Check out the team dashboard  &#8594; &nbsp;</p>
            </div>
            <h2>Beautiful analytics to grow smarter</h2>
            <p>Powerful, self-serve product and growth analytics to help you convert, engage,</p>
            <p>and retain more users. Trusted by over 4,000 startups.</p>
            <button className='button1'>Demo</button>
            <button className='button2'>Sign Up</button>
        </div>
        <div className='container2'>
        <img src={logo1} alt="about"></img>
        </div>

    </div>
  )
}

export default About