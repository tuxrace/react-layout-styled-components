import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  margin-top: 20px;
  width:100%;
  height:400px;
  background-size: cover;
  resize: both;
`
const Description = styled.p`
color: #6a6a6a
`

const CaptionBox = () => (
  <Box>
    <hr />
    <h4>IMAGE CAPTION</h4>
    <Description>This is a test paragraph</Description>
  </Box>
)

export default CaptionBox
