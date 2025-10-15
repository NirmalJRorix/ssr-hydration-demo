import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrContent } from './ssr-content';

describe('SsrContent', () => {
  let component: SsrContent;
  let fixture: ComponentFixture<SsrContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsrContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsrContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
