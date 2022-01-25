import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  CommonModule,
  FormsModule,
  HttpClientModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  DragDropModule,
  ReactiveFormsModule,
  MatSlideToggleModule,
];

@NgModule({
  declarations: [ButtonComponent],
  imports: modules,
  exports: [...modules, ButtonComponent],
})
export class SharedModule {}
