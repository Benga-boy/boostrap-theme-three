import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/common/Footer'
import NavbarTop from './components/common/Navbar'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Services from './components/pages/Services'
import Showcase from './components/pages/Showcase'

const App = () => {
  return (
    <BrowserRouter>
      <NavbarTop />
      <Switch>
        <Route exact path="/" component={Showcase} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App

