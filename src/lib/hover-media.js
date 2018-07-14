import { css } from 'styled-components'


export default (styles) => css`
  @media (pointer: fine) {
    &:hover {
      ${styles}
    }
  }
`
