import {ButtonModule} from '../../projects/button/dist';
import {moduleMetadata, storiesOf} from '@storybook/angular';

storiesOf('Button', module)
  .addDecorator(
    moduleMetadata({
      imports: [ButtonModule]
    })
  )
  .add('text', () => {
    return {
      template: `
        <phoenix-button [buttonText]="buttonText"></phoenix-button>
      `,
      props: {
        buttonText: 'Test button text text'
      }
    };
  })
  .add('disabled', () => {
    return {
      template: `
        <phoenix-button [buttonText]="buttonText" [isDisabled]="isDisabled"></phoenix-button>
      `,
      props: {
        buttonText: 'Test button text',
        isDisabled: true
      }
    };
  })
;
