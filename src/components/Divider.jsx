import React from 'react'
import './Divider.css'
function Divider() {
  return (
    <div className='graystick'
    style={{
            width: '100%', // Full screen width
            height: '40px', // Fixed height
            backgroundColor: 'gray', // Gray background color
            display: 'flex', // Enables Flexbox
            justifyContent: 'center', // Centers content horizontallys
            alignItems: 'center', // Centers content vertically
        }}
    >
        
        <p style={{ color: 'white', fontSize: '20px' }}>Centered Content</p>
        <p style={{ color: 'white', fontSize: '20px' }}>Centered Content</p>
        <p style={{ color: 'white', fontSize: '20px' }}>Centered Content</p>
       
        
    </div>
  )
}

export default Divider