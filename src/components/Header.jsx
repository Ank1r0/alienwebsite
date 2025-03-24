import React from 'react';
import NavBar from './NavBar';
import {Link} from 'react-scroll'
import SmearOfPaintContacts from'../img/SmearOfPaintContacts.png';
import "../components/NavBar.css"


function Header() {
  return (
    <div id='main' 
      style={{width: '100%',display: 'flex',         // Enables flexbox
        flexDirection: 'column', // Stacks items vertically
        alignItems: 'center',    // Centers items horizontally
        justifyContent: 'center',// Centers items vertically
        height: '100vh',         // Full viewport height
        textAlign: 'right',}}
    >
        <NavBar/>
        <div className='name' style={{
          marginTop: '25%', 
          marginLeft: '30%', 
          display: 'flex', 
          flexDirection: 'column',  // Stack vertically
          gap: '0px'  // Controls the space between elements
        }}>
          <h1 className="mainText" style={{ fontSize: '160px' }}>ALIEN_SEEK3R</h1>
          <Link to="contact"className="NavLink" style={{ marginTop: '-50px', position: 'relative' ,zIndex: 1, height: '100px', width: '140px', left: '450px'}}>
            <img 
              src={SmearOfPaintContacts} 
              alt="SmearOfPaint" 
              style={{
                position: 'absolute', // Positions the image relative to its parent (Link)
                top: '50%', // Adjust the top position as needed
                transform: 'translate(-50%, -50%)', // Centers the image at its location
                zIndex: -2, // Places the image behind the text
                width: '300px', // Set the width to 200px
                height: 'auto',
                left: '70px'
              }}
            />
            <p className="mainText" style={{ position: 'relative'}}>CONTACTS</p>
          </Link>
        </div>
        
    </div>
  )
}

export default Header