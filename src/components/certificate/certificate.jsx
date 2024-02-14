import React from 'react'
import styles from './certificate.module.css'
import Tilt from 'react-parallax-tilt';

function certificate() {
  return (
    <div>
        <div className={styles.port_con}>
        <h3 className={styles.port_title}>Certificate</h3>
        <div className={styles.port_list}>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <a href="https://drive.google.com/file/d/12KW9cwI3uryVryo1feA1D9K8j5_GicU4/view?usp=sharing" target='_blank'>
                <img src='/src/assets/cer-react.jpg' />
                </a>
            </Tilt>
            <p>ทำ Web portfolio ด้วย React</p>
            </div>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <a href="https://drive.google.com/file/d/15Qo9-OkaIqn-o5yMfzVRFWmOvgVOGD27/view?usp=sharing"target='_blank' >
                <img src='/src/assets/cer_webapp.jpg'/>
                </a>
            </Tilt>            
            <p>สร้างเว็ปด้วย python</p>
            </div>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <a href="https://drive.google.com/file/d/1LllzNfNZlterOi-zeiWBtvAP8qGte8iX/view?usp=sharing" target='_blank'>
                <img src= '/src/assets/CertificateFWB.jpg' /></a>
            </Tilt>            
            <p>Financial Well-being HACKATHON 
                <br />for Thais Powered by ttb</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default certificate
