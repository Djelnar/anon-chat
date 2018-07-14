import styled from 'styled-components'
import hoverMedia from 'lib/hover-media'


export const SwitchButton = styled('p')`
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  user-select: none;

  ${hoverMedia(`
    color: rgba(255, 255, 255, 0.7);
  `)}

  @media (max-width: 767px) {
    font-size: 18px;
  }
`
