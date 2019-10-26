import React from "react";
import { Layout, Menu, Icon } from "antd";
import styles from "./styles.scss";
const { Sider } = Layout;
const { ItemGroup, Item } = Menu;

const SiderMenu = () => {
  return (
    <Sider>
      <div className="logo" />
      <Menu theme="light" mode="inline">
        <ItemGroup key="g1" title="Dashboard">
          <Item key="1">
            <Icon type="user" />
            <span className="nav-text">Overview</span>
          </Item>
          <Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">Orders</span>
          </Item>
          <Item key="3">
            <Icon type="upload" />
            <span className="nav-text">Supplier List</span>
          </Item>
          <Item key="4">
            <Icon type="bar-chart" />
            <span className="nav-text">Statistic</span>
          </Item>
        </ItemGroup>

        <ItemGroup key="g2" title="Market Place">
          <Item key="5">
            <Icon type="user" />
            <span className="nav-text">Market</span>
          </Item>
        </ItemGroup>

        <ItemGroup key="g3" title="General Setting">
          <Item key="6">
            <Icon type="video-camera" />
            <span className="nav-text">Company Info</span>
          </Item>
          <Item key="7">
            <Icon type="upload" />
            <span className="nav-text">Store Info</span>
          </Item>
          <Item key="8">
            <Icon type="bar-chart" />
            <span className="nav-text">User Management</span>
          </Item>
        </ItemGroup>
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
