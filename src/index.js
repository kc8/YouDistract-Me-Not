import React from 'react';
import ReactDOM from 'react-dom';
import SearchFunction from './SearchFunction';
import * as serviceWorker from './serviceWorker';


function Header() {
  return (
      <div className="container"> 
        <div className="row">
          <div className="col-sm">
            <div className="jumbotron" style={{backgroundColor: "white"}}> 
              <h1 className="text-center">YouDistract Me Not</h1>
              <p className="text-center">
                Use the searchbox below to search for a YouTube video
              </p>
            </div>
          </div> 
        </div> 
      </div>
    ) 
}

ReactDOM.render(
  <React.StrictMode>
  <Header />
  <SearchFunction />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
