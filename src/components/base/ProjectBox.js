import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  background-image: url(${props => props.imageUrl});
  margin-top: 20px;
  width:100%;
  height:200px;
  background-size: cover;
  resize: both;     
`
const Description = styled.p`
  color: #6a6a6a
`
const ProjectBox = ({ imageUrl }) => (
  <div>
    <Box imageUrl={imageUrl} />
    <h4>PROJECT NAME</h4>
    <Description>Lorem ipsum dolor sit amet</Description>
  </div>
)

export default ProjectBox
