import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'; // import de la bibliotheque externe
import { Container } from 'react-bootstrap';
import './App.css';


function MapContainer(props) {
    return (
      <div className='cadre'>
      <Container  fluid >
      <Map 
        google={props.google}
        zoom={10} // le zoom du depart, a l'affichage
        initialCenter={{
            lat: 36.8065, // Latitude de Tunis
            lng: 10.1815, // Longitude de Tunis
          }}
          scrollwheel= {false} // Désactiver le défilement
          style={{ // le style de la carte
            width: '60%',
            height: '70%',
            margin:'auto',
            position:'absolute'
            
          }}
      
      />
      </Container>
      </div>
  );
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCDbg7kIc-h37hQh8-8qAp3KGnQE-GuJJc'})// GOOGLE_MAPS_API_KEY
    (MapContainer);
  