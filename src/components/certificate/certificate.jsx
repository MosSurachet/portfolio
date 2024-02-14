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
                <a href="src\assets\cer-react.jpg" target='_blank'>
                <img src="src\assets\cer-react.jpg" />
                </a>
            </Tilt>
            <p>ทำ Web portfolio ด้วย React</p>
            </div>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <a href="src\assets\cer_webapp.jpg" target='_blank'>
                <img src="src\assets\cer_webapp.jpg" alt="" />
                </a>
            </Tilt>            
            <p>สร้างเว็ปด้วย python</p>
            </div>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <a href="src/assets/CertificateFWB.jpg" target='_blank'>
                <img src="src/assets/CertificateFWB.jpg" alt="" /></a>
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
