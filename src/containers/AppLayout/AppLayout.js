import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "antd";
import SiderMenu from "components/layouts/SiderMenu";
import MainHeader from "components/layouts/MainHeader";
import Spinner from "components/commons/Spinner";
import "react-toastify/dist/ReactToastify.css";

const { Content } = Layout;

const AppLayout = props => {
  console.log("props: ", props);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <ToastContainer autoClose={3000} />
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
              <Redirect from="/" to="/profile" exact />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
