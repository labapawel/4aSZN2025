import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
    {path:'', component: MainComponent},
    {path:'config', component: ConfigComponent},

];
