import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [InputComponent],
    imports: [
        FormsModule
    ],
  exports: [InputComponent]
})
export class InputModule { }