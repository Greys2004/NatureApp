import { Routes } from '@angular/router';

import { Home } from './home/home'; 
import { PlacesComponent } from './places/places';
import { TrailsComponent } from './trails/trails';
import { PlaceDetailComponent } from './place-detail/place-detail';
import { AdminLayout } from './admin-layout/admin-layout';

export const ADMIN_ROUTES: Routes = [
{
    path: 'admin',
    component: AdminLayout,
    children: [
        { path: 'inicio', component: Home },
        { path: 'places', component: PlacesComponent },
        { path: 'trails', component: TrailsComponent },
        { path: 'place/:id', component: PlaceDetailComponent },
        { path: '', pathMatch: 'full', redirectTo: 'inicio' }
    ]
},
{ path: '**', redirectTo: '' }
];
