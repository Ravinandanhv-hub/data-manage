import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridViewComponent } from './ag-grid-view/ag-grid-view.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BulkUpdateComponent } from './bulk-update/bulk-update.component';
import { DataListComponent } from './data-list/data-list.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full'},
  { path:'list', component:DataListComponent },
  { path:'create', component:HomeComponent },
  { path:'ag-grid', component:AgGridViewComponent },
  {path:'view/:id', component:ViewComponent},
  {path:'bulk-update', component:BulkUpdateComponent},
  {path:'auth',component:AuthComponent},
  {path:'data',component:DataListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
