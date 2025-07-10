import { AfterViewInit, ContentChild, Directive, Input } from '@angular/core';
import { AccordionContent } from './accordion-content.directive';
import { AccordionTitle } from './accordion-title.directive';
import { AccordionHeader } from './accordion-header.directive';

@Directive({
  selector: 'accordion-item',
  standalone: true
})
export class AccordionItem implements AfterViewInit {
  @Input() title = ""
  @Input() disabled = false
  @Input() expanded = false

  @ContentChild(AccordionContent) content: AccordionContent | undefined
  @ContentChild(AccordionTitle) customTitle: AccordionTitle | undefined
  @ContentChild(AccordionHeader) customHeader: AccordionHeader | undefined

  ngAfterViewInit(): void {
    // console.log('AccordionItem created', this.title, this.disabled, this.expanded);
    // console.log('Custom Content:', this.content);
    console.log('Custom Header:', this.customHeader);
    // console.log('Custom Title:', this.customTitle);
  }
}
