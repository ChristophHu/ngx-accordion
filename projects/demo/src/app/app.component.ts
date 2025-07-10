import { Component } from '@angular/core';
import { AccordionComponent, AccordionContent, AccordionHeader, AccordionItem, AccordionTitle } from '../../../ngx-accordion/src/public-api';

@Component({
  selector: 'app-root',
  imports: [
    AccordionComponent,
    AccordionItem,
    AccordionContent,
    AccordionHeader,
    AccordionTitle
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  collapsing = false
}
