import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Education() {
  return (
    <div
      id="education"
      style={{
        padding: '50px',
        backgroundColor: '#013220',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '30px',
          color: '#5754ff',
        }}
      >
        My Education
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>Elementary</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Bagacay Elementary School: March of 2015</p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/468206434_2494233340968425_9036636329887069320_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEmd5HEGgKvds9dRiH0F6YJp200bqnF2X6nbTRuqcXZfuTzEVN78Q9PXkgoaTx__es5d5WLh1Xrd_KhVcgOpgwo&_nc_ohc=yWoKvyujzasQ7kNvgGdKlH5&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=AVEykqfpA4Bb9TTRuFanIoj&oh=00_AYA0RHfhUfjUbcBk9ZXkrWsjWHdsd57aEhjEaulF2fhuWw&oe=67479F4B"
                alt="Elementary 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Bagacay Elementary Logo</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/468321930_2494237930967966_8080631861904914472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFp_NZ3Rv4znCI1N4yQG5qIjERJF_AwhZKMREkX8DCFkhjoFptFwpG0skiNSkjXDLzSYJmF5xWM06mSKjRKKHM7&_nc_ohc=hUHjSqbIJlUQ7kNvgFVZ4l8&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=AWPZ-uJZTsgY0PyikOjM4pH&oh=00_AYA4VioSF2eW5PDVB1pqhlQGBFOTOfYnd_neNLV3sqxTYQ&oe=67479F8A"
                alt="Elementary 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Bagacay Elementary Main Building</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.6435-9/93803317_1234163406975431_7342941191802978304_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEUR3EaTyh7mS2x4Rcl6ac-DWINO9IbbYQNYg070htthLd8ZqiKxP82gUHYkRc-o1bdwRA9P6FHZvPg4lPTjxi4&_nc_ohc=IgrY-hXNcMMQ7kNvgEruPU4&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=A-I3SSrVE_uSKsSkjq0VGin&oh=00_AYCiCB-lzyPhrDCgP9E9We_6Kb-g1TeY8qL-4jZG4_PAvA&oe=67696BDF"
                alt="Elementary 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Elementary Picture</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>Highschool</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Bagacay National Highschool Graduation: May of 2021</p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/468220169_2494233450968414_2617709922879221950_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHQ7cy4gpozQ65Wc2pmBc83kQxjHcFPMRSRDGMdwU8xFOJb4ZMMib5vqhK2JVJnp8nS9qZcOIE-HcT56s_SqYmB&_nc_ohc=4LHBwhsmr-YQ7kNvgFfa_C2&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=ABMk15Sib8AzHd0GvVBvu1a&oh=00_AYAuqkXj9MQPeM4YqbtldwOJduR5zgfEoW3zuBq6xecG_Q&oe=6747CE02"
                alt="Highschool 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>BNHS Logo</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/468093887_2494233484301744_1257244724015878298_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHhTZUb6viL9x8zr1TipSqWG-l1XwX6nrUb6XVfBfqetTHh0uV8Ax59DG3bf2BuL5RROvkxAoYX2mbEWViRDmgF&_nc_ohc=NNEjOLkahyoQ7kNvgHG9tNR&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=A1z88lVaC9w99C_ac8Tnv_h&oh=00_AYA1HR-8q3Q_-zhq3Z3BDWp2nS3Cxkh8RnyneTBwtAh_WA&oe=6747BCCB"
                alt="Highschool 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>BNHS Main Gate</p>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/463026429_2459141551144271_7716014099842626733_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHttC6dArFiVcb0eAAuRr2kAkKdt9CPPqACQp230I8-oM7e8-v8eX4cgIk-M7tJU7y3Ky6Vgcugo_Qg2vqG-ISG&_nc_ohc=Wbh8so51VTQQ7kNvgEbW3zF&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=A0_jHRFcq9xhdsrePayC-Ou&oh=00_AYDJobCYyM2A0APQeR4sv6rcL9Za3v2bBuY0n3dZJXlMAA&oe=6747B6CD"
                alt="High School Pics"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>BNHS Student Selfies</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>College</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Naga College Foundation Inc. Graduation: (Unknown)</p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/467458716_358634437309042_3018473439349220060_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG--0WMRNL0q3OiyjIQgpzf8JetMyOqqrrwl60zI6qqurDrWPXI3a-UWGTl7ygNpW2ZQsAUwmBRPGQntQmH2Gb6&_nc_ohc=gWkpOauNPFMQ7kNvgEQBk_-&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QFsNGXizMVoljTBPmUSr1vq8_jVcvnC3YGrc3yqk96KcA&oe=6767B3A0"
                alt="College 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>NCF Logo</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/468041809_2494247880966971_7276970474822386695_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGdAbAqadU1CMnUvDwvUvp5Nk4XAiRL5lM2ThcCJEvmU5Opom41nffp9lOLvprFAsBD7oflZ4yAk94IC3f5IMI8&_nc_ohc=wnbIFmYU3DQQ7kNvgHkloqK&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=AX55z5oureAFi6kF9SOmHXq&oh=00_AYAoHNnxUZU3j8XofwWkfbCBwoW7i7TZaFp3VbNeCayiqQ&oe=6747CDBD"
                alt="College 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>NCF Pic as a Freshman</p>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/468157868_2494249030966856_127511651536700651_n.jpg?stp=dst-jpg_s640x640&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFBlVcwlnaiKEAJTza_CjwQNHvkPSSYM2o0e-Q9JJgzalNQpro1jlBRAFQkqL53B6hqRf5B7xXwfbw32hPknU46&_nc_ohc=3Z1hktMx_HYQ7kNvgFJcv8o&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=Az3Hzp9RW8bsfBJyJ3J50Id&oh=00_AYCDa-fiS1ZEl-W_hPg5OrTvXhDVijCiHnqf13sTE8Fbow&oe=6747C438"
                alt="College 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>NCF Swimming Class</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Education;