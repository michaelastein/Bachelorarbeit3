import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialienListComponent } from './materialien-list.component';

describe('MaterialienListComponent', () => {
  let component: MaterialienListComponent;
  let fixture: ComponentFixture<MaterialienListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialienListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MaterialienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
