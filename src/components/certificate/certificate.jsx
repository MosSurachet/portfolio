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
                <a href="src\assets\cer_webapp_futureskill_page-0001.jpg" >
                <img src="src\assets\cer_webapp_futureskill_page-0001.jpg" />
                </a>
            </Tilt>
            <p>สร้างเว็ปด้วย python</p>
            </div>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <a href="src\assets\cer-react (1)_page-0001.jpg">
                <img src="src\assets\cer-react (1)_page-0001.jpg" alt="" />
                </a>
            </Tilt>            
            <p>ทำ Web portfolio ด้วย React</p>
            </div>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <a href="src\assets\Certificate-of-Participation-FWBRanger-9_page-0001.jpg">
                <img src="src\assets\Certificate-of-Participation-FWBRanger-9_page-0001.jpg" alt="" /></a>
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
