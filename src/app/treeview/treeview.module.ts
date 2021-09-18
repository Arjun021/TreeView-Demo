import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewComponent } from './treeview.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TreeviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TreeviewComponent
  ]
})
export class TreeviewModule { }
