import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ArticleComponent } from './article/article.component';
// import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
// import { MatTableComponent } from './mat-table/mat-table.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';

const routes: Routes = [

  {path:'', component:LoginComponent},
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'article',
      component: ArticleComponent
    },
    {
      path: 'tables',
      component: TablePaginationComponent
    },
  ]
  }
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
