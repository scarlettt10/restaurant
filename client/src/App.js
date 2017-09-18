import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Home from './components/Home';
import Menu from './components/Menu';

const App = () => (
  <Container>

   <Route exact path="/" component={Home} />
   <Route path="/menu" component={Menu} />
  </Container>
);

export default App;