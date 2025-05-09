import React, {useEffect} from 'react'
import "./Banner.scss"
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../assets/image/image1.png"
import { useDispatch, useSelector } from 'react-redux';
import { getCategoeyThunk } from '../../redux/category/categorySlise';
import { setCategory } from '../../redux/product/productSlise';

function Banner() {
const {category, loading, error} = useSelector((state) => state.category)
const dispatch = useDispatch()
useEffect(() => {
dispatch(getCategoeyThunk())
},[dispatch])

function sendItem(item){
  dispatch(setCategory(item))
}

  return (
    <div className='banner container'>
      <div className="sidebar">
        <ul>
            {
                category.map((i, index) => (
                     <li onClick={() => sendItem(i)} key={index}>{i}</li>
           
                ))
            }
           
            
        </ul>
      </div>
      <div className="carousel">
      <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={image1} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={image1} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={image1} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={image1} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  )
}

export default Banner
