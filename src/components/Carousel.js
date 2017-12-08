import React from 'react'
import { Carousel } from 'react-bootstrap'
import carouselImage from '../assets/carousel.png'
import carouselImage2 from '../assets/carousel2.png'
import carouselImage3 from '../assets/carousel3.png'
import styled from 'styled-components'

const ImgHolder = styled.img`
  float:none;
  margin: 0 auto;
  height:500px;
  width:900px;
`
const CarouselInstance = () => (
  <Carousel>
    <Carousel.Item>
      <ImgHolder alt="900x500" src={carouselImage} />
    </Carousel.Item>
    <Carousel.Item>
      <ImgHolder alt="900x500" src={carouselImage2} />
    </Carousel.Item>
    <Carousel.Item>
      <ImgHolder alt="900x500" src={carouselImage3} />
    </Carousel.Item>
  </Carousel>
)

export default CarouselInstance
