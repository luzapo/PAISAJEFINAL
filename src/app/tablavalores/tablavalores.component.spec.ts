import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablavaloresComponent } from './tablavalores.component';

describe('TablavaloresComponent', () => {
  let component: TablavaloresComponent;
  let fixture: ComponentFixture<TablavaloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablavaloresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablavaloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
