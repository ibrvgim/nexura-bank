"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";

const centerWindowStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  boxShadow: 24,
  px: 3,
  pt: 5,
  pb: 4,
  borderRadius: "16px",
};

const sideWindowStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  height: "100%",
  width: "40%",
  bgcolor: "#fff",
};

export default function BasicModalWindow({
  button,
  children,
  open,
  handleClose,
  windowOnSide = false,
}: {
  button: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  windowOnSide?: boolean;
}) {
  return (
    <>
      {button}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={windowOnSide ? sideWindowStyle : centerWindowStyle}>
          <button
            className="cursor-pointer transition-all duration-200 hover:opacity-50"
            onClick={handleClose}
          >
            <XMarkIcon className="absolute top-6 right-5 size-7" />
          </button>

          {children}
        </Box>
      </Modal>
    </>
  );
}
