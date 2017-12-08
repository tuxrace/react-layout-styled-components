import React from 'react'
import styled from 'styled-components'

const FixedBox = styled.div`
  width: 200px;
  float:none;
  margin:100px auto;
  color:#6a6a6a;
`
const DivLine = styled.div`
  width:100px;
  border-bottom: #6a6a6a 1px solid;
  float:none;
  margin:50px auto;
`
const FooterArea = () => (
  <FixedBox>
    <DivLine />
    (c) DELOITTE DIGITAL 2013
  </FixedBox>
)

export default FooterArea
