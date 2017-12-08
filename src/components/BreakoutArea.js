import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-bootstrap'

const BreakoutDiv = styled.div`
  margin: 30px auto;
  margin-top: 90px;
  background-color:#fff;
  font-size:20px;
  color:#000;
  height:300px;
  padding-left:100px;
  padding-top:80px;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  font-weight: bolder;
  letter-spacing: 0.2em;
`

const LongTextSmall = styled.p`
color: #999; 
font-size: 12px; 
`

const CoverImage = styled.div`
  background-image: url(${props => props.imageUrl});
  margin-top: 20px;
  width:100%;
  height:400px;
  background-size: cover;
  resize: both;
`

const BreakoutArea = () => (
  <BreakoutDiv>
    <Grid>
      <Row className="show-grid">
        <Col lg={6}> BREAKOUT AREA<hr /> <LongTextSmall>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</LongTextSmall></Col>
        <Col lg={6}> </Col>
      </Row>
    </Grid>
  </BreakoutDiv>
)

export default BreakoutArea
