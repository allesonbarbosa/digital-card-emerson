import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyle';
import DigitalCard from './pages';

ReactDOM.render(
    <>
      <DigitalCard />
      <GlobalStyle/>
    </>
  ,document.getElementById('root')
);