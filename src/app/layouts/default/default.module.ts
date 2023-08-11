import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from 'src/app/modules/pop-up/pop-up.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ArticleComponent } from 'src/app/article/article.component';
import { EditorModule } from 'primeng/editor';
import { FilterPipe } from 'src/app/Pipes/filter.pipe';
import { DialogOverviewExampleDialogComponent } from 'src/app/dialog-overview-example-dialog/dialog-overview-example-dialog.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { HttptabledataService } from 'src/app/httptabledata.service';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PopUpComponent,
    ArticleComponent,
    DialogOverviewExampleDialogComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    InputTextareaModule,
    MatButtonModule,
    MatSelectModule,
    EditorModule,
  ],
  providers: [],
})
export class DefaultModule { }
