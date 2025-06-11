"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";

const style = {
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

export default function BasicModalWindow({
  button,
  children,
  open,
  handleClose,
}: {
  button: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
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
        <Box sx={style}>
          <button className="cursor-pointer" onClick={handleClose}>
            <XMarkIcon className="absolute top-6 right-5 size-8" />
          </button>

          {children}
        </Box>
      </Modal>
    </>
  );
}
