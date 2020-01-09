import {moduleMetadata, storiesOf} from '@storybook/angular';
import {InputModule} from '../../projects/input/dist';

storiesOf('Input', module)
  .addDecorator(
    moduleMetadata({
      imports: [InputModule]
    })
  )
  .add('text', () => {
    return {
      template: `
        <phoenix-input [currentValue]="value"></phoenix-input>
      `,
      props: {
        value: 'Test button text'
      }
    };
  })
;
