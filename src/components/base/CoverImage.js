import styled from 'styled-components'

const CoverImage = styled.div`
  background-image: url(${props => props.imageUrl});
  margin-top: 20px;
  width:100%;
  height:400px;
  background-size: cover;
  resize: both;
  title=${props => props.alt}
`

export default CoverImage
