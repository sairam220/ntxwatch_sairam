import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2%;
  padding-left: 2%;
  padding-right: 2%;

  background-color: ${props => (props.rule ? '#ffffff' : '#181818')};
`
export const NavImage = styled.img`
  height: 10%;
  width: 10%;
`

export const LogoutButton = styled.button`
  height: 30px;
  width: 110px;
  color: ${props => (props.rule ? '#3b82f6' : '#f9f9f9')};
  border-color: ${props => (props.rule ? '#3b82f6' : '#f9f9f9')};
  border-radius: 6px;
  background-color: transparent;
  border-width: 0.1px;
  margin-top: 4px;
`
export const LogoutButton1 = styled.button`
  height: 30px;
  width: 110px;
  color: ${props => (props.rule ? '#3b82f6' : '#f9f9f9')};
  border-color: ${props => (props.rule ? '#3b82f6' : '#f9f9f9')};
  background-color: ${props => (props.rule ? '#f9f9f9 ' : '#3b82f6')};
  border-radius: 6px;
  background-color: transparent;
  border-width: 0.1px;
  margin: 20px;
  margin-top: 22px;
`
export const NavBar1 = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around;

  background-color: ${props => (props.rule ? '#ffffff' : '#181818')};
`
export const Time = styled.p`
  font-family: 'roboto';
  font-weight: 490;
  color: ${props => (!props.rule ? '#f9f9f9' : '#475569')};
`
