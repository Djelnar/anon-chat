import React from 'react'
import { ScreenCover, Button, Text, Padded } from 'ui'
import styled from 'styled-components'


const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default ({ toggle }) => (
  <ScreenCover>
    <Text>Switch partner?</Text>
    <Padded />
    <Wrapper>
      <Button inverted>Yes</Button>
      <Button onClick={toggle}>No</Button>
    </Wrapper>
  </ScreenCover>
)
