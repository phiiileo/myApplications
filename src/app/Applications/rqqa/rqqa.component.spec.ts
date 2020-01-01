import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RqqaComponent } from './rqqa.component';

describe('RqqaComponent', () => {
  let component: RqqaComponent;
  let fixture: ComponentFixture<RqqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RqqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RqqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
