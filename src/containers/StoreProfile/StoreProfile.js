import React, { memo, useEffect, useState, Fragment } from 'react';
import _isEmpty from 'lodash/isEmpty';
import Spinner from 'components/commons/Spinner';
import { Row, Col } from 'antd';
import PageTitle from 'components/commons/PageTitle';
import DefaultMessage from './components/DefaultMessage';
import StoreInfo from './components/StoreInfo';
import EditModal from './components/EditModal';

const StoreProfile = props => {
  const {
    getProfile,
    updateProfile,
    uploadImage,
    storeProfile,
    generalLoading,
    cities,
  } = props;
  const { profile, loading, uploadedUrl } = storeProfile;
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const handleUpdate = data => updateProfile(profile.id, data);
  const handleUpload = file => {
    uploadImage(file);
  };
  useEffect(() => {
    getProfile(123);
  }, [getProfile]);

  return (
    <Spinner spinning={loading || generalLoading}>
      {!_isEmpty(profile) && (
        <Fragment>
          <PageTitle title="Store Information" />
          <Row gutter={16}>
            <Col span={9}>
              <StoreInfo
                profile={profile}
                toggleEdit={() => setIsOpenEdit(!isOpenEdit)}
              />
            </Col>
            <Col span={15}>
              <DefaultMessage />
            </Col>
          </Row>
          <EditModal
            profile={profile}
            uploadedUrl={uploadedUrl}
            isOpen={isOpenEdit}
            cities={cities}
            handleUpdate={handleUpdate}
            handleUpload={handleUpload}
            toggleEdit={() => setIsOpenEdit(!isOpenEdit)}
          />
        </Fragment>
      )}
    </Spinner>
  );
};

export default memo(StoreProfile);
