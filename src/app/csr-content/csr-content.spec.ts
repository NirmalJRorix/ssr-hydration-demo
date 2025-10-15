import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrContent } from './csr-content';

describe('CsrContent', () => {
  let component: CsrContent;
  let fixture: ComponentFixture<CsrContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsrContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsrContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
