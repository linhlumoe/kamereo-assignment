import React, { lazy, Suspense } from "react";

import { Layout } from "antd";
import SiderMenu from "components/layouts/SiderMenu";
import MainHeader from "components/layouts/MainHeader";
import { Switch, Route, Redirect } from "react-router-dom";
import Spinner from "components/commons/Spinner";

const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MainHeader />
      <Layout style={{ marginTop: 64 }}>
        <SiderMenu />
        <Content style={{ marginLeft: 200, padding: 16 }}>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route
                path="/dashboard"
                component={lazy(() => import("containers/Dashboard"))}
              />
              <Route
                path="/profile"
                component={lazy(() => import("containers/StoreProfile"))}
              />
              <Redirect from="/" to="/dashboard" exact />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
