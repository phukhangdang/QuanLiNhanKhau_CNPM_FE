import { INavData } from '@coreui/angular';

export const myNavItems: INavData[] = [
  {
    name: 'Home',
    url: '/thongke/home',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Thống kê'
  },
  {
    name: 'Thông tin khai báo',
    url: '/thongke/thongtin',
    icon: 'icon-star'
  },
  {
    name: 'Danh sách khai báo',
    url: '/thongke/danhsach',
    icon: 'icon-star',
  },
  {
    name: 'Liên quan COVID-19',
    url: '/thongke/lienquancovid',
    icon: 'icon-star',
  }
]
