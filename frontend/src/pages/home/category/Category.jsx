import React from 'react'
import styles from './Category.module.css'
const Category = () => {
    return (
        <section className={styles.categorySection}>
            <div className={styles.container}>
                <div className={styles.categoryDiv}>
                    <div className={styles.categoryTitle}>
                        <h2>Shop by Category</h2>
                    </div>
                    <div className={styles.categoryBox}>
                        <div className={styles.firstItem}>
                            <div className={styles.intoItem}>
                                <h2>Women's</h2>
                                <p>Beast New Deals</p>
                                <span>New Collection</span>
                            </div>
                        </div>
                        <div className={styles.secondItem}>
                            <div className={styles.intoItem}>
                                <h2>Women's</h2>
                                <p>Beast New Deals</p>
                                <span>New Collection</span>
                            </div>
                        </div>
                        <div className={styles.thirdItem}>
                            <div className={styles.intoItem}>
                                <h2>Women's</h2>
                                <p>Beast New Deals</p>
                                <span>New Collection</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category