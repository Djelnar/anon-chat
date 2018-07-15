import styled, { css } from 'styled-components'


export const Padded = styled('div')`
  padding: 30px;

  ${(p) => p.scroll && css`
    overflow-y: auto;
    padding-bottom: 10px;
  `}
`
