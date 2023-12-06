import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecciondosComponent } from './secciondos.component';

describe('SecciondosComponent', () => {
  let component: SecciondosComponent;
  let fixture: ComponentFixture<SecciondosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecciondosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecciondosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
