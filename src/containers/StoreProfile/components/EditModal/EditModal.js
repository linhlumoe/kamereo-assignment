import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import {
  Row,
  Col,
  Typography,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Upload,
  Icon,
} from 'antd';
import NoBorderButton from 'components/commons/NoBorderButton';
import './styles.scss';

const FormItem = Form.Item;
const Option = Select.Option;

const TITLE = (
  <Typography>
    <Icon type="edit" style={{ fontSize: '20px', marginRight: '10px' }} />
    EDIT STORE PROFILE
  </Typography>
);

const getDistricts = (cityName, cities = []) => {
  const selectedCity = cities.find(item => item.name === cityName);
  return _get(selectedCity, 'districts', []);
};

const EditModal = props => {
  const {
    profile,
    isOpen,
    toggleEdit,
    form = {},
    cities,
    handleUpdate,
    handleUpload,
    uploadedUrl,
  } = props;
  const { getFieldDecorator } = form;
  const {
    logoUrl,
    name,
    address,
    district,
    city,
    phone,
    redInvoice = {},
  } = profile;
  const [districts, setDistricts] = useState(getDistricts(city, cities));
  const [invoiceDistricts, setInvoiceDistricts] = useState(
    getDistricts(redInvoice.city, cities)
  );

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        handleUpdate({ ...values, logoUrl: uploadedUrl || logoUrl });
        toggleEdit();
      }
    });
  };
  const handleChooseImg = e => {
    handleUpload(e.file);
  };

  return (
    <Modal
      wrapClassName="editProfileWrapper"
      title={TITLE}
      visible={isOpen}
      onCancel={toggleEdit}
      footer={null}
    >
      <Row gutter={24}>
        <Col span={8}>
          <Typography>STORE IMAGE</Typography>
          <img src={uploadedUrl || logoUrl} alt="" />
          <div className="inline-button-group">
            <NoBorderButton>Remove</NoBorderButton>
            <Upload accept=".jpg,.jpeg,.png,.svg" onChange={handleChooseImg}>
              <Button>Upload</Button>
            </Upload>
          </div>
        </Col>
        <Col span={16}>
          <Form onSubmit={handleSubmit}>
            <Typography>BASIC INFO.</Typography>
            <FormItem label="Store Name">
              {getFieldDecorator('name', {
                initialValue: name,
                rules: [
                  { required: true, message: 'Please input store name!' },
                ],
              })(<Input placeholder="Store Name" />)}
            </FormItem>
            <Row gutter={16}>
              <Col span={6}>
                <Form.Item label="City">
                  {getFieldDecorator('city', {
                    initialValue: city,
                    rules: [{ required: true, message: 'Please select city!' }],
                  })(
                    <Select
                      onChange={city =>
                        setDistricts(getDistricts(city, cities))
                      }
                    >
                      {cities.map(city => (
                        <Option value={city.name} key={city.id}>
                          {city.name}
                        </Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="District">
                  {getFieldDecorator('district', {
                    initialValue: district,
                    rules: [
                      { required: true, message: 'Please select district!' },
                    ],
                  })(
                    <Select>
                      {districts.map(district => (
                        <Option value={district.name} key={district.id}>
                          {district.name}
                        </Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <FormItem label="Store Address">
                  {getFieldDecorator('address', {
                    initialValue: address,
                    rules: [
                      {
                        required: true,
                        message: 'Please input store address!',
                      },
                    ],
                  })(<Input placeholder="Store Address" />)}
                </FormItem>
              </Col>
            </Row>
            <FormItem label="Phone #.">
              {getFieldDecorator('phone', {
                initialValue: phone,
                rules: [
                  {
                    required: true,
                    message: 'Please input phone number!',
                  },
                  {
                    pattern: /[(]?\d{3}[-.)]?[ ]?\d{3}[-.]?\d{4}\b/g,
                    message: 'Invalid phone number!',
                  },
                ],
              })(<Input placeholder="Phone number" />)}
            </FormItem>
            <Typography>RED INVOICE INFO.</Typography>
            <FormItem label="Company Name">
              {getFieldDecorator('redInvoice.name', {
                initialValue: redInvoice.name,
                rules: [
                  { required: true, message: 'Please input company name!' },
                ],
              })(<Input placeholder="Company Name" />)}
            </FormItem>
            <Row gutter={16}>
              <Col span={6}>
                <Form.Item label="City">
                  {getFieldDecorator('redInvoice.city', {
                    initialValue: redInvoice.city,
                    rules: [{ required: true, message: 'Please select city!' }],
                  })(
                    <Select
                      onChange={city =>
                        setInvoiceDistricts(getDistricts(city, cities))
                      }
                    >
                      {cities.map(city => (
                        <Option value={city.name} key={city.id}>
                          {city.name}
                        </Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="District">
                  {getFieldDecorator('redInvoice.district', {
                    initialValue: redInvoice.district,
                    rules: [
                      { required: true, message: 'Please select district!' },
                    ],
                  })(
                    <Select>
                      {invoiceDistricts.map(district => (
                        <Option value={district.name} key={district.id}>
                          {district.name}
                        </Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <FormItem label="Company Address">
                  {getFieldDecorator('redInvoice.address', {
                    initialValue: redInvoice.address,
                    rules: [
                      {
                        required: true,
                        message: 'Please input company address!',
                      },
                    ],
                  })(<Input placeholder="Company Address" />)}
                </FormItem>
              </Col>
            </Row>
            <FormItem label="Tax Code">
              {getFieldDecorator('redInvoice.taxCode', {
                initialValue: redInvoice.taxCode,
                rules: [
                  {
                    required: true,
                    message: 'Please input tax code!',
                  },
                ],
              })(<Input placeholder="Tax code" />)}
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

EditModal.propTypes = {
  profile: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  form: PropTypes.object,
};

EditModal.defaultProps = {
  profile: {},
  isOpen: false,
  toggleEdit: () => {},
  cities: [],
  form: {},
};

const WrappedEditForm = Form.create({ name: 'editProfile' })(EditModal);

export default memo(WrappedEditForm);
