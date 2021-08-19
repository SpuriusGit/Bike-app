import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

ReactDom.render(
<>
  <Header />
  <Main />
  <Footer />
</>
,document.querySelector('#root'));