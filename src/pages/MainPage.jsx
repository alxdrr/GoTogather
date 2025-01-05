import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import Box from "@mui/material/Box";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconSchool from "../assets/iconSchool.png";
import iconBus from "../assets/iconBus.png";
import iconUser from "../assets/iconUser.png";
import SwipeableEdgeDrawer from "../components/Drawer";

// Custom icons
const userIcon = new L.Icon({
  iconUrl: iconUser,
  iconSize: [60, 60],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const schoolIcon = new L.Icon({
  iconUrl: iconSchool,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const busIcon = new L.Icon({
  iconUrl: iconBus,
  iconSize: [40, 40],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});
const busRoute = [
  { lat: -8.804113, lng: 115.159553 }, // Titik awal
  { lat: -8.800658, lng: 115.160578 },
  { lat: -8.798089, lng: 115.160849 },
  { lat: -8.799293, lng: 115.164799 },
  { lat: -8.800131, lng: 115.17063 },
  { lat: -8.799863, lng: 115.17092 },
  { lat: -8.79711, lng: 115.171112 },
  { lat: -8.795454, lng: 115.171444 },
  { lat: -8.789125, lng: 115.173807 },
  { lat: -8.789078, lng: 115.177043 },
  { lat: -8.787489, lng: 115.177342 },
  { lat: -8.785248, lng: 115.178459 },
  { lat: -8.78428, lng: 115.178345 },
  { lat: -8.781364, lng: 115.178758 },
  { lat: -8.782747, lng: 115.181942 },
  { lat: -8.783144, lng: 115.185508 },
  { lat: -8.783885, lng: 115.18728 },
  { lat: -8.783948, lng: 115.189351 },
  { lat: -8.784887, lng: 115.193265 },
  { lat: -8.784923, lng: 115.194224 },
  { lat: -8.784286, lng: 115.194138 },
  { lat: -8.783256, lng: 115.19426 },
];
function App() {
  const [userLocation, setUserLocation] = useState({
    lat: -8.796916,
    lng: 115.176273,
  }); // Default location: Rektorat UNUD
  const [busLocation, setBusLocation] = useState({
    lat: -8.804113,
    lng: 115.159553,
  });
  const [value, setValue] = React.useState(0);
  // Mock bus location update
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setBusLocation(busRoute[index]);
      index = (index + 1) % busRoute.length; // Loop back to start after reaching the end
    }, 5000); // Update every 3 seconds

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
    {
      name: "SDN 4 Jimbaran",
      lat: -8.798888642441606,
      lng: 115.16116811800387,
    },
    {
      name: "SDN 6 Jimbaran",
      lat: -8.782025533289131,
      lng: 115.18018464075726,
    },
    {
      name: "SDN 9 Jimbaran",
      lat: -8.783944134329529,
      lng: 115.19419926218396,
    },
  ];

  return (
    <div className="h-dvh w-screen flex flex-col">
      <MapContainer
        center={[-8.796916, 115.176273]} // Default center: Rektorat UNUD
        zoom={15}
        style={{ height: "calc(100% - 64px)", width: "100%" }}
        zoomControl={false} // Disable zoom in/out buttons
        attributionControl={false} // Remove Leaflet attribution
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" // HD Map Layer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/'>CARTO</a>"
        />
        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
          <Popup>Your Location</Popup>
        </Marker>
        <Marker position={[busLocation.lat, busLocation.lng]} icon={busIcon}>
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
        <Polyline positions={busRoute} color="blue" />
      </MapContainer>
      <div className="bottom-0 relative w-full bg-white z-50 border-t gap-2 pt-2 border-gray-200 shadow-md">
        <Box sx={{ width: "auto", zIndex: 10 }} className="z-10">
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Beranda"
              icon={<HomeIcon />}
              sx={{ color: "red" }}
            />
            <BottomNavigationAction label="Jelajahi" icon={<SearchIcon />} />
            <BottomNavigationAction
              label="Profil"
              icon={<PermIdentityIcon />}
            />
          </BottomNavigation>
        </Box>
        <SwipeableEdgeDrawer />
      </div>
    </div>
  );
}

export default App;
