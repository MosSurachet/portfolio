import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.contianer}>
        <div className= {styles.hero_con}>
          <div className={styles.hero_info}>
              <p className = {styles.text_1}>Hi, it’s me</p>
              <h3 className = {styles.text_2}>Surachet Intamongkol</h3>
              <p className = {styles.text_3}>
                <span style={{marginRight : '10px'}}>I'm a</span> 
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Back-end Developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Web Developer',
                    1000,
                    
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
                </p>
              <p className = {styles.text_4}> "I am going to be an intern at 
              <span style={{fontWeight:'bold'}}>
                <TypeAnimation
                  sequence={[
                    ' bangkok web solution', 100,
                    '', 100,
                  ]}
                    speed={30}
                    repeat={Infinity}
                  />
              </span>during the summer."
              </p>
              <ul className = {styles.hero_social}>
                  <li><a href="https://github.com/MosSurachet" target='_blank'> <FaGithub /> </a></li>
                  <li><a href="https://www.instagram.com/m404.u/" target='_blank'> <FaInstagram /></a></li>
                  {/* <li><a href="#"><FaFacebookF /></a></li> */}
              </ul>
            </div>
            <div>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <div className = {styles.hero_img}></div>
              </Tilt> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
