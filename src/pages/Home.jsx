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
            <h2>About Us</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Minus molestias totam, pariatur doloribus perspiciatis aliquid officiis impedit qui, 
                  quaerat necessitatibus voluptatem, explicabo voluptas asperiores maxime assumenda 
                  accusamus dolore aspernatur? Repellendus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus molestias totam, pariatur doloribus perspiciatis aliquid officiis impedit qui, 
                  quaerat necessitatibus voluptatem, explicabo voluptas asperiores maxime assumenda 
                  accusamus dolore aspernatur? Repellendus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Minus molestias totam, pariatur doloribus perspiciatis aliquid officiis impedit qui, 
                  quaerat necessitatibus voluptatem, explicabo voluptas asperiores maxime assumenda 
                  accusamus dolore aspernatur? Repellendus.
                </p>

                <ul>
                  <li>Add</li>
                  <li>List</li>
                  <li>For</li>
                  <li>Spacing</li>
                </ul>
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