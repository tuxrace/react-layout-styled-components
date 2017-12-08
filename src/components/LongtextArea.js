import React from 'react'
import styled from 'styled-components'

const LongTextBig = styled.p`
  text-slign: center; 
  color: #999; 
  font-size: 20px; 
  width: 85%; 
  margin: 40px auto; 
  font-weight: lighter;
`

const LongtextArea = () => (
  <LongTextBig>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
  </LongTextBig>
)

export default LongtextArea
