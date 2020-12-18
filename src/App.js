import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, NavBar } from './components'
import ScrollToTop from './components/ScrollToTop';
import GlobalStyle from './globalStyles'
import Home from './pages/HomePage/Home';
import Plans from './pages/Plans/Plans'
import SignUp from './pages/SignUp/SignUp'


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/plans" exact component={Plans} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
