import React from 'react'
import styled from 'styled-components'

const HandWriting = styled.span`
font: 400 18px/0.8 'Great Vibes', Helvetica, sans-serif;
margin: 10px;
`
const DescriptionBox = styled.p`
text-align: center; 
color: #999; 
font-size: 16px; 
font-weight: bold;
`

const LeadArea = () => (
  <DescriptionBox>
    SERVICE OFFERING <HandWriting>for</HandWriting> CLIENT NAME
</DescriptionBox>
)

export default LeadArea