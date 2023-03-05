import styled from 'styled-components'

export const Title = styled.p`
  font-family: 'roboto';
  font-weight: 510;
  color: ${props => (!props.rule ? '#f9f9f9' : '#0f0f0f')};
  text-decoration: none;
`
export const Channel = styled.p`
  font-family: 'roboto';
  font-size: 16px;
  color: ${props => (!props.rule ? '#f9f9f9' : '#0f0f0f')};
`
export const Time = styled.p`
  font-family: 'roboto';
  font-weight: 490;
  color: ${props => (!props.rule ? '#f9f9f9' : '#475569')};
`
export const Views = styled.p`
  font-family: 'roboto';
  font-weight: 490;
  color: ${props => (!props.rule ? '#f9f9f9' : '#475569')};
`
