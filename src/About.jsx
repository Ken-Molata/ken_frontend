import React from 'react';

function About() {
  return (
    <div
      id="about"
      style={{
        padding: '50px',
        backgroundColor: '#9d9fa1',
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
          src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/468093156_2494186624306430_5429309057828648603_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHN3DtB1AG7s2aU9irR1DJk96Ctdo1k31b3oK12jWTfVuvNcIGFAbldQ8vYNIUMexQ6xQ5G9ZxoRiT_llSO9TTa&_nc_ohc=0vY6Ex8l4VUQ7kNvgE39x6v&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=Aosnm7BJDW3wGa0rcHzxsOx&oh=00_AYBRf3goRdng-BwtR5Fl1IXNdSKYSQFZblk7waFMzcXBiw&oe=6747A40D"
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
          Hi! Welcome to my personal website, Get to know me well by exploring all the info here!
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
        <a href="
https://www.facebook.com/kentbleak.molata" target="_blank" rel="noopener noreferrer">
          <img
            src="\src\assets\image\Y.jpeg"
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

export default About;