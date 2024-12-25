import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconSchool from "../assets/iconSchool.png";
import iconBus from "../assets/iconBus.png";

// Custom icons
const userIcon = new L.Icon({
  iconUrl: "https://example.com/user-icon.png",
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
    <div className="h-dvh w-screen flex flex-col">
      <MapContainer
        center={[-8.796916, 115.176273]} // Default center: Rektorat UNUD
        zoom={15}
        zoomControl={false} // Disable zoom in/out buttons
        attributionControl={false} // Remove Leaflet attribution
        className="w-full grow h-auto max-w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
      </MapContainer>
      <div className="bottom-0 w-full bg-white z-50 border-t border-gray-200 shadow-md">
        <div className="flex justify-around items-center py-2">
          {/* Beranda */}
          <div className="flex flex-col items-center text-blue-600">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.38077 0.573266C8.83279 0.203195 9.40673 0 10 0C10.5933 0 11.1672 0.203195 11.6192 0.573266L19.1192 6.71251C19.3953 6.93852 19.617 7.21962 19.7691 7.53635C19.9212 7.85307 20 8.19785 20 8.5468V18.1479C20 18.6391 19.7974 19.1102 19.4367 19.4575C19.0761 19.8049 18.587 20 18.0769 20H15C14.49 20 14.0008 19.8049 13.6402 19.4575C13.2795 19.1102 13.0769 18.6391 13.0769 18.1479V13.3325C13.0769 12.9407 12.9158 12.5649 12.6288 12.2872C12.3417 12.0095 11.9522 11.8527 11.5454 11.8509H8.45385C8.04716 11.8528 7.65781 12.0098 7.37096 12.2875C7.0841 12.5651 6.92307 12.9409 6.92308 13.3325V18.1479C6.92308 18.3911 6.87334 18.632 6.77669 18.8567C6.68005 19.0814 6.53839 19.2856 6.35982 19.4575C6.18125 19.6295 5.96925 19.7659 5.73593 19.859C5.50261 19.9521 5.25254 20 5 20H1.92308C1.41305 20 0.923903 19.8049 0.563256 19.4575C0.202609 19.1102 0 18.6391 0 18.1479V8.5468C2.02392e-05 8.19785 0.0787988 7.85307 0.23088 7.53635C0.382961 7.21962 0.60471 6.93852 0.880769 6.71251L8.38077 0.573266Z"
                fill="#4B4CED"
              />
            </svg>

            <span className="text-xs">Beranda</span>
          </div>

          {/* Jelajahi */}
          <div className="flex flex-col items-center text-gray-500">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.89605 -0.000976542C10.5665 -0.00108871 12.2033 0.469095 13.619 1.35577C15.0347 2.24244 16.1722 3.50977 16.9013 5.01273C17.6304 6.51569 17.9216 8.19355 17.7417 9.8543C17.5617 11.515 16.9178 13.0916 15.8837 14.4035L19.7062 18.226C19.8968 18.4234 20.0023 18.6878 20 18.9622C19.9976 19.2366 19.8875 19.4991 19.6934 19.6932C19.4994 19.8873 19.2368 19.9974 18.9624 19.9997C18.688 20.0021 18.4236 19.8966 18.2262 19.706L14.4037 15.8835C13.2894 16.7616 11.9813 17.3605 10.5886 17.6303C9.19575 17.9001 7.75864 17.8328 6.3971 17.4342C5.03557 17.0356 3.7891 16.3172 2.76169 15.3389C1.73427 14.3606 0.955709 13.1508 0.490952 11.8104C0.0261946 10.47 -0.111279 9.0379 0.0899992 7.63357C0.291278 6.22924 0.825473 4.89341 1.64802 3.73752C2.47056 2.58163 3.5576 1.6392 4.81844 0.988865C6.07928 0.33853 7.47736 -0.000855679 8.89605 -0.000976542ZM8.89605 2.09239C7.09166 2.09239 5.36118 2.80918 4.08529 4.08507C2.8094 5.36096 2.09261 7.09144 2.09261 8.89583C2.09261 10.7002 2.8094 12.4307 4.08529 13.7066C5.36118 14.9825 7.09166 15.6993 8.89605 15.6993C10.7004 15.6993 12.4309 14.9825 13.7068 13.7066C14.9827 12.4307 15.6995 10.7002 15.6995 8.89583C15.6995 7.09144 14.9827 5.36096 13.7068 4.08507C12.4309 2.80918 10.7004 2.09239 8.89605 2.09239ZM8.89605 3.13907C10.4228 3.13907 11.8871 3.74558 12.9667 4.82519C14.0463 5.90479 14.6528 7.36904 14.6528 8.89583C14.6528 10.4226 14.0463 11.8869 12.9667 12.9665C11.8871 14.0461 10.4228 14.6526 8.89605 14.6526C7.36926 14.6526 5.90501 14.0461 4.82541 12.9665C3.7458 11.8869 3.13929 10.4226 3.13929 8.89583C3.13929 7.36904 3.7458 5.90479 4.82541 4.82519C5.90501 3.74558 7.36926 3.13907 8.89605 3.13907Z"
                fill="#353F54"
                fill-opacity="0.5"
              />
            </svg>

            <span className="text-xs">Jelajahi</span>
          </div>

          {/* Profil */}
          <div className="flex flex-col items-center text-gray-500">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 3.99902C5 2.93816 5.42143 1.92074 6.17157 1.1706C6.92172 0.420451 7.93913 -0.000976562 9 -0.000976562C10.0609 -0.000976562 11.0783 0.420451 11.8284 1.1706C12.5786 1.92074 13 2.93816 13 3.99902C13 5.05989 12.5786 6.07731 11.8284 6.82745C11.0783 7.5776 10.0609 7.99902 9 7.99902C7.93913 7.99902 6.92172 7.5776 6.17157 6.82745C5.42143 6.07731 5 5.05989 5 3.99902ZM5 9.99902C3.67392 9.99902 2.40215 10.5258 1.46447 11.4635C0.526784 12.4012 0 13.6729 0 14.999C0 15.7947 0.316071 16.5577 0.87868 17.1203C1.44129 17.683 2.20435 17.999 3 17.999H15C15.7956 17.999 16.5587 17.683 17.1213 17.1203C17.6839 16.5577 18 15.7947 18 14.999C18 13.6729 17.4732 12.4012 16.5355 11.4635C15.5979 10.5258 14.3261 9.99902 13 9.99902H5Z"
                fill="#353F54"
                fill-opacity="0.5"
              />
            </svg>

            <span className="text-xs">Profil</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
