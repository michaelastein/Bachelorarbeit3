import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialienWizardComponent } from './materialien-wizard.component';

describe('MaterialienWizardComponent', () => {
  let component: MaterialienWizardComponent;
  let fixture: ComponentFixture<MaterialienWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialienWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialienWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
