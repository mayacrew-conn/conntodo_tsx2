import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Gallery from './components/Gallery';
import GalleryDetail from './components/GalleryDetail';
import ContactList from './components/ContactList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <header>
              <Link to="/">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </header>
            <Route exact path="/" component={Gallery} />
            <Route path='/contact' component={ContactList} />
            <Route path="/detail/:id" component={GalleryDetail} />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
