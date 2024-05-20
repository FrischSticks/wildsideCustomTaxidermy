import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Home.css'
import ohioFish from '../images/awardWinningFishOhio.jpg';
import ImageSlider from '../components/ImageSlider.jsx';
import FacebookEmbed from '../components/FacebookEmbed.jsx';

const Home = () => {
  return (
    <div>
      <div className='banner'>
        <h1>Welcome to the WildSide</h1>
        <div className="bannerBtns">
          <Link to="/contact">
            <button className="bannerBtn1">Contact Us</button>
          </Link>
        </div>
      </div>

      <div className="mainBody">
        <div className="intro">
          <div className='introContainer1'>
            <h2>About</h2>
            <p>
              Welcome to Wildside Custom Taxidermy, your premier destination for taxidermy services in Southern Indiana. 
              With over a decade of dedicated craftsmanship, we take pride in transforming your hunting and fishing trophies into timeless works of art. We combine skill, precision, and a deep passion for wildlife to deliver unparalleled results.<br /><br />

              As outdoor enthusiasts ourselves, we understand the significance of preserving your hunting and fishing memories. 
              Our commitment is to bring those moments back to life with meticulous attention to detail and preserve those moments for years to come. 
              Whether a deer, fish, bird, or a unique exotic species, we ensure that each mount reflects the true essence of the animal.<br /><br />
              What sets us apart? Not only do we boast a decade-long legacy of excellence, but we also offer our award-winning services at competitive <Link to="./Prices">prices</Link>. 
              We believe in making top-tier taxidermy accessible to all outdoor enthusiasts without compromising on quality.<br /><br />
              Join the ranks of hundreds of satisfied clients who have entrusted their prized possessions to Wildside Custom Taxidermy. <Link to="./Contact">Contact</Link> us today to discuss your project, and let us turn your wildlife memories into lasting masterpieces.
            </p>
          </div>
          <div className="introContainer2">
            <img src={ ohioFish } className='ohioFishImg' alt="WildSide Custom Taxidermy Award Winning Fish - Ohio " />
        </div>
        </div>
        <div className="sliderEmbed">
          < ImageSlider />
          <FacebookEmbed />
        </div>
      </div>
    </div>
  )
}

export default Home;