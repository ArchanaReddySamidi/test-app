import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let componentInstance: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
  })
  it('should create the app', () => {
    expect(fixture).toBeTruthy();
    const { debugElement } = fixture;
    const header = debugElement.query(By.css('app-header'));
    expect(header).toBeTruthy();
    const users = debugElement.query(By.css('app-users'));
    expect(users).toBeTruthy();
  });
});
