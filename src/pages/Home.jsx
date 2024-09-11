import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Home.css'
import ohioFish from '../images/awardWinningFishOhio.jpg';
import ImageSlider from '../components/ImageSlider.jsx';
import FacebookEmbed from '../components/FacebookEmbed.jsx';
import googleReview from '../images/reviewOnGoogle.png';
import rightArrow from '../images/right-arrow.png';

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

    {/* MAIN BODY */}
      <div className="mainBody">
        <h2>About</h2>
          <div className='intro'>     
            <p>
              Welcome to Wildside Custom Taxidermy, your premier destination for taxidermy services in Southern Indiana. 
              With over a decade of dedicated craftsmanship, we take pride in transforming your hunting and fishing trophies into timeless works of art. 
              We combine skill, precision, and a deep passion for wildlife to deliver unparalleled results.<br /><br />

              As outdoor enthusiasts ourselves, we understand the significance of preserving your hunting and fishing memories. 
              Our commitment is to bring those moments back to life with meticulous attention to detail and preserve those moments for years to come. 
              Whether a deer, fish, bird, or a unique exotic species, we ensure that each mount reflects the true essence of the animal.<br /><br />
              What sets us apart? Not only do we boast a decade-long legacy of excellence, but we also offer our award-winning services at competitive prices. 
              We believe in making top-tier taxidermy accessible to all outdoor enthusiasts without compromising on quality.<br /><br />
              Join the ranks of hundreds of satisfied clients who have entrusted their prized possessions to Wildside Custom Taxidermy. <Link to="./Contact">Contact</Link> us today to discuss your project, and let us turn your wildlife memories into lasting masterpieces.
            </p>
            <img src={ ohioFish } className='ohioFishImg' alt="WildSide Custom Taxidermy Award Winning Fish - Ohio " />
          </div>
          <div className='embeds'>
            <div className="imageSlider">
              <ImageSlider />
            </div>
            <div className='followReview'>
              <div className='facebookFollow'>
                <h3>Follow us on Facebook</h3>
                <img src={ rightArrow } className='rightArr' alt="Right Arrow" />
              </div>
              <a href="https://g.page/r/CZEzP9XkCEr7EAI/review" target="_blank" rel="noopener noreferrer">
                <img src={googleReview} className='googleReview' alt="Leave us a review on Google" />
              </a>
            </div>
            <div className="facebookEmbed">
              <FacebookEmbed className='facebookEmbed'/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home;