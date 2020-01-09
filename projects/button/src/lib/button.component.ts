import {Component, Input} from '@angular/core';

@Component({
  selector: 'phoenix-button',
  template: `
    <button [disabled]="isDisabled">{{buttonText}}</button>
  `,
  styles: []
})
export class ButtonComponent {
  @Input() buttonText: string;
  @Input() isDisabled: boolean;
}
