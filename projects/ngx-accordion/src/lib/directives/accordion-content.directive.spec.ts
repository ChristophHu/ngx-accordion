import { AccordionContent } from './accordion-content.directive';

describe('AccordionContentDirective', () => {
  it('should create an instance', () => {
    const mockTemplateRef = {} as any; // Mock TemplateRef
    const directive = new AccordionContent(mockTemplateRef);
    expect(directive).toBeTruthy();
  });
});
