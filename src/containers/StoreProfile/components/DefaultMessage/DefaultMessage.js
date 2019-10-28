import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Checkbox, Button, Input } from 'antd';
import './styles.scss';

const TextArea = Input.TextArea;

const DEFAULT_MSG = [
  'Paul Rand once said, "The public is more familiar with bad fucking design than good design. It is, in effect conditioned to prefer bad design, because that is what it lives with." ',
];

const DefaultMessage = props => {
  const { defaultMessages } = props;

  return (
    <Card>
      <Typography level={4}>DELIVERY DEFAULT MESSAGE</Typography>
      <div className="defaultMessageWrapper">
        {defaultMessages.map((msg, index) => (
          <div key={`msg-${index}`} className="messageRow">
            <Checkbox defaultChecked />
            <span className="message">{msg}</span>
          </div>
        ))}
        <div className="messageRow">
          <Checkbox defaultChecked={false} />
          <TextArea autoSize defaultValue="" />
        </div>
        <div className="messageRow">
          <Checkbox defaultChecked={false} />
          <TextArea autoSize defaultValue="" />
        </div>
        <div className="messageRow">
          <Checkbox defaultChecked={false} />
          <TextArea autoSize defaultValue="" />
        </div>
      </div>
      <Button>Update</Button>
    </Card>
  );
};

DefaultMessage.propTypes = {
  defaultMessages: PropTypes.array,
};

DefaultMessage.defaultProps = {
  defaultMessages: DEFAULT_MSG,
};

export default memo(DefaultMessage);
