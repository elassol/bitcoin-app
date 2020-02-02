import styled from 'styled-components'

export const TransactionWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const TransactionLine = styled.li`
  width: 100%;
  display: flex;
  flex-flow: row wrap; 
  align-content: center;
  justify-content:  flex-start;
  border-bottom: 1px solid #ededed;
  padding: 3px 4px 2px;

  &:last-child {
    border: none;
  }

  > span {
    padding: 0 8px;
  }
`
