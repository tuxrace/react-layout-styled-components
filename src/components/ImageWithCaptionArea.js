import React from 'react'
import styled from 'styled-components'
import speakersImage from '../assets/speakers.jpg'
import CoverImage from './base/CoverImage'
import CaptionBox from './base/CaptionBox'
import { Grid, Row, Col } from 'react-bootstrap'

const CoverImageArea = () => (
  <Grid>
    <Row>
      <Col md={2} lg={2}><CaptionBox /></Col><Col md={10} lg={10}> <CoverImage imageUrl={speakersImage}/> </Col>
    </Row>
    <Row>
      <Col md={2} lg={2}><CaptionBox /></Col><Col md={5} lg={5}> <CoverImage imageUrl={speakersImage}/> </Col><Col md={5} lg={5}> <CoverImage imageUrl={speakersImage}/> </Col>
    </Row>
  </Grid>
)

export default CoverImageArea
