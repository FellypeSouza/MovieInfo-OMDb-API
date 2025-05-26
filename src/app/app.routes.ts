import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentPageComponent } from '../pages/content-page/content-page.component';
import { ContentComponent } from '../components/content/content.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';

export const routes: Routes = [
    {
        path:"",
        component: MainPageComponent,
    },
    {
        path:"contentpage",
        component: ContentPageComponent
    },
];
