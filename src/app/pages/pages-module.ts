import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ADMIN_ROUTES } from './app.routes';

import { AdminLayout } from './admin-layout/admin-layout';
import { Home } from './home/home'; 
import { PlacesComponent } from './places/places';
import { TrailsComponent } from './trails/trails';
import { PlaceDetailComponent } from './place-detail/place-detail';

import { PlaceService } from '../core/services/place.service';
import { TrailService } from '../core/services/trail.service';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
    declarations: [
        Home,
        PlacesComponent,
        TrailsComponent,
        PlaceDetailComponent,
        AdminLayout,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ADMIN_ROUTES),
        NzTableModule,
        NzMenuModule,
        NzIconModule,
        NzTagModule,
        NzButtonModule,
    ],
    providers: [
        PlaceService,
        TrailService,
    ],
    exports: [
        Home,
        PlacesComponent,
        TrailsComponent,
        PlaceDetailComponent,
        AdminLayout,
        RouterModule
    ]
})
export class PagesModule {}
