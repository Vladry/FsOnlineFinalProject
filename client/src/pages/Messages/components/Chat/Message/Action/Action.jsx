import React from "react";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import More from "./More";
import PropTypes from "prop-types";

const Action = ({toggleModal, message, isRight = false}) => {

  return (
      <BoxWrapper className='Actions'>
        <More toggleModal={toggleModal} message={message} isRight={isRight}/>
      </BoxWrapper>);
}

const BoxWrapper = styled(Box)({
  display: 'flex',
  opacity: 0,
  padding: '0 5px'
});

Action.propTypes = {
  toggleModal: PropTypes.func,
  message: PropTypes.object,
  isRight: PropTypes.bool,
}

export default Action;
