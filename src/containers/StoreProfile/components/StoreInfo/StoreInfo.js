import React, { memo } from "react";
import { Card, Typography, Button } from "antd";
import "./styles.scss";

const StoreInfo = props => {
  const { profile, toggleEdit } = props;
  const {
    logoUrl,
    name,
    address,
    district,
    city,
    phone,
    redInvoice = {}
  } = profile;

  return (
    <Card>
      <img src={logoUrl} alt="" />
      <Typography level={4}>STORE INFO.</Typography>
      <div className="infoWrapper">
        <div className="infoRow">
          <label>Name: </label>
          <span>{name}</span>
        </div>
        <div className="infoRow">
          <label>Address: </label>
          <span>{`${address} ${district} ${city}`}</span>
        </div>
        <div className="infoRow">
          <label>Phone: </label>
          <span>{phone}</span>
        </div>
      </div>
      <Typography level={4}>RED INVOICE INFO.</Typography>
      <div className="infoWrapper">
        <div className="infoRow">
          <label>Company Name: </label>
          <span>{redInvoice.name}</span>
        </div>
        <div className="infoRow">
          <label>Address: </label>
          <span>{`${redInvoice.address} ${redInvoice.district} ${redInvoice.city}`}</span>
        </div>
        <div className="infoRow">
          <label>MST: </label>
          <span>{redInvoice.taxCode}</span>
        </div>
      </div>
      <Button block onClick={toggleEdit}>
        Edit profile
      </Button>
    </Card>
  );
};

export default memo(StoreInfo);
