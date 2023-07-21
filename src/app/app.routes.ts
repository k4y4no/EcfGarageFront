import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    {
        path:'cars',
        loadChildren: () => import('./pages/cars/car.routes').then(r => r.CAR_ROUTES),
    },
    {path:'contact', component: ContactComponent},
    {path:'dash', component: DashboardComponent},
    {path:'', component: HomeComponent},
    {path:'**', component: HomeComponent, pathMatch: 'full' },
];
