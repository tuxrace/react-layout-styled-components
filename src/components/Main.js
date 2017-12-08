import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import NavbarInstance from './NavbarComponent'
import CarouselArea from './Carousel'
import TitleArea from './TitleArea'
import LeadArea from './LeadArea'
import LongtextArea from './LongTextArea'
import CoverImageArea from './CoverImageArea'
import BreakoutArea from './BreakoutArea'
import MoreLayoutArea from './MoreLayoutArea'
import MoreImageArea from './MoreImageArea'
import ImageWithCaptionArea from './ImageWithCaptionArea'
import ProjectBoxArea from './ProjectBoxArea'
import FooterArea from './FooterArea'
import Example from './Modal'

import styled from 'styled-components'

import speakersImage from '../assets/city.jpg'
import cinemaImage from '../assets/cinema.jpg'

const Hr = styled.div`
  margin: 40px auto;
  margin-top:80px;
  border-bottom: #6a6a6a 1px solid;
`
const Blurb = styled.h2`
  text-align: center; 
  font-size: ${props => props.size}px;
  font-weight: bold;
  color:#fff;
  margin:0 auto;
  margin-bottom: 0;
  margin-top: 50px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.1); 
`

const VisitSiteButton = styled.button`
  border: #fff 3px solid;
  background: #000;
  float:none;
  margin:30px auto;  
  padding:18px;
  width: 200px;
`

const LongTextSmall = styled.p`
  text-slign: center; 
  color: #999; 
  font-size: 16px; 
  width: 50%; 
  margin: 0 auto; 
  margin-top: 10px;
  margin-bottom: 50px;
  font-weight: lighter;
`

const Main = () => <div>
  <NavbarInstance />
  <Grid>
    <Row className="show-grid">
      <Col className="centered dark-background"> <CarouselArea /> </Col>
    </Row>
    <Row className="show-grid">
      <Col className="centered"> <TitleArea /> </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12} md={12}> <LeadArea /></Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12} md={12}> <LongtextArea /> </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12} md={12} className="centered">
        <VisitSiteButton> Visit Site </VisitSiteButton>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col><CoverImageArea imageUrl={cinemaImage} alt="Product Image One"/></Col>
    </Row>
    <Row className="show-grid">
      <Col><Blurb size="20"> BLURB </Blurb></Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12} md={12} className="centered"><LongTextSmall>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer.
</LongTextSmall></Col>
    </Row>
    <Row className="show-grid">
      <Col lg={12}><CoverImageArea imageUrl={speakersImage} alt="Product Image two"/></Col>
    </Row>
    <Row className="show-grid">
      <Col md={6} lg={6}><CoverImageArea imageUrl={speakersImage} alt="Product Image three"/></Col>
      <Col md={6} lg={6}><CoverImageArea imageUrl={speakersImage} alt="Product Image four"/></Col>
    </Row>
    <Row className="show-grid">
      <Col>
        <BreakoutArea />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col className="centered">
        <MoreLayoutArea />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col className="centered">
        <MoreImageArea />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col><Blurb size="20"> BLURB </Blurb></Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12} md={12} className="centered"><LongTextSmall>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer.
</LongTextSmall></Col>
    </Row>
    <Row className="show-grid">
      <Col><ImageWithCaptionArea /></Col>
    </Row>
    <Row className="show-grid">
      <Col><Hr /></Col>
    </Row>
    <Row className="show-grid">
      <Col><Blurb size="26"> MORE PROJECTS </Blurb></Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12} md={12} className="centered"><LongTextSmall>
      Lorem ipsum dolor sit amet
</LongTextSmall></Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12} md={12} className="centered"><ProjectBoxArea /></Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12} md={12} className="centered"><FooterArea /></Col>
    </Row>
  </Grid>
</div>

export default Main
