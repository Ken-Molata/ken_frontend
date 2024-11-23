import React from 'react';

function Home() {
  return (
    <div
      id="about"
      style={{
        padding: '50px',
        backgroundColor: '#e1e4e8',
        width: '100%',
        height: '100vh', 
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column', 
        }}
      >
        <img
          src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/468179587_2494234747634951_5443717159984611254_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEW6Jlhxc6XjlS64pYx-C_uqlIo3iM6MDCqUijeIzowMGfDMWBCbQc3o79zRWfLE2QRQXnEZfsChi0Nv-ZJdltV&_nc_ohc=RdHndvHcqr8Q7kNvgFBZPmJ&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=Atfe4NUa_NSfahBSY_8Rd9e&oh=00_AYCSXsfUKEVxLu7aHtMYyGGBWJ3Z3G8VdpTAV01q2RlDLQ&oe=6747BD1D"
          alt="Profile"
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover', 
            border: '4px solid white', 
            marginBottom: '10px', 
          }}
        />
        <h2 style={{ margin: '0', fontSize: '1.5rem', textAlign: 'center' }}>John Kent Molata</h2>
        <p style={{ marginTop: '10px', textAlign: 'center', maxWidth: '600px' }}>
          Hi! Welcome to my personal website, Feel free to scroll about me!
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <a href="https://www.facebook.com/kentbleak.molata" target="_blank" rel="noopener noreferrer">
          <img
            src="\src\assets\image\X.jpg"
            alt="Click here to verify"
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'cover', 
              border: '3px solid white', 
              cursor: 'pointer', 
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default Home;