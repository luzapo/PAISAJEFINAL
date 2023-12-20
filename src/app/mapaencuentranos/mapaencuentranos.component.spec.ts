import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaencuentranosComponent } from './mapaencuentranos.component';

describe('MapaencuentranosComponent', () => {
  let component: MapaencuentranosComponent;
  let fixture: ComponentFixture<MapaencuentranosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaencuentranosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapaencuentranosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
