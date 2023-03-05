import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.rule ? '#f9f9f9' : '#0f0f0f')};
  background-size: cover;
`
export const Heading = styled.h1`
  color: ${props => (props.rule ? '#0f0f0f' : '#f9f9f9')};
  font-family: 'roboto';
  text-decoration: none;
  font-weight: 510;
  margin-left: 4px;
  margin-bottom: 10px;
`

export const BgContainer1 = styled.div`
  background-color: ${props => (props.rule ? '#f1f1f1' : '#212121 ')};
  background-size: cover;
  display: flex;
  flex-direction: row;
  padding-left: 4%;
`

export const Container = styled.div`
  background-color: ${props => (props.rule ? '#f1f1f1' : '#212121 ')};
`
