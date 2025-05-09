import { useDispatch, useSelector } from 'react-redux'
import React, {useEffect} from 'react'
// import Prodact from '../components/Prodact/Prodact'
import Banner from '../components/Banner/Banner'
import ProductList from '../components/ProductList/ProductList'
import { getProductFetch } from '../redux/product/productSlise'

function Home() {

  const {product, loading, error, category} = useSelector((state) => state.product)
const dispatch = useDispatch()
useEffect(() => {
  dispatch(getProductFetch(category))
}, [dispatch, category])


  return (
    <div>
      <Banner/>
      {/* <Prodact/> */}
      <ProductList data={product}/>
    </div>
  )
}

export default Home
