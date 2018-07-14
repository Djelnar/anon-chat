import React from 'react'
import { range } from 'ramda'
import { Padded } from 'ui'
import { Toggle } from 'react-powerplug'
import ConfirmDialog from './ConfirmDialog'
import {
  Form,
  Input,
  Arrow,
  SwitchButton,
  Header,
  HeaderInner,
  Message,
  Messages,
} from './ui'


const arr = range(-1, 1)

export default () => (
  <React.Fragment>
    <Toggle initial={false}>
      {({ on, toggle }) => (
        <>
          {on && (<ConfirmDialog toggle={toggle} />)}
          <Header>
            <HeaderInner>
              {!on && (
                <SwitchButton onClick={toggle}>switch partner</SwitchButton>
              )}
            </HeaderInner>
          </Header>
        </>
      )}
    </Toggle>
    <Padded />
    <Padded>
      <Messages>
        {arr.map((v, i) => (
          <Message
            // eslint-disable-next-line no-magic-numbers
            out={!!(i % 2)}
            key={v}
          >{v}
          </Message>
        ))}
      </Messages>
    </Padded>
    <Padded />
    <Form>
      <Input>
        <input type="text" />
        <Arrow />
      </Input>
    </Form>
  </React.Fragment>
)
