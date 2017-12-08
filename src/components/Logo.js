import React from 'react'
import styled from 'styled-components'

const Holder = styled.div`
  background:#555;
  text-align:center;
  font-weight: bold;
  color:#fff;
  width:50px;
  padding: 8px;
  position: relative;
  margin-top: 10px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.1);
  font-size:20px;
`
const Logo = () => (
  <Holder>
    D
  </Holder>
)

export default Logo
