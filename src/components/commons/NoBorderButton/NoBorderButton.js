import React, { memo } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import "./styles.scss";

const NoBorderButton = props => {
  return (
    <div className="noBorderButton">
      <Button {...props}>{props.children}</Button>
    </div>
  );
};

NoBorderButton.propTypes = {
  children: PropTypes.any
};

export default memo(NoBorderButton);
