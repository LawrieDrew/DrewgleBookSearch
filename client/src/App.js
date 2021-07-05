import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GoogleBookSearch } from 'react-native-google-books';
import SavedBooks from 'saved books placeholder'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={GoogleBookSearch} />
          <Route exact path="/saved" component={SavedBooks} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;