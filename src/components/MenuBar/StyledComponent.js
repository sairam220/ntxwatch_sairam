import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 90vh;
  width: 20%;
  background-color: ${props => (props.rule ? '#ffffff' : '#181818')};
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px;
  width: 100%;
`
export const Paragraph = styled.p`
  color: ${props => (props.rule ? '#0f0f0f' : '#f9f9f9')};
  font-family: 'roboto';
  text-decoration: none;
  font-weight: 510;
`

export const Paragraph1 = styled.p`
  color: ${props => (props.rule ? '#0f0f0f' : '#f9f9f9')};
  font-family: 'roboto';
  text-decoration: none;
  font-weight: 530;
  margin: 10px;
`
export const Paragraph2 = styled.p`
  color: ${props => (props.rule ? '#0f0f0f' : '#f9f9f9')};
  font-family: 'roboto';
  text-decoration: none;
  margin: 10px;
`
