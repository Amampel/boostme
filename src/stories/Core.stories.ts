import { CoreComponent } from 'projects/core/src/public-api';
import {storiesOf, moduleMetadata} from '@storybook/angular'
import { CardComponent } from 'projects/core/src/lib/card/card.component';
import { action } from '@storybook/addon-actions';
import { CoreModule } from 'core/core';


export default {
  title: 'Core lib',
  component: CoreComponent,
};



storiesOf('Core-Button', module)
  .add('button enabled', () => ({
    component: CoreComponent,
    props: {
      text: 'button from core',
      disabled :false
    }
  }))
  .add('button disabled', () => ({
    component: CoreComponent,
    props: {
      text: 'button disabled',
      disabled: true
    }
  }));
  storiesOf('Core-Card', module)
  
  .add('button enabled', () => ({
    component: CardComponent,
    props: {
      name: 'Name',
      myEvent: action('Name printed')
    }
  }))
