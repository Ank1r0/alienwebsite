import React from 'react'

function Skills() {
  return (
    <div id="skills" style={{display: 'flex',         // Enables flexbox
        flexDirection: 'column', // Stacks items vertically
        alignItems: 'center',    // Centers items horizontally
        justifyContent: 'center',// Centers items vertically
        height: '100vh',
        width: '100%',
         
                // Full viewport height
        textAlign: 'right',}}>
        <h2 className='biographyText'>SKILLS</h2>
    </div>
  )
}

export default Skills