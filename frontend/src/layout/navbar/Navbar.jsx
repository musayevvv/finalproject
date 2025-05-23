import React from 'react';
import styles from './Navbar.module.css';
import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const countWishlist = wishlist.length;
    const count = basket.reduce((a, b) => a + (b.count || 0), 0);

    return (
        <section className={styles.navSection}>
            <header>
                <div className={styles.container}>
                    <div className={styles.headerDiv}>
                        <div className={styles.headerLeft}>
                            <img src="https://preview.colorlib.com/theme/estore/assets/img/icon/header_icon.png.webp" alt="" />
                            <p>USA</p>
                            <span>+777 2345 7886</span>
                        </div>
                        <div className={styles.headerRight}>
                            <a href="">My Account</a>
                            <a href="">Wish List</a>
                            <a href="">Shopping</a>
                            <a href="">Cart</a>
                            <a href="">Checkout</a>
                        </div>
                    </div>
                </div>
            </header>
            <nav>
                <div className={styles.container}>
                    <div className={styles.navarDiv}>
                        <a href='/' className={styles.logo}>
                            <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png.webp" alt="" />
                        </a>
                        <div className={styles.pages}>
                            <a href="/">Home</a>
                            <a href="">Catagori</a>
                            <a href="" className={styles.latest}>
                                <span>Latest</span>
                                <div className={styles.hot}>HOT</div>

                            </a>
                            <a href="">Blog</a>
                            <a href="">Pages</a>
                            <a href="dashboard">Dashboard</a>
                        </div>
                        <div className={styles.navRight}>
                            <div className={styles.inputBox}>
                                <input type="text" placeholder='Search products' />
                                <FaSearch />
                            </div>
                            <a href='wishlist' className={styles.iconBox}>
                                <FaRegHeart />
                                <div className={styles.count}>{countWishlist}</div>
                            </a>
                            <a href='basket' className={styles.iconBox}>
                                <FaShoppingCart />
                                <div className={styles.count}>{count}</div>
                            </a>
                            <button>Sign In</button>
                        </div>
                    </div>
                </div>
            </nav>
        </section >
    );
};

export default Navbar;
