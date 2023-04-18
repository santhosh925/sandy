import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutpharamComponent } from './routpharam.component';

describe('RoutpharamComponent', () => {
  let component: RoutpharamComponent;
  let fixture: ComponentFixture<RoutpharamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutpharamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutpharamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
