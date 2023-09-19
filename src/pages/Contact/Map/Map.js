import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const CustomMap = () => {
  // Tọa độ và địa chỉ của KTX Khu A ĐHQG TP.HCM
  const position = [10.878392234392619, 106.80626345095403];
  const address = 'Ký túc xá Khu A Đại học Quốc gia TP.HCM, Dĩ An, Bình Dương, Việt Nam';

  const openInGoogleMaps = (address) => {
    const url = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(url, "_blank");
  };

  // Tạo custom icon
  const redIcon = new L.DivIcon({
    html: '<div class="leaflet-red-icon"></div>',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={redIcon} eventHandlers={{ click: () => openInGoogleMaps(address) }}>
        <Popup>
          Địa chỉ: {address}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default CustomMap;
