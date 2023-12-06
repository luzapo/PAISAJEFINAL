import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecciontresComponent } from './secciontres.component';

describe('SecciontresComponent', () => {
  let component: SecciontresComponent;
  let fixture: ComponentFixture<SecciontresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecciontresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecciontresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
