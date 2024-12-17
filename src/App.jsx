import { useState } from "react";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import apple from "./assets/logo/apple.png";
import google from "./assets/logo/google.png";
import fb from "./assets/logo/logos_facebook.png";
import x from "./assets/logo/X.png";

function App() {
  const [count, setCount] = useState(0);

  // Fungsi untuk menentukan elemen yang akan dirender
  const renderContent = () => {
    if (count === 1) {
      return (
        <div className="flex flex-col text-blue-500 px-6 pt-6 pb-20 justify-between items-center h-screen">
          <div className="flex flex-col items-center">
            <div className="flex justify-between items-center w-full mb-16">
              <h1 className="font-bold text-lg">GoTogather</h1>
              <p className="">Lewati</p>
            </div>
            <img src={image1} alt="Illustration" className="w-64 my-16" />
            <p className="font-bold text-lg text-center">
              Pemesanan Mudah dan Cepat
            </p>
            <p className="text-center">
              Cari dan pesan tumpangan hanya dalam beberapa langkah. Cukup pilih
              rute dan tumpangan sesuai kebutuhan siswa. {count}
            </p>
          </div>
          <button
            className="w-2/3 bg-blue-500 rounded-full"
            onClick={() => setCount(count + 1)}
          >
            <div className="text-center w-full py-4 text-white">Lanjutkan</div>
          </button>
        </div>
      );
    } else if (count === 2) {
      return (
        <div className="flex flex-col text-blue-500 px-6 pt-6 pb-20 justify-between items-center h-screen">
          <div className="flex flex-col items-center">
            <div className="flex justify-between items-center w-full mb-16">
              <h1 className="font-bold text-lg">GoTogather</h1>
              <p className="">Lewati</p>
            </div>
            <img src={image2} alt="Illustration" className="w-64 my-16" />
            <p className="font-bold text-lg text-center">Pantau perjalanan</p>
            <p className="text-center">
              Lacak perjalanan siswa secara real-time dan pastikan mereka tiba
              di tujuan dengan selamat.
            </p>
          </div>
          <button
            className="w-2/3 bg-blue-500 rounded-full"
            onClick={() => setCount(count + 1)}
          >
            <div className="text-center w-full py-4 text-white">Lanjutkan</div>
          </button>
        </div>
      );
    } else if (count === 3) {
      return (
        <div className="flex flex-col text-blue-500 px-6 pt-6 pb-20 justify-between items-center h-screen">
          <div className="flex flex-col items-center">
            <div className="flex justify-between items-center w-full mb-16">
              <h1 className="font-bold text-lg">GoTogather</h1>
              <p className="">Lewati</p>
            </div>
            <img src={image3} alt="Illustration" className="w-80 my-16" />
            <p className="font-bold text-lg text-center">Keamanan terjamin</p>
            <p className="text-center">
              Nikmati perjalanan dengan sopir terverifikasi dan rute yang telah
              dirancang untuk keamanan siswa.
            </p>
          </div>
          <button
            className="w-2/3 bg-blue-500 rounded-full"
            onClick={() => setCount(count + 1)}
          >
            <div className="text-center w-full py-4 text-white">Lanjutkan</div>
          </button>
        </div>
      );
    } else if (count === 4) {
      return (
        <div className="flex flex-col text-dark px-6 pt-6 pb-20 justify-between items-center h-screen">
          <div className="flex flex-col items-center">
            <div className="flex w-full mb-16">
              <p className="">Lewati</p>
            </div>

            <p className="font-bold text-3xl text-center">Let's Get Started</p>
            <p className="text-center mb-16">
              Silahkan pilih akun yang Anda inginkan!
            </p>
            <div className="w-full bg-dark rounded-full flex p-3 items-center justify-between px-8 mb-6">
              <img src={google} alt="" className="h-8" />
              <div className="text-center py-2 text-white">
                Continue with Google
              </div>
            </div>
            <div className="w-full bg-dark rounded-full flex p-3 items-center justify-between px-8 mb-6">
              <img src={apple} alt="" className="h-8" />
              <div className="text-center py-2 text-white">
                Continue with Apple
              </div>
            </div>
            <div className="w-full bg-dark rounded-full flex p-3 items-center justify-between px-8 mb-6">
              <img src={fb} alt="" className="h-8" />
              <div className="text-center py-2 text-white">
                Continue with Facebook
              </div>
            </div>
            <div className="w-full bg-dark rounded-full flex p-3 items-center justify-between px-8 mb-6">
              <img src={x} alt="" className="h-8" />
              <div className="text-center py-2 text-white">Continue with X</div>
            </div>
          </div>
          <div className="flex flex-col w-full items-center gap-4">
            {" "}
            <button className="w-2/3 bg-blue-500 rounded-full">
              <div className="text-center w-full py-4 text-white">Sign Up</div>
            </button>
            <button
              className="w-2/3 bg-dark rounded-full"
              onClick={() => setCount(count + 1)}
            >
              <div className="text-center w-full py-4 text-white">Sign In</div>
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-lg">Klik tombol untuk memulai!</p>
          <button
            className="w-2/3 bg-blue-500 rounded-full mt-6"
            onClick={() => setCount(1)}
          >
            <div className="text-center w-full py-4 text-white">Mulai</div>
          </button>
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
}

export default App;
