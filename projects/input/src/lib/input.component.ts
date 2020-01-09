import {Component, Input} from '@angular/core';

@Component({
  selector: 'phoenix-input',
  template: `
    <input type="text" [(ngModel)]="currentValue" class="phoenix-input">
  `,
  styles: []
})
export class InputComponent {
  @Input() currentValue: string | number;
}
