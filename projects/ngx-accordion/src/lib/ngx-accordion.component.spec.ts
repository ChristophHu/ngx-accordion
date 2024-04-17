import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAccordionComponent } from './ngx-accordion.component';

describe('NgxAccordionComponent', () => {
  let component: NgxAccordionComponent;
  let fixture: ComponentFixture<NgxAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
