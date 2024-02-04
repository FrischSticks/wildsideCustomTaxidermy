import React, { useState, useEffect } from 'react'
import '../css/imageSlider.css'
// ICONS
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
// IMAGES
import bluegillTaxidermy from '../images/awardWinningBluegillTaxidermyIndiana.jpg'
import deerMountTaxidermy from '../images/deerMountTaxidermistIndiana.jpg'
import fullBodyBearTaxidermy from '../images/fullBodyBearTaxidermyWithHabitat.jpg'
import goldenEyeDuckTaxidermy from '../images/goldenEyeDuckTaxidermy.jpg'
import fullBodyTurkeyTaxidermy from '../images/fullBodyTurkeyTaxidermyOnLimb.jpg'

const ImageSlider = () => {

    // SLIDER IMAGES
    const slides = [
        bluegillTaxidermy,
        deerMountTaxidermy,
        fullBodyBearTaxidermy,
        goldenEyeDuckTaxidermy,
        fullBodyTurkeyTaxidermy
    ]

    // SETTING CURRENT SLIDE
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const previousSlide = () => {
        // returns T/F
        const isFirstSlide = slides[currentIndex] === slides[0];
        isFirstSlide ? setCurrentIndex([slides.length -1]) : setCurrentIndex(currentIndex - 1);
    }

    const nextSlide = () => {
        // returns T/F
        const isLastSlide = slides[currentIndex] === slides[slides.length - 1];
        isLastSlide ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    }

    // GO TO SLIDE ON RxDOT CLICK
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className='mainContainer'>
            <div className='displayImage' style={{ backgroundImage: `url(${slides[currentIndex]})`}}>
                {/* LEFT ARROW */}
                <div className="leftArrow">
                    <BsChevronCompactLeft onClick={previousSlide} size={25} />
                </div>
                {/* RIGHT ARROW */}
                <div className="rightArrow">
                    <BsChevronCompactRight onClick={ nextSlide} size={25} />
                </div>
            </div>

            {/* RX DOTS BELOW DISPLAY IMAGE */}
            <div className="rxDots">
                {slides.map((slide, slideIndex) => (
                    <div 
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        
                        className='rxDot'>
                            <RxDotFilled />
                    </div>
                ))}
            </div>    
        </div>
    );
}

export default ImageSlider