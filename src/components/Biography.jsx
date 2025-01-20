import React from 'react'
import BiographyBackground from '../img/biographyBackground.png'
import './Biography.css'

function Biography() {
  return (
    <div id='biography' 
    style={{display: 'flex',         // Enables flexbox
      flexDirection: 'column', // Stacks items vertically
      alignItems: 'center',    // Centers items horizontally
      justifyContent: 'center',// Centers items vertically
      height: '100vh',
      width: '100%',
       
              // Full viewport height
      textAlign: 'right',}}>
        <div style={{
          maxWidth: '1000px', // Limits the width of the text field
          padding: '20px', // Adds some padding around the text
          overflow: 'hidden', // Ensures content doesn't overflow the container
          textAlign: 'justify', // Justifies the text for better readability
          wordWrap: 'break-word', // Ensures long words break to fit within the container
        }}>
          <h2 className='biographyText' style={{fontSize: '48px', }}>Greetings, Earthlings!</h2>
          <p className='biographyText' style={{fontSize: '32px', lineHeight: "1.9", marginTop: '0px'}}>
            I’m AlienSeeker, your friendly intergalactic explorer of all things
            creative. Armed with a Bachelor’s degree in New Media Arts (specializing
            in 3D graphic design) and currently mastering Communication Media and
            Performative Arts, I’m on a mission to bring cosmic-level innovation to
            every project I touch.
          </p>
          <p className='biographyText' style={{fontSize: '32px', lineHeight: "1.9" , marginTop: '120px'}}>
            For me, learning is like exploring an uncharted galaxy—endlessly exciting
            and full of possibilities. As a freelancer, I’ve had the privilege of
            crafting all kinds of stellar creations. From launching concepts into
            orbit to delivering polished masterpieces, I’m fueled by the thrill of
            transforming wild ideas into reality. I’m always up for experimenting
            with new tools, techniques, and cosmic mediums to boldly go where no
            designer has gone before.
          </p>
    </div>
    </div>
  )
}

export default Biography