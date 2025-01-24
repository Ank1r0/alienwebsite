import React from 'react';
import "../components/NavBar.css"

function TheEnd() {

    const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }); // Example: January 24, 2025



  return (
    <div
      className="graystick"
      style={{
        width: '100%', // Full screen width
        height: '120px', // Adjust height to fit content
        backgroundColor: 'black', // Gray background color
        display: 'flex', // Enables Flexbox
        flexDirection: 'column', // Stacks items vertically
        justifyContent: 'center', // Centers content vertically within the container
        alignItems: 'center', // Centers content horizontally
        position: 'relative', // Allows absolute positioning of inner elements
      }}
    >
      
      <p className="mainText" style={{  color: 'white', fontSize: '23px', margin: '5px 0' }}>Contact me:</p>
      <p className="mainText" style={{ color: 'white', fontSize: '23px', margin: '5px 0' }}>Telegram: @ALIEN_SEEK3R</p>
      <p className="mainText" style={{ color: 'white', fontSize: '23px', margin: '5px 0' }}>email: oaoaoao@gmail.com</p>

      
      <p 
        style={{
          color: 'white',
          fontSize: '12px', // Smaller font size
          position: 'absolute', // Allows positioning relative to the container
          bottom: '5px', // Positioned near the bottom
          right: '10px', // Positioned near the right edge
        }}
      >
        {formattedDate}
      </p>
    </div>
  );
}

export default TheEnd;