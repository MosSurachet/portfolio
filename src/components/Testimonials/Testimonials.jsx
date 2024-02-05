import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
        <h3 className={styles.testi_title}>Testimonails</h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                <img src="https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h4>John Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                <img src="https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h4>Jahn Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                <img src="https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h4>Jo Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
