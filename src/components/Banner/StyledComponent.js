import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  padding: 10px;
  display: ${props => props.display};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
export const Heading = styled.h1`
  color: '#0000';
`
