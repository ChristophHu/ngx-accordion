# Presentation Component

This component is designed to capture a screenshot of its content and download it as an image file (png) with transparent background. It uses the `html2canvas-pro` library to render the HTML content into a canvas element, which is then converted to a downloadable image format.


## Usage
To use the `presentation` component, include it in your Angular application as follows:

```html
<presentation>
    <accordion [collapsing]="collapsing">
        <accordion-item title="Super simple Accordion" [expanded]="false">
            <ng-template accordionContent>
            <div class="p-4">
                A simple and customizable accordion component made with
                functionalities provided by angular without having to use any 3rd
                party libraries. Ideal when you want custom basic accordion.
            </div>
            </ng-template>
        </accordion-item>
        <accordion-item>
            <ng-template accordionHeader let-toggle="toggle">
                <div class="flex items-center justify-between px-4 h-12 bg-gray-200">
                    <p> Custom Header <span class="text-xs text-gray-700">(with custom toggle button)</span></p>
                    <div class="flex space-x-2">
                    <button class="p-2 bg-gray-100 rounded" (click)="toggle()">open/close</button>
                    </div>
                </div>
            </ng-template>
            <ng-template accordionContent>
                <div class="p-4">
                This is a <strong>complete custom header</strong> implementation. The
                whole header section can be customized to you liking. Toggle method
                will be exposed which can be used to open/close the section.
                </div>
            </ng-template>
        </accordion-item>
    </accordion>
</presentation>
```

```typescript
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
```

## Installation
Make sure to install the `html2canvas-pro` library in your Angular project:

```bash
npm install html2canvas-pro --save
```

## Features
- **Screenshot Capture**: The component captures by the ID-capture and allows users to download it as a PNG image.
- **Custom Styling**: You can style the component using SASS. The example includes a border radius for the capture area.