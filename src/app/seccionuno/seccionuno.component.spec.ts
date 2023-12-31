import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionunoComponent } from './seccionuno.component';

describe('SeccionunoComponent', () => {
  let component: SeccionunoComponent;
  let fixture: ComponentFixture<SeccionunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeccionunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
