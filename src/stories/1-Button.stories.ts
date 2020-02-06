import { Button } from '@storybook/angular/demo';
import { CoreComponent } from 'projects/core/src/public-api';
import {storiesOf} from '@storybook/angular'

export default {
  title: 'Button',
  component: Button,
};



storiesOf('button', module)
  .add('basic', () => ({
    component: CoreComponent,
    props: {
      text: 'button from core'
    }
  }))
  .add('disabled', () => ({
    component: CoreComponent,
    props: {
      text: 'button disabled',
      disabled: true
    }
  }));
