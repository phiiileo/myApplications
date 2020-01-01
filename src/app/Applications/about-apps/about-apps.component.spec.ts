import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAppsComponent } from './about-apps.component';

describe('AboutAppsComponent', () => {
  let component: AboutAppsComponent;
  let fixture: ComponentFixture<AboutAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
