import React from 'react'
import { useNavigate } from 'react-router'
import styles from './NotFound.module.css'
const NotFound = () => {
    const navigation = useNavigate()

    return (
        <div className={styles.container}>
            <div>NotFound</div>
            <button onClick={() => navigation(-1)}>back</button>
        </div>
    )
}

export default NotFound