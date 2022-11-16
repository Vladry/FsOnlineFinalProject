import React from "react";
import Tweet from "../Tweet";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";

import { CloseIcon } from "../../media/icons";
import Box from "@mui/material/Box";
import { TweetForm } from "../TweetForm";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
const Reply = ({ userInfo, open = false, handleClose }) => {
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <Dialog
      fullScreen={matches}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <Box>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Tweet userInfo={userInfo} openReply={true} />
      <TweetForm buttonText={"Reply"} placeholderText={"Tweet your reply"} />
    </Dialog>
  );
};
Reply.propTypes = {
  userInfo: PropTypes.object,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
export default Reply;
