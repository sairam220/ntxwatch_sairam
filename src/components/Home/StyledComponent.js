import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.rule ? '#f9f9f9' : '#181818 ')};
  background-size: cover;
`
export const Heading = styled.h1`
  color: '#0000';
`
