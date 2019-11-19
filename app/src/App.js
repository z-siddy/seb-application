import React from 'react';
import './App.css';
import SingleIBAN from './Components/SingleIBAN/SingleIBAN'
import ListIBAN from './Components/ListIBAN/ListIBAN'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-lg-6 no-pad">
          <SingleIBAN />
        </div>
        <div className="col-sm-12 col-lg-6 no-pad">
          <ListIBAN />
        </div>
      </div>
    </div>
  );
}

export default App;
