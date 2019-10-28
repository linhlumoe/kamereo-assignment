import { fetchData } from 'services/base';

const mockGetCitiesResult = {
  error: {
    status: 1,
    message: 'Successful',
  },
  data: [
    {
      id: 'HOCHIMINH',
      name: 'Hồ Chí Minh',
      districts: [
        { id: 'QUAN1', name: 'Quận 1' },
        { id: 'QUAN2', name: 'Quận 2' },
        { id: 'QUAN3', name: 'Quận 3' },
        { id: 'QUAN4', name: 'Quận 4' },
        { id: 'QUAN5', name: 'Quận 5' },
        { id: 'QUAN6', name: 'Quận 6' },
        { id: 'QUAN7', name: 'Quận 7' },
        { id: 'QUAN8', name: 'Quận 8' },
        { id: 'QUAN9', name: 'Quận 9' },
        { id: 'QUAN10', name: 'Quận 10' },
        { id: 'QUAN11', name: 'Quận 11' },
        { id: 'QUAN12', name: 'Quận 12' },
        { id: 'QUANGOVAP', name: 'Quận Gò Vấp' },
        { id: 'QUANTANBINH', name: 'Quận Tân Bình' },
        { id: 'QUANTANPHU', name: 'Quận Tân Phú' },
        { id: 'QUANBINHTHANH', name: 'Quận Bình Thạnh' },
        { id: 'QUANPHUNHUAN', name: 'Quận Phú Nhuận' },
        { id: 'QUANTHUDUC', name: 'Quận Thủ Đức' },
        { id: 'QUANBINHTAN', name: 'Quận Bình Tân' },
        { id: 'HUYENBINHCHANH', name: 'Huyện Bình Chánh' },
        { id: 'HUYENCUCHI', name: 'Huyện Củ Chi' },
        { id: 'HUYENHOCMON', name: 'Huyện Hóc Môn' },
        { id: 'HUYENNHABE', name: 'Huyện Nhà Bè' },
        { id: 'HUYENCANGIO', name: 'Huyện Cần Giờ' },
      ],
    },
    {
      id: 'HANOI',
      name: 'Hà Nội',
      districts: [
        { id: 'QUANBADINH', name: 'Quận Ba Đình' },
        { id: 'QUANHOANKIEM', name: 'Quận Hoàn Kiếm' },
        { id: 'QUANHAIBATRUNG', name: 'Quận Hai Bà Trưng' },
        { id: 'QUANDONGDA', name: 'Quận Đống Đa' },
        { id: 'QUANTAYHO', name: 'Quận Tây Hồ' },
        { id: 'QUANCAUGIAY', name: 'Quận Cầu Giấy' },
        { id: 'QUANTHANHXUAN', name: 'Quận Thanh Xuân' },
        { id: 'QUANHOANGMAI', name: 'Quận Hoàng Mai' },
        { id: 'QUANLONGBIEN', name: 'Quận Long Biên' },
        { id: 'HUYENTULIEM', name: 'Huyện Từ Liêm' },
        { id: 'HUYENTHANHTRI', name: 'Huyện Thanh Trì' },
        { id: 'HUYENGIALAM', name: 'Huyện Gia Lâm' },
        { id: 'HUYENDONGANH', name: 'Huyện Đông Anh' },
        { id: 'HUYENSOCSON', name: 'Huyện Sóc Sơn' },
        { id: 'QUANHADONG', name: 'Quận Hà Đông' },
        { id: 'THIXASONTAY', name: 'Thị xã Sơn Tây' },
        { id: 'HUYENBAVI', name: 'Huyện Ba Vì' },
        { id: 'HUYENPHUCTHO', name: 'Huyện Phúc Thọ' },
        { id: 'HUYENTHACHTHAT', name: 'Huyện Thạch Thất' },
        { id: 'HUYENQUOCOAI', name: 'Huyện Quốc Oai' },
        { id: 'HUYENCHUONGMY', name: 'Huyện Chương Mỹ' },
        { id: 'HUYENDANPHUONG', name: 'Huyện Đan Phượng' },
        { id: 'HUYENHOAIDUC', name: 'Huyện Hoài Đức' },
        { id: 'HUYENTHANHOAI', name: 'Huyện Thanh Oai' },
        { id: 'HUYENMYDUC', name: 'Huyện Mỹ Đức' },
        { id: 'HUYENUNGHOA', name: 'Huyện Ứng Hoà' },
        { id: 'HUYENTHUONGTIN', name: 'Huyện Thường Tín' },
        { id: 'HUYENPHUXUYEN', name: 'Huyện Phú Xuyên' },
        { id: 'HUYENMELINH', name: 'Huyện Mê Linh' },
      ],
    },
    {
      id: 'DANANG',
      name: 'Đà Nẵng',
      districts: [
        { id: 'QUANHAICHAU', name: 'Quận Hải Châu' },
        { id: 'QUANTHANHKHE', name: 'Quận Thanh Khê' },
        { id: 'QUANSONTRA', name: 'Quận Sơn Trà' },
        { id: 'QUANNGUHANHSON', name: 'Quận Ngũ Hành Sơn' },
        { id: 'QUANLIENCHIEU', name: 'Quận Liên Chiểu' },
        { id: 'HUYENHOAVANG', name: 'Huyện Hoà Vang' },
        { id: 'QUANCAMLE', name: 'Quận Cẩm Lệ' },
      ],
    },
  ],
};

export const getCities = () => {
  return fetchData('./general/cities', {}, mockGetCitiesResult).then(
    response => response.data
  );
};

export default {
  getCities,
};
