import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobieComponent } from './mobie.component';

describe('MobieComponent', () => {
  let component: MobieComponent;
  let fixture: ComponentFixture<MobieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobieComponent]
    });
    fixture = TestBed.createComponent(MobieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
