import React, { Component } from 'react'
/* eslint-disable no-console */

class SocketClient extends Component {
  state = {
    haveMatch: false,
    messages: [],
    ownID: '',
  }

  componentDidMount = () => {
    this.socket = new WebSocket(`ws://${window.location.hostname}:1488`)

    this.socket.addEventListener('message', ({ data }) => {
      const event = JSON.parse(data)

      if (event.type === 'MATCH') {
        this.setState({
          haveMatch: true,
          ownID: event.payload.ownID,
        })
      }
      if (event.type === 'MESSAGE') {
        this.setState((state) => ({
          messages: state.messages.concat(event.payload),
        }))
      }
    })

    this.socket.addEventListener('open', () => {
      console.log('open')
    })
  }

  sendMessage = (text) => {
    const { ownID } = this.state

    this.socket.send(JSON.stringify({
      text,
      senderID: ownID,
    }))
  }

  render = () => this.props.children({
    haveMatch: this.state.haveMatch,
    ownID: this.state.ownID,
    sendMessage: this.sendMessage,
    messages: this.state.messages,
  })
}

export default SocketClient
