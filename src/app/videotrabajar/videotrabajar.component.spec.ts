import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotrabajarComponent } from './videotrabajar.component';

describe('VideotrabajarComponent', () => {
  let component: VideotrabajarComponent;
  let fixture: ComponentFixture<VideotrabajarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideotrabajarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideotrabajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
