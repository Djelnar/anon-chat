import styled from 'styled-components'
import { blink } from 'ui/animations'


export const Text = styled('p')`
  font-style: italic;
  font-weight: 500;
  line-height: normal;
  font-size: 48px;
  text-align: center;

  color: #000000;

  animation: ${blink} 2s linear infinite;
`
