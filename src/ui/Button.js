import styled, { css } from 'styled-components'
import hoverMedia from 'lib/hover-media'


export const Button = styled('div')`
  width: 200px;
  padding: 11px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  line-height: 1;
  font-weight: 500;
  color: pink;

  border: 1px solid pink;
  border-radius: 2px;
  background-color: #ffffff;
  margin: 10px;

  cursor: pointer;
  user-select: none;

  transition: all .1s ease-in-out;

  ${hoverMedia(`
    color: #ffffff;
    background-color: pink;
  `)}

  ${(p) => p.inverted && css`
    background-color: pink;
    color: #ffffff;

    ${hoverMedia(`
      color: pink;
      background-color: #ffffff;
    `)}
  `}
`
