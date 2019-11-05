import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const mapStyle = {
  width: "100%",
  height: "400px"
}

class App extends React.Component {
  componentDidMount() {
    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

  render() {
    return (
      <div className="App">
          <div id="map" className="map" style={mapStyle}></div>
      </div>
    );
  }
}

export default App;
