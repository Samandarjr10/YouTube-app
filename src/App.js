import './App.scss';
import React from 'react';
import { Context } from "./Context/Authenticated"

import Authenticated from './AuthenticatedApp';
import Unauthenticated from './UnauthenticatedApp';

function App() {
  const { token } = React.useContext(Context);
  if (token) {
    return <Authenticated/>
  } else {
   return <Unauthenticated/>
  }
}

export default App;
