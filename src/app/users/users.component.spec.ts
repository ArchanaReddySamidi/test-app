import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UsersComponent } from './users.component';
import { UsersService } from '../services/users.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ UsersComponent ],
      providers: [{
        provide: UsersService,
        useValue: {
          getUsers: () => of([{
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          }])
        }
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load the app-user element', () => {
    const { debugElement } = fixture;
    const user = debugElement.query(By.css('app-user'));
    expect(user).toBeTruthy();
  });
  it('should load the users', () => {
    fixture.detectChanges();
    expect(component.users.length).toEqual(1);
  });
  it ('should deleteUser call work', () => {
    fixture.detectChanges();
    component.deleteUser(1);
    expect(component.users.length).toEqual(0);
  });
});
