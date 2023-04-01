import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShieldCheckComponent } from './shield-check.component';

describe('ShieldCheckComponent', () => {
  let component: ShieldCheckComponent;
  let fixture: ComponentFixture<ShieldCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShieldCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShieldCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
