import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </HashRouter>
  );
}

export default App;