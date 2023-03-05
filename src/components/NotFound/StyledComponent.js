import styled from 'styled-components'

export const Heading = styled.h1`
  color: ${props => (props.rule ? '#0f0f0f' : '#f9f9f9')};
  font-family: 'roboto';
  text-decoration: none;
  font-weight: 530;
  margin: 10px;
`
export const Paragraph = styled.p`
  color: ${props => (props.rule ? '#0f0f0f' : '#f9f9f9')};
  font-family: 'roboto';
  text-decoration: none;
  margin: 10px;
`
export const BgContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.rule ? '#f9f9f9' : '#181818  ')};
  background-size: cover;
`
