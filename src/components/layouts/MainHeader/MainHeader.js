import React from 'react';
import { Layout, Typography, Icon, Select, Badge, Avatar } from 'antd';
import './styles.scss';

const Header = Layout.Header;
const Option = Select.Option;

const MainHeader = () => {
  return (
    <div className="headerWrapper">
      <Header>
        <Typography>KAMEREO</Typography>
        <div className="extra-group">
          <div className="message">
            <Icon type="mail" />
          </div>
          <div className="card">
            <Badge count={5}>
              <Icon type="shopping" />
            </Badge>
          </div>
          <div className="language">
            <Select defaultValue="ENG">
              <Option value="eng">ENG</Option>
              <Option value="vie">VIE</Option>
            </Select>
          </div>
          <div className="user-info">
            <Avatar size="large" icon="user" />
            <div className="info">
              <p className="name">Taku Tanaka</p>
              <p className="role">Admin</p>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default MainHeader;
