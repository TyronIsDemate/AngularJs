import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHttpComponent } from './child-http.component';

describe('ChildHttpComponent', () => {
  let component: ChildHttpComponent;
  let fixture: ComponentFixture<ChildHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
