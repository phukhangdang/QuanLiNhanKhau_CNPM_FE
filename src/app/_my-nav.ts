import { INavData } from '@coreui/angular';

export const myNavItems: INavData[] = [
  {
    name: 'Home',
    url: '/quanli/home',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Quản lí'
  },
  {
    name: 'Xem thông tin',
    url: '/quanli/thongtin',
    icon: 'icon-star'
  },
  {
    name: 'Thêm nhân khẩu',
    url: '/quanli/themnhankhau',
    icon: 'icon-star',
  },
  {
    name: 'Sửa, xóa nhân khẩu',
    url: '/quanli/suanhankhau',
    icon: 'icon-star',
  }
]
