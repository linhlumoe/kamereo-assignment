import React, { memo } from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";
import "./styles.scss";

const { Title } = Typography;

const PageTitle = props => {
  const { title, level } = props;

  return (
    <div className="pageTitleWrapper">
      <Title level={level}>{title}</Title>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number
};

PageTitle.defaultProps = {
  title: "",
  level: 3
};

export default memo(PageTitle);
