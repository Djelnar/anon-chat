import styled from 'styled-components'


export const Input = styled('div')`
  background-color: #ffffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex: 1 1 100%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  & input {
    border: 0;
    outline: 0;
    display: block;
    height: 100%;
    width: calc(100% - 50px);
    background-color: inherit;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-size: 18px;

    padding-left: 10px;

    color: #000000;
  }
`
