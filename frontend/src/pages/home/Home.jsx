import React from 'react'
import Product from './product/Product'
import Banner from './banner/Banner'
import Category from './category/Category'
import Getour from './getout/Getour'
import Servis from './servis/Servis'

const Home = () => {
    return (
        <>
            <Banner />
            <Category />
            <Product />
            <Getour />
            <Servis />
        </>
    )
}

export default Home
