import React from 'react'
import '../css/map.css'

const Map = () => {
  return (
    <div className='mapContainer'>
        <h2>Visit Our Location</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.6140135309925!2d-85.72471952360301!3d38.90994114596325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886bb62a71a514c9%3A0xfb4a08e4d53f3391!2sWildSide%20Custom%20Taxidermy!5e0!3m2!1sen!2sus!4v1707100934741!5m2!1sen!2sus" 
            className='iFrameMap'
            width="600" 
            height="450" 
            style={{border: 'none' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
  )
}

export default Map