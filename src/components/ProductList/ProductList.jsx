import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getProductFetch } from '../../redux/product/productSlise';
import "./List.scss"
import Prodact from '../Prodact/Prodact';

function ProductList() {
    const {product, loading, error} = useSelector((state) => state.product)
const dispatch = useDispatch()
useEffect(() => {
    dispatch(getProductFetch())
},[dispatch])



    return (
      <div>
     {
                product.map((i) => (
                  <div key={i.id} className='proo'>
                    <div className='pro'>
                     <img src={i.thumbnail} alt="" />
                     </div>
                     <div className='pra'>
                     <h4>{i.title}</h4>
                     <p>${i.price}</p>
</div>
                     </div>
                ))
            }
            <Prodact/>
    </div>
  )
}

export default ProductList
