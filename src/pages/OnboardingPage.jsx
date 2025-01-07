import { useState } from "react";
import start from "../assets/Start.jpg";
import onboarding1 from "../assets/Onboarding1.gif";
import onboarding2 from "../assets/Onboarding2.gif";
import onboarding3 from "../assets/Onboarding3.gif";
import apple from "../assets/logo/apple.png";
import ID from "../assets/logo/indo.png";
import google from "../assets/logo/google.png";
import fb from "../assets/logo/logos_facebook.png";
import x from "../assets/logo/X.png";
import { Link } from "react-router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Fungsi untuk menentukan elemen yang akan dirender
  const renderContent = () => {
    if (count === 1) {
      return (
        <div className="flex flex-col text-blue-500 px-6 pt-6 pb-20 justify-between items-center h-screen">
          <div className="flex flex-col items-center">
            <div className="flex justify-between items-center w-full mb-16">
              <h1 className="font-bold text-lg">GoTogather</h1>
              <p className="" onClick={() => setCount(4)}>
                Lewati ►
              </p>
            </div>
            <p className="font-bold text-2xl text-center">
              Pemesanan Mudah dan Cepat
            </p>
            <img src={onboarding1} alt="Illustration" className="w-64 my-16" />
            <p className="text-center text-lg font-bold">
              Cari dan pesan tumpangan hanya dalam beberapa langkah. Cukup pilih
              rute dan tumpangan sesuai kebutuhan siswa. {count}
            </p>
          </div>
          <button
            className="w-2/3 bg-primary rounded-full"
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
              <p className="" onClick={() => setCount(4)}>
                Lewati ►
              </p>
            </div>
            <p className="font-bold text-2xl text-center">Pantau perjalanan</p>
            <img src={onboarding2} alt="Illustration" className="w-64 my-16" />
            <p className="text-center text-lg font-bold">
              Lacak perjalanan siswa secara real-time dan pastikan mereka tiba
              di tujuan dengan selamat.
            </p>
          </div>
          <button
            className="w-2/3 bg-primary rounded-full"
            onClick={() => setCount(count + 1)}
          >
            <div className="text-center w-full py-4 text-white">Lanjustkan</div>
          </button>
        </div>
      );
    } else if (count === 3) {
      return (
        <div className="flex flex-col text-blue-500 px-6 pt-6 pb-20 justify-between items-center h-screen">
          <div className="flex flex-col items-center">
            <div className="flex justify-between items-center w-full mb-16">
              <h1 className="font-bold text-lg">GoTogather</h1>
              <p className="" onClick={() => setCount(4)}>
                Lewati ►
              </p>
            </div>
            <p className="font-bold text-2xl text-center">Keamanan terjamin</p>
            <img src={onboarding3} alt="Illustration" className="w-80 my-16" />
            <p className="text-center text-lg font-bold">
              Nikmati perjalanan dengan sopir terverifikasi dan rute yang telah
              dirancang untuk keamanan siswa.
            </p>
          </div>
          <button
            className="w-2/3 bg-primary rounded-full"
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
              <p className="text-primary" onClick={() => setCount(3)}>
                ◄ Kembali
              </p>
            </div>

            <p className="font-bold text-3xl text-center">Let's Get Started</p>
            <p className="text-center mb-16">
              Silahkan pilih akun yang Anda inginkan!
            </p>
            <div className="w-full bg-dark rounded-full flex p-2 items-center justify-start gap-4 px-7 mb-4">
              <img src={google} alt="" className="h-5" />
              <div className="text-center py-2 text-white">
                Continue with Google
              </div>
            </div>
            <div className="w-full bg-dark rounded-full flex p-2 items-center justify-start gap-4 px-7 mb-4">
              <img src={apple} alt="" className="h-5" />
              <div className="text-center py-2 text-white">
                Continue with Apple
              </div>
            </div>
            <div className="w-full bg-dark rounded-full flex p-2 items-center justify-start gap-4 px-7 mb-4">
              <img src={fb} alt="" className="h-5" />
              <div className="text-center py-2 text-white">
                Continue with Facebook
              </div>
            </div>
            <div className="w-full bg-dark rounded-full flex p-2 items-center justify-start gap-4 px-7 mb-4">
              <img src={x} alt="" className="h-5" />
              <div className="text-center py-2 text-white">Continue with X</div>
            </div>
          </div>
          <div className="flex flex-col w-full items-center gap-4">
            {" "}
            <button
              className="w-2/3 bg-primary rounded-full"
              onClick={() => setCount(count + 1)}
            >
              <div className="text-center w-full py-3 text-white">Sign Up</div>
            </button>
            <button className="w-2/3 bg-dark rounded-full">
              <div className="text-center w-full py-3 text-white">Sign In</div>
            </button>
          </div>
        </div>
      );
    } else if (count === 5) {
      return (
        <div className="flex flex-col text-dark px-6 pt-6 pb-20 relative justify-between items-center h-screen">
          <div className=" flex-col items-center">
            <div className="flex w-full mb-16">
              <p className="" onClick={() => setCount(4)}>
                Kembali
              </p>
            </div>

            <p className="font-bold text-2xl w-full">Join GoTogather Today✨</p>
            <p className="mb-4">
              Ayo mulai! Masukan nomor telepon anda untuk masuk ke aplikasi
              Gotogether akun.
            </p>
            <form action="" method="" className="mb-4">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <div className="relative">
                  <p className="font-bold text-dark">Phone Number</p>
                </div>

                <div className="relative rounded-lg py-3">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <img src={ID} alt="" />
                  </span>
                  <input
                    type="number"
                    name="q"
                    className="py-4 px-6 w-full rounded-lg text-xs bg-slate-200 text-dark bg-landing pl-14 focus:outline-none focus:text-gray-900"
                    placeholder="Masukkan nomor telepon"
                    autocomplete="off"
                  />
                </div>
              </div>
            </form>
          </div>

          <button
            onClick={handleOpen}
            className="w-2/3 bg-primary rounded-full"
          >
            <div className="text-center w-full py-4 text-white">Continue</div>
          </button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="gap-6 flex flex-col">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="text-center"
              >
                Akun berhasil dibuat
              </Typography>
              <Typography id="modal-modal-description" className="text-center">
                Ayo cari tumpangan
              </Typography>

              <Link
                to="/main"
                className="flex bottom w-full flex-col items-center"
              >
                {" "}
                <button className="w-2/3 bg-primary rounded-full">
                  <div className="text-center w-full py-3 text-white">
                    Lanjutkan
                  </div>
                </button>
              </Link>
            </Box>
          </Modal>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col px-6 pb-20 justify-between items-center relative h-screen">
          <img src={start} alt="" className="w-screen h-dvh absolute -z-10" />
          <div className="flex pt-24 items-center flex-col h-full">
            <p className="text-white text-2xl font-thin">Selamat Datang</p>
            <h1 className="text-5xl font-bold text-white">GoTogather</h1>
          </div>
          <button
            className="w-2/3 bg-primary rounded-full"
            onClick={() => setCount(count + 1)}
          >
            <div className="text-center w-full py-3 text-white">Let's Go</div>
          </button>
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
}

export default App;
