import styled from 'styled-components';

export const WrappeTicker = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: auto;
  overflow: hidden;
  background: linear-gradient(90deg, #facc2a 0%, #ffcc00 100%);
  background: ${props => props.theme.color.primaryLighter};
`

export const TickerCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  width: auto;
  height: auto;
  margin: 10px;
  padding: 5px 10px;
  background: white;

  .svg-logo {
    display: block;
    box-sizing: border-box;
    padding-right: 5px;
    height: 25px;
    width: 30px;
    pointer-events: none;
  }
  .icon {
    display:block;
    width: 25;
    height: auto;
  }
  > p {
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
  }
`