import { fetchGet } from "services/base";

const mockGetProfileResult = {
  error: {
    status: 1,
    message: "Successful"
  },
  data: {
    id: "store00001",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQorZ_cIdK8lsCA7McN3jAg9hbMnz0P2A-tizXCyN_7IU4IPQE8",
    name: "K.O.I Thé.",
    district: "1",
    city: "Hồ Chí Minh",
    address: "521 Hồ Tùng Mậu",
    phone: "886-9944"
  }
};

export const get = id => {
  return fetchGet("./profile", { id }, mockGetProfileResult).then(
    response => response.data
  );
};

export default {
  get
};
