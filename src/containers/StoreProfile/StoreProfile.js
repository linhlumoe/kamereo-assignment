import React, { memo, useEffect, useState, Fragment } from "react";
import _isEmpty from "lodash/isEmpty";
import Spinner from "components/commons/Spinner";
import { Row, Col } from "antd";
import PageTitle from "components/commons/PageTitle";
import DefaultMessage from "./components/DefaultMessage";
import StoreInfo from "./components/StoreInfo/StoreInfo";
import EditModal from "./components/EditModal/EditModal";

const StoreProfile = props => {
  const { getProfile, storeProfile } = props;
  const { profile, loading } = storeProfile;
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  useEffect(() => {
    getProfile(123);
  }, [getProfile]);

  return (
    <Spinner spinning={loading}>
      {!_isEmpty(profile) && (
        <Fragment>
          <PageTitle title="Store Information" />
          <Row gutter={16}>
            <Col span={8}>
              <StoreInfo
                profile={profile}
                toggleEdit={() => setIsOpenEdit(!isOpenEdit)}
              />
            </Col>
            <Col span={16}>
              <DefaultMessage />
            </Col>
          </Row>
          <EditModal
            profile={profile}
            isOpen={isOpenEdit}
            toggleEdit={() => setIsOpenEdit(!isOpenEdit)}
          />
        </Fragment>
      )}
    </Spinner>
  );
};

export default memo(StoreProfile);
