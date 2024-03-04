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
                <Tilt scale={1.7} transitionSpeed={200} tiltReverse={true}>
                <div className = {styles.cer1_img}>
                    
                </div><p>ทำ Web portfolio ด้วย React</p>
                </Tilt>

                <Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
                <div className = {styles.cer2_img}></div>
                <p>สร้างเว็ปด้วย python</p>
                </Tilt>            
            
                <Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
                <div className = {styles.cer3_img}></div>    
                <p>Financial Well-being HACKATHON 
                <br />for Thais Powered by ttb</p>
                </Tilt>            
            </div>
            </div>
        </div>
    </div>
  )
}

export default certificate
