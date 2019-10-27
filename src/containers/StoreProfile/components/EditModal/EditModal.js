import React, { memo } from "react";
import PropTypes from "prop-types";
import { Row, Col, Typography, Button, Modal, Form, Input } from "antd";
import "./styles.scss";
import NoBorderButton from "components/commons/NoBorderButton";
const FormItem = Form.Item;
const EditModal = props => {
  const { profile, isOpen, toggleEdit, form = {} } = props;
  const { getFieldDecorator } = form;

  const {
    logoUrl,
    name,
    address,
    district,
    city,
    phone,
    redInvoice = {}
  } = profile;
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log("formValue: ", values);
      }
    });
  };
  return (
    <Modal
      wrapClassName="editProfileWrapper"
      title="EDIT STORE PROFILE"
      visible={isOpen}
      onCancel={toggleEdit}
      footer={null}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Typography>STORE IMAGE</Typography>
          <img src={logoUrl} alt="" />
          <NoBorderButton>Remove</NoBorderButton>
          <Button>Upload</Button>
        </Col>
        <Col span={16}>
          <Form onSubmit={handleSubmit}>
            <Typography>BASIC INFO.</Typography>
            <FormItem label="Store Name">
              {getFieldDecorator("name", {
                initialValue: name,
                rules: [{ required: true, message: "Please input store name!" }]
              })(<Input placeholder="Store Name" />)}
            </FormItem>
            <FormItem label="Store Address">
              {getFieldDecorator("address", {
                initialValue: address,
                rules: [
                  {
                    required: true,
                    message: "Please input store address!"
                  }
                ]
              })(<Input placeholder="Store Address" />)}
            </FormItem>
            <FormItem label="Phone #.">
              {getFieldDecorator("phone", {
                initialValue: phone,
                rules: [
                  {
                    required: true,
                    message: "Please input phone number!"
                  }
                ]
              })(<Input placeholder="Phone number" />)}
            </FormItem>
            <Typography>RED INVOICE INFO.</Typography>
            <FormItem label="Company Name">
              {getFieldDecorator("redInvoice.name", {
                initialValue: redInvoice.name,
                rules: [
                  { required: true, message: "Please input company name!" }
                ]
              })(<Input placeholder="Company Name" />)}
            </FormItem>
            <FormItem label="Company Address">
              {getFieldDecorator("redInvoice.address", {
                initialValue: redInvoice.address,
                rules: [
                  {
                    required: true,
                    message: "Please input company address!"
                  }
                ]
              })(<Input placeholder="Company Address" />)}
            </FormItem>
            <FormItem label="MST">
              {getFieldDecorator("redInvoice.taxCode", {
                initialValue: redInvoice.taxCode,
                rules: [
                  {
                    required: true,
                    message: "Please input tax code!"
                  }
                ]
              })(<Input placeholder="MST" />)}
            </FormItem>
            <Button
              type="primary"
              htmlType="submit"
              block
              onClick={handleSubmit}
            >
              Save
            </Button>
            <NoBorderButton block onClick={toggleEdit}>
              Cancel
            </NoBorderButton>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};

const WrappedEditForm = Form.create({ name: "editProfile" })(EditModal);

export default memo(WrappedEditForm);
