import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastserviceComponent } from './toastservice.component';

describe('ToastserviceComponent', () => {
  let component: ToastserviceComponent;
  let fixture: ComponentFixture<ToastserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToastserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
