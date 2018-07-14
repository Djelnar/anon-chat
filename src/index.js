import ReactDOM from 'react-dom'
import React from 'react'
import { App } from 'App'
import 'style'


const renderApp = (C) => {
  ReactDOM.render(<C />, document.getElementById('app'))
}

renderApp(App)


if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(['App'], () => {
    import('App')
      .then(({ App: NewApp }) => renderApp(NewApp))
  })
}
