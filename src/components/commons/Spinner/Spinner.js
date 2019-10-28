import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import './styles.scss';

const Spinner = props => {
  const { spinning, tip, size, children, fullPage } = props;

  if (fullPage) {
    return (
      <div className="spinnerWrapper">
        <Spin spinning={spinning} tip={tip} size={size}>
          {children}
        </Spin>
      </div>
    );
  }
  return (
    <Spin spinning={spinning} tip={tip} size={size}>
      {children}
    </Spin>
  );
};

Spinner.propTypes = {
  spinning: PropTypes.bool.isRequired,
  tip: PropTypes.string,
  size: PropTypes.string,
  fullPage: PropTypes.bool,
};

Spinner.defaultProps = {
  spinning: true,
  tip: 'Loading...',
  size: 'large',
  fullPage: true,
};

export default memo(Spinner);
