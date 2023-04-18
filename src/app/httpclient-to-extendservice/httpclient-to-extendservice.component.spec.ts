import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientToExtendserviceComponent } from './httpclient-to-extendservice.component';

describe('HttpclientToExtendserviceComponent', () => {
  let component: HttpclientToExtendserviceComponent;
  let fixture: ComponentFixture<HttpclientToExtendserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpclientToExtendserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpclientToExtendserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
