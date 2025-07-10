import { AccordionTitle } from './accordion-title.directive';

describe('AccordionTitle', () => {
  it('should create an instance', () => {
    const mockTemplateRef = {} as any; // Mock TemplateRef
    const directive = new AccordionTitle(mockTemplateRef);
    expect(directive).toBeTruthy();
  });
});
