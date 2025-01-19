import React from 'react'
import {Link} from 'react-scroll';
 
function NavBar() {
  return (
    <div
  style={{
    position: 'fixed', // Keeps it fixed in place
    top: 0, // Aligns it to the top of the viewpo+rt
    left: 0, // Aligns it to the left edge
    width: '100%', // Spans the full width of the viewport
    backgroundColor: '#000000', // Dark background for contrast
    zIndex: 1000, // Ensures it's above other elements
    display: 'flex', // Enable flexbox
    justifyContent: 'space-between', // Space out content: left and right
    alignItems: 'center', // Vertically center the content
    height: '5%', // Height of the navbar
    paddingLeft: '30px', // Padding for the left side
    paddingRight: '30px', // Padding for the right side (optional)

  }}
>
  <nav
    style={{
      color: 'white', // White text
      display: 'flex', // Flexbox for alignment
      alignItems: 'center', // Ensure the text aligns vertically
      width: '100%', // Full width to enable space-between
      justifyContent: 'space-between', // Space out items
    }}
  >
    {/* Left-aligned SHARE_WEBSITE */}
    <Link to="main" className="logo">
      <p className="mainText">SHARE_WEBSITE</p>
    </Link>

    {/* Right-aligned Links */}
    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '35px', gap:'42%'}}>
      <Link to="main" className="logo">
        <p className="mainText">HOME</p>
      </Link>
      <Link to="main" className="logo">
        <p className="mainText">SKILLS</p>
      </Link>
      <Link to="main" className="logo">
        <p className="mainText">PROJECTS</p>
      </Link>
    </div>
  </nav>
</div>
  )
}

export default NavBar