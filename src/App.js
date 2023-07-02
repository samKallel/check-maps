import React from 'react';
import './App.css';
import MapContainer from './map';//import du composant


function App() {
  return (
    <div className="App">
 <h1>Google Maps :</h1> 

    <MapContainer/> {/*le composant qui permet laffichage du google map*/}
      </div> 

  );
}

export default App;
