import React from 'react'
import ProjectBox from './base/ProjectBox'
import { Grid, Row, Col } from 'react-bootstrap'

import speakersImage from '../assets/speakers.jpg'
import cityImage from '../assets/city.jpg'
import schoolImage from '../assets/school.jpg'
import cinemaImage from '../assets/cinema.jpg'

const ProjectBoxArea = () => (
  <Grid>
    <Row>
      <Col md={3} lg={3}><ProjectBox imageUrl={schoolImage}/></Col>
      <Col md={3} lg={3}> <ProjectBox imageUrl={cityImage} /> </Col>
      <Col md={3} lg={3}><ProjectBox imageUrl={speakersImage}/></Col>
      <Col md={3} lg={3}> <ProjectBox imageUrl={cinemaImage} /> </Col>
    </Row>    
  </Grid>
)

export default ProjectBoxArea
