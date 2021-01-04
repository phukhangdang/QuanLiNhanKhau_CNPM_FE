import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { QuanLiLayoutComponent } from './container.2/quanli-layout/quan-li-layout.component';
import { ThongKeLayoutComponent } from './container.3/thongke-layout/thong-ke-layout.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

export const routes: Routes = [
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'quanli',
    component: QuanLiLayoutComponent,
    data: {
      title: 'QuanLiPage'
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'thongtin',
        loadChildren: () => import('./component/thong-tin-nhan-khau/thong-tin-nhan-khau.module').then(m => m.ThongTinNhanKhauModule)
      },
      {
        path: 'themnhankhau',
        loadChildren: () => import('./component/them-nhan-khau/them-nhan-khau.module').then(m => m.ThemNhanKhauModule)
      },
      {
        path: 'suanhankhau',
        loadChildren: () => import('./component/sua-nhan-khau/sua-nhan-khau.module').then(m => m.SuaNhanKhauModule)
      },
    ]
  },
  {
    path: 'thongke',
    component: ThongKeLayoutComponent,
    data: {
      title: 'ThongKePage'
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'thongtin',
        loadChildren: () => import('./component/thong-tin-khai-bao/thong-tin-khai-bao.module').then(m => m.ThongTinKhaiBaoModule)
      },
      {
        path: 'danhsach',
        loadChildren: () => import('./component/danh-sach-khai-bao/danh-sach-khai-bao.module').then(m => m.DanhSachKhaiBaoModule)
      },
      {
        path: 'lienquancovid',
        loadChildren: () => import('./component/lien-quan-covid/lien-quan-covid.module').then(m => m.LienQuanCovidModule)
      },
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'DefaultHomePage'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
