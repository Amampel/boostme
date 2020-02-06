import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [CoreComponent, CardComponent],
  imports: [
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
