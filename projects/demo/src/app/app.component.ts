import { Component } from '@angular/core';
import { NgxGithubPagesDemoComponent } from '@christophhu/ngx-github-pages-demo';
import { PresentationComponent } from './shared/components/presentation/presentation.component';
import { AccordionComponent, AccordionContent, AccordionHeader, AccordionItem, AccordionTitle } from '../../../ngx-accordion/src/public-api';

@Component({
  selector: 'app-root',
  imports: [
    NgxGithubPagesDemoComponent,
    AccordionComponent,
    AccordionItem,
    AccordionContent,
    AccordionHeader,
    AccordionTitle,
    PresentationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  collapsing = false;
}
