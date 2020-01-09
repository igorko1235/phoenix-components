import {Component, Input} from '@angular/core';

@Component({
  selector: 'phoenix-button',
  template: `
    <button [disabled]="isDisabled" class="phoenix-button">{{buttonText}}</button>
  `,
  styles: []
})
export class ButtonComponent {
  @Input() buttonText: string | number;
  @Input() isDisabled: boolean;
}
