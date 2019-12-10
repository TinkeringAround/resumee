import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './utility/serviceWorker'

//=========================================================
const App: FC = () => {
  return <div>Resumee</div>
}

//=========================================================
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
