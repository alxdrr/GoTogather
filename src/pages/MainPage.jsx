import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconSchool from "../assets/iconSchool.png";

// Custom icons
const userIcon = new L.Icon({
  iconUrl: "https://example.com/user-icon.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const schoolIcon = new L.Icon({
  iconUrl: iconSchool,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

function App() {
  const [userLocation, setUserLocation] = useState({
    lat: -8.796916,
    lng: 115.176273,
  }); // Default location: Rektorat UNUD
  const [busLocation, setBusLocation] = useState({
    lat: -8.796916,
    lng: 115.176273,
  });

  // Mock bus location update
  useEffect(() => {
    const interval = setInterval(() => {
      setBusLocation((prev) => ({
        lat: prev.lat + 0.001,
        lng: prev.lng + 0.001,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  }, []);

  const schools = [
    { name: "SDN 4 Jimbaran", lat: -8.785556, lng: 115.176667 },
    { name: "SDN 6 Jimbaran", lat: -8.789722, lng: 115.180833 },
    { name: "SDN 9 Jimbaran", lat: -8.792778, lng: 115.183333 },
  ];

  return (
    <div className="h-dvh">
      <MapContainer
        center={[-8.796916, 115.176273]} // Default center: Rektorat UNUD
        zoom={15}
        style={{ height: "calc(100% - 64px)", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
          <Popup>Your Location</Popup>
        </Marker>
        <Marker position={[busLocation.lat, busLocation.lng]}>
          <Popup>Bus Location</Popup>
        </Marker>
        {schools.map((school, index) => (
          <Marker
            key={index}
            position={[school.lat, school.lng]}
            icon={schoolIcon}
          >
            <Popup>{school.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
