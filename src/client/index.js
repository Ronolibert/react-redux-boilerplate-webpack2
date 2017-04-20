import React from 'react';
import BasicExample from './App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


render(
  <BasicExample />,
  document.getElementById('app')
);
