'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Coordenadas de Panadería Lunardi - Ciudad del Este, Paraguay
const LOCATION = {
  lat: -25.4836301,
  lng: -54.6591634,
}

// Custom marker icon
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export default function LocationMap() {
  return (
    <MapContainer
      center={[LOCATION.lat, LOCATION.lng]}
      zoom={17}
      scrollWheelZoom={false}
      className="w-full h-full"
      style={{ minHeight: '300px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[LOCATION.lat, LOCATION.lng]} icon={customIcon}>
        <Popup>
          <div className="text-center">
            <strong className="text-red-900">Lunardi S.A.</strong>
            <br />
            <span className="text-sm text-gray-600">Centro de Producción</span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}