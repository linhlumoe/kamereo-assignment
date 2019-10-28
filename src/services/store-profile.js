import { fetchData } from 'services/base';

const mockGetProfileResult = {
  error: {
    status: 1,
    message: 'Successful',
  },
  data: {
    id: 'store00001',
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQorZ_cIdK8lsCA7McN3jAg9hbMnz0P2A-tizXCyN_7IU4IPQE8',
    name: 'K.O.I Thé.',
    district: '1',
    city: 'Hồ Chí Minh',
    address: '521 Hồ Tùng Mậu',
    phone: '(338) 886-9944',
    redInvoice: {
      name: 'KOI The International Company',
      district: '1',
      city: 'Hồ Chí Minh',
      address: '521 Hồ Tùng Mậu',
      taxCode: 'P7744944',
    },
  },
};

const mockUpdateProfileResult = data => {
  return {
    error: {
      status: 1,
      message: 'Successful',
    },
    data: {
      ...mockGetProfileResult.data,
      ...data,
    },
  };
};

const mockUploadImageResult = {
  error: {
    status: 1,
    message: 'Successful',
  },
  data: {
    imageUrl:
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Hokkaido-2.png',
  },
};

export const get = id => {
  return fetchData('/profile', { id }, mockGetProfileResult).then(
    response => response.data
  );
};

export const update = payload => {
  return fetchData(
    `/update`,
    payload.data,
    mockUpdateProfileResult(payload.data)
  ).then(response => response.data);
};

export const uploadImage = payload => {
  return fetchData('/upload', payload, mockUploadImageResult).then(
    response => response.data
  );
};

export default {
  get,
  update,
  uploadImage,
};
