import React from 'react';

import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/detail/:id' component={Detail} />
    </HashRouter>
  );
}

export default App;