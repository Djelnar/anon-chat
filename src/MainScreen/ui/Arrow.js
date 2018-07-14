import React from 'react'
import styled from 'styled-components'


const Button = styled('button')`
  border: 0;
  outline: 0;
  background-color: inherit;
  display: flex;
  cursor: pointer;
`

export const Arrow = () => (
  <Button type="submit">
    <svg
      width="35"
      height="26"
      viewBox="0 0 35 26"
      transform="translate(8)"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 0L24.2583 26.25H1.74167L13 0Z"
        transform="translate(35) rotate(90)"
        fill="#00B9FF"
      />
      <path
        d="M2.3038 0L4.29895 19.1827H0.30865L2.3038 0Z"
        transform="translate(27.9327 10.4893) rotate(90)"
        fill="white"
      />
    </svg>
  </Button>
)
