import React from 'react'
import styles from './Getour.module.css'
const Getour = () => {
    return (
        <section className={styles.getoutSection}>
            <img src="https://preview.colorlib.com/theme/estore/assets/img/collection/latest-man.png.webp" alt="" />
            <div className={styles.container}>
                <div className={styles.getoutDiv}>
                    <div className={styles.getourLeft}>
                        <h2>Get Our <br /> Latest Offers News</h2>
                        <p>Subscribe news latter</p>
                    </div>
                    <div className={styles.getourRight}>
                        <input type="text" placeholder='Your email here' />
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Getour