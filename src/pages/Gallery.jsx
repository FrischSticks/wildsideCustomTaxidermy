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
const allImages = images.keys().map(image => images(image));

console.log(allImages)

// FILTERED IMAGES
const deerImages = allImages.filter(image => image.includes('deer') || image.includes('Deer'));
const fishImages = allImages.filter(image => image.includes('fish') || image.includes('Fish') ||
  image.includes('bluegill') || image.includes('Bluegill') || 
  image.includes('bass') || image.includes('Bass') || 
  image.includes('crappie') || image.includes('Crappie'));
const duckImages = allImages.filter(image => image.includes('duck') || image.includes('Duck'));
const turkeyImages = allImages.filter(image => image.includes('turkey') || image.includes('Turkey'));
const bearImages = allImages.filter(image => image.includes('bear') || image.includes('Bear'));
const awardWinningImages = allImages.filter(image => image.includes('award') || image.includes('Award'));


const Gallery = () => {

  const [imageList, setImageList] = useState(allImages);

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
      <div className="dropdownFilter">
        <label htmlFor="filterDropdown">Filter Images: </label>
          <select id="filterDropdown">
            <option value="All" onClick={ () => setImageList(allImages)}>All</option>
            <option value="Award Winners" onClick={ () => setImageList( awardWinningImages )}>Award Winners</option>
            <option value="Bear" onClick={ () => setImageList( bearImages )}>Bear</option>
            <option value="Duck" onClick={ () => setImageList( duckImages )}>Duck</option>
            <option value="Deer" onClick={ () => setImageList(deerImages)}>Deer</option>
            <option value="Fish" onClick={ () => setImageList(fishImages)}>Fish</option>
            <option value="Turkey" onClick={ () => setImageList(turkeyImages)}>Turkey</option>
          </select>
      </div>
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