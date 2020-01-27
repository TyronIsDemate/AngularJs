import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAPIComponent } from './http-api.component';

describe('HttpAPIComponent', () => {
  let component: HttpAPIComponent;
  let fixture: ComponentFixture<HttpAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
