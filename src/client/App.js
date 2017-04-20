import React from 'react';
import { Match } from 'react-router';
import AsyncRoute from './AsyncRoute';

if (global) {
  global.System = { import () {} }
}
const App = () => (
  <div>
    <Match
      exactly
      pattern='/'
      component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./Landing')} />}
    />
  </div>
);

export default App;
