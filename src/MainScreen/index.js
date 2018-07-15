import React, { Component } from 'react'
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


const intl = new Intl.DateTimeFormat('ru', {
  year: 'numeric',
  day: '2-digit',
  month: 'long',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
})

export default class MainScreen extends Component {
  state = {
    message: '',
  }

  componentDidUpdate = (prevProps) => {
    const { messages, scrollBottom } = this.props

    if (prevProps.messages.length < messages.length) {
      scrollBottom()
    }
  }


  setMessage = (e) => {
    this.setState({
      message: e.target.value,
    })
  }

  sendMessage = (e) => {
    const { sendMessage } = this.props
    const { message } = this.state

    e.preventDefault()
    if (message.trim().length > 0) {
      this.setState({
        message: '',
      })

      sendMessage(message)
    }
  }

  reload = () => {
    document.location.reload()
  }

  render = () => (
    <React.Fragment>
      <Toggle initial={false}>
        {({ on, toggle }) => (
          <>
            {on && (<ConfirmDialog noFunc={toggle} yesFunc={this.reload} />)}
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
      <Padded scroll>
        <Messages>
          {this.props.messages.map(({ key, text, senderID, timestamp }) => (
            <Message
              key={key}
              out={this.props.ownID === senderID ? 1 : 0}
            >{text}<br />{intl.format(timestamp)}
            </Message>
          ))}
        </Messages>
      </Padded>
      <Padded />
      <Form onSubmit={this.sendMessage}>
        <Input>
          <input
            onChange={this.setMessage}
            value={this.state.message}
            type="text"
          />
          <Arrow />
        </Input>
      </Form>
    </React.Fragment>
  )
}
