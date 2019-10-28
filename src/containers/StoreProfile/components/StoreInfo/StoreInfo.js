import React, { memo } from 'react';
import { Card, Typography, Button } from 'antd';
import './styles.scss';

const StoreInfo = props => {
  const { profile, toggleEdit } = props;
  const {
    logoUrl,
    name,
    address,
    district,
    city,
    phone,
    redInvoice = {},
  } = profile;

  return (
    <Card>
      <div className="storeInfoWrapper">
        <img src={logoUrl} alt="" />
        <Typography level={4}>STORE INFO.</Typography>
        <div className="infoWrapper">
          <label>Name: </label>
          <span>{name}</span>
          <label>Address: </label>
          <span>{`${address} ${district} ${city}`}</span>
          <label>Phone: </label>
          <span>{phone}</span>
        </div>
        <Typography level={4}>RED INVOICE INFO.</Typography>
        <div className="infoWrapper">
          <label>Company Name: </label>
          <span>{redInvoice.name}</span>
          <label>Address: </label>
          <span>{`${redInvoice.address} ${redInvoice.district} ${redInvoice.city}`}</span>
          <label>MST: </label>
          <span>{redInvoice.taxCode}</span>
        </div>
        <Button block onClick={toggleEdit}>
          Edit profile
        </Button>
      </div>
    </Card>
  );
};

export default memo(StoreInfo);
