import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialInformationComponent } from './confidential-information.component';

describe('ConfidentialInformationComponent', () => {
  let component: ConfidentialInformationComponent;
  let fixture: ComponentFixture<ConfidentialInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfidentialInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidentialInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
