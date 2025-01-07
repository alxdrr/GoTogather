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

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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
const busRoute1 = [
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
const busRoute2 = [
  { lat: -8.804113, lng: 115.159553 }, // Titik awal
  { lat: -8.800658, lng: 115.160578 },
  { lat: -8.798089, lng: 115.160849 },
  { lat: -8.79754492586669, lng: 115.16095713988064 },
  { lat: -8.79477233281687, lng: 115.16257719410325 },
  { lat: -8.79189899267544, lng: 115.16367689980814 },
  { lat: -8.789282396747478, lng: 115.16418959943192 },
  { lat: -8.787135313980205, lng: 115.16532685605291 },
  { lat: -8.787135313980205, lng: 115.16532685605291 },
  { lat: -8.786340095000414, lng: 115.16519811002283 },
  { lat: -8.7864090140415, lng: 115.16647484151696 },
  { lat: -8.785608492010374, lng: 115.16586329786463 },
  { lat: -8.784876887598509, lng: 115.16583647577504 },
  { lat: -8.78199286766822, lng: 115.16734387722208 },
  { lat: -8.778695302715239, lng: 115.16881909218135 },
  { lat: -8.777558713128528, lng: 115.17031455934925 },
  { lat: -8.771077976510194, lng: 115.17319698216859 },
  { lat: -8.76524420371669, lng: 115.17474486279586 },
  { lat: -8.751551511521258, lng: 115.17825547587137 },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "white",
  border: "none",
  boxShadow: 24,
  p: 2,
};
function App() {
  const [open, setOpen] = useState(true);
  const [busType, setBusType] = useState("sarbagita");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userLocation, setUserLocation] = useState({
    lat: -8.796916,
    lng: 115.176273,
  }); // Default location: Rektorat UNUD
  const [busLocation, setBusLocation] = useState({
    lat: -8.804113,
    lng: 115.159553,
  });
  const [busLocation2, setBusLocation2] = useState({
    lat: -8.804113,
    lng: 115.159553,
  });
  const [value, setValue] = React.useState(0);
  // Mock bus location update
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setBusLocation(busRoute1[index]);
      index = (index + 1) % busRoute1.length; // Loop back to start after reaching the end
    }, 5000); // Update every 3 seconds
    const interval2 = setInterval(() => {
      setBusLocation2(busRoute2[4]);
      index = (index + 1) % busRoute2.length; // Loop back to start after reaching the end
    }, 4000); // Update every 3 seconds

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
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
    {
      name: "SMPN 1 Kuta Selatan",
      lat: -8.786061,
      lng: 115.163384,
    },
    {
      name: "SMA Taman Sastra Plus Pariwisata",
      lat: -8.768405025360032,
      lng: 115.17375199108778,
    },
    {
      name: "SD 1 Kedonganan",
      lat: -8.765626858755994,
      lng: 115.17539455896757,
    },
  ];

  return (
    <div className="h-dvh w-screen flex flex-col">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="gap-6 flex flex-col items-center rounded-xl">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100" height="100" rx="50" fill="#6F87FF" />
            <path
              d="M50 48.7917C48.3976 48.7917 46.8609 48.1552 45.7279 47.0221C44.5948 45.8891 43.9583 44.3524 43.9583 42.75C43.9583 41.1477 44.5948 39.611 45.7279 38.4779C46.8609 37.3449 48.3976 36.7084 50 36.7084C51.6023 36.7084 53.139 37.3449 54.2721 38.4779C55.4051 39.611 56.0416 41.1477 56.0416 42.75C56.0416 43.5434 55.8854 44.3291 55.5818 45.0621C55.2781 45.7951 54.8331 46.4611 54.2721 47.0221C53.7111 47.5832 53.045 48.0282 52.312 48.3318C51.579 48.6354 50.7934 48.7917 50 48.7917ZM50 25.8334C45.5134 25.8334 41.2106 27.6157 38.0381 30.7882C34.8656 33.9606 33.0833 38.2635 33.0833 42.75C33.0833 55.4375 50 74.1667 50 74.1667C50 74.1667 66.9166 55.4375 66.9166 42.75C66.9166 38.2635 65.1344 33.9606 61.9619 30.7882C58.7894 27.6157 54.4866 25.8334 50 25.8334Z"
              fill="#FFF8F8"
            />
          </svg>

          <div>
            <p
              id="modal-modal-title"
              className="text-center font-bold text-2xl"
            >
              Aktifkan Lokasi
            </p>
            <Typography id="modal-modal-description" className="text-center">
              Untuk dapat menggunakan layanan, kami memerlukan izin untuk
              mengakses lokasi Anda.
            </Typography>
          </div>

          <button
            onClick={handleClose}
            className="w-2/3 bg-primary rounded-full "
          >
            <div className="text-center w-full py-3 text-white">Setuju</div>
          </button>
          <button className="w-2/3 bg-[#B4B5FF] rounded-full ">
            <div className="text-center w-full py-3 text-primary">Lewati</div>
          </button>
        </Box>
      </Modal>
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
        <Marker position={[busLocation2.lat, busLocation2.lng]} icon={busIcon}>
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
        {(busType === "sarbagita" || busType === "all") && (
          <Polyline positions={busRoute1} color="blue" />
        )}
        {(busType === "transmart" || busType === "all") && (
          <Polyline positions={busRoute2} color="red" />
        )}
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
        <SwipeableEdgeDrawer setBusType={setBusType} />
      </div>
    </div>
  );
}

export default App;
