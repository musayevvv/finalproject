import React from 'react'
import styles from './Servis.module.css'
import { GrCube } from "react-icons/gr";
import { PiLockKeyOpen } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";
const Servis = () => {
    return (
        <section className={styles.servisSection}>
            <div className={styles.container}>
                <div className={styles.servisDiv}>
                    <div className={styles.card}>
                        <GrCube />
                        <h6>Secure Payment System</h6>
                        <p>aorem ixpsacdolor sit <br />
                            ameasecur adipisicing elitsf <br /> edasd.</p>
                    </div>
                    <div className={styles.card}>
                        <PiLockKeyOpen />
                        <h6>Secure Payment System</h6>
                        <p>aorem ixpsacdolor sit <br />
                            ameasecur adipisicing elitsf <br /> edasd.</p>
                    </div>
                    <div className={styles.card}>
                        <TfiReload />
                        <h6>Secure Payment System</h6>
                        <p>aorem ixpsacdolor sit <br />
                            ameasecur adipisicing elitsf <br /> edasd.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servis