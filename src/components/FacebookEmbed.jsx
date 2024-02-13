import React from 'react'

const FacebookEmbed = () => {
  return (
    <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwww.wildsidecustomtaxidermy&tabs=timeline&width=450&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
        width="450"
        height="600"
        style={{ overflow: 'hidden', padding: '4px', borderRadius: '2.5%', backgroundColor: 'black'}}
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    >  </iframe>
  )
}

export default FacebookEmbed