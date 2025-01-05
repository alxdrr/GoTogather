import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import bus from "../assets/logo/bus.png";
import { grey } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "0",
}));

const StyledBox = styled("div")(({ theme }) => ({
  height: "120px",
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: "#90A3BF",
  borderRadius: 3,
  position: "absolute",
  bottom: 72,
  left: "calc(50% - 15px)",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[900],
  }),
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(0);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root className="-z-20">
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50%)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        BackdropProps={{
          style: { backgroundColor: "transparent" },
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            height: 120,
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Box sx={{ p: 2, height: 120, paddingTop: 8 }}>
            {" "}
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
            <div className="flex relative flex-col text-primary px-2 py-2 shadow-md rounded-xl w-[25dvh] h-[25dvh]">
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
              <img
                src={bus}
                alt=""
                className="w-min absolute bottom-0 right-0"
              />
            </div>
          </Box>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
