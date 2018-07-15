import React from 'react'
import { ScreenCover, Button, Text, Padded } from 'ui'
import styled from 'styled-components'


const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default ({ noFunc, yesFunc }) => (
  <ScreenCover>
    <Text>Switch partner?</Text>
    <Padded />
    <Wrapper>
      <Button onClick={yesFunc} inverted>Yes</Button>
      <Button onClick={noFunc}>No</Button>
    </Wrapper>
  </ScreenCover>
)
