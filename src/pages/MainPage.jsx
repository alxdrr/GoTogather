import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconSchool from "../assets/iconSchool.png";
import iconBus from "../assets/iconBus.png";
import iconUser from "../assets/iconUser.png";
import bus from "../assets/logo/bus.png";

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
      <div className="bottom-0 w-full bg-white z-50 border-t gap-2 pt-2 border-gray-200 shadow-md">
        <div className="flex ps-6 items-center w-full">
          {" "}
          <svg
            width="10"
            height="73"
            viewBox="0 0 10 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="5"
              cy="5"
              r="5"
              transform="matrix(1 0 0 -1 0 11.5)"
              fill="black"
            />
            <circle
              cx="5"
              cy="5"
              r="5"
              transform="matrix(1 0 0 -1 0 11.5)"
              fill="black"
            />
            <circle
              cx="5"
              cy="5"
              r="5"
              transform="matrix(1 0 0 -1 0 11.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 15.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 15.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 15.5)"
              fill="#9F9F9F"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 19.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 19.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 19.5)"
              fill="#9F9F9F"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 23.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 23.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 23.5)"
              fill="#9F9F9F"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 27.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 27.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 27.5)"
              fill="#9F9F9F"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 31.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 31.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 31.5)"
              fill="#9F9F9F"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 35.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 35.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 35.5)"
              fill="#9F9F9F"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 39.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 39.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 39.5)"
              fill="#9F9F9F"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 43.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 43.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 43.5)"
              fill="#9F9F9F"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 47.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 47.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 47.5)"
              fill="#9F9F9F"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 51.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 51.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 51.5)"
              fill="#9F9F9F"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 55.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 55.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 55.5)"
              fill="#9F9F9F"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 59.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 59.5)"
              fill="black"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 4 59.5)"
              fill="#9F9F9F"
            />
            <circle
              cx="5"
              cy="5"
              r="5"
              transform="matrix(1 0 0 -1 0 71.5)"
              fill="black"
            />
            <circle
              cx="5"
              cy="5"
              r="5"
              transform="matrix(1 0 0 -1 0 71.5)"
              fill="black"
            />
            <circle
              cx="5"
              cy="5"
              r="5"
              transform="matrix(1 0 0 -1 0 71.5)"
              fill="#4B4CED"
            />
          </svg>
          <div className="flex flex-col px-4 py-2 grow gap-1">
            <select
              name=""
              id=""
              className="bg-slate-200 rounded-full gap-1 py-3 px-3"
            >
              <option value="Tes">Jl. Kampus Unud</option>
              <option value="Tes">Jl. Kampus Unud</option>
            </select>
            <select
              name=""
              id=""
              className="bg-slate-200 rounded-full gap-1 py-3 px-3"
            >
              <option value="Tes">SDN 4 Jimbaran</option>
              <option value="Tes">SDN 6 Jimbaran</option>
              <option value="Tes">SDN 9 Jimbaran</option>
              <option value="Tes">SDN 1 Be</option>
            </select>
          </div>
        </div>
        <button>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="#7F97FF" />
            <g clip-path="url(#clip0_199_8079)">
              <path
                d="M25.195 28.83L30 24L25.195 19.17C25.1516 19.113 25.0965 19.066 25.0333 19.0322C24.9702 18.9983 24.9005 18.9785 24.829 18.9739C24.7576 18.9694 24.6859 18.9802 24.619 19.0057C24.5521 19.0313 24.4914 19.0709 24.4411 19.1219C24.3909 19.1729 24.3521 19.2341 24.3275 19.3014C24.303 19.3687 24.2931 19.4405 24.2987 19.5119C24.3043 19.5833 24.3252 19.6527 24.3599 19.7153C24.3946 19.7779 24.4424 19.8324 24.5 19.875L28.095 23.5H18.53C18.3974 23.5 18.2702 23.5527 18.1764 23.6464C18.0827 23.7402 18.03 23.8674 18.03 24C18.03 24.1326 18.0827 24.2598 18.1764 24.3535C18.2702 24.4473 18.3974 24.5 18.53 24.5H28.095L24.5 28.125C24.4065 28.2191 24.3543 28.3466 24.3547 28.4792C24.3552 28.6119 24.4083 28.739 24.5025 28.8325C24.5967 28.926 24.7241 28.9782 24.8568 28.9778C24.9894 28.9773 25.1165 28.9241 25.21 28.83H25.195Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_199_8079">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="matrix(0 1 -1 0 33 15)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <div className="flex relative flex-col text-primary px-2 py-2 shadow-md rounded-xl mx-6 w-[25dvh] h-[25dvh]">
          <p className="font-bold text-xl w-max">Bus Sarbagita</p>
          <div className="flex gap-3 w-max">
            <p>3-5 Menit</p>
            <div className="flex w-auto h-auto justify-center items-center text-neutral-500">
              {" "}
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.0625 9.625C2.0625 9.625 1.375 9.625 1.375 8.9375C1.375 8.25 2.0625 6.1875 5.5 6.1875C8.9375 6.1875 9.625 8.25 9.625 8.9375C9.625 9.625 8.9375 9.625 8.9375 9.625H2.0625ZM5.5 5.5C6.04701 5.5 6.57161 5.2827 6.95841 4.89591C7.3452 4.50911 7.5625 3.98451 7.5625 3.4375C7.5625 2.89049 7.3452 2.36589 6.95841 1.97909C6.57161 1.5923 6.04701 1.375 5.5 1.375C4.95299 1.375 4.42839 1.5923 4.04159 1.97909C3.6548 2.36589 3.4375 2.89049 3.4375 3.4375C3.4375 3.98451 3.6548 4.50911 4.04159 4.89591C4.42839 5.2827 4.95299 5.5 5.5 5.5Z"
                  fill="#C7C7C7"
                />
              </svg>
              <p>10</p>
            </div>
          </div>
          <p className="text-neutral-500 text-xs w-2/3">
            Fasilitas yang bersih dan nyaman
          </p>
          <img src={bus} alt="" className="w-min absolute bottom-0 right-0" />
        </div>
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
