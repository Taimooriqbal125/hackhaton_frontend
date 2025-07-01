// components/MapView.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom red icon
const redIcon = new L.Icon({
  iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const Map = () => {
  const affectedAreas = [
    { name: 'Lahore', coords: [31.5204, 74.3587] },
    { name: 'Karachi', coords: [24.8607, 67.0011] },
    { name: 'Islamabad', coords: [33.6844, 73.0479] },
  ];

  return (
    <MapContainer
      center={[30.3753, 69.3451]} // Center of Pakistan
      zoom={6}
        maxBounds={[
    [23.6345, 60.8667],  // SW corner of Pakistan
    [37.0841, 77.8375],  // NE corner of Pakistan
  ]}
  maxBoundsViscosity={1.0}
      style={{ height: '500px', width: '100%', borderRadius: '12px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      {affectedAreas.map((area, index) => (
        <Marker key={index} position={area.coords} icon={redIcon}>
          <Popup>{`Affected Area - ${area.name}`}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
