import styled from 'styled-components'

export const BgVideoContainerContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.rule ? '#f9f9f9' : '#0f0f0f ')};
  background-size: cover;
`
export const Heading1 = styled.h1`
  color: '#0000';
`
export const Title1 = styled.p`
  font-family: 'roboto';
  font-weight: 490;
  margin-left: 40%;
  flex-wrap: wrap;
  width: 100%;
  color: ${props => (!props.rule ? '#f9f9f9' : '#0f0f0f')};
`
export const Time1 = styled.p`
  font-family: 'roboto';
  font-weight: 490;
  color: ${props => (!props.rule ? '#f9f9f9' : '#475569')};
`
export const Views1 = styled.p`
  font-family: 'roboto';
  font-weight: 490;
  color: ${props => (!props.rule ? '#f9f9f9' : '#475569')};
`

export const Title2 = styled.p`
  font-family: 'roboto';
  font-weight: 490;
  margin: 10px;
  flex-wrap: wrap;
  width: 100%;
  color: ${props => (!props.rule ? '#f9f9f9' : '#0f0f0f')};
`
export const Views2 = styled.p`
  font-family: 'roboto';
  width: 75%;
  margin-left: 3px;
  color: ${props => (!props.rule ? '#f9f9f9' : '#475569')};
`
export const Button = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: ${props => props.rule};
  font-size: 15px;
  font-weight: 600;
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
