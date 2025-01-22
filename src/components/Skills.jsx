import React from 'react'

function Skills() {
  return (
    <div
  id="skills"
  className='biographyText'
  style={{
    display: 'grid', // Enables Grid layout
    gridTemplateColumns: '1fr 1fr', // Two equal-width columns
    gridAutoRows: 'auto', // Automatically adjusts row height
    gap: '20px', // Adds spacing between rows and columns
    height: '100vh',
    width: '100%',
    padding: '20px',
  }}
>
  {/* "SKILLS" in the top-left corner */}
  <h2
    className="biographyText"
    style={{
      gridColumn: '1', // First column
      gridRow: '1', // First row
      textAlign: 'left', // Align text to the left
      margin: 0,
    }}
  >
    SKILLS
  </h2>

  {/* Remaining sections */}
  <div
    className="biographyItem"
    style={{
      display: 'flex', // Aligns content horizontally
      alignItems: 'center', // Vertically centers the text
      gridColumn: '1', // Left column
      gridRow: '2', // Second row
    }}
  >
    <h3 style={{ margin: '0 10px 0 0' }}>3D Design:</h3>
    <p style={{ margin: 0 }}>
      Modeling, Texturing, Animation: I’m fluent in Autodesk Maya, Substance Painter, and Blender, crafting otherworldly 3D creations with precision and flair.
    </p>
  </div>

  <div
    className="biographyItem"
    style={{
      display: 'flex',
      alignItems: 'center',
      gridColumn: '2', // Right column
      gridRow: '2',
    }}
  >
    <h3 style={{ margin: '0 10px 0 0' }}>2D Art:</h3>
    <p style={{ margin: 0 }}>
      Sketching, Painting, and Digital Artwork: From concept art to polished illustrations, I excel at creating captivating visuals.
    </p>
  </div>

  <div
    className="biographyItem"
    style={{
      display: 'flex',
      alignItems: 'center',
      gridColumn: '1',
      gridRow: '3',
    }}
  >
    <h3 style={{ margin: '0 10px 0 0' }}>Game Engines:</h3>
    <p style={{ margin: 0 }}>
      Unreal Engine and Unity: I breathe life into projects with immersive real-time experiences.
    </p>
  </div>

  <div
    className="biographyItem"
    style={{
      display: 'flex',
      alignItems: 'center',
      gridColumn: '2',
      gridRow: '3',
    }}
  >
    <h3 style={{ margin: '0 10px 0 0' }}>Web Design:</h3>
    <p style={{ margin: 0 }}>
      Responsive and Modern Design: Crafting websites with intuitive user experiences and visual appeal.
    </p>
  </div>

  <div
    className="biographyItem"
    style={{
      display: 'flex',
      alignItems: 'center',
      gridColumn: '1',
      gridRow: '4',
    }}
  >
    <h3 style={{ margin: '0 10px 0 0' }}>Post-Production:</h3>
    <p style={{ margin: 0 }}>
      Video Editing and Motion Graphics: Combining technical skills with artistic flair to deliver stunning results.
    </p>
  </div>
</div>
  )
}

export default Skills