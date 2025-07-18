import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionComponent, AccordionContent, AccordionHeader, AccordionItem, AccordionTitle } from '../../../../ngx-accordion/src/public-api';

@Component({
  selector: 'app-template',
  imports: [
    CommonModule,
    AccordionComponent,
    AccordionItem,
    AccordionContent,
    AccordionHeader,
    AccordionTitle
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass'
})
export class TemplateComponent {
  collapsing = true
}
