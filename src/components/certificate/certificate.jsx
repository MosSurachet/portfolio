import React from 'react'
import styles from '/cerdificate.module.css'
import Tilt from 'react-parallax-tilt';

function certificate() {
  return (
    <div>
        <div className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolio</h3>
        <div className={styles.port_list}>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="" />
            </Tilt>
            <p>Project Portfolio</p>
            </div>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="" alt="" />
            </Tilt>            
            <p>Title</p>
            </div>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="" alt="" />
            </Tilt>            
            <p>Title</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default certificate
