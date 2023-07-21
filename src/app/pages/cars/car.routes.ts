import { Routes } from "@angular/router";
import { CarsComponent } from "./cars.component";
import { DetailPageComponent } from "src/app/spareParts/detail-page/detail-page.component";


export const CAR_ROUTES: Routes = [
    {path: '', component: CarsComponent},
    {
        path: ':id',
        component: DetailPageComponent
    }
]