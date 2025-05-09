import React from 'react'
import { useSelector } from 'react-redux';
import "./List.scss"
import Prodact from '../Prodact/Prodact';
import Loading from '../Loading/Loading';

function ProductList({data}) {
 
const {loading} = useSelector((state) => state.product)

if(loading){
  return <Loading/>
}

    return (
      <div className='pr'>
     {
              data.map((i) =>(
                <Prodact key={i.id} pro={i}/>
              ))
            }
           
    </div>
  )
}

export default ProductList
