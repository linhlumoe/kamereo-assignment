import React, { memo } from "react";
import PropTypes from "prop-types";
import { Card, Typography, Checkbox, Button } from "antd";
import "./styles.scss";

const DEFAULT_MSG = [
  'Paul Rand once said, "The public is more familiar with bad fucking design than good design " '
];

const DefaultMessage = props => {
  const { defaultMessages } = props;

  return (
    <Card>
      <Typography level={4}>DELIVERY DEFAULT MESSAGE</Typography>
      {defaultMessages.map((msg, index) => (
        <div key={`msg-${index}`}>
          <Checkbox />
          {msg}
        </div>
      ))}
      <Button>Update</Button>
    </Card>
  );
};

DefaultMessage.propTypes = {
  defaultMessages: PropTypes.array
};

DefaultMessage.defaultProps = {
  defaultMessages: DEFAULT_MSG
};

export default memo(DefaultMessage);
