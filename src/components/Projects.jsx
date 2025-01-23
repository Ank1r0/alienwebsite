import React from 'react'
import BiographyBackground from '../img/biographyBackground.png'
import './Biography.css'

function Projects() {
  return (
    <div id='projects' 
    style={{display: 'flex',         // Enables flexbox
      flexDirection: 'column', // Stacks items vertically
      alignItems: 'center',    // Centers items horizontally
      justifyContent: 'center',// Centers items vertically
      height: '100vh',
      width: '100%',
       
              // Full viewport height
      textAlign: 'right',}}>
        <div style={{
          maxWidth: '960px', // Limits the width of the text field
          padding: '20px', // Adds some padding around the text
          overflow: 'hidden', // Ensures content doesn't overflow the container
          textAlign: 'justify', // Justifies the text for better readability
          wordWrap: 'break-word',
          marginRight: '330px' // Ensures long words break to fit within the container
          
        }}>
          <h2 className='biographyText' style={{fontSize: '48px', }}>PROJECTS</h2>
          <h3 className='biographyText' style={{fontSize: '48px', }}>01.Project</h3>
          <p className='biographyText' style={{fontSize: '32px', lineHeight: "1.9", marginTop: '0px'}}>
            PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1
          </p>
          
          <h3 className='biographyText' style={{fontSize: '48px', }}>02.Project</h3>
          <p className='biographyText' style={{fontSize: '32px', lineHeight: "1.9", marginTop: '0px'}}>
            PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1
          </p>
          
          <h3 className='biographyText' style={{fontSize: '48px', }}>03.Project</h3>
          <p className='biographyText' style={{fontSize: '32px', lineHeight: "1.9", marginTop: '0px'}}>
            PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1PROJECT1
          </p>
          
    </div>
    </div>
  )
}

export default Projects