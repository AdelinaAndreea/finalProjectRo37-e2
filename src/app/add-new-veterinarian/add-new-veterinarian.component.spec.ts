import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVeterinarianComponent } from './add-new-veterinarian.component';

describe('AddNewVeterinarianComponent', () => {
  let component: AddNewVeterinarianComponent;
  let fixture: ComponentFixture<AddNewVeterinarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewVeterinarianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewVeterinarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
