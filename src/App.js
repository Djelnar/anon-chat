import React, { Component } from 'react'
import { Container } from 'ui'
import MainScreen from 'MainScreen'
import SocketClient from 'SocketClient'
import LoadingScreen from 'LoadingScreen'


export class App extends Component {
  scrollBottom = () => {
    const { container: { current } } = this

    if (current) {
      current.scrollTo(0, current.scrollHeight)
    }
  }


  container = React.createRef()

  render = () => (
    <Container innerRef={this.container}>
      <SocketClient>
        {({ haveMatch, sendMessage, messages = [], ownID }) => (
          haveMatch
            ? <MainScreen
              ownID={ownID}
              sendMessage={sendMessage}
              messages={messages}
              scrollBottom={this.scrollBottom}
            />
            : <LoadingScreen />
        )}
      </SocketClient>
    </Container>
  )
}
