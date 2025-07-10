import { AccordionHeader } from './accordion-header.directive';

describe('AccordionHeaderDirective', () => {
  it('should create an instance', () => {
    const mockTemplateRef = {} as any; // Mock TemplateRef
    const directive = new AccordionHeader(mockTemplateRef);
    expect(directive).toBeTruthy();
  });
});
