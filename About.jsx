import React from 'react'
import '../css/About.css'
import FacebookEmbed from '../components/FacebookEmbed';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className='aboutContainer'>
        <p className='aboutText'>
          Welcome to Wildside Custom Taxidermy, your premier destination for taxidermy services in Southern Indiana. 
          With over a decade of dedicated craftsmanship, we take pride in transforming your hunting and fishing trophies into timeless works of art. 
          We combine skill, precision, and a deep passion for wildlife to deliver unparalleled results.<br /><br />
          As outdoor enthusiasts ourselves, we understand the significance of preserving your hunting and fishing memories. 
          Our commitment is to bring those moments back to life with meticulous attention to detail and preserve those moments for years to come. 
          Whether a deer, fish, bird, or a unique exotic species, we ensure that each mount reflects the true essence of the animal.<br /><br />
          What sets us apart? Not only do we boast a decade-long legacy of excellence, but we also offer our award-winning services at competitive <Link to="./Prices">prices</Link>. 
          We believe in making top-tier taxidermy accessible to all outdoor enthusiasts without compromising on quality.<br /><br />
          Join the ranks of hundreds of satisfied clients who have entrusted their prized possessions to Wildside Custom Taxidermy. <Link to="./Contact">Contact</Link> us today to discuss your project, and let us turn your wildlife memories into lasting masterpieces.
        </p>
        <div className="facebookEmbed">
          <FacebookEmbed />
        </div>
      </div>
    </div>
  )
}

export default About;