import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule,  MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { MatSelectModule } from "@angular/material/select";

const MaterialModulos =[
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatSelectModule,
  MatToolbarModule,
  MatSnackBarModule
]

@NgModule({
  imports: [
    MaterialModulos
  ],
  exports: [
    MaterialModulos
  ]
})




export class MaterialModule { }
