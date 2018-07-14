import styled, { css } from 'styled-components'


export const Message = styled('div')`
  background: #D99862;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 6px 10px;
  margin-bottom: 10px;

  font-size: 14px;
  line-height: 1;
  color: #ffffff;

  ${(p) => p.out && css`
    align-self: flex-end;
    background: #E1FFC7;
    color: #000000;
  `}
`
