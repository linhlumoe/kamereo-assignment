import React, { memo } from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";

const Spinner = props => {
  const { spinning, tip, size } = props;

  return <Spin spinning={spinning} tip={tip} size={size} />;
};

Spinner.propTypes = {
  spinning: PropTypes.bool.isRequired,
  tip: PropTypes.string,
  size: PropTypes.string
};

Spinner.defaultProps = {
  spinning: true,
  tip: "Loading...",
  size: "large"
};

export default memo(Spinner);
