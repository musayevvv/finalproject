import React from 'react'
import styles from './Banner.module.css'

const Banner = () => {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.container}>
                <div className={styles.bannerDiv}>
                    <div className={styles.bannerLeft}>
                        <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png.webp" alt="" />
                    </div>
                    <div className={styles.bannerRight}>
                        <h4>60%Discount</h4>
                        <h1>Winter Collection</h1>
                        <p>Best Cloth Collection by 2020!</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner