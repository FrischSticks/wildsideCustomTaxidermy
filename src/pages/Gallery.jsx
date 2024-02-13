import React from 'react'
import { useState } from 'react';
import '../css/Gallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
// RETRIEVES ALL IMAGES FROM IMAGES FOLDER
const images = require.context('../images', true);
const imageList = images.keys().map(image => images(image));

const Gallery = () => {

  // console.log(imageList);

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);

    console.log('Image Index: ' + index);
  }

  const previousImage = (index) => {
    console.log('Image Index: ' + index);

    slideNumber === 0
    ? setSlideNumber(imageList.length - 1)
    : setSlideNumber( slideNumber - 1)
    
  }

  const nextImage = (index) => {
    console.log('Image Index: ' + index);

    slideNumber + 1 === imageList.length 
    ? setSlideNumber(0)
    : setSlideNumber(slideNumber + 1)
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }


  return (
    <div>
      <h1>Gallery</h1>
      {/* MODAL */}
      { openModal && 
        <div className="sliderWrap">
          <FontAwesomeIcon icon={ faCircleChevronLeft } className='previousImageBtn' onClick={ previousImage }/>
          <FontAwesomeIcon icon={ faCircleChevronRight } className='nextImageBtn' onClick={ nextImage }/>
          <FontAwesomeIcon icon={ faCircleXmark } className='closeModalBtn' onClick={ handleCloseModal }/>
          <div className="fullScreenImage">
            <img src={imageList[slideNumber]} alt="" />
          </div>
        </div>
      }
      <div className="galleryWrap">
        {imageList &&
          imageList.map((slide, index) => {
            // console.log(slide);
            // console.log(index);
            return (
              <div className="singleImageContainer" key={index}>
                {/* USE DEFAULT FOR IMG PATH WHEN USING REQUIRE.CONTEXT */}
                <img src={slide} alt="" onClick={ () => handleOpenModal(index)} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;