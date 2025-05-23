import React, { useEffect, useState } from 'react'
import styles from './Product.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../../redux/reducer/productSlice'

const Product = () => {
    const dispatch = useDispatch()
    const { product, loading, error } = useSelector((state) => state.products)



    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('Default')
    const [basket, setBasket] = useState([])
    const [wishlist, setWishlist] = useState([])





    useEffect(() => {
        dispatch(getProductsThunk())
        const storedBasket = JSON.parse(localStorage.getItem('basket')) || []
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        setBasket(storedBasket)
        setWishlist(storedWishlist)
    }, [dispatch])

    const addToBasket = (item) => {
        const updatedBasket = [...basket]
        const existingBasket = updatedBasket.find((i) => i._id === item._id)

        if (existingBasket) {
            existingBasket.count += 1
        } else {
            updatedBasket.push({ ...item, count: 1 })
        }
        localStorage.setItem('basket', JSON.stringify(updatedBasket))
        setBasket(updatedBasket)
    }



    const addToWishlist = (item) => {
        const updatedWishlist = [...wishlist]
        const existingIndex = updatedWishlist.findIndex((i) => i._id === item._id)

        if (existingIndex > -1) {
            updatedWishlist.splice(existingIndex, 1)
        } else {
            updatedWishlist.push(item)
        }

        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
        setWishlist(updatedWishlist)
    }

    const filteredProduct = product
        ?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (sort === 'asc') return Number(a.price) - Number(b.price)
            if (sort === 'desc') return Number(b.price) - Number(a.price)
            return 0
        })

    const isInWishlist = (id) => wishlist.some((item) => item._id === id)

    if (loading) return <span>Yuklenir</span>
    if (error) return <span>Yukleme zamani xeta bas verdi</span>

    return (
        <section className={styles.productSection}>
            <div className={styles.container}>
                <div className={styles.productDiv}>
                    <div className={styles.productTitle}>
                        <h2>Latest Products</h2>
                        <form className={styles.formBox} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <div className={styles.sortBox}>
                                <button type="button" onClick={() => setSort('asc')}>Ucuzdan Bahalıya</button>
                                <button type="button" onClick={() => setSort('desc')}>Bahalıdan Ucuza</button>
                                <button type="button" onClick={() => setSort('Default')}>Default</button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.productBox}>
                        {filteredProduct?.slice(3, 9).map((item) => (
                            <div className={styles.product} key={item._id}>
                                <div className={styles.productImg}>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className={styles.productInfo}>
                                    <h4>{item.name}</h4>
                                    <div className={styles.productPrice}>
                                        <p>${item.price}</p>
                                        <span>$60.00</span>
                                    </div>

                                </div>
                                <div className={styles.productButton}>
                                    <button onClick={() => addToBasket(item)}>Basket</button>
                                    <button onClick={() => addToWishlist(item)}>
                                        {isInWishlist(item._id) ? 'RemoveFromWish' : 'AddToWishlist'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
